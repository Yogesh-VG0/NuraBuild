"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import { coverageRoutes, type CoverageRoute } from "@/data/siteData";

/* ─── EMEA / APAC crop bounds (SVG coordinate space) ─── */
const CROP = { xMin: 44, yMin: 3, w: 62, h: 42 } as const;

/* ─── Types ─── */
interface MarkerPos {
  id: string;
  x: number;
  y: number;
}

/* ─── Map data hook — single coordinate system, EMEA/APAC crop ─── */
function useMapData() {
  return useMemo(() => {
    const map = new DottedMap({ height: 55, grid: "diagonal" });

    coverageRoutes
      .filter((r) => r.showOnMap)
      .forEach((route) => {
        map.addPin({
          lat: route.lat,
          lng: route.lng,
          data: route.id,
          svgOptions: {
            color: route.primary ? "#B88746" : "#B8874680",
            radius: route.primary ? 0.55 : 0.4,
          },
        });
      });

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const allPoints: any[] = map.getPoints();

    const baseDots: { x: number; y: number }[] = [];
    const markers: MarkerPos[] = [];

    for (const pt of allPoints) {
      const x = pt.x as number;
      const y = pt.y as number;
      const inBounds =
        x >= CROP.xMin &&
        x <= CROP.xMin + CROP.w &&
        y >= CROP.yMin &&
        y <= CROP.yMin + CROP.h;
      if (!inBounds) continue;

      if (pt.data && typeof pt.data === "string") {
        markers.push({ id: pt.data, x, y });
      } else {
        baseDots.push({ x, y });
      }
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return { baseDots, markers };
  }, []);
}

/* ─── Curved route line path ─── */
function routePath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  return `M ${x1} ${y1} Q ${mx - dy * 0.12} ${my + dx * 0.12} ${x2} ${y2}`;
}

/* ─── Compact route card ─── */
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
          ? "border-accent/50 bg-accent/8"
          : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-[13px] font-semibold text-white leading-tight truncate">
          {route.city}
          <span className="text-white/40 font-normal">, {route.country}</span>
        </h4>
        {route.primary && (
          <span className="shrink-0 text-[8px] font-bold tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase">
            HQ
          </span>
        )}
      </div>
      <p className="text-[10px] text-accent/70 mt-0.5">{route.type}</p>
      <div className="flex flex-wrap gap-1 mt-1.5">
        {route.focus.map((f) => (
          <span
            key={f}
            className="text-[9px] text-white/35 bg-white/[0.05] px-1.5 py-0.5 rounded"
          >
            {f}
          </span>
        ))}
      </div>
    </button>
  );
}

