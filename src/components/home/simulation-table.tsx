"use client";

import { useMemo, useState } from "react";

interface SimulationTableProps {
  serviceId?: string | null;
  searchQuery: string;
}

interface SimulationRow {
  id: string;
  simulationName: string;
  disease: string;
  outcome: string;
  description: string;
  lastUpdated: string;
}

const MOCK_SIMULATIONS: SimulationRow[] = [
  { id: "sim-001", simulationName: "ATS Cohort A Dose Sweep", disease: "NSCLC", outcome: "+18% ORR", description: "Dose escalation with biomarker-positive subgroup", lastUpdated: "2026-02-12" },
  { id: "sim-002", simulationName: "ATS Safety Window v2", disease: "AML", outcome: "DLT -9%", description: "Safety boundary optimization for cycle-1 toxicity", lastUpdated: "2026-02-13" },
  { id: "sim-003", simulationName: "Adaptive Interim Rule-3", disease: "Breast Cancer", outcome: "Power 82%", description: "Interim stopping rule tuning for futility", lastUpdated: "2026-02-13" },
  { id: "sim-004", simulationName: "Subgroup Response Alpha", disease: "RA", outcome: "+11% ACR50", description: "Responder enrichment by baseline CRP", lastUpdated: "2026-02-14" },
  { id: "sim-005", simulationName: "ATS Enrollment Stress", disease: "IBD", outcome: "Timeline -6w", description: "Enrollment volatility and site-mix simulation", lastUpdated: "2026-02-14" },
  { id: "sim-006", simulationName: "Twin Predict ARM-B", disease: "HCC", outcome: "HR 0.78", description: "Historical control blending for ARM-B", lastUpdated: "2026-02-15" },
  { id: "sim-007", simulationName: "Protocol Drift Guard", disease: "SLE", outcome: "Bias -14%", description: "Protocol deviation sensitivity analysis", lastUpdated: "2026-02-15" },
  { id: "sim-008", simulationName: "Dropout Robustness Set", disease: "COPD", outcome: "Power 79%", description: "MNAR dropout correction scenario", lastUpdated: "2026-02-16" },
  { id: "sim-009", simulationName: "Dose Frequency Beta", disease: "Psoriasis", outcome: "+9% PASI90", description: "Q2W vs Q4W exposure-response comparison", lastUpdated: "2026-02-16" },
  { id: "sim-010", simulationName: "ATS Site Quality Mix", disease: "Melanoma", outcome: "SDV -22%", description: "Site quality weighted randomization impact", lastUpdated: "2026-02-16" },
  { id: "sim-011", simulationName: "Event Accrual Predictor", disease: "mCRC", outcome: "Readout -5w", description: "Event accrual acceleration under adaptive design", lastUpdated: "2026-02-17" },
  { id: "sim-012", simulationName: "Synthetic Arm Gamma", disease: "Glioblastoma", outcome: "HR 0.83", description: "Synthetic control arm calibration by age strata", lastUpdated: "2026-02-17" },
  { id: "sim-013", simulationName: "Stage Shift Scenario", disease: "Pancreatic", outcome: "+7% PFS", description: "Stage migration effect on progression curves", lastUpdated: "2026-02-18" },
  { id: "sim-014", simulationName: "Adaptive Randomization R1", disease: "Ovarian", outcome: "+13% ORR", description: "Response-adaptive randomization trial run", lastUpdated: "2026-02-18" },
  { id: "sim-015", simulationName: "Bayesian Borrowing Delta", disease: "DLBCL", outcome: "Posterior 0.91", description: "Borrowing intensity tuning from external cohort", lastUpdated: "2026-02-19" },
  { id: "sim-016", simulationName: "Eligibility Relaxation Test", disease: "UC", outcome: "Enroll +21%", description: "Inclusion criterion relaxation what-if", lastUpdated: "2026-02-19" },
  { id: "sim-017", simulationName: "Biomarker Cutoff 0.35", disease: "TNBC", outcome: "AUC 0.84", description: "Predictive cutoff optimization for stratification", lastUpdated: "2026-02-20" },
  { id: "sim-018", simulationName: "Covariate Drift Monitor", disease: "Atopic Derm.", outcome: "Bias -8%", description: "Temporal covariate drift stress simulation", lastUpdated: "2026-02-20" },
  { id: "sim-019", simulationName: "Adaptive Futility Rule", disease: "Parkinson's", outcome: "Cost -12%", description: "Early futility stop with preserved power", lastUpdated: "2026-02-21" },
  { id: "sim-020", simulationName: "Endpoint Robustness E2", disease: "NASH", outcome: "CV 0.17", description: "Primary endpoint robustness under noise", lastUpdated: "2026-02-21" },
];

