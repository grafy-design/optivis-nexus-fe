"use client";

import React, { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ATSHeader } from "./ATSHeader";
import { TSIHeader } from "./TSIHeader";
import { MainContainer } from "./MainContainer";
// --- [TEMP_SCALE_START] proportional scaling import ---
import { useAreaScale } from "@/hooks/useAreaScale";
// --- [TEMP_SCALE_END] ---
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface AppLayoutProps {
  children: React.ReactNode;
  headerType?: "default" | "ats" | "tsi";
  scaleMode?: "width" | "height";
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  headerType = "default",
  scaleMode = "width",
}) => {
  // --- [TEMP_SCALE_START] proportional scaling ---
  const { scale } = useAreaScale(scaleMode);
  const isScaled = scale < 1;

  // Prevent body scrollbars when zoom compensation makes root wider/taller
  useEffect(() => {
    if (isScaled) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isScaled]);
  // --- [TEMP_SCALE_END] ---

  return (
    /*
     * Figma 전체 프레임: 2560×1314px
     * bg: rgb(231,229,231) = #E7E5E7
     * Sidebar: 96px 고정
     * 나머지: sidebar 이후 영역
     */
    <div
      style={{
        // --- [TEMP_SCALE_START] zoom on root for uniform proportional scaling ---
        ...(isScaled
          ? {
              zoom: scale,
              width: `${100 / scale}vw`,
              height: `${100 / scale}vh`,
            }
          : {
              width: "100%",
              height: "100vh",
            }),
        // --- [TEMP_SCALE_END] ---
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#E7E5E7",
      }}
    >
      {/* --- [TEMP_SCALE_START] Sidebar wrapper: transform creates containing block
        * so the sidebar's position:fixed becomes relative to this wrapper,
        * keeping it inside the zoom context. To roll back: remove this wrapper,
        * put <Sidebar /> directly here. --- */}
      <div
        style={{
          width: 96,
          height: "100%",
          flexShrink: 0,
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(0)",
          zIndex: 100,
        }}
      >
        <Sidebar />
      </div>
      {/* --- [TEMP_SCALE_END] --- */}

      {/* 사이드바 96px 제외한 영역 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "calc(100% - 96px)",
          marginLeft: "96px",
          overflow: "hidden",
        }}
      >
        {headerType === "ats" ? (
          <ATSHeader />
        ) : headerType === "tsi" ? (
          <TSIHeader />
        ) : (
          <Header />
        )}
        {/* 컨텐츠 영역: 헤더 아래 나머지 100% 채움 */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            minWidth: 0,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MainContainer>{children}</MainContainer>
        </div>
      </div>
    </div>
  );
};
