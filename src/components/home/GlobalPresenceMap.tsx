"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import {
  coverageRoutes,
  gulfMapRouteOrder,
  type CoverageRoute,
} from "@/data/siteData";

const GULF_COUNTRIES = ["SAU", "ARE", "OMN", "YEM", "QAT", "KWT"] as const;

/** Land dots on dark map panel */
const DOT_FILL = "rgba(147, 197, 253, 0.22)";
const DOT_RADIUS = 0.2;

const LABEL_POS: Record<
  string,
  { dx: number; dy: number; anchor: "start" | "middle" | "end" }
> = {
  dubai: { dx: 2.2, dy: 0.2, anchor: "start" },
  "abu-dhabi": { dx: -2.4, dy: 1.8, anchor: "end" },
  riyadh: { dx: -2.2, dy: -1.5, anchor: "end" },
  jeddah: { dx: 2, dy: -1.2, anchor: "start" },
};

/** Tuned chip widths (SVG user units) — text is always centered inside the box. */
const LABEL_CHIP_WIDTH: Record<string, number> = {
  dubai: 10.35,
  "abu-dhabi": 12.85,
  riyadh: 18.55,
  jeddah: 19.45,
};

const CHIP_BORDER = "rgba(125, 211, 252, 0.5)";
const CHIP_BORDER_ACTIVE = "rgba(212, 168, 92, 0.9)";

/** Fallback width when id not in LABEL_CHIP_WIDTH. */
function labelBoxWidthFallback(line: string, fs: number, padX: number): number {
  const w = fs * 0.52 * line.length + padX * 2 + 0.2;
  return Math.min(24, Math.max(9.4, w));
}

interface MarkerPos {
  id: string;
  x: number;
  y: number;
}

