"use client";

import ReactECharts from "@/components/charts/DynamicECharts";

const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";

// Figma 디자인 기준 mock 데이터 (bar top position → count)
// X: -2.0 ~ 1.0, 구간 0.1씩 / Y: patient count
const xLabels = [
  "-2.0", "-1.9", "-1.8", "-1.7", "-1.6", "-1.5", "-1.4", "-1.3", "-1.2",
  "-1.1", "-1.0", "-0.9", "-0.8", "-0.7", "-0.6", "-0.5", "-0.4", "-0.3",
  "-0.2", "-0.1", "0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7",
  "0.8", "0.9", "1.0",
];

const dataA = [
  0, 0, 0, 0, 0, 1, 1, 2, 5, 9, 11, 12, 14, 24, 25, 19, 22, 23, 30, 48, 46,
  22, 11, 5, 0, 0, 0, 0, 0, 0, 0,
];
const dataB = [
  0, 0, 0, 0, 3, 3, 4, 5, 13, 14, 18, 19, 23, 31, 32, 23, 28, 27, 36, 48, 29,
  18, 12, 9, 0, 0, 0, 0, 0, 0, 0,
];
const dataC = [
  6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 22, 23, 24, 26, 29,
  35, 42, 48, 43, 38, 30, 22, 17, 14, 11, 9,
];

export function HistogramChart() {
  const option = {
    grid: {
      left: 72,
      right: 16,
      top: 12,
      bottom: 68,
    },
    xAxis: {
      type: "category" as const,
      data: xLabels,
      axisLine: { lineStyle: { color: NEUTRAL_60, width: 1 } },
      axisTick: { show: false },
      axisLabel: {
        color: NEUTRAL_30,
        fontFamily: "Inter",
        fontSize: 9,
        fontWeight: 500,
        interval: 4,
        formatter: (v: string) => v,
      },
      splitLine: { show: false },
      name: "Primary Outcome Change (△)",
      nameLocation: "middle" as const,
      nameGap: 32,
      nameTextStyle: {
        color: "#1c1b1b",
        fontFamily: "Inter",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: -0.55,
      },
    },
    yAxis: {
      type: "value" as const,
      min: 0,
      max: 50,
      interval: 10,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: NEUTRAL_30,
        fontFamily: "Inter",
        fontSize: 9,
        fontWeight: 500,
      },
      splitLine: {
        show: true,
        lineStyle: { color: NEUTRAL_60, opacity: 0.2, type: "solid" as const, width: 1 },
      },
      name: "Patient Count",
      nameLocation: "middle" as const,
      nameGap: 44,
      nameTextStyle: {
        color: "#1c1b1b",
        fontFamily: "Inter",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: -0.55,
      },
    },
    series: [
      {
        name: "Strategy A",
        type: "bar" as const,
        data: dataA,
        barWidth: "30%",
        itemStyle: { color: COLOR_A, opacity: 0.8, borderRadius: [2, 2, 0, 0] },
        emphasis: { disabled: true },
        markLine: {
          silent: true,
          symbol: "none",
          lineStyle: { color: NEUTRAL_60, type: "dashed" as const, width: 1 },
          data: [{ xAxis: "0.1" }],
          label: { show: false },
        },
      },
      {
        name: "Strategy B",
        type: "bar" as const,
        data: dataB,
        barWidth: "30%",
        itemStyle: { color: COLOR_B, opacity: 0.8, borderRadius: [2, 2, 0, 0] },
        emphasis: { disabled: true },
      },
      {
        name: "Strategy C",
        type: "bar" as const,
        data: dataC,
        barWidth: "30%",
        itemStyle: { color: COLOR_C, opacity: 0.8, borderRadius: [2, 2, 0, 0] },
        emphasis: { disabled: true },
      },
    ],
    legend: {
      show: true,
      bottom: 16,
      icon: "roundRect",
      itemWidth: 24,
      itemHeight: 8,
      data: [
        { name: "Strategy A", itemStyle: { color: COLOR_A } },
        { name: "Strategy B", itemStyle: { color: COLOR_B } },
        { name: "Strategy C", itemStyle: { color: COLOR_C } },
      ],
      textStyle: {
        color: NEUTRAL_30,
        fontFamily: "Inter",
        fontSize: 9,
        fontWeight: 500,
      },
    },
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
