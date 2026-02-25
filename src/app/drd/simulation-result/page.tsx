"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppLayout } from "@/components/layout/AppLayout";
import { SpaghettiPlotChart } from "./charts/SpaghettiPlotChart";
import { HistogramChart } from "./charts/HistogramChart";
import { BubbleChart } from "./charts/BubbleChart";
import { StepLineChart } from "./charts/StepLineChart";

// ?? ?대?吏 ?먯뀑 寃쎈줈 ??????????????????????????????????????????????????????????
const imgFrame1618873826 = "/figma-assets/159570a2cd4a5962c7b68be950ef1ec97d5cd2e1.svg";

// ?? ?됱긽 ?곸닔 ????????????????????????????????????????????????????????????????
const COLOR_STRATEGY_A = "#3a11d8";  // chart-set06-group01
const COLOR_STRATEGY_B = "#f06600";  // chart-set06-group02 / secondary-60
const COLOR_STRATEGY_C = "#24c6c9";  // chart-set06-group03
const COLOR_PRIMARY    = "#262255";  // primary-15
const COLOR_NEUTRAL_10 = "#1c1b1b";
const COLOR_NEUTRAL_30 = "#484646";
const COLOR_NEUTRAL_40 = "#5f5e5e";
const COLOR_NEUTRAL_60 = "#929090";
const COLOR_TABLE_BODY = "#787776";

// ?? ?ы띁: ?꾨왂 移대뱶 ??????????????????????????????????????????????????????????
interface StrategyCardProps {
  name: string;
  nameColor: string;
  target: string;
  drugs: string[];
  extraDrug?: string;
  lineColor: string;
}

