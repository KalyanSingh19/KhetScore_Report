import React from "react";

// GaugeSVG Component
const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

const labelForValue = (v: number) => {
  if (v <= 0.25) return "LOW";
  if (v <= 0.5) return "MEDIUM";
  if (v <= 0.75) return "HIGH";
  return "CRITICAL";
};

interface GaugeSVGProps {
  value: number;
  size?: number;
  thickness?: number;
  animate?: boolean;
}

export function GaugeSVG({ value, size = 340, thickness = 28, animate = true }: GaugeSVGProps) {
  const v = clamp(value, 0, 1);
  const width = size;
  const height = Math.round(size * 0.6);
  const cx = width / 2;
  const cy = height;
  const radius = Math.min(width / 2 - thickness, height - thickness / 2);

  const startAngle = -90;
  const endAngle = 90;
  const totalDegrees = endAngle - startAngle;

  const seg = totalDegrees / 4;
  const segments = [
    { color: "#8BC34A", label: "LOW", a0: startAngle + seg * 0, a1: startAngle + seg * 1 },
    { color: "#F6C23E", label: "MEDIUM", a0: startAngle + seg * 1, a1: startAngle + seg * 2 },
    { color: "#F39C12", label: "HIGH", a0: startAngle + seg * 2, a1: startAngle + seg * 3 },
    { color: "#E74C3C", label: "CRITICAL", a0: startAngle + seg * 3, a1: startAngle + seg * 4 },
  ];

  const needleAngle = startAngle + v * totalDegrees;

  const labelPos = (angle: number, offset = 22) => {
    const p = polarToCartesian(cx, cy, radius + offset, angle);
    return p;
  };

  const currentLabel = labelForValue(v);

  return (
    <div style={{ width, display: "flex", justifyContent: "center", alignItems: "center", userSelect: "none" }}>
      <svg
        viewBox={`0 0 ${width} ${height + thickness}`}
        width={width}
        height={height + thickness}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* background semicircle */}
        <path
          d={describeArc(cx, cy, radius, startAngle, endAngle)}
          stroke="#ececec"
          strokeWidth={thickness - 6}
          strokeLinecap="butt"
          fill="none"
          opacity={0.9}
        />

        {/* colored segments */}
        {segments.map((s, i) => (
          <path
            key={i}
            d={describeArc(cx, cy, radius, s.a0, s.a1)}
            stroke={s.color}
            strokeWidth={thickness}
            strokeLinecap="butt"
            fill="none"
          />
        ))}

        {/* tick marks */}
        {segments.map((s, i) => {
          const a = s.a0;
          const inPt = polarToCartesian(cx, cy, radius - thickness / 2, a);
          const outPt = polarToCartesian(cx, cy, radius + thickness / 2 + 2, a);
          return <line key={`tick-${i}`} x1={inPt.x} y1={inPt.y} x2={outPt.x} y2={outPt.y} stroke="#444" strokeWidth={1.5} />;
        })}

        {/* labels for segments */}
        {segments.map((s, i) => {
          const midAngle = (s.a0 + s.a1) / 2;
          const p = labelPos(midAngle, 40);
          return (
            <text
              key={`lbl-${i}`}
              x={p.x}
              y={p.y}
              fontSize={13}
              fontFamily="sans-serif"
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fill: "#222", fontWeight: 600 }}
            >
              {s.label}
            </text>
          );
        })}

        {/* needle group */}
        <g
          transform={`rotate(${needleAngle}, ${cx}, ${cy})`}
          style={{
            transition: animate ? "transform 800ms cubic-bezier(.2,.9,.3,1)" : undefined,
            transformOrigin: `${cx}px ${cy}px`,
          }}
        >
          {/* needle */}
          <polygon
            points={`
              ${cx - 6},${cy - 6}
              ${cx + 6},${cy - 6}
              ${cx + 1},${cy - radius + 12}
              ${cx - 1},${cy - radius + 12}
            `}
            fill="#2c3e50"
            opacity={0.98}
          />
          {/* needle center circle */}
          <circle cx={cx} cy={cy} r={10} fill="#2c3e50" stroke="#fff" strokeWidth={2} />
        </g>

        {/* center hollow */}
        <circle cx={cx} cy={cy} r={6} fill="#fff" />

        {/* risk label text */}
        <text
          x={cx}
          y={cy - radius / 2 + 14}
          fontSize={14}
          fontFamily="sans-serif"
          textAnchor="middle"
          style={{ fill: "#111", fontWeight: 700 }}
        >
          {currentLabel}
        </text>

        {/* numeric percent */}
        <text
          x={cx}
          y={cy - radius / 2 + 34}
          fontSize={12}
          fontFamily="sans-serif"
          textAnchor="middle"
          style={{ fill: "#444" }}
        >
          {(v * 100).toFixed(0)}%
        </text>
      </svg>
    </div>
  );
}