/* ─── Main component ─── */
export default function GlobalPresenceMap() {
  const { baseDots, markers } = useMapData();
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleHover = useCallback((id: string) => setActiveId(id), []);
  const handleLeave = useCallback(() => setActiveId(null), []);
  const handleClick = useCallback(
    (id: string) => setActiveId((prev) => (prev === id ? null : id)),
    []
  );

  const dubaiMarker = markers.find((m) => m.id === "dubai");
  const activeRoute = activeId
    ? coverageRoutes.find((r) => r.id === activeId)
    : null;
  const activeMarker = activeId
    ? markers.find((m) => m.id === activeId)
    : null;

  const vb = `${CROP.xMin} ${CROP.yMin} ${CROP.w} ${CROP.h}`;

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-8 bg-primary relative overflow-hidden"
      aria-label="Regional enquiry coverage concept"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
          >
            Regional Enquiry Flow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-white leading-tight mt-2"
          >
            Based in Dubai, Connected to Regional Enquiries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/35 text-sm mt-2 max-w-xl mx-auto"
          >
            Fictional enquiry routes across the Gulf, Europe, Africa, Asia, and
            Australia — no real offices or completed projects implied.
          </motion.p>
        </div>

        {/* Map + Cards */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* ── Map ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 relative"
          >
            {/* Glow */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                left: "48%",
                top: "45%",
                width: "40%",
                height: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(ellipse, rgba(184,135,70,0.08) 0%, transparent 70%)",
              }}
            />

            <svg
              viewBox={vb}
              className="w-full h-auto relative z-10"
              role="img"
              aria-label="Dotted EMEA and Asia-Pacific map showing sample enquiry routes"
            >
              {/* Base land dots */}
              {baseDots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r={0.22}
                  fill="rgba(255,255,255,0.13)"
                />
              ))}

              {/* Route lines from Dubai */}
              {dubaiMarker &&
                markers
                  .filter((m) => m.id !== "dubai")
                  .map((m) => (
                    <path
                      key={`r-${m.id}`}
                      d={routePath(dubaiMarker.x, dubaiMarker.y, m.x, m.y)}
                      fill="none"
                      stroke="#B88746"
                      strokeWidth={0.15}
                      strokeDasharray="0.8 0.6"
                      opacity={activeId === m.id ? 0.55 : 0.12}
                      className="transition-opacity duration-300"
                    />
                  ))}

              {/* Markers */}
              {markers.map((m) => {
                const route = coverageRoutes.find((r) => r.id === m.id);
                const isPrimary = route?.primary;
                const isActive = activeId === m.id;

                return (
                  <g key={m.id}>
                    {isPrimary && (
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r={1.8}
                        fill="none"
                        stroke="#B88746"
                        strokeWidth={0.1}
                      >
                        <animate
                          attributeName="r"
                          from="0.6"
                          to="2"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.45"
                          to="0"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={2}
                      fill="transparent"
                      cursor="pointer"
                      style={{ pointerEvents: "all" }}
                      onMouseEnter={() => handleHover(m.id)}
                      onMouseLeave={handleLeave}
                      onClick={() => handleClick(m.id)}
                    />

                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={isPrimary ? 0.6 : isActive ? 0.45 : 0.35}
                      fill="#B88746"
                      opacity={isPrimary ? 1 : isActive ? 0.85 : 0.55}
                      style={{
                        filter:
                          isPrimary || isActive
                            ? "drop-shadow(0 0 2px rgba(184,135,70,0.45))"
                            : "none",
                        transition: "all 0.2s",
                      }}
                    />

                    <text
                      x={m.x}
                      y={m.y - 1.2}
                      textAnchor="middle"
                      fill={isPrimary ? "#B88746" : "rgba(255,255,255,0.3)"}
                      fontSize={isPrimary ? 1.4 : 1.05}
                      fontWeight={isPrimary ? 700 : 500}
                      fontFamily="var(--font-body), system-ui, sans-serif"
                      className="select-none pointer-events-none"
                    >
                      {route?.city}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Tooltip (desktop only) */}
            <AnimatePresence>
              {activeRoute && activeMarker && (
                <motion.div
                  key={activeMarker.id}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 3 }}
                  transition={{ duration: 0.12 }}
                  className="absolute z-20 pointer-events-none hidden md:block"
                  style={{
                    left: `${((activeMarker.x - CROP.xMin) / CROP.w) * 100}%`,
                    top: `${((activeMarker.y - CROP.yMin) / CROP.h) * 100}%`,
                    transform: "translate(-50%, -115%)",
                  }}
                >
                  <div className="bg-[#0a1929] border border-accent/25 rounded-lg px-3.5 py-2.5 shadow-xl min-w-[160px] max-w-[200px]">
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2.5 h-2.5 bg-[#0a1929] border-r border-b border-accent/25 rotate-45" />
                    <p className="text-[12px] font-semibold text-white">
                      {activeRoute.city}, {activeRoute.country}
                    </p>
                    <p className="text-[10px] text-accent/80 mt-0.5">
                      {activeRoute.type}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {activeRoute.focus.map((f) => (
                        <span
                          key={f}
                          className="text-[8px] text-white/45 bg-white/[0.06] px-1 py-0.5 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-2"
          >
            <h3 className="text-[10px] font-bold tracking-[0.18em] text-accent/60 uppercase mb-3">
              Sample Enquiry Routes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {coverageRoutes.map((route) => (
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
            <p className="text-[9px] text-white/15 mt-3 italic">
              All routes are fictional — shown for portfolio demonstration only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