function StrategyCard({ name, nameColor, target, drugs, extraDrug, lineColor }: StrategyCardProps) {
  return (
    <div
      style={{
        position: "relative",
        background: "#ffffff",
        borderRadius: "16px",
        flexShrink: 0,
        width: "100%",
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "14px 16px 0",
        }}
      >
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.4vw, 22px)",
            color: nameColor,
            letterSpacing: "-0.66px",
            lineHeight: 1.2,
          }}
        >
          {name}
        </span>
        {/* info icon */}
        <img
          src="/icons/basics/info.svg"
          alt="info"
          width={16}
          height={16}
          style={{ flexShrink: 0 }}
        />
      </div>
      {/* 구분선 */}
      <div style={{ height: "2px", background: lineColor, margin: "8px 0 6px" }} />
      {/* 콘텐츠 */}
      <div style={{ padding: "0 16px 12px" }}>
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "clamp(11px, 1vw, 16px)",
            color: COLOR_NEUTRAL_10,
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
            margin: "0 0 4px",
          }}
        >
          {target}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {drugs.map((drug, i) => (
            <p
              key={i}
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "clamp(10px, 0.9vw, 14px)",
                color: COLOR_NEUTRAL_40,
                letterSpacing: "-0.42px",
                lineHeight: 1.1,
                margin: 0,
                paddingLeft: "16px",
              }}
            >
              {i + 1}. {drug}
            </p>
          ))}
          {extraDrug && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px", paddingLeft: "16px" }}>
              <img src={imgFrame1618873826} alt="" style={{ height: "11px", objectFit: "contain" }} />
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "clamp(10px, 0.9vw, 14px)",
                  color: COLOR_NEUTRAL_40,
                  letterSpacing: "-0.42px",
                  margin: 0,
                }}
              >
                {extraDrug}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ?? ?ы띁: Primary Outcome ?뚯씠釉?(Efficacy ?? ???????????????????????????????
function PrimaryOutcomeTable() {
  const rows = [
    { strategy: "A", mean: "-1.1%", ci: "(-0.9, -1.3)", median: "-1.0", nnt: "6.2", nntW24: "48% (CI 44~52%)" },
    { strategy: "B", mean: "-0.6%", ci: "(-0.9, -1.3)", median: "-0.5", nnt: "11.4", nntW24: "26% (CI 22~30%)" },
    { strategy: "C", mean: "-0.6%", ci: "(-0.9, -1.3)", median: "-0.5", nnt: "11.4", nntW24: "26% (CI 22~30%)" },
  ];
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter", tableLayout: "fixed", height: "100%" }}>
        <colgroup>
          <col style={{ width: "16%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "19%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "27%" }} />
        </colgroup>
        <thead>
          <tr style={{ borderBottom: `1px solid ${COLOR_NEUTRAL_60}` }}>
            {["Strategy", "Mean", "95% CI", "Median", "NNT*", "NNT at Week 24"].map((h, hi) => (
              <th
                key={h}
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(9px, 0.8vw, 14px)",
                  color: COLOR_PRIMARY,
                  textAlign: "left",
                  padding: hi === 0 ? "0 6px 0 12px" : hi === 5 ? "0 12px 0 6px" : "0 6px",
                  letterSpacing: "-0.42px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.strategy}
              style={{
                borderBottom: idx < rows.length - 1 ? `1px solid #c6c5c9` : "none",
              }}
            >
              {[row.strategy, row.mean, row.ci, row.median, row.nnt, row.nntW24].map(
                (cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      fontWeight: ci === 0 ? 600 : 400,
                      fontSize: "clamp(9px, 0.8vw, 13px)",
                      color: COLOR_TABLE_BODY,
                      padding: ci === 0 ? "0 6px 0 12px" : ci === 5 ? "0 12px 0 6px" : "0 6px",
                      letterSpacing: "-0.39px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ?? ?ы띁: Response Probability ?뚯씠釉?(Efficacy ?? ??????????????????????????
function ResponseProbabilityTable() {
  const rows = [
    {
      label: "Strong responder",
      a: { val: "32%(399)", bold: true, color: COLOR_STRATEGY_A },
      b: { val: "25%(275)", bold: false, color: COLOR_TABLE_BODY },
      c: { val: "25%(275)", bold: false, color: COLOR_TABLE_BODY },
    },
    {
      label: "Partial responder",
      a: { val: "21%(262)", bold: false, color: COLOR_TABLE_BODY },
      b: { val: "28%(298)", bold: false, color: COLOR_TABLE_BODY },
      c: { val: "28%(298)", bold: false, color: COLOR_TABLE_BODY },
    },
    {
      label: "Non responder",
      a: { val: "18%(225)", bold: false, color: COLOR_TABLE_BODY },
      b: { val: "37%(420)", bold: true, color: COLOR_STRATEGY_B },
      c: { val: "37%(420)", bold: true, color: COLOR_STRATEGY_C },
    },
    {
      label: "Deteriorator",
      a: { val: "6%(75)", bold: false, color: COLOR_TABLE_BODY },
      b: { val: "10%(88)", bold: false, color: COLOR_TABLE_BODY },
      c: { val: "10%(88)", bold: false, color: COLOR_TABLE_BODY },
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter", tableLayout: "fixed", height: "100%" }}>
        <colgroup>
          <col style={{ width: "34%" }} />
          <col style={{ width: "22%" }} />
          <col style={{ width: "22%" }} />
          <col style={{ width: "22%" }} />
        </colgroup>
        <thead>
          <tr style={{ borderBottom: "1px solid #e2e1e5" }}>
            <th style={{ padding: "0 6px 0 12px", textAlign: "left", fontWeight: 700, fontSize: "clamp(9px, 0.8vw, 14px)", color: COLOR_PRIMARY, letterSpacing: "-0.42px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              Category
            </th>
            {[
              { label: "Strategy A", color: COLOR_STRATEGY_A },
              { label: "Strategy B", color: COLOR_STRATEGY_B },
              { label: "Strategy C", color: COLOR_STRATEGY_C },
            ].map(({ label, color }, hi) => (
              <th
                key={label}
                style={{
                  padding: hi === 2 ? "0 12px 0 6px" : "0 6px",
                  textAlign: "left",
                  fontWeight: 700,
                  fontSize: "clamp(9px, 0.8vw, 14px)",
                  color,
                  letterSpacing: "-0.42px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.label}
              style={{ borderTop: idx > 0 ? "1px solid #c6c5c9" : "none" }}
            >
              <td style={{ padding: "0 6px 0 12px", fontWeight: 700, fontSize: "clamp(9px, 0.8vw, 14px)", color: COLOR_PRIMARY, letterSpacing: "-0.42px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {row.label}
              </td>
              {[row.a, row.b, row.c].map(({ val, bold, color }, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: ci === 2 ? "0 12px 0 6px" : "0 6px",
                    fontWeight: bold ? 700 : 400,
                    fontSize: "clamp(9px, 0.8vw, 13px)",
                    color,
                    letterSpacing: "-0.39px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ?? ?ы띁: Non-responder ?뚯씠釉?(AE risk ?? ?????????????????????????????????
interface NonResponderTableProps {
  strategyName: string;
  nameColor: string;
  lineColor: string;
}

function NonResponderTable({ strategyName, nameColor, lineColor }: NonResponderTableProps) {
  const features = [
    { rank: "1", condition: "DM duration > 7y", score: "0.32" },
    { rank: "2", condition: "Age > 70", score: "0.31" },
    { rank: "3", condition: "CKD stage ??3", score: "0.18" },
  ];
  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      {/* 헤더 */}
      <div style={{ padding: "12px 16px 0" }}>
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "clamp(12px, 1.3vw, 20px)",
            color: nameColor,
            letterSpacing: "-0.6px",
            lineHeight: 1.2,
          }}
        >
          {strategyName}
        </span>
      </div>
      {/* 구분선 */}
      <div style={{ height: "1px", background: lineColor, margin: "8px 0 0" }} />
      {/* 테이블 */}
      <div style={{ padding: "8px 16px 12px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter" }}>
          <thead>
            <tr>
              {["Rank", "Feature condition", "Impact score"].map((h) => (
                <th
                  key={h}
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(9px, 0.8vw, 13px)",
                    color: COLOR_PRIMARY,
                    textAlign: "left",
                    padding: "4px 4px 6px",
                    letterSpacing: "-0.39px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} style={{ borderTop: "1px solid #d4d3d6" }}>
                {[f.rank, f.condition, f.score].map((cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      fontWeight: 400,
                      fontSize: "clamp(9px, 0.8vw, 12px)",
                      color: COLOR_NEUTRAL_30,
                      padding: "5px 4px",
                      letterSpacing: "-0.36px",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ?? Efficacy ??而⑦뀗痢????????????????????????????????????????????????????????
function EfficacyContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(10px, 1.2vw, 16px)",
        width: "100%",
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      {/* 상단: Primary Outcome 카드 + Response Probability 카드 */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "stretch",
          flex: 3,
          minHeight: 0,
        }}
      >
        {/* Primary Outcome 移대뱶 */}
        <div
          style={{
            flex: 1,
            background: COLOR_PRIMARY,
            borderRadius: "22px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* 상단 1/4: 헤더 영역 */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h3
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 1.4vw, 22px)",
                  color: "#fff",
                  letterSpacing: "-0.66px",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Primary Outcome
              </h3>
              <img
                src="/icons/basics/info.svg"
                alt="info"
                width={16}
                height={16}
                style={{ flexShrink: 0, filter: "brightness(0) invert(1) opacity(0.6)" }}
              />
            </div>
          </div>
          {/* 하단 4/4: NNT 텍스트 + 테이블 */}
          <div style={{ flex: 4, display: "flex", flexDirection: "column", gap: "6px", minHeight: 0 }}>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "clamp(8px, 0.7vw, 11px)",
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "-0.33px",
                lineHeight: 1.2,
                margin: 0,
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              *NNT to achieve HbA1c &lt; 7.0%
            </p>
            <div style={{ flex: 1, minHeight: 0 }}>
              <PrimaryOutcomeTable />
            </div>
          </div>
        </div>

        {/* Response Probability 移대뱶 */}
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.6)",
            borderRadius: "22px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* 상단 1/4: 헤더 영역 */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-start" }}>
            <h3
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "clamp(13px, 1.4vw, 22px)",
                color: COLOR_PRIMARY,
                letterSpacing: "-0.66px",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Response Probability
            </h3>
          </div>
          {/* 하단 4/4: legend + 테이블 */}
          <div style={{ flex: 4, display: "flex", flexDirection: "column", gap: "6px", minHeight: 0 }}>
            {/* legend: 오른쪽 정렬, 원형 3개 묶음 + "High Score" 텍스트 */}
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", flexShrink: 0 }}>
              {/* 원형 컨테이너 3개 묶음 */}
              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: COLOR_STRATEGY_A }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: COLOR_STRATEGY_B }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: COLOR_STRATEGY_C }} />
              </div>
              <span style={{ fontFamily: "Inter", fontSize: "clamp(8px, 0.7vw, 11px)", color: COLOR_NEUTRAL_10 }}>High Score</span>
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponseProbabilityTable />
            </div>
          </div>
        </div>
      </div>

      {/* 하단: Simulated Trajectory + Counterfactual Comparison */}
      <div
        style={{
          background: COLOR_PRIMARY,
          borderRadius: "22px",
          padding: "clamp(14px, 1.5vw, 20px)",
          display: "flex",
          gap: "clamp(10px, 1vw, 16px)",
          alignItems: "stretch",
          flex: 4.5,
          minHeight: 0,
        }}
      >
        {/* Simulated Trajectory */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {/* 상단 1/4: 헤더 영역 */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-start" }}>
            <h4
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "clamp(12px, 1.2vw, 20px)",
                color: COLOR_PRIMARY,
                letterSpacing: "-0.6px",
                margin: 0,
              }}
            >
              Simulated Trajectory
            </h4>
          </div>
          {/* 하단 4/4: 차트 영역 */}
          <div style={{ flex: 4, minHeight: 0 }}>
            <SpaghettiPlotChart />
          </div>
        </div>

        {/* Counterfactual Comparison */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {/* 상단 1/4: 헤더 영역 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <h4
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "clamp(12px, 1.2vw, 20px)",
                color: COLOR_PRIMARY,
                letterSpacing: "-0.6px",
                margin: 0,
              }}
            >
              Counterfactual Comparison
            </h4>
            <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "clamp(9px, 0.9vw, 13px)", color: COLOR_NEUTRAL_10, margin: 0 }}>
              Primary Outcome Distribution by Treatment Strategy
            </p>
          </div>
          {/* 하단 4/4: 차트 영역 */}
          <div style={{ flex: 4, minHeight: 0 }}>
            <HistogramChart />
          </div>
        </div>
      </div>
    </div>
  );
}

// ?? AE risk ??而⑦뀗痢?????????????????????????????????????????????????????????
function AERiskContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(10px, 1.2vw, 16px)",
        width: "100%",
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      {/* 상단: Safety Trade-off + AE Risk */}
      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 1vw, 16px)",
          alignItems: "stretch",
          flex: 2.5,
          minHeight: 0,
        }}
      >
        {/* Safety Trade-off chart */}
        <div
          style={{
            flex: "1 1 48%",
            background: COLOR_PRIMARY,
            borderRadius: "22px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            minWidth: 0,
          }}
        >
          <h3
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "clamp(13px, 1.4vw, 22px)",
              color: "#fff",
              letterSpacing: "-0.66px",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Safety Trade-off
          </h3>
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <BubbleChart />
          </div>
        </div>

        {/* AE Risk 移대뱶 */}
        <div
          style={{
            flex: "1 1 48%",
            background: COLOR_PRIMARY,
            borderRadius: "22px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            minWidth: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h3
              style={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "clamp(13px, 1.4vw, 22px)",
                color: "#fff",
                letterSpacing: "-0.66px",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              AE Risk
            </h3>
            {/* Dropdown */}
            <div
              style={{
                background: "#efeff4",
                borderRadius: "8px",
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
            >
              <span style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "clamp(9px, 0.8vw, 13px)", color: "#484646" }}>Stroke</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5l3 3 3-3" stroke="#484646" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <StepLineChart />
          </div>
        </div>
      </div>

      {/* 하단: Non responder Identification */}
      <div
        style={{
          background: "rgba(255,255,255,0.6)",
          borderRadius: "22px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexShrink: 0,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "clamp(13px, 1.5vw, 24px)",
              color: COLOR_PRIMARY,
              letterSpacing: "-0.72px",
              lineHeight: 1,
              margin: "0 0 4px",
            }}
          >
            Non responder Identification
          </h3>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "clamp(9px, 0.85vw, 13px)",
              color: "#313032",
              letterSpacing: "-0.39px",
              margin: 0,
            }}
          >
            Top contributing factors ranked by impact score, where higher scores indicate stronger contribution to non-response.
          </p>
        </div>
        <div style={{ display: "flex", gap: "clamp(10px, 1vw, 16px)", alignItems: "stretch" }}>
          <NonResponderTable
            strategyName="Strategy A"
            nameColor={COLOR_STRATEGY_A}
            lineColor={COLOR_STRATEGY_A}
          />
          <NonResponderTable
            strategyName="Strategy B"
            nameColor={COLOR_STRATEGY_B}
            lineColor={COLOR_STRATEGY_B}
          />
          <NonResponderTable
            strategyName="Strategy C"
            nameColor={COLOR_STRATEGY_C}
            lineColor={COLOR_STRATEGY_C}
          />
        </div>
      </div>
    </div>
  );
}

// ?? 硫붿씤 而댄룷?뚰듃 ????????????????????????????????????????????????????????????
export default function SimulationResultPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"efficacy" | "ae-risk">("efficacy");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [simName, setSimName] = useState("");
  const [simDesc, setSimDesc] = useState("");
  const [selectedOutcome, setSelectedOutcome] = useState("HbA1c");

  const strategies = [
    {
      name: "Strategy A",
      nameColor: COLOR_STRATEGY_A,
      target: "HbA1c / Increase 10% / 3 Months",
      drugs: ["Basal insulin", "SGLT2 inhibitors"],
      extraDrug: "Dapagliflozin, Empagliflozin",
      lineColor: COLOR_STRATEGY_A,
    },
    {
      name: "Strategy B",
      nameColor: COLOR_STRATEGY_B,
      target: "HbA1c / Stable 0% / 6 Months",
      drugs: ["Basal insulin", "Metformin"],
      lineColor: COLOR_STRATEGY_B,
    },
    {
      name: "Strategy C",
      nameColor: COLOR_STRATEGY_C,
      target: "HbA1c / Decrease -10% / 6 Months",
      drugs: ["Basal insulin", "SGLT2 inhibitors"],
      extraDrug: "Dapagliflozin",
      lineColor: COLOR_STRATEGY_C,
    },
  ];

  return (
    <AppLayout headerType="drd" drdStep={3} scaleMode="none">
        <div style={{ display: "flex", flexDirection: "column", width: "calc(100% - 24px)", height: "100%", gap: 4, overflow: "hidden", marginLeft: "8px", marginRight: "8px" }}>
      {/* ??댄? */}
      {/* 콘텐츠 영역 전체 컨테이너 (제목 + 좌우 패널) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
          overflow: "hidden",
          gap: "24px",
          
        }}
      >
        <div style={{ flexShrink: 0, padding: "0 12px" }}>
          <h1 onClick={() => router.push("/drd/simulation-result")} style={{ fontFamily: "Poppins, Inter, sans-serif", fontSize: 42, fontWeight: 600, color: "rgb(17,17,17)", letterSpacing: "-1.5px", lineHeight: 1.1, margin: 0, cursor: "pointer" }}>
            Drug Response Prediction Dashboard
          </h1>
        </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flex: 1,
          minHeight: 0,
          gap: "0px",
        }}
      >
        {/* ?? ?????⑤꼸 ?????????????????????????????????????????????????? */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "stretch",
            gap: "0px",
            minHeight: 0,
          }}
        >
          {/* ?? ?쇱そ ?⑤꼸: Simulation Strategies ???????????????????????? */}
          <div
            className="w-[380px] flex-shrink-0 rounded-[36px] gap-[12px] overflow-hidden flex flex-col"
            style={{
              borderImage: 'url("/assets/figma/home/frame-panel-middle.png") 72 fill / 36px / 0 stretch',
              borderStyle: "solid",
              borderTopWidth: "20px",
              borderBottomWidth: "28px",
              borderLeftWidth: "24px",
              borderRightWidth: "24px",
              borderColor: "transparent",

            paddingBottom: "4px"
            }}
          >
            {/* Simulation Strategies 헤더 */}
            <div
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                flexShrink: 0,
                minHeight: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
                padding: "12px 4px",
              }}
            >
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.6vw, 26px)",
                  color: "#262255",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                Simulation strategies
              </span>
            </div>

            {/* 전략 카드 목록 */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "0px",
                overflow: "hidden",
                minHeight: 0,
              }}
            >
              {strategies.map((s) => (
                <StrategyCard key={s.name} {...s} />
              ))}

              {/* Primary Outcome + Population */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "12px 16px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "clamp(10px, 0.9vw, 14px)", color: COLOR_NEUTRAL_30, margin: "0 0 8px" }}>
                  Primary Outcome
                </p>
                <div style={{ height: "1px", background: "#e5e4e8", marginBottom: "0px" }} />
                {["HbA1c", "eGFR", "Weight", "Complication (ex : eGFR slope)"].map((label, idx) => {
                  const selected = selectedOutcome === label;
                  return (
                  <div
                    key={label}
                    onClick={() => setSelectedOutcome(label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 0",
                      borderTop: idx > 0 ? "1px solid #e5e4e8" : "none",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        border: `2px solid ${selected ? COLOR_STRATEGY_A : "#c6c5c9"}`,
                        background: selected ? COLOR_STRATEGY_A : "transparent",
                        flexShrink: 0,
                      }}
                    >
                      {selected && (
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff", margin: "2px" }} />
                      )}
                    </div>
                    <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(9px, 0.85vw, 13px)", color: COLOR_NEUTRAL_10 }}>{label}</span>
                  </div>
                  );
                })}
              </div>

              {/* Population / Follow-up */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "10px 14px",
                  flexShrink: 0,
                }}
              >
                {["Population : N=440", "Follow-up : 12months"].map((t) => (
                  <p key={t} style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "clamp(9px, 0.85vw, 13px)", color: COLOR_NEUTRAL_10, margin: "0 0 4px", lineHeight: 1.1 }}>
                    {t}
                  </p>
                ))}
              </div>
            </div>

            {/* Edit Condition 버튼 */}
            <div style={{ flexShrink: 0, display: "flex", justifyContent: "right" }}>
              <button
                type="button"
                onClick={() => router.push("/drd/default-setting")}
                style={{
                  position: "relative",
                  width: "200px",
                  height: "40px",
                  borderRadius: "36px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: "clamp(10px, 1.05vw, 18px)",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "-0.6px",
                  overflow: "hidden",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0, borderRadius: "36px", background: "#f06600" }} />
                <span style={{ position: "relative" }}>Edit Condition</span>
              </button>
            </div>
          </div>

          {/* ?? ?ㅻⅨ履??⑤꼸: ???꾪솚 ??????????????????????????????????????? */}
           <div
            className="drd-left-panel flex-1 min-w-[280px] min-h-0 flex flex-col"
            style={{
              borderImage: 'url("/assets/figma/home/frame-panel-left.png") 72 fill / 36px / 0 stretch',
              borderStyle: "solid",
              borderTopWidth: "20px",
              borderBottomWidth: "28px",
              borderLeftWidth: "24px",
              borderRightWidth: "24px",
              borderColor: "transparent",
              gap: "24px",
              paddingBottom:"24px"
            }}
          >
            {/* Summary */}
            <div style={{ flexShrink: 0, padding: 6, display: "flex", flexDirection: "column", gap: 24 }}>
              <h2
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.8vw, 30px)",
                  color: COLOR_PRIMARY,
                  letterSpacing: "-0.9px",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Summary
              </h2>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "clamp(9px, 0.85vw, 13px)",
                  color: COLOR_NEUTRAL_30,
                  letterSpacing: "-0.39px",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                Based on counterfactual simulation adjusted for baseline severity, Strategy A demonstrates greater HbA1c reduction and
                <br />
                faster response, at the cost of increased hypoglycemia risk. Key drivers include longer DM duration and adherence level.
              </p>
            </div>

            {/* 탭 + 콘텐츠 묶음 */}
            <div
              style={{
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* 탭 */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "36px",
                  padding: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                  alignSelf: "flex-start",
                }}
              >
                {(["efficacy", "ae-risk"] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  const label = tab === "efficacy" ? "Efficacy" : "AE risk";
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      style={{
                        position: "relative",
                        height: "36px",
                        padding: "0 clamp(14px, 1.6vw, 24px)",
                        borderRadius: "36px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "Inter",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "clamp(11px, 1vw, 16px)",
                        color: isActive ? "#fff" : COLOR_NEUTRAL_30,
                        letterSpacing: isActive ? "-0.48px" : "-0.36px",
                        background: "transparent",
                        overflow: "hidden",
                        transition: "color 0.15s",
                      }}
                    >
                      {isActive && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "36px",
                            background: COLOR_PRIMARY,
                          }}
                        />
                      )}
                      <span style={{ position: "relative" }}>{label}</span>
                    </button>
                  );
                })}
              </div>

              {/* 탭 콘텐츠 */}
              {activeTab === "efficacy" ? <EfficacyContent /> : <AERiskContent />}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Save Simulation 버튼 — 좌우 패널 컨테이너 밖, 4px gap */}
      <div style={{ flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
        <button
          type="button"
          onClick={() => setShowSaveModal(true)}
          style={{
            position: "relative",
            height: "40px",
            padding: "0 clamp(18px, 2vw, 32px)",
            borderRadius: "36px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter",
            fontSize: "clamp(10px, 1.05vw, 18px)",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "-0.6px",
            overflow: "hidden",
            background: "transparent",
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, borderRadius: "36px", background: "#f06600" }} />
          <span style={{ position: "relative" }}>Save Simulation</span>
        </button>
      </div>

      {/* ?? Save Simulation 紐⑤떖 ???????????????????????????????????????? */}
      {showSaveModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setShowSaveModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "380px",
              borderRadius: "20px",
              padding: "24px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
          >
            {/* 湲?섏뒪 諛곌꼍 */}
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "20px", pointerEvents: "none" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "20px", background: "rgba(255,255,255,0.6)", mixBlendMode: "color-dodge" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "20px", background: "rgba(255,255,255,0.88)" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "20px", background: "rgba(0,0,0,0.04)", mixBlendMode: "hard-light" }} />
            </div>

            {/* 콘텐츠 */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* 제목 */}
              <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "18px", color: "#484646", letterSpacing: "-0.54px", lineHeight: 1.2, margin: 0 }}>
                Save Simulation
              </p>

              {/* 입력 필드 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* Simulation Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "13px", color: "#484646", letterSpacing: "-0.39px", lineHeight: 1.2, margin: 0 }}>
                    Simulation Name *
                  </p>
                  <input
                    type="text"
                    value={simName}
                    onChange={(e) => setSimName(e.target.value)}
                    placeholder="Write a title"
                    style={{
                      height: "40px",
                      borderRadius: "12px",
                      border: "none",
                      background: "#e2e1e5",
                      padding: "0 14px",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "13px",
                      color: "#484646",
                      letterSpacing: "-0.39px",
                      outline: "none",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                {/* Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ fontFamily: "Inter", fontWeight: 500, fontSize: "13px", color: "#484646", letterSpacing: "-0.39px", lineHeight: 1.2, margin: 0 }}>
                    Description
                  </p>
                  <input
                    type="text"
                    value={simDesc}
                    onChange={(e) => setSimDesc(e.target.value.slice(0, 30))}
                    placeholder="Enter a Description (max 30 characters)"
                    style={{
                      height: "40px",
                      borderRadius: "12px",
                      border: "none",
                      background: "#e2e1e5",
                      padding: "0 14px",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "13px",
                      color: "#484646",
                      letterSpacing: "-0.39px",
                      outline: "none",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 버튼 */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "8px", justifyContent: "center"}}>
              {/* Close */}
              <button
                type="button"
                onClick={() => setShowSaveModal(false)}
                style={{
                  width: "112px",
                  height: "44px",
                  borderRadius: "36px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#262255",
                  letterSpacing: "-0.45px",
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10), 0px 0px 0px 0.5px rgba(0,0,0,0.06)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Close
              </button>

              {/* Save */}
              <button
                type="button"
                onClick={() => setShowSaveModal(false)}
                style={{
                  width: "112px",
                  height: "44px",
                  borderRadius: "36px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#262255",
                  letterSpacing: "-0.45px",
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10), 0px 0px 0px 0.5px rgba(0,0,0,0.06)",
                  backdropFilter: "blur(8px)",
                 
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}</div>
    </AppLayout>
  );
}
