"use client";

import ReactECharts from "@/components/charts/DynamicECharts";

const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";

// Figma 디자인 기준 mock 데이터 (월별 HbA1c 감소량)
const months = [0, 3, 6, 9, 12, 15, 18, 21, 24];

const strategyB = [0, -0.3, -0.8, -1.4, -1.8, -2.2, -2.6, -2.7, -2.5];
const strategyA = [0, -0.1, -0.4, -0.9, -1.5, -2.0, -2.4, -2.6, -2.4];
const strategyCyan = [0, 0.1, -0.1, -0.6, -1.0, -1.8, -2.2, -2.3, -2.2];

export function SpaghettiPlotChart() {
  const option = {
    grid: {
      left: 72,
      right: 16,
      top: 12,
      bottom: 68,
    },
    xAxis: {
      type: "category" as const,
      data: months,
      boundaryGap: false,
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
        lineStyle: { color: NEUTRAL_60, opacity: 0.25, type: "solid" as const, width: 1 },
      },
      name: "Time since symptom onset (Months)",
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
      min: -4,
      max: 0,
      interval: 2,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: NEUTRAL_30,
        fontFamily: "Inter",
        fontSize: 9,
        fontWeight: 500,
        letterSpacing: -0.27,
        formatter: (v: number) => v.toFixed(1),
      },
      splitLine: {
        show: true,
        lineStyle: { color: NEUTRAL_60, opacity: 0.25, type: "solid" as const, width: 1 },
      },
      name: "Reduction in HbA1c",
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
        name: "B: Add-on",
        type: "line" as const,
        data: strategyB,
        smooth: true,
        symbol: "none",
        lineStyle: { color: COLOR_A, width: 2.5 },
        itemStyle: { color: COLOR_A },
        markLine: {
          silent: true,
          symbol: "none",
          label: {
            show: true,
            position: "insideEndTop" as const,
            formatter: "B: Add-on",
            color: COLOR_A,
            fontFamily: "Inter",
            fontSize: 9,
            fontWeight: 500,
          },
          lineStyle: { color: COLOR_A, type: "dashed" as const, width: 1, opacity: 0.6 },
          data: [{ xAxis: 9 }],
        },
      },
      {
        name: "A: Switch",
        type: "line" as const,
        data: strategyA,
        smooth: true,
        symbol: "none",
        lineStyle: { color: COLOR_B, width: 2.5 },
        itemStyle: { color: COLOR_B },
        markLine: {
          silent: true,
          symbol: "none",
          label: {
            show: true,
            position: "insideEndTop" as const,
            formatter: "A: Switch",
            color: COLOR_B,
            fontFamily: "Inter",
            fontSize: 9,
            fontWeight: 500,
          },
          lineStyle: { color: COLOR_B, type: "dashed" as const, width: 1, opacity: 0.6 },
          data: [{ xAxis: 15 }],
        },
      },
      {
        name: "C",
        type: "line" as const,
        data: strategyCyan,
        smooth: true,
        symbol: "none",
        lineStyle: { color: COLOR_C, width: 2.5 },
        itemStyle: { color: COLOR_C },
        markLine: {
          silent: true,
          symbol: "none",
          label: { show: false },
          lineStyle: { color: "#AAAAAD", type: "dotted" as const, width: 1.5 },
          data: [{ yAxis: -1.0, name: "Target : -1.0% at Month 12" }],
        },
      },
    ],
    graphic: [
      {
        type: "text",
        left: 58,
        top: 28,
        style: {
          text: "Target : -1.0% at Month 12",
          fill: "#AAAAAD",
          font: "500 9px Inter",
          letterSpacing: -0.27,
        },
      },
    ],
    legend: {
      show: true,
      bottom: 16,
      icon: "roundRect",
      itemWidth: 24,
      itemHeight: 3,
      data: [
        { name: "B: Add-on", itemStyle: { color: COLOR_A }, lineStyle: { color: COLOR_A } },
        { name: "A: Switch", itemStyle: { color: COLOR_B }, lineStyle: { color: COLOR_B } },
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
