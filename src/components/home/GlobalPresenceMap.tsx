"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import { coverageRoutes, type CoverageRoute } from "@/data/siteData";

/* ─── Types ─── */
interface MarkerPos {
  id: string;
  x: number;
  y: number;
}

/* ─── Map data hook (single coordinate system via getPoints) ─── */
function useMapData() {
  return useMemo(() => {
    const map = new DottedMap({ height: 55, grid: "diagonal" });

    const mapRoutes = coverageRoutes.filter((r) => r.showOnMap);
    mapRoutes.forEach((route) => {
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
      if (pt.data && typeof pt.data === "string") {
        markers.push({ id: pt.data, x: pt.x, y: pt.y });
      } else {
        baseDots.push({ x: pt.x, y: pt.y });
      }
    }

    const allX = allPoints.map((p: any) => p.x as number);
    const allY = allPoints.map((p: any) => p.y as number);
    const vw = Math.ceil(Math.max(...allX)) + 2;
    const vh = Math.ceil(Math.max(...allY)) + 2;
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return { baseDots, markers, vw, vh };
  }, []);
}

/* ─── Curved route line path ─── */
function routePath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const ox = -dy * 0.12;
  const oy = dx * 0.12;
  return `M ${x1} ${y1} Q ${mx + ox} ${my + oy} ${x2} ${y2}`;
}

/* ─── Route card component ─── */
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
      className={`text-left w-full rounded-lg border p-3.5 md:p-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        active
          ? "border-accent/60 bg-accent/8 shadow-lg shadow-accent/5"
          : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h4 className="text-[13px] md:text-sm font-semibold text-white leading-tight">
          {route.city},{" "}
          <span className="text-white/50 font-normal">{route.country}</span>
        </h4>
        {route.primary && (
          <span className="shrink-0 text-[9px] font-bold tracking-wider text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase">
            HQ
          </span>
        )}
      </div>
      <p className="text-[11px] text-accent/80 font-medium mb-2">
        {route.type}
      </p>
      <div className="flex flex-wrap gap-1">
        {route.focus.map((f) => (
          <span
            key={f}
            className="text-[10px] text-white/40 bg-white/[0.06] px-1.5 py-0.5 rounded"
          >
            {f}
          </span>
        ))}
      </div>
      <p className="text-[9px] text-white/20 mt-2 italic">{route.note}</p>
    </button>
  );
}

/* ─── Main component ─── */
export default function GlobalPresenceMap() {
  const { baseDots, markers, vw, vh } = useMapData();
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

  return (
    <section
      className="py-20 md:py-28 px-6 md:px-8 bg-primary relative overflow-hidden"
      aria-label="Regional enquiry coverage concept"
    >
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-12 md:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
          >
            Regional Enquiry Flow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-white leading-tight mt-3"
          >
            Based in Dubai, Connected to Regional Enquiries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed"
          >
            A fictional coverage concept showing how a UAE contractor website
            can present enquiry routes across the UAE, Gulf, and selected
            regional markets without implying real offices or completed projects.
          </motion.p>
        </div>

        {/* ── Map + Cards Grid ── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            {/* Radial glow around Gulf area */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                left: "62%",
                top: "42%",
                width: "35%",
                height: "45%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(ellipse, rgba(184,135,70,0.10) 0%, transparent 70%)",
              }}
            />

            {/* Rendered map SVG */}
            <svg
              viewBox={`0 0 ${vw} ${vh}`}
              className="w-full h-auto relative z-10"
              role="img"
              aria-label="Dotted world map showing sample enquiry routes"
            >
              {/* Base land dots */}
              {baseDots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r={0.22}
                  fill="rgba(255,255,255,0.12)"
                />
              ))}

              {/* Route lines from Dubai to each marker */}
              {dubaiMarker &&
                markers
                  .filter((m) => m.id !== "dubai")
                  .map((m) => (
                    <path
                      key={`route-${m.id}`}
                      d={routePath(
                        dubaiMarker.x,
                        dubaiMarker.y,
                        m.x,
                        m.y
                      )}
                      fill="none"
                      stroke="#B88746"
                      strokeWidth={0.18}
                      strokeDasharray="1 0.8"
                      opacity={activeId === m.id ? 0.5 : 0.15}
                      className="transition-opacity duration-300"
                    />
                  ))}

              {/* Marker dots */}
              {markers.map((m) => {
                const route = coverageRoutes.find((r) => r.id === m.id);
                const isPrimary = route?.primary;
                const isActive = activeId === m.id;

                return (
                  <g key={m.id}>
                    {/* Pulse ring for Dubai */}
                    {isPrimary && (
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r={1.8}
                        fill="none"
                        stroke="#B88746"
                        strokeWidth={0.12}
                      >
                        <animate
                          attributeName="r"
                          from="0.7"
                          to="2.2"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.5"
                          to="0"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Hit area */}
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={2.2}
                      fill="transparent"
                      cursor="pointer"
                      style={{ pointerEvents: "all" }}
                      onMouseEnter={() => handleHover(m.id)}
                      onMouseLeave={handleLeave}
                      onClick={() => handleClick(m.id)}
                    />

                    {/* Visible dot */}
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r={isPrimary ? 0.65 : isActive ? 0.5 : 0.38}
                      fill="#B88746"
                      opacity={isPrimary ? 1 : isActive ? 0.9 : 0.6}
                      style={{
                        filter:
                          isPrimary || isActive
                            ? "drop-shadow(0 0 2px rgba(184,135,70,0.5))"
                            : "none",
                        transition: "all 0.2s",
                      }}
                    />

                    {/* City label (always visible, small) */}
                    <text
                      x={m.x}
                      y={m.y - 1.4}
                      textAnchor="middle"
                      fill={isPrimary ? "#B88746" : "rgba(255,255,255,0.35)"}
                      fontSize={isPrimary ? 1.6 : 1.2}
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

            {/* HTML Tooltip overlay (positioned via %) */}
            <AnimatePresence>
              {activeRoute && activeMarker && (
                <motion.div
                  key={activeMarker.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-20 pointer-events-none hidden md:block"
                  style={{
                    left: `${(activeMarker.x / vw) * 100}%`,
                    top: `${(activeMarker.y / vh) * 100}%`,
                    transform: "translate(-50%, -120%)",
                  }}
                >
                  <div className="bg-[#0a1929] border border-accent/30 rounded-lg px-4 py-3 shadow-xl min-w-[180px] max-w-[220px]">
                    {/* Pointer arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-[#0a1929] border-r border-b border-accent/30 rotate-45" />
                    <p className="text-[13px] font-semibold text-white mb-0.5">
                      {activeRoute.city}, {activeRoute.country}
                    </p>
                    <p className="text-[11px] text-accent font-medium mb-2">
                      {activeRoute.type}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {activeRoute.focus.map((f) => (
                        <span
                          key={f}
                          className="text-[9px] text-white/50 bg-white/[0.07] px-1.5 py-0.5 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-[9px] text-white/20 italic">
                      {activeRoute.note}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Cards column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-2"
          >
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-accent/70 uppercase mb-4">
              Sample Enquiry Routes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
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
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-[10px] text-white/20 mt-10 max-w-md mx-auto"
        >
          Map routes are fictional and shown for portfolio demonstration only.
          This does not represent real offices, branches, or completed projects.
        </motion.p>
      </div>
    </section>
  );
}
