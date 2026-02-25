"use client";

import ReactECharts from "@/components/charts/DynamicECharts";

const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_10 = "#1c1b1b";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";

export function BubbleChart() {
  const option = {
    grid: {
      left: 56,
      right: 16,
      top: 12,
      bottom: 52,
    },
    xAxis: {
      type: "value" as const,
      min: 0,
      max: 10,
      interval: 5,
      axisLine: { lineStyle: { color: NEUTRAL_60, width: 1 } },
      axisTick: { show: false },
      axisLabel: {
        color: NEUTRAL_30,
        fontFamily: "Inter",
        fontSize: 9,
        fontWeight: 500,
        letterSpacing: -0.27,
      },
      splitLine: { show: false },
      name: "△HbA1c",
      nameLocation: "middle" as const,
      nameGap: 28,
      nameTextStyle: {
        color: NEUTRAL_10,
        fontFamily: "Inter",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: -0.55,
      },
    },
    yAxis: {
      type: "value" as const,
      min: 0,
      max: 8,
      interval: 2,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: NEUTRAL_30,
        fontFamily: "Inter",
        fontSize: 9,
        fontWeight: 500,
        letterSpacing: -0.27,
      },
      splitLine: {
        show: true,
        lineStyle: { color: NEUTRAL_60, opacity: 0.2, type: "solid" as const, width: 1 },
      },
      name: "AE probability(%)",
      nameLocation: "middle" as const,
      nameGap: 40,
      nameTextStyle: {
        color: NEUTRAL_10,
        fontFamily: "Inter",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: -0.55,
      },
    },
    series: [
      {
        // Strategy C (Teal) - 작은 버블, 좌측 상단
        type: "scatter" as const,
        data: [[2.5, 2.8]],
        symbolSize: 46,
        itemStyle: { color: COLOR_C, opacity: 0.85 },
        label: {
          show: true,
          formatter: "C",
          color: "#fff",
          fontFamily: "Inter",
          fontSize: 11,
          fontWeight: 700,
        },
      },
      {
        // Strategy A (Blue) - 중간 버블
        type: "scatter" as const,
        data: [[3.5, 2.2]],
        symbolSize: 62,
        itemStyle: { color: COLOR_A, opacity: 0.88 },
        label: {
          show: true,
          formatter: "A",
          color: "#fff",
          fontFamily: "Inter",
          fontSize: 11,
          fontWeight: 700,
        },
      },
      {
        // Strategy B (Orange) - 큰 버블, 우측
        type: "scatter" as const,
        data: [[8.5, 6.0]],
        symbolSize: 96,
        itemStyle: { color: COLOR_B, opacity: 0.9 },
        label: {
          show: true,
          formatter: "B",
          color: "#fff",
          fontFamily: "Inter",
          fontSize: 13,
          fontWeight: 700,
        },
      },
    ],
    tooltip: { show: false },
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "100%" }}
      notMerge
    />
  );
}
