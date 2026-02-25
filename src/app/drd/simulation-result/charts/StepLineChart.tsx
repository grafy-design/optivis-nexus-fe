"use client";

import ReactECharts from "@/components/charts/DynamicECharts";

const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_10 = "#1c1b1b";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";

// x: 0~10, y: AE probability (0~8) — Figma 기준 step line 데이터
const xData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dataA = [0, 0.2, 0.6, 1.2, 2.0, 3.0, 6.0, 6.4, 6.8, 7.2, 7.8];
const dataB = [0, 0.3, 0.9, 1.8, 3.0, 4.5, 6.0, 6.5, 7.0, 7.5, 8.0];
const dataC = [0, 0.1, 0.3, 0.7, 1.2, 2.0, 2.8, 3.6, 4.2, 4.8, 5.2];

export function StepLineChart() {
  const option = {
    grid: {
      left: 56,
      right: 16,
      top: 12,
      bottom: 52,
    },
    xAxis: {
      type: "category" as const,
      data: xData,
      axisLine: { lineStyle: { color: NEUTRAL_60, width: 1 } },
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
        lineStyle: { color: NEUTRAL_60, opacity: 0.15, type: "solid" as const, width: 1 },
      },
      name: "Years since treatment start",
      nameLocation: "middle" as const,
      nameGap: 28,
      nameTextStyle: {
        color: NEUTRAL_10,
        fontFamily: "Inter",
        fontSize: 11,
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
        name: "Strategy A",
        type: "line" as const,
        step: "end" as const,
        data: dataA,
        symbol: "none",
        lineStyle: { color: COLOR_A, width: 2 },
        areaStyle: {
          color: {
            type: "linear" as const,
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: `${COLOR_A}50` },
              { offset: 1, color: `${COLOR_A}08` },
            ],
          },
        },
        itemStyle: { color: COLOR_A },
      },
      {
        name: "Strategy B",
        type: "line" as const,
        step: "end" as const,
        data: dataB,
        symbol: "none",
        lineStyle: { color: COLOR_B, width: 2 },
        areaStyle: {
          color: {
            type: "linear" as const,
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: `${COLOR_B}50` },
              { offset: 1, color: `${COLOR_B}08` },
            ],
          },
        },
        itemStyle: { color: COLOR_B },
      },
      {
        name: "Strategy C",
        type: "line" as const,
        step: "end" as const,
        data: dataC,
        symbol: "none",
        lineStyle: { color: COLOR_C, width: 2 },
        areaStyle: {
          color: {
            type: "linear" as const,
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: `${COLOR_C}50` },
              { offset: 1, color: `${COLOR_C}08` },
            ],
          },
        },
        itemStyle: { color: COLOR_C },
      },
    ],
    legend: {
      show: true,
      bottom: 0,
      icon: "roundRect",
      itemWidth: 24,
      itemHeight: 3,
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