/**
 * Figma 스펙 기반 SimulationTable
 *
 * Frame 1618872480 (전체): 1396×659px VERTICAL gap=12px
 *
 * Header (Frame 1618872480 내부):
 *   1396×41px, bg #000000 r=24
 *   padding 좌우 24px, 상하 12px
 *   컬럼들: Inter 600 15px white
 *   컬럼 gap: 32.98px
 *   컬럼 너비: Simulation name 145.66px / Disease 164.9px / Outcome 140.16px / Description 283.08px / Last updated 160.78px
 *
 * Body (Frame 1618872478):
 *   1396×606px, bg white r=24
 *   빈 상태: "No saved simulations." Inter 600 19.5px #C6C5C9 가운데
 */
export default function SimulationTable({ serviceId, searchQuery }: SimulationTableProps) {
  const isATSorTSI = serviceId === "4" || serviceId === "5";
  const [rows, setRows] = useState<SimulationRow[]>(MOCK_SIMULATIONS);
  const [draggingRowId, setDraggingRowId] = useState<string | null>(null);
  const [dragOverRowId, setDragOverRowId] = useState<string | null>(null);

  const columns = isATSorTSI
    ? [
        { label: "",                flex: 54 },
        { label: "Simulation name", flex: 145 },
        { label: "Disease",         flex: 165 },
        { label: "Outcome",         flex: 140 },
        { label: "Description",     flex: 283 },
        { label: "Last updated",    flex: 161 },
        { label: "",                flex: 54 },
      ]
    : [
        { label: "",             flex: 54 },
        { label: "Patient ID",   flex: 145 },
        { label: "Disease",      flex: 165 },
        { label: "Outcome",      flex: 140 },
        { label: "Description",  flex: 283 },
        { label: "Last updated", flex: 161 },
        { label: "",             flex: 54 },
      ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        if (!normalizedQuery) {
          return true;
        }

        return (
          row.simulationName.toLowerCase().includes(normalizedQuery) ||
          row.disease.toLowerCase().includes(normalizedQuery) ||
          row.outcome.toLowerCase().includes(normalizedQuery) ||
          row.description.toLowerCase().includes(normalizedQuery) ||
          row.lastUpdated.toLowerCase().includes(normalizedQuery)
        );
      }),
    [rows, normalizedQuery],
  );

  const swapRows = (sourceId: string, targetId: string) => {
    if (sourceId === targetId) {
      return;
    }

    setRows((prev) => {
      const sourceIndex = prev.findIndex((row) => row.id === sourceId);
      const targetIndex = prev.findIndex((row) => row.id === targetId);

      if (sourceIndex === -1 || targetIndex === -1) {
        return prev;
      }

      const next = [...prev];
      [next[sourceIndex], next[targetIndex]] = [next[targetIndex], next[sourceIndex]];
      return next;
    });
  };

  const handleDragStart = (rowId: string, event: React.DragEvent<HTMLDivElement>) => {
    setDraggingRowId(rowId);
    setDragOverRowId(null);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", rowId);
  };

  const handleDragOver = (rowId: string, event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (draggingRowId && draggingRowId !== rowId) {
      setDragOverRowId(rowId);
    }
  };

  const handleDrop = (targetId: string, event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const sourceId = draggingRowId ?? event.dataTransfer.getData("text/plain");

    if (sourceId) {
      swapRows(sourceId, targetId);
    }

    setDraggingRowId(null);
    setDragOverRowId(null);
  };

  const handleDragEnd = () => {
    setDraggingRowId(null);
    setDragOverRowId(null);
  };

  const deleteRow = (id: string) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  return (
    <div
      className="flex flex-col w-full"
      style={{ gap: "12px", flex: 1, minHeight: 0 }}
    >
      {/* Table Header: Figma 1396×41px bg #000 r=24, padding 24px 좌우 12px 상하 */}
      <div
        className="flex items-center"
        style={{
          width: "100%",
          height: "41px",
          backgroundColor: "#000000",
          borderRadius: "24px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",
          paddingBottom: "12px",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* 컬럼들: Frame 1618872462 - gap 16px (reduced from 32.98px) */}
        <div
          className="flex items-center"
          style={{ gap: "16px", width: "100%" }}
        >
          {columns.map((col, idx) => (
            <span
              className="home-simulation-table-header-text"
              key={`col-${idx}`}
              style={{
                fontFamily: "Inter",
                fontSize: "13px", // Reduced from 15px (-2pt approx)
                fontWeight: 600,
                lineHeight: "17px",
                letterSpacing: "-0.3px",
                color: "#FFFFFF",
                flex: `${col.flex} 1 0px`, // Use flex ratios for responsiveness
                minWidth: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {col.label}
            </span>
          ))}
        </div>
      </div>

      {/* Table Body: Figma 1396×606px bg white r=24 */}
      <div
        className="w-full"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          minHeight: "394px",
          flex: 1,
          padding: "10px 8px",
          overflowY: "auto",
        }}
      >
        {filteredRows.length === 0 ? (
          <div className="flex h-full min-h-[360px] items-center justify-center">
            <span
              className="home-simulation-table-empty-text"
              style={{
                fontFamily: "Inter",
                fontSize: "19.5px",
                fontWeight: 600,
                lineHeight: "100%",
                letterSpacing: "-0.585px",
                color: "#C6C5C9",
              }}
            >
              {normalizedQuery ? "No matching simulations." : "No saved simulations."}
            </span>
          </div>
        ) : (
          <div className="flex flex-col" style={{ gap: "8px" }}>
            {filteredRows.map((row, index) => (
              <div
                key={row.id}
                className="flex items-center"
                draggable
                onDragStart={(event) => handleDragStart(row.id, event)}
                onDragOver={(event) => handleDragOver(row.id, event)}
                onDrop={(event) => handleDrop(row.id, event)}
                onDragEnd={handleDragEnd}
                style={{
                  background: "linear-gradient(180deg, rgba(250,250,250,0.95) 0%, rgba(245,245,245,0.92) 100%)",
                  border: "1px solid rgba(225,225,225,0.9)",
                  borderRadius: "16px",
                  minHeight: "52px",
                  padding: "8px 14px",
                  gap: "16px",
                  cursor: "grab",
                  opacity: draggingRowId === row.id ? 0.66 : 1,
                  boxShadow:
                    draggingRowId === row.id
                      ? "0 10px 24px rgba(17,17,17,0.16)"
                      : dragOverRowId === row.id
                        ? "0 0 0 2px rgba(35,31,82,0.2) inset"
                        : "none",
                  transform: draggingRowId === row.id ? "scale(1.01)" : "none",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease, opacity 0.2s ease",
                }}
              >
                <div className="flex items-center" style={{ flex: "54 1 0px", minWidth: 0 }}>
                  <div
                    aria-label={`Drag handle row ${index + 1}`}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "8px",
                      background: "linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%)",
                      border: "1px solid rgba(206,206,206,0.95)",
                      color: "#3D3D3D",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: draggingRowId === row.id ? "0 6px 14px rgba(0,0,0,0.18)" : "none",
                      userSelect: "none",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                <span style={{ flex: "145 1 0px", minWidth: 0, fontFamily: "Inter", fontSize: "13px", fontWeight: 600, color: "#202020", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {row.simulationName}
                </span>
                <span style={{ flex: "165 1 0px", minWidth: 0, fontFamily: "Inter", fontSize: "13px", fontWeight: 500, color: "#3F3F3F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {row.disease}
                </span>
                <span style={{ flex: "140 1 0px", minWidth: 0, fontFamily: "Inter", fontSize: "13px", fontWeight: 600, color: "#2E3F68", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {row.outcome}
                </span>
                <span style={{ flex: "283 1 0px", minWidth: 0, fontFamily: "Inter", fontSize: "12px", fontWeight: 500, color: "#5B5B5B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {row.description}
                </span>
                <span style={{ flex: "161 1 0px", minWidth: 0, fontFamily: "Inter", fontSize: "12px", fontWeight: 500, color: "#6B6B6B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {row.lastUpdated}
                </span>

                <div className="flex justify-end" style={{ flex: "54 1 0px", minWidth: 0 }}>
                  <button
                    type="button"
                    onClick={() => deleteRow(row.id)}
                    aria-label="Delete row"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "none",
                      borderRadius: "8px",
                      background: "rgba(0,0,0,0.04)",
                      color: "#707070",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        /* [TEMP_SCALE_MODE_DISABLE] 차후 반응형 작업 시 복구
        @media (max-width: 1800px) {
          .home-simulation-table-header-text {
            font-size: 10px !important;
          }

          .home-simulation-table-empty-text {
            font-size: 16.5px !important;
          }
        }
        */
      `}</style>
    </div>
  );
}
