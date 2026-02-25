"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AppLayout } from "@/components/layout/AppLayout";
import { useDefaultSettingStore, type DefaultSettingId } from "@/store/defaultSettingStore";
import { useSimulationStore, type EndpointItem } from "@/store/simulationStore";
import { Loading } from "@/components/common/Loading";
import { callMLStudyDesign, type PrimaryEndpointData, type SecondaryEndpointData, type StudyParameters } from "@/services/studyService";
import { IconVirusGray, IconFunnelGray, IconAsteriskGray, IconClockGray, IconVirusOrange, IconFunnelActive, IconAsteriskOrange, IconClockOrange } from "@/components/ui/drd-step-icons";

function IconComplete() {
  return (
    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#F06600", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9L7 13L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ── 설정 아이템 정의 ─────────────────────────────────────────────────────────

type IconComp = (props: { size?: number }) => React.JSX.Element;

const settingItems: {
  id: DefaultSettingId;
  title: string;
  description: string;
  icon: IconComp;
  completedSummary: {
    columns?: { heading: string; rows: { label?: string; value: string }[] }[];
    heading?: string;
    rows?: { label: string; value: string }[];
  };
}[] = [
  {
    id: "patient-disease-info",
    title: "Patient/Disease Info",
    description: "Define patient groups by fixing simulation conditions and selecting control variables.",
    icon: IconVirusGray,
    completedSummary: {
      heading: "Type 2 Diabetes",
      rows: [
        { label: "Disease", value: "Type 2 Diabetes" },
        { label: "HbA1c", value: "< 7.0% (Increase)" },
      ],
    },
  },
  {
    id: "filter",
    title: "Filter",
    description: "Define patient groups through direct feature-based filtering.",
    icon: IconFunnelGray,
    completedSummary: {
      heading: "Inclusion",
      rows: [{ label: "", value: "[ {eGFR ≤ 90}" }],
    },
  },
  {
    id: "high-risk-subgroup",
    title: "High-Risk Subgroup",
    description: "Select high-risk subgroups based on disease progression slopes.",
    icon: IconAsteriskGray,
    completedSummary: {
      heading: "Rapid (CKD 1 Stage)",
      rows: [
        { label: "Outcome", value: "eGFR" },
        { label: "Cutoff", value: "≤ 90" },
        { label: "Stratification month", value: "36 months" },
        { label: "Sample size", value: "360" },
      ],
    },
  },
  {
    id: "medical-history",
    title: "Medical History",
    description: "Define patient groups based on clinical history and risk profiles.",
    icon: IconClockGray,
    completedSummary: {
      columns: [
        {
          heading: "Baseline Status",
          rows: [
            { label: "CKD Stage", value: "Stage 1 (eGFR >=90)" },
            { label: "", value: "Stage 2 (eGFR >=60)" },
            { label: "", value: "Stage 3 (eGFR >=30)" },
            { label: "", value: "Stage 4 (eGFR >=15)" },
            { label: "", value: "Stage 5 (eGFR <=90)" },
          ],
        },
        {
          heading: "Medical History",
          rows: [
            { label: "CVD History", value: "ASCVD" },
            { label: "", value: "HF" },
            { label: "", value: "Stroke" },
          ],
        },
      ],
    },
  },
];

const settingRoutes: Record<DefaultSettingId, string> = {
  "patient-disease-info": "/drd/patient-disease-info",
  "filter": "/drd/filter",
  "high-risk-subgroup": "/drd/high-risk-subgroup",
  "medical-history": "/drd/medical-history",
};

// ── 서브컴포넌트 ─────────────────────────────────────────────────────────────


function InitialCard({ item, onClick }: { item: any; onClick: () => void }) {
  const Icon = item.icon;
  return (
    <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 32, padding: 16, display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Icon size={30} />
        <span style={{ fontFamily: "Inter", fontSize: 17, fontWeight: 600, color: "rgb(72,70,70)", letterSpacing: "-0.51px", lineHeight: "1" }}>{item.title}</span>
      </div>
      <p style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 500, color: "rgb(145,144,146)", letterSpacing: "-0.39px", lineHeight: "1.4", margin: "16px 0 0", flex: 1 }}>
        {item.description}
      </p>
      <button onClick={onClick} style={{ width: "100%", height: 36, borderRadius: 36, border: "none", cursor: "pointer", background: "#8F8AC4", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 16, flexShrink: 0 }}>
        <span style={{ fontFamily: "Inter", fontSize: 17, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.51px" }}>Setting</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.33594 8.33594H14.3359" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33594 2.33594V14.3359" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

function CompletedCard({ item, onReset, onEdit }: { item: any; onReset: () => void; onEdit: () => void }) {
  const summary = item.completedSummary;
  const hasColumns = !!summary.columns;

  return (
    <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 32, padding: 16, display: "flex", flexDirection: "column", gap: 10, minWidth: 0, flex: 1, overflow: "hidden" }}>
      {/* 헤더 */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <IconComplete />
        <span style={{ fontFamily: "Inter", fontSize: 17, fontWeight: 600, color: "rgb(72,70,70)", letterSpacing: "-0.51px", lineHeight: "1" }}>{item.title}</span>
      </div>

      {/* 내용 */}
      <div style={{ background: "#ffffff", borderRadius: 12, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6, flex: 1, overflow: "hidden" }}>
        {hasColumns ? (
          /* Medical History: 두 컬럼 나란히 */
          <div style={{ display: "flex", gap: 16, flex: 1 }}>
            {(summary.columns as any[]).map((col: any, ci: number) => (
              <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, color: "rgb(72,70,70)", letterSpacing: "-0.33px", paddingBottom: 4, borderBottom: "1px solid #e8e7ea" }}>
                  {col.heading}
                </div>
                {(col.rows as any[]).map((row: any, ri: number) => (
                  <div key={ri} style={{ display: "flex", gap: 6, padding: "3px 0" }}>
                    {row.label !== undefined ? (
                      <span style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, color: "rgb(120,119,118)", letterSpacing: "-0.33px", minWidth: 72, flexShrink: 0 }}>{row.label}</span>
                    ) : null}
                    <span style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 500, color: "rgb(72,70,70)", letterSpacing: "-0.33px" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          /* 일반: 헤딩 + 행 테이블 */
          <>
            {summary.heading && (
              <div style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 700, color: "rgb(72,70,70)", letterSpacing: "-0.39px", paddingBottom: 4, borderBottom: "1px solid #e8e7ea", flexShrink: 0 }}>
                {summary.heading}
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {(summary.rows ?? []).map((row: any, i: number) => (
                <div key={i} style={{ display: "flex", padding: "5px 0", borderBottom: i < (summary.rows ?? []).length - 1 ? "1px solid #e8e7ea" : undefined, gap: 12 }}>
                  {row.label && (
                    <span style={{ minWidth: 100, flexShrink: 0, fontFamily: "Inter", fontSize: 11, fontWeight: 600, color: "rgb(120,119,118)", letterSpacing: "-0.33px" }}>{row.label}</span>
                  )}
                  <span style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 500, color: "rgb(72,70,70)", letterSpacing: "-0.33px" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 버튼 */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, flexShrink: 0 }}>
        <button onClick={onReset} style={{ height: 36, paddingLeft: 20, paddingRight: 14, borderRadius: 36, background: "#8f8ac4", border: "none", cursor: "pointer", fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.45px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          Reset
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1875 3.09375V6.75H11.5312" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.8125 9C2.8125 7.52 3.39844 6.18164 4.35352 5.19141C5.30859 4.20117 6.63281 3.5625 8.10938 3.5625C9.77344 3.5625 11.2617 4.37695 12.2344 5.625L15.1875 6.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.8125 14.9062V11.25H6.46875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.1875 9C15.1875 10.48 14.6016 11.8184 13.6465 12.8086C12.6914 13.7988 11.3672 14.4375 9.89062 14.4375C8.22656 14.4375 6.73828 13.623 5.76562 12.375L2.8125 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={onEdit} style={{ height: 36, paddingLeft: 20, paddingRight: 14, borderRadius: 36, background: "#8f8ac4", border: "none", cursor: "pointer", fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.45px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          Edit
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3.375V14.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.375 9H14.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

const stepRoutes: Record<string, string> = {
  "patient-disease-info": "/drd/patient-disease-info",
  "filter": "/drd/filter",
  "high-risk": "/drd/high-risk-subgroup",
  "medical-history": "/drd/medical-history",
};

// ── 데이터 설정 ───────────────────────────────────────────────────────────

const setupSteps = [
  {
    id: "patient-disease-info",
    IconComponent: IconVirusGray,
    IconOrangeComponent: IconVirusOrange,
    isActive: false,
    title: "Patient/Disease Info",
    description: "Define patient groups by fixing simulation conditions and selecting control variables. Patient groups can be specified using demographic information, laboratory data, and vital signs",
    titleColor: "#484646",
    descriptionColor: "#919092",
    bgColor: "transparent",
  },
  {
    id: "filter",
    IconComponent: IconFunnelGray,
    IconOrangeComponent: IconFunnelActive,
    isActive: false,
    title: "Filter",
    description: "Define patient groups through direct feature-based filtering. Filtering conditions are applied to selected features to construct patient groups.",
    titleColor: "#484646",
    descriptionColor: "#919092",
    bgColor: "transparent",
  },
  {
    id: "high-risk",
    IconComponent: IconAsteriskGray,
    IconOrangeComponent: IconAsteriskOrange,
    isActive: false,
    title: "High-Risk Subgroub",
    description: "Select high-risk subgroups based on disease progression slopes. Prognostic scoring and loading of prior subgroup definitions are supported.",
    titleColor: "#484646",
    descriptionColor: "#919092",
    bgColor: "transparent",
  },
  {
    id: "medical-history",
    IconComponent: IconClockGray,
    IconOrangeComponent: IconClockOrange,
    isActive: false,
    title: "Medical History",
    description: "Define patient groups based on clinical history and risk profiles. Patient groups can be selected using diagnoses, comorbidities, risk factors, and key medical history.",
    titleColor: "#484646",
    descriptionColor: "#919092",
    bgColor: "transparent",
  },
];


// ── 메인 페이지 ──────────────────────────────────────────────────────────────

export default function DefaultSettingPage() {
  const router = useRouter();
  const { completedItems, setCompleted, isAllCompleted, isAnyCompleted } = useDefaultSettingStore();
  const allCompleted = isAllCompleted();
  const anyCompleted = isAnyCompleted();

  // Simulation logic from ATS
  const {
    isApplied,
    primaryEndpoints,
    secondaryEndpoints,
    nominalPower,
    alpha,
    multiplicity,
    treatmentDuration,
    hypothesisType,
    treatmentArms,
    randomizationRatio,
    subpopulation,
    isLoading,
    setIsApplied,
    setSampleSizeControl,
    setApiData,
    setTaskId,
    setIsLoading,
    setError,
  } = useSimulationStore();

  const convertPrimaryEndpoint = (endpoint: string): string => {
    const endpointMap: Record<string, string> = {
      "ADAS Cog 11": "ADTOT70",
      MMSE: "MMTOTSCORE",
      CDR: "CDTOTSCORE",
    };
    return endpointMap[endpoint] || endpoint;
  };

  const handleApplySettings = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const roundedNominalPower = parseFloat(
        (Math.round(nominalPower / 0.05) * 0.05).toFixed(2)
      );

      const toApiType = (t: string | undefined) =>
        t === "Binary" ? "Binary" : "Continous";

      const thresholdPayload = (v: number | null | undefined) =>
        v != null && Number.isFinite(v)
          ? { threshold: v }
          : { threshold: null };

      const primaryDataList: PrimaryEndpointData[] = primaryEndpoints.map(
        (ep: EndpointItem, index: number) => {
          const outcome = convertPrimaryEndpoint(ep.name);
          const effectSize = parseFloat(
            (Math.round(ep.effectSize * 10) / 10).toFixed(1)
          );
          return {
            no: index + 1,
            outcome: [outcome],
            type: [toApiType(ep.type)],
            effect_size: [effectSize],
            ...thresholdPayload(ep.threshold),
            target_power: [roundedNominalPower],
            statistical_method: "ANCOVA",
            multiplicity: multiplicity || "Bonferroni",
            endpoint_objectives: ["Confirmatory"],
            alpha: alpha,
          };
        }
      );

      const secondaryDataList: SecondaryEndpointData[] =
        secondaryEndpoints.length > 0
          ? secondaryEndpoints.map((ep: EndpointItem, index: number) => {
              const outcome = convertPrimaryEndpoint(ep.name);
              const effectSize = parseFloat(
                (Math.round(ep.effectSize * 10) / 10).toFixed(1)
              );
              return {
                no: index + 1,
                outcome: [outcome],
                type: [toApiType(ep.type)],
                effect_size: [effectSize],
                ...thresholdPayload(ep.threshold),
                target_power: [roundedNominalPower],
                statistical_method: "ANCOVA",
                multiplicity: multiplicity || "Bonferroni",
                endpoint_objectives: ["Confirmatory"],
                alpha: alpha,
              };
            })
          : [];

      const durationValue = parseInt(
        treatmentDuration.replace(" months", ""),
        10
      );
      if (
        isNaN(durationValue) ||
        durationValue <= 0 ||
        durationValue % 3 !== 0
      ) {
        throw new Error("Treatment Duration은 3의 배수인 양수여야 합니다.");
      }

      const parameters: StudyParameters = {
        disease_area: "Alzheimer",
        treatment_duration: durationValue,
        treatment_arms: parseInt(treatmentArms, 10),
        randomization_ratio: randomizationRatio,
        stratification: false,
        hypothesis_type: hypothesisType,
        subpopulation: subpopulation,
        primary: primaryDataList,
        ...(secondaryDataList.length > 0
          ? { secondary: secondaryDataList }
          : {}),
      };

      const response = await callMLStudyDesign(parameters);

      const taskId = response.data?.task_id;
      if (taskId) {
        setTaskId(taskId);
      }

      const manageResult = response.data?.table_results?.manage_result as any;
      const sampleSizeEvaluation =
        response.data?.table_results?.sample_size_evaluation;
      const trialDesignConditionsSummary =
        response.data?.table_results?.result_trialdesignconditionsummary;
      const resultTypeSafety = response.data?.table_results?.result_type_safety;
      const resultVarianceDecline =
        response.data?.table_results?.result_variancedecline;
      const resultEstimatedTreatmentEffect =
        response.data?.table_results?.result_estimatedtreatmenteffect;
      const resultAbsolutePerformance =
        response.data?.table_results?.result_absoluteperformancecomparison;
      const resultRobustnessProof =
        response.data?.table_results?.result_robustnessproof;
      const resultDecisionStability =
        response.data?.table_results?.result_decisionstability;
      const graphAccModel = response.data?.table_results?.graph_acc_model;
      const resultPrecModel = response.data?.table_results?.result_prec_model;
      const appendix = response.data?.table_results?.appendix;

      if (manageResult) {
        const optivisData = manageResult.OPTIVIS || [];
        const traditionalData = manageResult.TRADITIONAL || [];
        const resultFormula = response.data?.table_results?.result_formula;

        const resultOverview =
          response.data?.table_results?.result_resultsoverview;

        setApiData({
          OPTIVIS: Array.isArray(optivisData) ? optivisData : [],
          Traditional: Array.isArray(traditionalData) ? traditionalData : [],
          result_formula: resultFormula,
          result_resultsoverview: resultOverview,
          result_trialdesignconditionsummary: trialDesignConditionsSummary,
          sample_size_evaluation: sampleSizeEvaluation,
          result_type_safety: resultTypeSafety,
          result_variancedecline: resultVarianceDecline,
          result_estimatedtreatmenteffect: resultEstimatedTreatmentEffect,
          result_absoluteperformancecomparison: resultAbsolutePerformance,
          result_robustnessproof: resultRobustnessProof,
          result_decisionstability: resultDecisionStability,
          graph_acc_model: graphAccModel,
          result_prec_model: resultPrecModel,
          appendix: appendix,
        });

        const roundedPower = parseFloat(
          (Math.round(nominalPower / 0.05) * 0.05).toFixed(2)
        );
        setSampleSizeControl(Math.max(0.6, Math.min(0.95, roundedPower)));

        setIsApplied(true);
      } else {
        throw new Error("API 응답에 데이터가 없습니다.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "API 호출에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout headerType="drd" drdStep={1} scaleMode="none">
      <Loading isLoading={isLoading} />
      <div style={{ display: "flex", flexDirection: "column", width: "calc(100% - 24px)", height: "100%", gap: 24, overflow: "hidden", marginLeft: "8px", marginRight: "8px", }}>

      {/* 타이틀 */}
          <div style={{ flexShrink: 0, padding: "0 12px" }}>
            <h1 onClick={() => router.push("/drd/default-setting")} style={{ fontFamily: "Poppins, Inter, sans-serif", fontSize: 42, fontWeight: 600, color: "rgb(17,17,17)", letterSpacing: "-1.5px", lineHeight: 1.1, margin: 0, cursor: "pointer" }}>
              Default Settings
            </h1>
            <span style={{ fontFamily: "Inter", fontSize: 16, fontWeight: 600, color: "rgb(120,119,118)", letterSpacing: "-0.48px" }}>
              {allCompleted ? "Setup Complete" : "Setup Required"}
            </span>
          </div>

      {/* 메인 레이아웃: flex-1로 전체 가용 높이 채움 */}
      <div style={{ display: "flex", flex: 1, gap: "0px",  minHeight: 0, alignItems: "stretch", overflow: "hidden" }}>

         
          {/* ── 왼쪽 패널 (Navy Glass - 9-slice) ────────────────── */}
          <div
            className=" drd-left-pannel w-[380px] flex-shrink-0 rounded-[36px] gap-[12px] overflow-hidden flex flex-col" style={{borderImage: 'url("/assets/figma/home/frame-panel-middle.png") 72 fill / 36px / 0 stretch', borderStyle: "solid", borderTopWidth: "20px", borderBottomWidth: "28px", borderLeftWidth: "24px", borderRightWidth: "24px", borderColor: "transparent"}}
          >
            
            {/* Filtered Patients 카드 (내부) */}
            <div className="shrink-0 h-[250px] relative rounded-[24px] overflow-hidden flex flex-col p-[16px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1)]">
              {/* 카드 전용 Navy 그라디언트 필 */}
              <div 
                className="absolute inset-0 z-0 pointer-events-none" 
                style={{ 
                  backgroundImage: "linear-gradient(90deg, #262255 0%, #262255 100%)",
                }} 
              />
              <div className="absolute inset-0 bg-[rgba(38,38,38,0.25)] mix-blend-color-dodge z-[1]" />

              {/* 카드 내용 */}
              <div className="relative z-10 flex flex-col h-full">
                {/* 상단: filtered patients + Add data */}
                <div className="flex justify-between items-start mb-[24px]">
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Inter'] font-semibold text-[15px] leading-[1.18] text-white tracking-[-0.36px]">
                      filtered patients
                    </span>
                    <span className="font-['Inter'] font-semibold text-[36px] leading-none text-white tracking-[-1.08px]">
                      100%
                    </span>
                  </div>

                  {/* Add data 버튼 */}
                  <button className="flex items-center gap-[4px] h-[30px] px-[14px] py-[8px] rounded-[36px] border-none cursor-pointer relative bg-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-[#f06600] mix-blend-plus-lighter" />
                    <span className="relative z-10 font-['Inter'] font-semibold text-[15px] leading-[1.15] text-white tracking-[-0.75px] mix-blend-screen">
                      Add data
                    </span>
                    <span className="relative z-10 text-[16px] text-white font-bold mix-blend-screen">+</span>
                  </button>
                </div>

                {/* 프로그레스 바 (상단 블록 바로 아래 24px) */}
                <div className="relative h-[18px] w-full rounded-[12px] bg-[rgba(0,0,0,0.2)] overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-full bg-[#f06600] rounded-[12px]" />
                  <div className="absolute inset-0 flex items-center justify-end pr-[11.13px]">
                    <span className="font-['Inter'] font-semibold text-[13px] leading-[1.18] text-white tracking-[-0.36px] mix-blend-screen text-right">
                      360/360 patients
                    </span>
                  </div>
                </div>

                {/* OPMD 섹션: 카드 바닥에 붙음 */}
                <div className="mt-auto flex flex-col gap-[2px]">
                  <div className="font-['Inter'] font-semibold text-[15px] leading-[1.15] text-white tracking-[-0.75px]">
                    OPMD
                  </div>
                  <div className="flex gap-[11px]">
                    <div className="flex gap-[3px] items-center">
                      <span className="font-['Inter'] font-semibold text-[10px] leading-[1.1] text-white tracking-[-0.4px]">
                        Initial Cohort
                      </span>
                      <span className="font-['Inter'] font-semibold text-[15px] leading-[1.15] text-white tracking-[-0.75px] w-[86px]">
                        4,800
                      </span>
                    </div>
                    <div className="flex gap-[3px] items-center">
                      <span className="font-['Inter'] font-semibold text-[10px] leading-[1.1] text-white tracking-[-0.4px]">
                        Final Cohort
                      </span>
                      <span className="font-['Inter'] font-semibold text-[15px] leading-[1.15] text-white tracking-[-0.75px] w-[86px]">
                        4,800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Setup Steps 하단 영역 (Light Gray/Blue Glass Overlay) */}
            <div className="flex-1 rounded-[24px] bg-[rgba(255,255,255,0.6)] flex flex-col p-[16px] gap-[30px] overflow-hidden">
              {setupSteps.map((step) => {
                const isCompleted = completedItems[step.id as DefaultSettingId];
                return (
                  <button
                    key={step.id}
                    onClick={() => router.push(stepRoutes[step.id])}
                    className="flex flex-col p-[16px] rounded-[24px] pt-[12px] pb-[16px] shrink-0 border-none cursor-pointer text-left w-full transition-colors duration-150 hover:bg-[#f9f8fc] active:bg-[#efeff4]"
                    style={{ background: "transparent" }}
                  >
                    <div className="flex items-center gap-[18px]">
                      {isCompleted ? (
                        <div className="shrink-0 flex items-center justify-center">
                          <step.IconOrangeComponent size={24} />
                        </div>
                      ) : (
                        <div className="shrink-0 flex items-center justify-center">
                          <step.IconComponent size={24} />
                        </div>
                      )}
                      <span
                        className="font-['Inter'] font-semibold text-[19.5px] leading-[1.12] tracking-[-0.78px]"
                        style={{ color: step.titleColor }}
                      >
                        {step.title}
                      </span>
                    </div>
                    <div className="pl-[42px] mt-0">
                      <p
                        className="font-['Inter'] font-semibold text-[10px] leading-[1.1] tracking-[-0.4px] m-0"
                        style={{ color: step.descriptionColor }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            
          </div>


        {/* ── 오른쪽 패널 ──────────────────────────────────────────────── */}
        <div className="drd-right-panel flex-[78] min-w-0 min-h-0 flex flex-col" style={{ borderImage: 'url("/assets/figma/home/frame-panel-middle.png") 72 fill / 36px / 0 stretch', borderStyle: "solid", borderTopWidth: "20px", borderBottomWidth: "28px", borderLeftWidth: "24px", borderRightWidth: "24px", borderColor: "transparent", gap: "12px"}}>


          {/* 2×2 그리드 */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12, minHeight: 0 }}>
            {settingItems.map((item) =>
              completedItems[item.id] ? (
                <CompletedCard key={item.id} item={item} onReset={() => setCompleted(item.id, false)} onEdit={() => router.push(settingRoutes[item.id])} />
              ) : (
                <InitialCard key={item.id} item={item} onClick={() => router.push(settingRoutes[item.id])} />
              )
            )}
          </div>

          {/* 하단 버튼 */}
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "flex-end", gap: 12, alignItems: "center"}}>
            <button disabled={!anyCompleted} style={{ height: 40, paddingLeft: 28, paddingRight: 28, borderRadius: 36, background: anyCompleted ? "#787776" : "#c6c5c9", border: "none", cursor: anyCompleted ? "pointer" : "not-allowed", fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: anyCompleted ? "#ffffff" : "#e2e1e5", letterSpacing: "-0.51px" }}>
              Save Simulation
            </button>
            <button disabled={!anyCompleted} onClick={() => router.push("/drd/simulation-setting")} style={{ height: 40, paddingLeft: 24, paddingRight: 24, borderRadius: 36, background: anyCompleted ? "#F06600" : "#c6c5c9", border: "none", cursor: anyCompleted ? "pointer" : "not-allowed", fontFamily: "Inter", fontSize: 15, fontWeight: 600, color: anyCompleted ? "#ffffff" : "#e2e1e5", letterSpacing: "-0.51px" }}>
              Apply to Analysis
            </button>
          </div>
        </div>

      </div>

      {/* 데모 토글 */}
      <div style={{ display: "none" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {settingItems.map((item: any) => (
            <button key={item.id} onClick={() => setCompleted(item.id as DefaultSettingId, !completedItems[item.id as DefaultSettingId])}
              style={{ fontSize: 9, padding: "3px 8px", background: completedItems[item.id as DefaultSettingId] ? "#F06600" : "rgba(255,255,255,0.8)", color: completedItems[item.id as DefaultSettingId] ? "#fff" : "#333", border: "1px solid #ccc", borderRadius: 6, cursor: "pointer" }}>
              {item.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
      </div>
    </AppLayout>
  );
}
