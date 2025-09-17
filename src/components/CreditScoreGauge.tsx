import React from "react";
import GaugeChart from "react-gauge-chart";

interface CreditScoreGaugeProps {
  score: number; // 0–100
}

export function CreditScoreGauge({ score }: CreditScoreGaugeProps) {
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const colors = ["#8BC34A", "#F6C23E", "#F39C12", "#E74C3C"];

  const width = 280;

  return (
    <div style={{ width, textAlign: "center" }}>
      <GaugeChart
        id="credit-score-gauge"
        nrOfLevels={4}
        arcsLength={[0.25, 0.25, 0.25, 0.25]}
        colors={colors}
        percent={pct}
        arcPadding={0.02}
        needleColor="#2c3e50"
        needleBaseColor="#2c3e50"
        textColor="#111"
        style={{ width: `${width}px` }}
        hideText
      />

      {/* Score below the gauge */}
      <div
        style={{
          marginTop: "-20px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#2c3e50",
        }}
      >
        {score}
      </div>
    </div>
  );
}