function useGulfMapData() {
  return useMemo(() => {
    const map = new DottedMap({
      height: 56,
      countries: [...GULF_COUNTRIES],
      grid: "diagonal",
      projection: { name: "mercator", center: { lat: 22, lng: 47 } },
    });

    const routeById = Object.fromEntries(coverageRoutes.map((r) => [r.id, r]));

    for (const id of gulfMapRouteOrder) {
      const route = routeById[id];
      if (route) {
        map.addPin({
          lat: route.lat,
          lng: route.lng,
          data: route.id,
          svgOptions: { color: "#B88746", radius: 0.45 },
        });
      }
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const allPoints: any[] = map.getPoints();
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const baseDots: { x: number; y: number }[] = [];
    const markers: MarkerPos[] = [];

    for (const pt of allPoints) {
      const x = pt.x as number;
      const y = pt.y as number;
      if (pt.data && typeof pt.data === "string") {
        markers.push({ id: pt.data, x, y });
      } else {
        baseDots.push({ x, y });
      }
    }

    return {
      width: map.image.width,
      height: map.image.height,
      baseDots,
      markers,
    };
  }, []);
}

function RouteCard({
  route,
  active,
  onHover,
  onLeave,
  onClick,
}: {
  route: CoverageRoute;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      onFocus={onHover}
      onBlur={onLeave}
      aria-label={`${route.city}, ${route.country} — ${route.type}`}
      className={`text-left w-full rounded-lg border px-3 py-2.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        active
          ? "border-accent/60 bg-white/12"
          : "border-white/15 bg-white/[0.06] hover:border-white/25 hover:bg-white/10"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-[13px] font-semibold text-white leading-tight truncate">
          {route.city}
          <span className="text-white/55 font-normal">, {route.country}</span>
        </h4>
        {route.primary && (
          <span className="shrink-0 text-[8px] font-bold tracking-wider text-accent bg-accent/15 px-1.5 py-0.5 rounded uppercase">
            HQ
          </span>
        )}
      </div>
      <p className="text-[10px] text-accent/95 mt-0.5">{route.type}</p>
      <div className="flex flex-wrap gap-1 mt-1.5">
        {route.focus.map((f) => (
          <span
            key={f}
            className="text-[9px] text-white/50 bg-white/[0.06] px-1.5 py-0.5 rounded"
          >
            {f}
          </span>
        ))}
      </div>
    </button>
  );
}

function CityLabel({
  route,
  x,
  y,
  active,
  onHover,
  onLeave,
  onClick,
}: {
  route: CoverageRoute;
  x: number;
  y: number;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const lp = LABEL_POS[route.id] ?? { dx: 0, dy: -2, anchor: "middle" as const };
  const line1 = `${route.city}, ${route.country}`;
  const fs = 1.48;
  const padY = 0.36;
  const lineH = fs * 1.14;
  const w =
    LABEL_CHIP_WIDTH[route.id] ?? labelBoxWidthFallback(line1, fs, 0.44);
  const h = lineH + padY * 2;

  let boxLeft = x + lp.dx;
  if (lp.anchor === "middle") boxLeft -= w / 2;
  else if (lp.anchor === "end") boxLeft -= w;

  const boxTop = y + lp.dy - h;

  const textX = boxLeft + w / 2;
  const textY = boxTop + h / 2;

  return (
    <g
      className="cursor-pointer select-none outline-none"
      style={{ pointerEvents: "all" }}
      role="button"
      tabIndex={0}
      aria-label={`${route.city}, ${route.country}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Hit area slightly larger than the box for easier hover */}
      <rect
        x={boxLeft - 0.15}
        y={boxTop - 0.15}
        width={w + 0.3}
        height={h + 0.3}
        fill="transparent"
      />
      <rect
        x={boxLeft}
        y={boxTop}
        width={w}
        height={h}
        rx={0.32}
        fill={active ? "rgba(30, 58, 88, 0.92)" : "rgba(8, 20, 36, 0.92)"}
        stroke={active ? CHIP_BORDER_ACTIVE : CHIP_BORDER}
        strokeWidth={0.11}
        className="pointer-events-none"
      />
      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="central"
        fill={active ? "#FAF7F2" : "rgba(250, 247, 242, 0.96)"}
        fontSize={fs}
        fontWeight={600}
        fontFamily="var(--font-body), ui-sans-serif, system-ui, sans-serif"
        style={{ letterSpacing: "0.01em" }}
        className="pointer-events-none"
      >
        {line1}
      </text>
    </g>
  );
}

export default function GlobalPresenceMap() {
  const { width, height, baseDots, markers } = useGulfMapData();
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleHover = useCallback((id: string) => setActiveId(id), []);
  const handleLeave = useCallback(() => setActiveId(null), []);
  const handleClick = useCallback(
    (id: string) => setActiveId((prev) => (prev === id ? null : id)),
    []
  );

  const gulfRoutes = useMemo(
    () =>
      gulfMapRouteOrder
        .map((id) => coverageRoutes.find((r) => r.id === id))
        .filter((r): r is CoverageRoute => Boolean(r)),
    []
  );

  const activeRoute = activeId
    ? coverageRoutes.find((r) => r.id === activeId)
    : null;
  const activeMarker = activeId
    ? markers.find((m) => m.id === activeId)
    : null;

  const vb = `0 0 ${width} ${height}`;

  return (
    <section
      className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-primary relative overflow-hidden"
      aria-label="Regional coverage and Gulf hub cities"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.12] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-12 h-0.5 bg-accent mx-auto mb-6"
          />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
          >
            Regional coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white leading-tight mt-3 px-1"
          >
            Based in Dubai, connected across the Gulf
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto px-1 leading-relaxed"
          >
            Hub cities for enquiries, coordination, and project support. Hover a
            marker, city label, or list card to see focus areas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-3 relative w-full min-w-0"
          >
            <div
              className="relative rounded-xl border border-white/12 bg-[#0a1522] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)] overflow-hidden w-full max-h-[min(52vh,420px)] sm:max-h-[min(60vh,480px)] lg:max-h-none mx-auto ring-1 ring-white/5"
              style={{ aspectRatio: `${width} / ${height}` }}
            >
              <div
                className="absolute top-2 right-2 w-[36%] h-[48%] pointer-events-none opacity-[0.09]"
                aria-hidden
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[14, 26, 38, 50, 62].map((r, i) => (
                    <circle
                      key={r}
                      cx="84"
                      cy="12"
                      r={r}
                      fill="none"
                      stroke="#93c5fd"
                      strokeWidth={0.35}
                      opacity={0.25 + i * 0.07}
                    />
                  ))}
                </svg>
              </div>

              <div className="absolute inset-0 p-2 sm:p-3">
                <svg
                  viewBox={vb}
                  className="w-full h-full block rounded-lg"
                  role="img"
                  aria-label="Map of the Gulf and Arabian Peninsula with hub city markers"
                  style={{ cursor: "default" }}
                >
                  <defs>
                    <filter
                      id="glowAccent"
                      x="-120%"
                      y="-120%"
                      width="340%"
                      height="340%"
                    >
                      <feGaussianBlur
                        stdDeviation="0.45"
                        result="blur"
                        in="SourceGraphic"
                      />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <radialGradient id="hotspotCore" cx="38%" cy="38%" r="65%">
                      <stop offset="0%" stopColor="#FAF7F2" />
                      <stop offset="40%" stopColor="#D4A85C" />
                      <stop offset="100%" stopColor="#B88746" />
                    </radialGradient>
                  </defs>

                  <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="rgba(8, 22, 36, 0.65)"
                    rx={0.5}
                  />

                  {baseDots.map((dot, i) => (
                    <circle
                      key={i}
                      cx={dot.x}
                      cy={dot.y}
                      r={DOT_RADIUS}
                      fill={DOT_FILL}
                    />
                  ))}

                  {markers.map((m) => {
                    const route = coverageRoutes.find((r) => r.id === m.id);
                    const isPrimary = route?.primary;
                    const isActive = activeId === m.id;
                    if (!route) return null;

                    return (
                      <g key={m.id}>
                        {(isPrimary || isActive) && (
                          <circle
                            cx={m.x}
                            cy={m.y}
                            r={1.2}
                            fill="none"
                            stroke="#B88746"
                            strokeWidth={0.12}
                            opacity={0.55}
                          >
                            <animate
                              attributeName="r"
                              from="0.45"
                              to="2.2"
                              dur="2.2s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              from="0.5"
                              to="0"
                              dur="2.2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}

                        <circle
                          cx={m.x}
                          cy={m.y}
                          r={3.2}
                          fill="transparent"
                          className="cursor-pointer"
                          style={{ pointerEvents: "all" }}
                          onMouseEnter={() => handleHover(m.id)}
                          onMouseLeave={handleLeave}
                          onClick={() => handleClick(m.id)}
                        />

                        <circle
                          cx={m.x}
                          cy={m.y}
                          r={isActive ? 0.88 : isPrimary ? 0.72 : 0.52}
                          fill="url(#hotspotCore)"
                          filter="url(#glowAccent)"
                          opacity={isActive ? 1 : isPrimary ? 1 : 0.92}
                          className="pointer-events-none"
                          style={{ transition: "all 0.2s ease" }}
                        />

                        <CityLabel
                          route={route}
                          x={m.x}
                          y={m.y}
                          active={isActive}
                          onHover={() => handleHover(route.id)}
                          onLeave={handleLeave}
                          onClick={() => handleClick(route.id)}
                        />
                      </g>
                    );
                  })}
                </svg>

                <AnimatePresence>
                  {activeRoute && activeMarker && (
                    <motion.div
                      key={activeMarker.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      className="absolute z-20 pointer-events-none hidden sm:block min-w-[160px] max-w-[240px]"
                      style={{
                        left: `${(activeMarker.x / width) * 100}%`,
                        top: `${(activeMarker.y / height) * 100}%`,
                        transform: "translate(-50%, calc(-100% - 12px))",
                      }}
                    >
                      <div className="bg-[#0c1a28] border border-white/15 rounded-lg px-3.5 py-2.5 shadow-xl">
                        <p className="text-[12px] font-semibold text-white">
                          {activeRoute.city}, {activeRoute.country}
                        </p>
                        <p className="text-[10px] text-accent mt-0.5">
                          {activeRoute.type}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {activeRoute.focus.map((f) => (
                            <span
                              key={f}
                              className="text-[8px] text-white/55 bg-white/[0.08] px-1 py-0.5 rounded"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-2 w-full min-w-0"
          >
            <h3 className="text-[10px] font-bold tracking-[0.18em] text-accent/80 uppercase mb-3">
              Hub cities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {gulfRoutes.map((route) => (
                <RouteCard
                  key={route.id}
                  route={route}
                  active={activeId === route.id}
                  onHover={() => handleHover(route.id)}
                  onLeave={handleLeave}
                  onClick={() => handleClick(route.id)}
                />
              ))}
            </div>
            <p className="text-[11px] text-white/45 mt-3 leading-relaxed">
              Additional markets (Europe, India, and others) are supported through
              partners and remote coordination — ask for details when you enquire.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-12 h-0.5 bg-accent mx-auto mt-12 sm:mt-14 md:mt-16"
        />
      </div>
    </section>
  );
}
