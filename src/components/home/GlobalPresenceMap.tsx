"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface Pin {
  name: string;
  lat: number;
  lng: number;
  label: string;
  primary?: boolean;
}

const pins: Pin[] = [
  { name: "Dubai", lat: 25.2048, lng: 55.2708, label: "Dubai, UAE — HQ", primary: true },
  { name: "Abu Dhabi", lat: 24.4539, lng: 54.3773, label: "Abu Dhabi, UAE" },
  { name: "Sharjah", lat: 25.3463, lng: 55.4209, label: "Sharjah, UAE" },
  { name: "Riyadh", lat: 24.7136, lng: 46.6753, label: "Riyadh, KSA" },
  { name: "Doha", lat: 25.2854, lng: 51.531, label: "Doha, Qatar" },
  { name: "Muscat", lat: 23.5880, lng: 58.3829, label: "Muscat, Oman" },
  { name: "Kuwait", lat: 29.3759, lng: 47.9774, label: "Kuwait City" },
];

function useMap() {
  return useMemo(() => {
    const map = new DottedMap({ height: 55, grid: "diagonal" });

    pins.forEach((pin) => {
      map.addPin({
        lat: pin.lat,
        lng: pin.lng,
        svgOptions: { color: "#B88746", radius: 0.6 },
      });
    });

    const svgMap = map.getSVG({
      radius: 0.22,
      color: "#FFFFFF20",
      shape: "circle",
      backgroundColor: "transparent",
    });

    return { svgMap };
  }, []);
}

function latLngToXY(
  lat: number,
  lng: number,
  viewBox: { width: number; height: number }
) {
  const x = ((lng + 180) / 360) * viewBox.width;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = viewBox.height / 2 - (viewBox.width * mercN) / (2 * Math.PI);
  return { x, y };
}

export default function GlobalPresenceMap() {
  const { svgMap } = useMap();
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  // Extract viewBox dimensions from generated SVG
  const viewBoxMatch = svgMap.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const vbWidth = viewBoxMatch ? parseFloat(viewBoxMatch[1]) : 120;
  const vbHeight = viewBoxMatch ? parseFloat(viewBoxMatch[2]) : 55;

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase"
          >
            Regional Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-white leading-tight mt-3"
          >
            Based in Dubai, Serving the Gulf
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm md:text-base mt-3 max-w-lg mx-auto"
          >
            Positioned across the UAE and the wider Gulf region for residential,
            commercial, and industrial contracting projects.
          </motion.p>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Radial glow behind Middle East area */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "53%",
              top: "32%",
              width: "30%",
              height: "40%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(ellipse, rgba(184,135,70,0.12) 0%, transparent 70%)",
            }}
          />

          {/* SVG Map from dotted-map */}
          <div
            dangerouslySetInnerHTML={{ __html: svgMap }}
            className="w-full [&>svg]:w-full [&>svg]:h-auto"
            aria-hidden="true"
          />

          {/* Interactive pin overlays */}
          <svg
            viewBox={`0 0 ${vbWidth} ${vbHeight}`}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          >
            {pins.map((pin) => {
              const pos = latLngToXY(pin.lat, pin.lng, {
                width: vbWidth,
                height: vbHeight,
              });
              const isHovered = hoveredPin === pin.name;
              const isPrimary = pin.primary;

              return (
                <g key={pin.name} style={{ pointerEvents: "all" }}>
                  {/* Pulse ring for primary */}
                  {isPrimary && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={2}
                      fill="none"
                      stroke="#B88746"
                      strokeWidth={0.15}
                      opacity={0.5}
                    >
                      <animate
                        attributeName="r"
                        from="0.8"
                        to="2.5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}

                  {/* Hit area for hover */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={2}
                    fill="transparent"
                    cursor="pointer"
                    onMouseEnter={() => setHoveredPin(pin.name)}
                    onMouseLeave={() => setHoveredPin(null)}
                  />

                  {/* Pin dot */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isPrimary ? 0.7 : 0.45}
                    fill="#B88746"
                    opacity={isPrimary ? 1 : 0.75}
                    className="transition-all duration-200"
                    style={{
                      filter: isPrimary
                        ? "drop-shadow(0 0 3px rgba(184,135,70,0.6))"
                        : isHovered
                        ? "drop-shadow(0 0 2px rgba(184,135,70,0.4))"
                        : "none",
                    }}
                  />

                  {/* Tooltip */}
                  {isHovered && (
                    <g>
                      <rect
                        x={pos.x - pin.label.length * 1.1}
                        y={pos.y - 4}
                        width={pin.label.length * 2.2}
                        height={2.5}
                        rx={0.5}
                        fill={isPrimary ? "#B88746" : "rgba(255,255,255,0.15)"}
                      />
                      <text
                        x={pos.x}
                        y={pos.y - 2.2}
                        textAnchor="middle"
                        fill={isPrimary ? "#0F2433" : "#ffffffcc"}
                        fontSize={1.5}
                        fontWeight={600}
                        fontFamily="var(--font-body), system-ui, sans-serif"
                      >
                        {pin.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: "Primary Base", value: "Dubai" },
            { label: "Coverage", value: "UAE & Gulf" },
            { label: "Sectors", value: "4 sectors" },
            { label: "Service Lines", value: "6 services" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-xl md:text-2xl font-bold text-accent font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-xs text-white/40 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
