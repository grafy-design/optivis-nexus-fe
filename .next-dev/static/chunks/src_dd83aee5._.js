(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/simulationStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSimulationStore",
    ()=>useSimulationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const initialState = {
    activeTab: "compare",
    isApplied: false,
    sampleSizeControl: 0.8,
    disease: "Alzheimer's disease",
    primaryEndpoints: [
        {
            name: "ADAS Cog 11",
            effectSize: 3
        }
    ],
    secondaryEndpoints: [],
    primaryEndpoint: "ADAS Cog 11",
    primaryEffectSize: 3,
    secondaryEndpoint: "",
    secondaryEffectSize: 3,
    nominalPower: 0.8,
    alpha: 0.05,
    multiplicity: "Bonferroni",
    treatmentDuration: "12 months",
    hypothesisType: "Superiority",
    treatmentArms: "1",
    randomizationRatio: "1:1",
    subpopulation: "ALL",
    activeData: "Oprimed data",
    apiData: null,
    taskId: null,
    isLoading: false,
    error: null
};
const useSimulationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        ...initialState,
        setActiveTab: (tab)=>set({
                activeTab: tab
            }),
        setIsApplied: (applied)=>set({
                isApplied: applied
            }),
        setSampleSizeControl: (value)=>set({
                sampleSizeControl: value
            }),
        setDisease: (disease)=>set({
                disease
            }),
        setPrimaryEndpoints: (arg)=>set((state)=>{
                var _next_, _next_1;
                const next = typeof arg === "function" ? arg(state.primaryEndpoints) : arg;
                var _next__name, _next__effectSize;
                return {
                    primaryEndpoints: next,
                    primaryEndpoint: (_next__name = (_next_ = next[0]) === null || _next_ === void 0 ? void 0 : _next_.name) !== null && _next__name !== void 0 ? _next__name : state.primaryEndpoint,
                    primaryEffectSize: (_next__effectSize = (_next_1 = next[0]) === null || _next_1 === void 0 ? void 0 : _next_1.effectSize) !== null && _next__effectSize !== void 0 ? _next__effectSize : state.primaryEffectSize
                };
            }),
        setSecondaryEndpoints: (arg)=>set((state)=>{
                var _next_, _next_1;
                const next = typeof arg === "function" ? arg(state.secondaryEndpoints) : arg;
                var _next__name, _next__effectSize;
                return {
                    secondaryEndpoints: next,
                    secondaryEndpoint: (_next__name = (_next_ = next[0]) === null || _next_ === void 0 ? void 0 : _next_.name) !== null && _next__name !== void 0 ? _next__name : state.secondaryEndpoint,
                    secondaryEffectSize: (_next__effectSize = (_next_1 = next[0]) === null || _next_1 === void 0 ? void 0 : _next_1.effectSize) !== null && _next__effectSize !== void 0 ? _next__effectSize : state.secondaryEffectSize
                };
            }),
        setPrimaryEndpoint: (endpoint)=>set({
                primaryEndpoint: endpoint
            }),
        setPrimaryEffectSize: (size)=>set({
                primaryEffectSize: size
            }),
        setSecondaryEndpoint: (endpoint)=>set({
                secondaryEndpoint: endpoint
            }),
        setSecondaryEffectSize: (size)=>set({
                secondaryEffectSize: size
            }),
        setNominalPower: (power)=>set({
                nominalPower: power
            }),
        setAlpha: (alpha)=>set({
                alpha
            }),
        setMultiplicity: (multiplicity)=>set({
                multiplicity
            }),
        setTreatmentDuration: (duration)=>set({
                treatmentDuration: duration
            }),
        setHypothesisType: (type)=>set({
                hypothesisType: type
            }),
        setTreatmentArms: (arms)=>set({
                treatmentArms: arms
            }),
        setRandomizationRatio: (ratio)=>set({
                randomizationRatio: ratio
            }),
        setSubpopulation: (subpopulation)=>set({
                subpopulation
            }),
        setActiveData: (data)=>set({
                activeData: data
            }),
        setApiData: (data)=>set({
                apiData: data
            }),
        setTaskId: (taskId)=>set({
                taskId
            }),
        setIsLoading: (loading)=>set({
                isLoading: loading
            }),
        setError: (error)=>set({
                error
            }),
        reset: ()=>set(initialState)
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function SidebarFrameButton(param) {
    let { imageSrc, imageWidth, imageHeight, alt, href } = param;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            position: "relative",
            display: "block",
            width: 48,
            height: 48,
            overflow: "visible"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imageSrc,
            alt: alt,
            width: imageWidth,
            height: imageHeight,
            style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "".concat(imageWidth, "px"),
                height: "".concat(imageHeight, "px"),
                maxWidth: "none",
                maxHeight: "none",
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Sidebar.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            style: {
                width: 48,
                height: 48,
                display: "inline-flex",
                textDecoration: "none"
            },
            "aria-label": alt,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Sidebar.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": alt,
        style: {
            width: 48,
            height: 48,
            display: "inline-flex",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer"
        },
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = SidebarFrameButton;
function LogoBtn() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarFrameButton, {
        href: "/",
        imageSrc: "/assets/figma/home/sidebar-logo-button.png",
        imageWidth: 52,
        imageHeight: 52,
        alt: "OPTIVIS"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c1 = LogoBtn;
const Sidebar = ()=>{
    return(/*
     * Figma: Sidebar 96×1314px
     * position fixed, left=0, top=0
     * padding: 24px 사방
     * gap between groups: 148px (flex spacer로 처리)
     * 배경: 없음 (body bg 노출)
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: 96,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            gap: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoBtn, {}, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarFrameButton, {
                        imageSrc: "/assets/figma/home/sidebar-folder-button.png",
                        imageWidth: 68,
                        imageHeight: 68,
                        alt: "Folder"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarFrameButton, {
                        imageSrc: "/assets/figma/home/sidebar-search-button.png",
                        imageWidth: 68,
                        imageHeight: 68,
                        alt: "Search"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarFrameButton, {
                        imageSrc: "/assets/figma/home/sidebar-plus-button.png",
                        imageWidth: 68,
                        imageHeight: 68,
                        alt: "Add"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarFrameButton, {
                        imageSrc: "/assets/figma/home/sidebar-settings-button.png",
                        imageWidth: 52,
                        imageHeight: 52,
                        alt: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarFrameButton, {
                        imageSrc: "/assets/figma/home/sidebar-avatar-button.png",
                        imageWidth: 68,
                        imageHeight: 68.5,
                        alt: "Avatar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_c2 = Sidebar;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SidebarFrameButton");
__turbopack_context__.k.register(_c1, "LogoBtn");
__turbopack_context__.k.register(_c2, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
/**
 * Liquid Glass 버튼 — CSS only (border-image 제거, 순수 CSS로 유리 효과 구현)
 * Figma: 154px(Data template) / 140px(Data setting) × 42px, r=32
 * 텍스트: Inter 400 14.875px #0D063C
 */ function LiquidGlassBtn(param) {
    let { children, iconSrc, onClick, width, variant } = param;
    const className = variant === "template" ? "figma-nine-slice figma-header-btn-template" : "figma-nine-slice figma-header-btn-setting";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: className,
        style: {
            display: "inline-flex",
            alignItems: "center",
            /* 수직 가운데 정렬 */ justifyContent: "center",
            /* 수평 가운데 정렬 */ gap: "5px",
            /* 아이콘과 글자 사이의 간격 */ width: "".concat(width, "px"),
            height: "60px",
            paddingLeft: "20px",
            /* 내부 왼쪽 여백 */ paddingRight: "20px",
            /* 내부 오른쪽 여백 */ borderRadius: "32px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            flexShrink: 0,
            transition: "opacity 0.15s ease"
        },
        onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.85",
        onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
        onMouseDown: (e)=>e.currentTarget.style.opacity = "0.70",
        onMouseUp: (e)=>e.currentTarget.style.opacity = "1",
        children: [
            iconSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    position: "relative",
                    /* 아이콘 위치 미세 조정을 위해 상대 위치 설정 */ top: "-2px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: iconSrc,
                    alt: "",
                    width: 40,
                    height: 40,
                    style: {
                        width: variant === "template" ? "24px" : "22px",
                        height: variant === "template" ? "24px" : "22px",
                        objectFit: "contain"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22px",
                    letterSpacing: "-0.535px",
                    color: "#0D063C",
                    whiteSpace: "nowrap",
                    position: "relative",
                    /* 위치 미세 조정을 위해 상대 위치 설정 */ top: "-2px"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = LiquidGlassBtn;
/** 물음표 버튼: Figma 42×42px, Liquid Glass (frame에 ? 포함) */ function HelpBtn() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "figma-nine-slice figma-header-btn-help",
        "aria-label": "Help",
        style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "18px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            flexShrink: 0,
            transition: "opacity 0.15s ease"
        },
        onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.85",
        onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
        onMouseDown: (e)=>e.currentTarget.style.opacity = "0.70",
        onMouseUp: (e)=>e.currentTarget.style.opacity = "1"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c1 = HelpBtn;
const Header = ()=>{
    return(/*
     * Figma: Header 90px, bg #E7E5E7
     * padding: 좌우 28px (메인 카드와 정렬)
     * 로고: Poppins 600 32px
     * 버튼 그룹: gap 14px
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 90,
            width: "100%",
            height: "90px",
            backgroundColor: "#E7E5E7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "28px",
            paddingRight: "28px",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: "42px",
                    fontWeight: 700,
                    lineHeight: "1",
                    letterSpacing: "-1.2px",
                    color: "#000000",
                    margin: 0,
                    flexShrink: 0
                },
                children: "OPTIVIS Nexus"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlassBtn, {
                        width: 170,
                        variant: "template",
                        iconSrc: "/assets/figma/home/header-download-icon.png",
                        children: "Data template"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlassBtn, {
                        width: 170,
                        variant: "setting",
                        iconSrc: "/assets/figma/home/header-setting-icon.png",
                        children: "Data setting"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpBtn, {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_c2 = Header;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LiquidGlassBtn");
__turbopack_context__.k.register(_c1, "HelpBtn");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/icon-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IconButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
function IconButton(param) {
    let { icon, alt, size = "md", variant = "rounded", isActive = false, className, ...props } = param;
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-14 h-14"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 active:opacity-70", sizeClasses[size], className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: icon,
            alt: alt,
            className: "w-full h-full object-contain pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icon-button.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icon-button.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = IconButton;
var _c;
__turbopack_context__.k.register(_c, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ATSHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATSHeader",
    ()=>ATSHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icon$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icon-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/simulationStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ATSHeader = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isApplied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "ATSHeader.useSimulationStore[isApplied]": (state)=>state.isApplied
    }["ATSHeader.useSimulationStore[isApplied]"]);
    const simulationBasePath = "/ats/simulation";
    const reportPath = "".concat(simulationBasePath, "/report");
    const isReportPage = pathname === reportPath;
    const handleMakeReport = ()=>{
        if (isApplied) {
            router.push(reportPath);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[90] mt-0 pt-0 mb-0 w-full bg-[#e7e5e7]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[76px] px-10 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-9",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push(simulationBasePath),
                            className: "flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "16",
                                            height: "16",
                                            rx: "8",
                                            fill: "#2D1067"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7.95898 12.5V5.5332H7.85352L5.75 7.01562V5.59766L7.95898 4.04492H9.46484V12.5H7.95898Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-body2 text-[#2d1067]",
                                    children: "Study Design Optimization"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "16",
                                    height: "16",
                                    rx: "8",
                                    fill: "#939090"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.8916 7.82715C10.8916 7.91504 10.874 7.99854 10.8389 8.07764C10.8066 8.15381 10.7539 8.22705 10.6807 8.29736L7.30127 11.6064C7.18701 11.7178 7.04785 11.7734 6.88379 11.7734C6.77832 11.7734 6.68018 11.7471 6.58936 11.6943C6.49854 11.6416 6.42529 11.5713 6.36963 11.4834C6.31689 11.3955 6.29053 11.2959 6.29053 11.1846C6.29053 11.0234 6.35205 10.8799 6.4751 10.7539L9.48535 7.82715L6.4751 4.90039C6.35205 4.77734 6.29053 4.63379 6.29053 4.46973C6.29053 4.36133 6.31689 4.26318 6.36963 4.17529C6.42529 4.08447 6.49854 4.0127 6.58936 3.95996C6.68018 3.90723 6.77832 3.88086 6.88379 3.88086C7.04785 3.88086 7.18701 3.93652 7.30127 4.04785L10.6807 7.35693C10.751 7.42725 10.8037 7.50049 10.8389 7.57666C10.874 7.65283 10.8916 7.73633 10.8916 7.82715Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (isApplied) {
                                    router.push(reportPath);
                                }
                            },
                            disabled: !isApplied,
                            className: "flex items-center gap-2 transition-opacity ".concat(isApplied ? "hover:opacity-70 cursor-pointer" : "cursor-not-allowed"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "16",
                                            height: "16",
                                            rx: "8",
                                            fill: isReportPage ? "#2D1067" : "#939090"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5.11719 12.5V11.4805L7.88867 8.64453C8.27148 8.25781 8.56836 7.93945 8.7793 7.68945C8.99414 7.43555 9.14453 7.21289 9.23047 7.02148C9.31641 6.82617 9.35938 6.62109 9.35938 6.40625V6.38867C9.35938 6.13086 9.30273 5.90039 9.18945 5.69727C9.07617 5.49414 8.91406 5.33594 8.70312 5.22266C8.49219 5.10547 8.24023 5.04688 7.94727 5.04688C7.65039 5.04688 7.38867 5.10938 7.16211 5.23438C6.93555 5.35547 6.75977 5.52539 6.63477 5.74414C6.50977 5.96289 6.44727 6.21875 6.44727 6.51172L6.44141 6.53516L5.03516 6.5293L5.0293 6.51172C5.0293 5.98438 5.15625 5.51953 5.41016 5.11719C5.66406 4.71484 6.01562 4.40039 6.46484 4.17383C6.91406 3.94727 7.43359 3.83398 8.02344 3.83398C8.57031 3.83398 9.05664 3.9375 9.48242 4.14453C9.91211 4.35156 10.248 4.63672 10.4902 5C10.7324 5.36328 10.8535 5.7832 10.8535 6.25977V6.27734C10.8535 6.59375 10.793 6.9043 10.6719 7.20898C10.5508 7.50977 10.3438 7.83984 10.0508 8.19922C9.76172 8.55859 9.36133 8.98633 8.84961 9.48242L6.75781 11.5156L7.15625 10.8477V11.5156L6.75781 11.252H10.9824V12.5H5.11719Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-body2 ".concat(isReportPage ? "text-[#2d1067]" : "text-[#797676]"),
                                    children: "Report"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        isReportPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.dispatchEvent(new Event("save-report-pdf")),
                            className: "h-12 px-5 bg-[#aaaaad] text-white rounded-[100px] text-body3 hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/header/download.svg",
                                    alt: "",
                                    width: 22,
                                    height: 22,
                                    className: "object-contain brightness-0 invert"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Save as PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isReportPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleMakeReport,
                            disabled: !isApplied,
                            className: "px-5 py-2.5 rounded-[100px] text-body3 transition-opacity flex items-center gap-2 ".concat(isApplied ? "bg-[#262255] text-white hover:opacity-90 cursor-pointer" : "bg-[#262255] text-white cursor-not-allowed"),
                            children: [
                                "Make Report",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/simulation/FilePdf.png",
                                    alt: "PDF",
                                    width: 24,
                                    height: 24,
                                    className: "flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isReportPage) {
                                            router.push(simulationBasePath);
                                        } else {
                                            router.push("/");
                                        }
                                    },
                                    className: "w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/simulation/back.png",
                                        alt: "Back",
                                        width: 48,
                                        height: 48,
                                        className: "flex-shrink-0 w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (isApplied) {
                                            router.push(reportPath);
                                        }
                                    },
                                    disabled: !isApplied,
                                    className: "w-12 h-12 flex items-center justify-center transition-opacity rounded-full overflow-hidden ".concat(isApplied ? "hover:opacity-70 cursor-pointer" : "cursor-not-allowed"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/simulation/front.png",
                                        alt: "Forward",
                                        width: 48,
                                        height: 48,
                                        className: "flex-shrink-0 w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icon$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "/assets/header/help.png",
                            alt: "Help"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ATSHeader.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ATSHeader.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/ATSHeader.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ATSHeader.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ATSHeader, "TmBUo+PofbGtYBpBcBp1gHjNPAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"]
    ];
});
_c = ATSHeader;
var _c;
__turbopack_context__.k.register(_c, "ATSHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/TSIHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TSIHeader",
    ()=>TSIHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icon$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icon-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/** TSI 브레드크럼 스텝 (기존 ATS 헤더와 동일한 원형·화살표 스타일, 숫자 1~6) */ const TSI_BREADCRUMB_STEPS = [
    {
        key: "default-settings",
        label: "Default Settings",
        path: "/tsi"
    },
    {
        key: "patients-summary",
        label: "Patients Summary",
        path: "/tsi/patients-summary"
    },
    {
        key: "basis-selection",
        label: "Basis selection",
        path: "/tsi/basis-selection"
    },
    {
        key: "subgroup-selection",
        label: "Subgroup selection",
        path: "/tsi/subgroup-selection"
    },
    {
        key: "subgroup-explain",
        label: "Subgroup Explain",
        path: "/tsi/subgroup-explain"
    },
    {
        key: "report",
        label: "Report",
        path: "/tsi/report"
    }
];
/** pathname → 활성 스텝 인덱스 (Default Settings = /tsi, /tsi/filter 둘 다 step 0) */ function getTSIActiveStepIndex(pathname) {
    if (pathname === "/tsi/report") return 5;
    if (pathname === "/tsi/subgroup-explain") return 4;
    if (pathname === "/tsi/subgroup-selection" || pathname === "/tsi/refine-cutoffs") return 3;
    if (pathname === "/tsi/basis-selection") return 2;
    if (pathname === "/tsi/patients-summary") return 1;
    if (pathname === "/tsi" || pathname === "/tsi/filter") return 0;
    return 0;
}
/** TSI 현재 경로의 이전 단계 path (뒤로가기용) */ function getTSIPreviousStepPath(pathname) {
    // refine-cutoffs는 subgroup-selection으로 돌아가야 함
    if (pathname === "/tsi/refine-cutoffs") {
        return "/tsi/subgroup-selection";
    }
    const index = getTSIActiveStepIndex(pathname);
    if (index <= 0) return null; // 첫 단계면 이전 없음 → 메인으로
    return TSI_BREADCRUMB_STEPS[index - 1].path;
}
const TSIHeader = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const activeStepIndex = getTSIActiveStepIndex(pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[90] mt-0 pt-0 mb-0 w-full bg-[#e7e5e7]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[76px] px-10 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-9",
                    children: TSI_BREADCRUMB_STEPS.map((step, index)=>{
                        const isActive = activeStepIndex === index;
                        const circleFill = isActive ? "#2D1067" : "#939090";
                        const textColor = isActive ? "text-[#2d1067]" : "text-[#797676]";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "16",
                                            height: "16",
                                            rx: "8",
                                            fill: "#939090"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.8916 7.82715C10.8916 7.91504 10.874 7.99854 10.8389 8.07764C10.8066 8.15381 10.7539 8.22705 10.6807 8.29736L7.30127 11.6064C7.18701 11.7178 7.04785 11.7734 6.88379 11.7734C6.77832 11.7734 6.68018 11.7471 6.58936 11.6943C6.49854 11.6416 6.42529 11.5713 6.36963 11.4834C6.31689 11.3955 6.29053 11.2959 6.29053 11.1846C6.29053 11.0234 6.35205 10.8799 6.4751 10.7539L9.48535 7.82715L6.4751 4.90039C6.35205 4.77734 6.29053 4.63379 6.29053 4.46973C6.29053 4.36133 6.31689 4.26318 6.36963 4.17529C6.42529 4.08447 6.49854 4.0127 6.58936 3.95996C6.68018 3.90723 6.77832 3.88086 6.88379 3.88086C7.04785 3.88086 7.18701 3.93652 7.30127 4.04785L10.6807 7.35693C10.751 7.42725 10.8037 7.50049 10.8389 7.57666C10.874 7.65283 10.8916 7.73633 10.8916 7.82715Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(step.path),
                                    className: "flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer ".concat(textColor),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "16",
                                                    height: "16",
                                                    rx: "8",
                                                    fill: circleFill
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "7.75",
                                                    y: "9",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "middle",
                                                    fill: "white",
                                                    style: {
                                                        fontSize: "12px",
                                                        fontWeight: 590,
                                                        letterSpacing: "-0.36px",
                                                        fontFamily: "Inter, sans-serif"
                                                    },
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-body2 whitespace-nowrap",
                                            children: step.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, step.key, true, {
                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/TSIHeader.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const prevPath = getTSIPreviousStepPath(pathname);
                                if (prevPath) {
                                    router.push(prevPath);
                                } else {
                                    router.push("/");
                                }
                            },
                            className: "w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/simulation/back.png",
                                alt: "Back",
                                width: 48,
                                height: 48,
                                className: "flex-shrink-0 w-full h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/TSIHeader.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icon$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "/assets/header/help.png",
                            alt: "Help"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/TSIHeader.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/TSIHeader.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/TSIHeader.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/TSIHeader.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TSIHeader, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TSIHeader;
var _c;
__turbopack_context__.k.register(_c, "TSIHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/MainContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContainer",
    ()=>MainContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const MainContainer = (param)=>{
    let { children } = param;
    return(/*
     * Figma: 콘텐츠 영역
     * x=110 (sidebar 96 + 14px), y=90 (header)
     * padding: 좌우 14px (sidebar가 96px 이미 처리)
     * 높이: 화면 전체 채움 (overflow auto로 스크롤)
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            width: "100%",
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingTop: "5px",
            paddingBottom: "5px",
            boxSizing: "border-box",
            overflow: "hidden"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/MainContainer.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_c = MainContainer;
var _c;
__turbopack_context__.k.register(_c, "MainContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAreaScale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAreaScale",
    ()=>useAreaScale
]);
// --- [TEMP_SCALE_START] Proportional scaling hook ---
// Temporary proportional scaling module.
// Calculates a uniform zoom factor: viewport width / design reference width.
// Zooms the ENTIRE layout (sidebar + header + content) uniformly.
//
// How to roll back:
//   1. Delete this file entirely.
//   2. Remove imports / usage in AppLayout.tsx (search for [TEMP_SCALE_START]).
//   3. Uncomment the @media breakpoints marked with [TEMP_SCALE_MODE_DISABLE].
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
/** Figma design reference: total viewport width */ const DESIGN_VIEWPORT_WIDTH = 2560;
const DESIGN_VIEWPORT_HEIGHT = 1314;
/** Minimum scale factor — prevents content from becoming unreadably small */ const MIN_SCALE = 0.55;
function useAreaScale() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "width";
    _s();
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAreaScale.useEffect": ()=>{
            let rafId;
            const compute = {
                "useAreaScale.useEffect.compute": ()=>{
                    cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame({
                        "useAreaScale.useEffect.compute": ()=>{
                            const vw = window.innerWidth;
                            const vh = window.innerHeight;
                            const raw = mode === "height" ? vh / DESIGN_VIEWPORT_HEIGHT : vw / DESIGN_VIEWPORT_WIDTH;
                            setScale(Math.max(MIN_SCALE, Math.min(1, raw)));
                        }
                    }["useAreaScale.useEffect.compute"]);
                }
            }["useAreaScale.useEffect.compute"];
            compute();
            window.addEventListener("resize", compute);
            return ({
                "useAreaScale.useEffect": ()=>{
                    window.removeEventListener("resize", compute);
                    cancelAnimationFrame(rafId);
                }
            })["useAreaScale.useEffect"];
        }
    }["useAreaScale.useEffect"], [
        mode
    ]);
    return {
        scale
    };
} // --- [TEMP_SCALE_END] ---
_s(useAreaScale, "KDB8pVNB/ljEOP4LSE5RBlu9Ou0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ATSHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ATSHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TSIHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/TSIHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MainContainer.tsx [app-client] (ecmascript)");
// --- [TEMP_SCALE_START] proportional scaling import ---
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAreaScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAreaScale.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const AppLayout = (param)=>{
    let { children, headerType = "default", scaleMode = "width" } = param;
    _s();
    // --- [TEMP_SCALE_START] proportional scaling ---
    const { scale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAreaScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAreaScale"])(scaleMode);
    const isScaled = scale < 1;
    // Prevent body scrollbars when zoom compensation makes root wider/taller
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLayout.useEffect": ()=>{
            if (isScaled) {
                document.body.style.overflow = "hidden";
            }
            return ({
                "AppLayout.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["AppLayout.useEffect"];
        }
    }["AppLayout.useEffect"], [
        isScaled
    ]);
    // --- [TEMP_SCALE_END] ---
    return(/*
     * Figma 전체 프레임: 2560×1314px
     * bg: rgb(231,229,231) = #E7E5E7
     * Sidebar: 96px 고정
     * 나머지: sidebar 이후 영역
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            // --- [TEMP_SCALE_START] zoom on root for uniform proportional scaling ---
            ...isScaled ? {
                zoom: scale,
                width: "".concat(100 / scale, "vw"),
                height: "".concat(100 / scale, "vh")
            } : {
                width: "100%",
                height: "100vh"
            },
            // --- [TEMP_SCALE_END] ---
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#E7E5E7"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 96,
                    height: "100%",
                    flexShrink: 0,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transform: "translate(0)",
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "calc(100% - 96px)",
                    marginLeft: "96px",
                    overflow: "hidden"
                },
                children: [
                    headerType === "ats" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ATSHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATSHeader"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : headerType === "tsi" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TSIHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TSIHeader"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflow: "hidden",
                            minWidth: 0,
                            minHeight: 0,
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContainer"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AppLayout.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppLayout.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(AppLayout, "8pN/M819Q0cvyhWvC+3gcETGQsc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAreaScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAreaScale"]
    ];
});
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/arrow-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ArrowIcon(param) {
    let { className = "", direction = "down", color = "#231F52" } = param;
    _s();
    const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId().replace(/:/g, '_');
    const clipPathId = "clip0_arrow_".concat(uniqueId);
    if (direction === "up") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "19",
            height: "20",
            viewBox: "0 0 19 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#".concat(clipPathId, ")"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.5 19.6758L9.5 -0.0996094",
                            stroke: color,
                            strokeWidth: "2",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/arrow-icon.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M17.1875 9.18945L9.50206 1.09961L1.81656 9.18945",
                            stroke: color,
                            strokeWidth: "2",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/arrow-icon.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/arrow-icon.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: clipPathId,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "20",
                            height: "19",
                            fill: "white",
                            transform: "translate(0 20) rotate(-90)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/arrow-icon.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/arrow-icon.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/arrow-icon.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/arrow-icon.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "20",
        viewBox: "0 0 19 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#".concat(clipPathId, ")"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.5 -1.09961L9.5 18.6758",
                        stroke: color,
                        strokeWidth: "2",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/arrow-icon.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1.8125 10.5858L9.49794 18.6758L17.1834 10.5858",
                        stroke: color,
                        strokeWidth: "2",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/arrow-icon.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/arrow-icon.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: clipPathId,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "20",
                        height: "19",
                        fill: "white",
                        transform: "translate(0 20) rotate(-90)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/arrow-icon.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/arrow-icon.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/arrow-icon.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/arrow-icon.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ArrowIcon, "xfMyHNFebGjSN1/YPqrD8z5EdLc=");
_c = ArrowIcon;
var _c;
__turbopack_context__.k.register(_c, "ArrowIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
// ECharts 트리쉐이킹 + 동적 로딩: 필요한 모듈만 로드
const ReactECharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = async ()=>{
    const [echarts, charts, components, renderers, coreMod] = await Promise.all([
        __turbopack_context__.A("[project]/node_modules/echarts/core.js [app-client] (ecmascript, next/dynamic entry, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts/charts.js [app-client] (ecmascript, next/dynamic entry, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts/components.js [app-client] (ecmascript, next/dynamic entry, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts/renderers.js [app-client] (ecmascript, next/dynamic entry, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts-for-react/lib/core.js [app-client] (ecmascript, next/dynamic entry, async loader)")
    ]);
    // 필요한 모듈만 등록
    echarts.use([
        charts.LineChart,
        charts.BarChart,
        charts.BoxplotChart,
        charts.CustomChart,
        charts.ScatterChart,
        components.GridComponent,
        components.TooltipComponent,
        components.MarkPointComponent,
        components.MarkLineComponent,
        components.MarkAreaComponent,
        components.LegendComponent,
        components.DataZoomComponent,
        components.TitleComponent,
        components.GraphicComponent,
        renderers.CanvasRenderer
    ]);
    const Component = coreMod.default;
    const WrappedComponent = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            ...props,
            echarts: echarts
        }, void 0, false, {
            fileName: "[project]/src/components/charts/DynamicECharts.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    WrappedComponent.displayName = "ReactECharts";
    return WrappedComponent;
}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/echarts-for-react/lib/core.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%",
                minHeight: 100
            }
        }, void 0, false, {
            fileName: "[project]/src/components/charts/DynamicECharts.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = ReactECharts;
// 페이지 진입 시 프리로드 (필요한 모듈만)
if ("TURBOPACK compile-time truthy", 1) {
    Promise.all([
        __turbopack_context__.A("[project]/node_modules/echarts/core.js [app-client] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts/charts.js [app-client] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts/components.js [app-client] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts/renderers.js [app-client] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/node_modules/echarts-for-react/lib/core.js [app-client] (ecmascript, async loader)")
    ]);
}
const __TURBOPACK__default__export__ = ReactECharts;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactECharts$dynamic");
__turbopack_context__.k.register(_c1, "ReactECharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/SingleBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SingleBarChart",
    ()=>SingleBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
"use client";
;
;
function SingleBarChart(param) {
    let { value, maxValue, color, height = "100%", formatter = (val)=>String(val) } = param;
    const commonOption = {
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            containLabel: false
        },
        xAxis: {
            show: false,
            type: 'category',
            data: [
                ''
            ]
        },
        yAxis: {
            show: false,
            type: 'value',
            min: 0,
            max: maxValue * 1.2,
            boundaryGap: false
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        option: {
            ...commonOption,
            series: [
                {
                    type: 'bar',
                    data: [
                        value
                    ],
                    itemStyle: {
                        color,
                        borderRadius: [
                            8,
                            8,
                            0,
                            0
                        ]
                    },
                    barWidth: '100%',
                    label: {
                        show: true,
                        position: 'insideTop',
                        formatter: formatter(value),
                        color: '#ffffff',
                        fontSize: 19.5,
                        fontWeight: 590,
                        letterSpacing: -0.585
                    }
                }
            ]
        },
        style: {
            height,
            width: '100%'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/charts/SingleBarChart.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = SingleBarChart;
var _c;
__turbopack_context__.k.register(_c, "SingleBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
// 내장 아이콘 컴포넌트
const PlayIcon = (param)=>{
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "13",
        viewBox: "0 0 11 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        style: {
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 11.2324V1.06641C0 0.700195 0.090332 0.431641 0.270996 0.260742C0.45166 0.0849609 0.666504 -0.00292969 0.915527 -0.00292969C1.13525 -0.00292969 1.35986 0.0605469 1.58936 0.1875L10.1221 5.17529C10.4248 5.35107 10.6348 5.50977 10.752 5.65137C10.874 5.78809 10.9351 5.9541 10.9351 6.14941C10.9351 6.33984 10.874 6.50586 10.752 6.64746C10.6348 6.78906 10.4248 6.94775 10.1221 7.12354L1.58936 12.1113C1.35986 12.2383 1.13525 12.3018 0.915527 12.3018C0.666504 12.3018 0.45166 12.2139 0.270996 12.0381C0.090332 11.8623 0 11.5938 0 11.2324Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PlayIcon;
const PlusIcon = (param)=>{
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        style: {
            width: "16px",
            height: "16px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 3V13M3 8H13",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = PlusIcon;
function Button(param) {
    let { variant = "primary", size = "md", icon, iconPosition = "right", disabled = false, children, className, ...props } = param;
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-[#262255] text-white hover:bg-[#1a1a3e]",
        ghost: "bg-transparent hover:bg-gray-100",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
        glass: "bg-[rgba(36,36,36,0.3)] backdrop-blur-[10px] text-[black] hover:bg-[rgba(36,36,36,0.4)]",
        orange: "bg-[#f16600] text-white hover:bg-[#d85a00] disabled:opacity-50 disabled:hover:bg-[#f16600]"
    };
    const sizes = {
        sm: "h-8 px-3 text-body5 rounded-lg",
        md: "h-[42px] px-5 text-body3 rounded-[21px] [&_*]:text-inherit",
        lg: "h-14 px-6 text-body4 rounded-xl"
    };
    // 아이콘 렌더링
    const renderIcon = ()=>{
        if (!icon) return null;
        // 내장 아이콘 타입
        if (icon === "play") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {
                className: "flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 87,
                columnNumber: 14
            }, this);
        }
        if (icon === "plus") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                className: "flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 90,
                columnNumber: 14
            }, this);
        }
        // 이미지 경로인 경우
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: icon,
            alt: "",
            width: 20,
            height: 20,
            className: "object-contain flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className),
        disabled: disabled,
        style: {
            ...variant === "orange" && {
                color: "#ffffff"
            },
            ...props.style
        },
        ...props,
        children: [
            icon && iconPosition === "left" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-shrink-0",
                style: {
                    color: "inherit"
                },
                children: renderIcon()
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "inherit"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            icon && iconPosition === "right" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-shrink-0",
                style: {
                    color: "inherit"
                },
                children: renderIcon()
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c2 = Button;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PlayIcon");
__turbopack_context__.k.register(_c1, "PlusIcon");
__turbopack_context__.k.register(_c2, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** 리포트 차트 공통 스타일 (title, grid, axis, y축 점선 그리드) */ __turbopack_context__.s([
    "CHART_AXIS_LABEL",
    ()=>CHART_AXIS_LABEL,
    "CHART_AXIS_NAME",
    ()=>CHART_AXIS_NAME,
    "CHART_GRID_DEFAULT",
    ()=>CHART_GRID_DEFAULT,
    "CHART_TITLE",
    ()=>CHART_TITLE,
    "CHART_Y_AXIS_SPLIT_LINE",
    ()=>CHART_Y_AXIS_SPLIT_LINE,
    "chartGraphicDivider",
    ()=>chartGraphicDivider,
    "chartTitle",
    ()=>chartTitle
]);
const CHART_TITLE = {
    left: 16,
    top: 8,
    textAlign: "left",
    textStyle: {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "normal",
        color: "black"
    }
};
const CHART_GRID_DEFAULT = {
    left: "7%",
    right: "3%",
    top: "60px",
    bottom: "8%",
    containLabel: true
};
const CHART_AXIS_LABEL = {
    fontSize: 10.5,
    fontFamily: "Inter",
    fontWeight: "normal",
    color: "black"
};
const CHART_AXIS_NAME = {
    nameTextStyle: {
        fontSize: 10.5,
        fontFamily: "Inter",
        fontWeight: "normal",
        color: "black"
    }
};
const CHART_Y_AXIS_SPLIT_LINE = {
    show: true,
    lineStyle: {
        type: "dashed",
        color: "#E8E8E8"
    }
};
function chartTitle(text) {
    return {
        ...CHART_TITLE,
        text
    };
}
function chartGraphicDivider() {
    let width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 320;
    return [
        {
            type: "line",
            left: 16,
            top: 30,
            shape: {
                x1: 0,
                y1: 0,
                x2: width,
                y2: 0
            },
            style: {
                stroke: "#E5E5E5",
                lineWidth: 1
            }
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step1TypeISafetyChart",
    ()=>Step1TypeISafetyChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Step1TypeISafetyChart(param) {
    let { apiData } = param;
    const typeSafetyData = (apiData === null || apiData === void 0 ? void 0 : apiData.result_type_safety) || [];
    const allXAxisData = typeSafetyData.map((item)=>item.p_value.toFixed(2));
    const barData = typeSafetyData.map((item)=>item.count);
    const expectedValue = typeSafetyData.length > 0 ? typeSafetyData[0].expected_under_uniform : 0.5;
    const option = {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTitle"])("P-value distribution under H0"),
        graphic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartGraphicDivider"])(720),
        legend: {
            show: false
        },
        grid: {
            left: "4%",
            right: "3%",
            top: "60px",
            bottom: "8%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            name: "P-value",
            nameLocation: "middle",
            nameGap: 16,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            data: allXAxisData,
            axisLabel: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
                formatter: (_value, index)=>{
                    const len = allXAxisData.length;
                    if (len === 0) return "";
                    if (index === len - 1) return "1.0";
                    const pValue = index * 0.05;
                    if (index % 4 === 0) return pValue.toFixed(1);
                    return "";
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            name: "Count",
            nameLocation: "middle",
            nameGap: 26,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_Y_AXIS_SPLIT_LINE"]
        },
        series: [
            {
                type: "bar",
                data: barData,
                itemStyle: {
                    color: "#aaa5e1",
                    borderRadius: [
                        6,
                        6,
                        6,
                        6
                    ]
                },
                barWidth: "90%",
                barGap: "10%",
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: "#704ef3",
                        type: "dashed",
                        width: 1.5
                    },
                    data: [
                        {
                            yAxis: expectedValue
                        }
                    ]
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#E9DDFF"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(255, 255, 255, 0.0)"
                                }
                            ]
                        }
                    },
                    data: [
                        [
                            {
                                yAxis: 0
                            },
                            {
                                yAxis: expectedValue
                            }
                        ]
                    ]
                }
            },
            {
                name: "Expected (Uniform)",
                type: "line",
                data: [],
                lineStyle: {
                    color: "#704ef3",
                    type: "dashed",
                    width: 1
                },
                symbol: "none",
                symbolSize: 0,
                showSymbol: false
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full bg-white rounded-[8px] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    option: option,
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute text-small1 text-[#484646]",
                    style: {
                        left: "55px",
                        bottom: "15%",
                        display: "inline-flex",
                        padding: "4px 8px",
                        alignItems: "center",
                        gap: 4,
                        border: "1px solid var(--M3-ref-neutral-neutral70, #AEA9B1)",
                        background: "var(--surface-60, rgba(255, 255, 255, 0.60))"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block shrink-0 border-t border-dashed border-[#704ef3]",
                            style: {
                                width: 20,
                                borderWidth: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Expected (Uniform)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c = Step1TypeISafetyChart;
var _c;
__turbopack_context__.k.register(_c, "Step1TypeISafetyChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/Step2VarianceDeclineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step2VarianceDeclineChart",
    ()=>Step2VarianceDeclineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Step2VarianceDeclineChart(param) {
    let { apiData } = param;
    const varianceDecline = (apiData === null || apiData === void 0 ? void 0 : apiData.result_variancedecline) || [];
    /** x축 수치: R² 값 (0.1, 0.2, 0.3, ...) */ const xValues = varianceDecline.length > 0 ? varianceDecline.map((r)=>Number(r.model_performance)) : [];
    /** variance 배열에서 median 구해서 y값으로 사용 */ const lineData = varianceDecline.length > 0 ? varianceDecline.map((r)=>{
        try {
            const arr = JSON.parse(r.variance);
            const nums = Array.isArray(arr) ? arr : [];
            if (nums.length === 0) return 0;
            const sorted = [
                ...nums
            ].sort((a, b)=>a - b);
            const mid = Math.floor(sorted.length / 2);
            const median = sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
            return Number(Number(median).toFixed(6));
        } catch (e) {
            return 0;
        }
    }) : [];
    /** 라인 데이터: [x, y] 쌍 (0.1일 때 y, 0.2일 때 y, ...) */ const linePoints = xValues.length === lineData.length ? xValues.map((x, i)=>[
            x,
            lineData[i]
        ]) : [];
    /** 점선 y값 = 데이터 첫 번째 인덱스의 y값 */ const MARK_LINE_Y = lineData.length > 0 ? lineData[0] : null;
    const xMin = 0;
    const xMax = 1;
    const option = {
        animation: false,
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTitle"])("Variance Decline"),
        graphic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartGraphicDivider"])(320),
        grid: {
            left: "6%",
            right: "3%",
            top: "60px",
            bottom: "8%",
            containLabel: true
        },
        xAxis: {
            type: "value",
            name: "R²",
            nameLocation: "middle",
            nameGap: 20,
            min: 0,
            max: 1,
            interval: 0.1,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            type: "value",
            name: "Variance",
            nameLocation: "middle",
            nameGap: 36,
            axisLabel: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"]
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_Y_AXIS_SPLIT_LINE"]
        },
        series: [
            {
                name: "Variance",
                type: "line",
                data: linePoints,
                itemStyle: {
                    color: "#231f52"
                },
                symbol: "circle",
                symbolSize: 8,
                lineStyle: {
                    width: 2
                },
                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(35, 31, 82, 0.25)"
                            },
                            {
                                offset: 1,
                                color: "rgba(35, 31, 82, 0.02)"
                            }
                        ]
                    }
                },
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: "#704ef3",
                        type: "dashed",
                        width: 1.5
                    },
                    data: MARK_LINE_Y != null ? [
                        [
                            {
                                coord: [
                                    xMin,
                                    Number(MARK_LINE_Y)
                                ]
                            },
                            {
                                coord: [
                                    xMax,
                                    Number(MARK_LINE_Y)
                                ]
                            }
                        ]
                    ] : []
                }
            }
        ]
    };
    console.log("yAxis.type", option.yAxis.type);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-white rounded-[8px] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            option: option,
            style: {
                height: "100%",
                width: "100%"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/ats/simulation/report/charts/Step2VarianceDeclineChart.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ats/simulation/report/charts/Step2VarianceDeclineChart.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c = Step2VarianceDeclineChart;
var _c;
__turbopack_context__.k.register(_c, "Step2VarianceDeclineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/Step2BoxplotChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step2BoxplotChart",
    ()=>Step2BoxplotChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Step2BoxplotChart(param) {
    let { apiData } = param;
    const boxplotSource = (apiData === null || apiData === void 0 ? void 0 : apiData.result_estimatedtreatmenteffect) || [];
    const hasBoxplot = Array.isArray(boxplotSource) && boxplotSource.length > 0;
    const xAxisDataBox = hasBoxplot ? boxplotSource.map((r)=>String(r.model_performance)) : [];
    const option = {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTitle"])("Estimated treatment effect"),
        graphic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartGraphicDivider"])(320),
        grid: {
            left: "7%",
            right: "3%",
            top: "60px",
            bottom: "8%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            name: "R²",
            nameLocation: "middle",
            nameGap: 20,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            data: hasBoxplot ? xAxisDataBox : [],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            name: "β",
            nameLocation: "middle",
            nameGap: 28,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_Y_AXIS_SPLIT_LINE"]
        },
        series: hasBoxplot ? (()=>{
            const boxplotData = [];
            const outlierData = [];
            const allValues = []; // 전체 데이터 mean 계산용
            boxplotSource.forEach((r, idx)=>{
                try {
                    const raw = r.estimated_treatment_effect;
                    const arr = typeof raw === "string" ? JSON.parse(raw) : Array.isArray(raw) ? raw : [];
                    const nums = Array.isArray(arr) ? arr.map(Number).filter((n)=>!Number.isNaN(n)) : [];
                    // 전체 데이터 수집
                    allValues.push(...nums);
                    if (nums.length >= 5) {
                        const sorted = [
                            ...nums
                        ].sort((a, b)=>a - b);
                        const q1 = sorted[Math.floor(sorted.length * 0.25)];
                        const median = sorted[Math.floor(sorted.length * 0.5)];
                        const q3 = sorted[Math.floor(sorted.length * 0.75)];
                        const iqr = q3 - q1;
                        const lowerFence = q1 - 1.5 * iqr;
                        const upperFence = q3 + 1.5 * iqr;
                        // 아웃라이어: fence 밖의 값들
                        const outliers = nums.filter((n)=>n < lowerFence || n > upperFence);
                        outliers.forEach((outlier)=>{
                            outlierData.push([
                                idx,
                                outlier
                            ]);
                        });
                        // Boxplot: [min, q1, median, q3, max] (fence 내 값만)
                        const inRange = sorted.filter((n)=>n >= lowerFence && n <= upperFence);
                        const min = inRange.length > 0 ? inRange[0] : sorted[0];
                        const max = inRange.length > 0 ? inRange[inRange.length - 1] : sorted[sorted.length - 1];
                        boxplotData.push([
                            min,
                            q1,
                            median,
                            q3,
                            max
                        ]);
                    } else {
                        boxplotData.push([
                            0,
                            0,
                            0,
                            0,
                            0
                        ]);
                    }
                } catch (e) {
                    boxplotData.push([
                        0,
                        0,
                        0,
                        0,
                        0
                    ]);
                }
            });
            // 전체 데이터의 mean
            const overallMean = allValues.length > 0 ? allValues.reduce((a, b)=>a + b, 0) / allValues.length : null;
            return [
                {
                    name: "Boxplot",
                    type: "boxplot",
                    data: boxplotData,
                    itemStyle: {
                        color: "#231f52",
                        borderColor: "#AAAAAD",
                        borderWidth: 1
                    },
                    boxWidth: [
                        10,
                        24
                    ]
                },
                {
                    name: "Outliers",
                    type: "scatter",
                    data: outlierData,
                    itemStyle: {
                        color: "transparent",
                        borderColor: "#aaa5e1",
                        borderWidth: 1
                    },
                    symbolSize: 6
                },
                // 전체 데이터 mean 점선 (연한 라벤더/보라색)
                ...overallMean != null ? [
                    {
                        type: "line",
                        data: [],
                        markLine: {
                            silent: true,
                            symbol: "none",
                            label: {
                                show: false
                            },
                            lineStyle: {
                                color: "#aaa5e1",
                                type: "dashed",
                                width: 1.5
                            },
                            data: [
                                {
                                    yAxis: overallMean
                                }
                            ]
                        }
                    }
                ] : []
            ];
        })() : []
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-white rounded-[8px] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            notMerge: true,
            lazyUpdate: true,
            option: option,
            style: {
                height: "100%",
                width: "100%"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/ats/simulation/report/charts/Step2BoxplotChart.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ats/simulation/report/charts/Step2BoxplotChart.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_c = Step2BoxplotChart;
var _c;
__turbopack_context__.k.register(_c, "Step2BoxplotChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step3AbsolutePerformanceChart",
    ()=>Step3AbsolutePerformanceChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
const ORDER = [
    "Ideal (0%)",
    "Mild (10%)",
    "Moderate (20%)",
    "Severe (30%)"
];
const CATEGORY_MAP = {
    "Prognostic ANCOVA (CC)": {
        name: "Proposed (Adj+)",
        color: "#231f52"
    },
    "Standard ANCOVA (CC)": {
        name: "Standard ANCOVA",
        color: "#7571a9"
    },
    "Unadjusted (CC)": {
        name: "Unadjusted",
        color: "#aaa5e1"
    }
};
const CATEGORIES = [
    "Prognostic ANCOVA (CC)",
    "Standard ANCOVA (CC)",
    "Unadjusted (CC)"
];
/** ─── 그룹/갭 조정 (여기서 수정) ─── */ /** 그룹 내 갭: 한 그룹 안에서 시리즈(Proposed, ANCOVA, Unadjusted)가 차지하는 칸 수. 3이면 3칸 연속, 5면 5칸 중 0,2,4 사용해 더 벌어짐 */ const SLOTS_PER_GROUP = 3;
/** 그룹 간 갭: 그룹과 그룹 사이에 넣는 빈 칸 수. 0이면 붙어 있고, 1 이상이면 그만큼 빈 칸 추가 */ const GAP_SLOTS_BETWEEN_GROUPS = 3;
/** 그룹 내에서 시리즈가 놓일 슬롯 인덱스 (0~SLOTS_PER_GROUP-1). [0,1,2]면 3칸 꽉 채움, [0,2,4]면 5칸 중 0,2,4 사용 */ const SLOT_INDICES_IN_GROUP = [
    0,
    1,
    2
];
const X_CATEGORY_INDICES = ORDER.map(_c = (_, g)=>{
    const base = g * (SLOTS_PER_GROUP + GAP_SLOTS_BETWEEN_GROUPS);
    return [
        base + SLOT_INDICES_IN_GROUP[0],
        base + SLOT_INDICES_IN_GROUP[1],
        base + SLOT_INDICES_IN_GROUP[2]
    ];
});
_c1 = X_CATEGORY_INDICES;
const LABEL_SLOT_INDEX = Math.floor(SLOTS_PER_GROUP / 2);
const X_AXIS_DATA = [];
for(let g = 0; g < ORDER.length; g++){
    for(let s = 0; s < SLOTS_PER_GROUP; s++){
        X_AXIS_DATA.push(s === LABEL_SLOT_INDEX ? ORDER[g] : "");
    }
    if (g < ORDER.length - 1) {
        for(let k = 0; k < GAP_SLOTS_BETWEEN_GROUPS; k++)X_AXIS_DATA.push("");
    }
}
const SYMBOLS = [
    "circle",
    "rect",
    "triangle"
];
const CAP_LEN_PX = 12;
const ASSUMED_EFFECT = 2;
function Step3AbsolutePerformanceChart(param) {
    let { apiData } = param;
    const absPerf = (apiData === null || apiData === void 0 ? void 0 : apiData.result_absoluteperformancecomparison) || [];
    const byCategory = {};
    CATEGORIES.forEach((cat)=>{
        byCategory[cat] = ORDER.map((lev)=>{
            const row = absPerf.find((r)=>r.degradation_level === lev && r.category === cat);
            return row ? {
                effect: row.estimated_treatment_effect,
                margin: row.margin_of_error
            } : {
                effect: 0,
                margin: 0
            };
        });
    });
    const hasData = absPerf.length > 0;
    const Y_TICK_INTERVAL = 0.5;
    const yRange = (()=>{
        if (!hasData) return {
            min: 0,
            max: 1,
            interval: Y_TICK_INTERVAL
        };
        let lo = Infinity;
        let hi = -Infinity;
        CATEGORIES.forEach((cat)=>{
            byCategory[cat].forEach((d)=>{
                lo = Math.min(lo, d.effect - d.margin);
                hi = Math.max(hi, d.effect + d.margin);
            });
        });
        lo = Math.min(lo, ASSUMED_EFFECT);
        hi = Math.max(hi, ASSUMED_EFFECT);
        const pad = Math.max((hi - lo) * 0.05, 0.02);
        const minVal = lo - pad;
        const maxVal = hi + pad;
        const snappedMin = Math.floor(minVal / Y_TICK_INTERVAL) * Y_TICK_INTERVAL;
        const snappedMax = Math.ceil(maxVal / Y_TICK_INTERVAL) * Y_TICK_INTERVAL;
        return {
            min: parseFloat(snappedMin.toFixed(1)),
            max: parseFloat(snappedMax.toFixed(1)),
            interval: Y_TICK_INTERVAL
        };
    })();
    const lineSeries = hasData ? CATEGORIES.map((cat, seriesIdx)=>({
            name: CATEGORY_MAP[cat].name,
            type: "line",
            data: byCategory[cat].map((d, i)=>[
                    X_CATEGORY_INDICES[i][seriesIdx],
                    d.effect
                ]),
            itemStyle: {
                color: CATEGORY_MAP[cat].color
            },
            symbol: SYMBOLS[seriesIdx],
            symbolSize: 10,
            lineStyle: {
                width: 2
            }
        })) : [];
    const errorBarSeries = hasData ? CATEGORIES.map((cat, seriesIdx)=>{
        const strokeColor = CATEGORY_MAP[cat].color;
        return {
            name: CATEGORY_MAP[cat].name + " (95% CI)",
            type: "custom",
            data: byCategory[cat].map((d, i)=>[
                    X_CATEGORY_INDICES[i][seriesIdx],
                    d.effect,
                    d.margin
                ]),
            renderItem: (params, api)=>{
                const xVal = api.value(0);
                const effect = api.value(1);
                const margin = api.value(2);
                const low = api.coord([
                    xVal,
                    effect - margin
                ]);
                const high = api.coord([
                    xVal,
                    effect + margin
                ]);
                return {
                    type: "group",
                    children: [
                        {
                            type: "line",
                            shape: {
                                x1: low[0],
                                y1: low[1],
                                x2: high[0],
                                y2: high[1]
                            },
                            style: api.style({
                                stroke: strokeColor,
                                lineWidth: 1.5
                            })
                        },
                        {
                            type: "line",
                            shape: {
                                x1: low[0] - CAP_LEN_PX / 2,
                                y1: low[1],
                                x2: low[0] + CAP_LEN_PX / 2,
                                y2: low[1]
                            },
                            style: api.style({
                                stroke: strokeColor,
                                lineWidth: 1.5
                            })
                        },
                        {
                            type: "line",
                            shape: {
                                x1: high[0] - CAP_LEN_PX / 2,
                                y1: high[1],
                                x2: high[0] + CAP_LEN_PX / 2,
                                y2: high[1]
                            },
                            style: api.style({
                                stroke: strokeColor,
                                lineWidth: 1.5
                            })
                        }
                    ]
                };
            },
            z: 1,
            showInLegend: false
        };
    }) : [];
    const option = {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTitle"])("A. Absolute Performance Comparison (Dodged)"),
        graphic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartGraphicDivider"])(320),
        legend: {
            show: false
        },
        grid: {
            left: "7%",
            right: "3%",
            top: "60px",
            bottom: "10%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            name: "",
            nameLocation: "middle",
            nameGap: 16,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            data: X_AXIS_DATA,
            axisLabel: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
                interval: 0
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            name: "Estimated Treatment Effect (95% CI)",
            nameLocation: "middle",
            nameGap: 28,
            min: yRange.min,
            max: yRange.max,
            interval: yRange.interval,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_Y_AXIS_SPLIT_LINE"]
        },
        series: [
            ...errorBarSeries,
            ...lineSeries,
            ...hasData ? [
                {
                    name: "Assumed effect (for simulation)",
                    type: "line",
                    data: [],
                    symbol: "none",
                    showSymbol: false,
                    markLine: {
                        silent: true,
                        symbol: "none",
                        label: {
                            show: false
                        },
                        lineStyle: {
                            color: "#704ef3",
                            type: "dashed",
                            width: 1.5
                        },
                        data: [
                            {
                                yAxis: ASSUMED_EFFECT
                            }
                        ]
                    }
                }
            ] : []
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-white rounded-[8px] overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                option: option,
                style: {
                    height: "100%",
                    width: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            hasData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute text-small1 text-[#484646]",
                style: {
                    left: "50px",
                    bottom: "15%",
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1,
                    padding: "3px 6px",
                    border: "1px solid var(--M3-ref-neutral-neutral70, #AEA9B1)",
                    background: "var(--surface-60, rgba(255, 255, 255, 0.60))"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 5,
                            minHeight: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 flex items-center justify-center",
                                style: {
                                    width: 16,
                                    height: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        backgroundColor: "#231f52"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Proposed (Adj+)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 5,
                            minHeight: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 flex items-center justify-center",
                                style: {
                                    width: 16,
                                    height: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        backgroundColor: "#7571a9"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Standard ANCOVA"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 5,
                            minHeight: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 flex items-center justify-center text-[12px] leading-none",
                                style: {
                                    width: 16,
                                    height: 16,
                                    color: "#aaa5e1"
                                },
                                children: "▲"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Unadjusted"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 5,
                            minHeight: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 flex items-center justify-center",
                                style: {
                                    width: 16,
                                    height: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "border-t border-dashed border-[#704ef3]",
                                    style: {
                                        width: 16,
                                        borderWidth: 1.5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Assumed effect (for simulation)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_c2 = Step3AbsolutePerformanceChart;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "X_CATEGORY_INDICES$ORDER.map");
__turbopack_context__.k.register(_c1, "X_CATEGORY_INDICES");
__turbopack_context__.k.register(_c2, "Step3AbsolutePerformanceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step3PerformanceGainChart",
    ()=>Step3PerformanceGainChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
const ORDER = [
    "Ideal (0%)",
    "Mild (10%)",
    "Moderate (20%)",
    "Severe (30%)"
];
const CAP_LEN_PX = 12;
function Step3PerformanceGainChart(param) {
    let { apiData } = param;
    const robustness = (apiData === null || apiData === void 0 ? void 0 : apiData.result_robustnessproof) || [];
    const xAxisData = ORDER.map((o)=>o.replace("Ideal", "ideal"));
    const diffData = ORDER.map((lev)=>{
        const row = robustness.find((r)=>r.degradation_level === lev);
        return row ? [
            row.difference_in_estimate,
            row.margin_of_error
        ] : [
            0,
            0
        ];
    });
    const hasData = robustness.length > 0;
    const lineData = diffData.map((d)=>Number(d[0]));
    const errorBarData = diffData.map((d, i)=>[
            i,
            d[0],
            d[1]
        ]);
    const Y_TICK_INTERVAL = 0.1;
    const yRange = (()=>{
        const nsZoneLo = -0.05;
        const nsZoneHi = 0.05;
        if (!hasData) return {
            min: -0.1,
            max: 0.1,
            interval: Y_TICK_INTERVAL
        };
        let lo = nsZoneLo;
        let hi = nsZoneHi;
        diffData.forEach((d)=>{
            const e = Number(d[0]);
            const m = Number(d[1]);
            lo = Math.min(lo, e - m);
            hi = Math.max(hi, e + m);
        });
        const pad = Math.max((hi - lo) * 0.05, 0.02);
        const minVal = lo - pad;
        const maxVal = hi + pad;
        const snappedMin = Math.floor(minVal / Y_TICK_INTERVAL) * Y_TICK_INTERVAL;
        const snappedMax = Math.ceil(maxVal / Y_TICK_INTERVAL) * Y_TICK_INTERVAL;
        return {
            min: parseFloat(snappedMin.toFixed(1)),
            max: parseFloat(snappedMax.toFixed(1)),
            interval: Y_TICK_INTERVAL
        };
    })();
    const option = {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTitle"])("B. Robustness Proof: Performance Gain over Unadjusted"),
        graphic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartGraphicDivider"])(320),
        legend: {
            show: false
        },
        grid: {
            left: "6%",
            right: "3%",
            top: "60px",
            bottom: "10%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            name: "Deteriorating Scenarios (e.g., Missing Data Rate)",
            nameLocation: "middle",
            nameGap: 24,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            data: xAxisData,
            axisLabel: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
                interval: 0
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            name: "Difference in Estimate (Δ)",
            nameLocation: "middle",
            nameGap: 28,
            min: yRange.min,
            max: yRange.max,
            interval: yRange.interval,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_Y_AXIS_SPLIT_LINE"]
        },
        series: [
            ...hasData ? [
                {
                    name: "Performance Gain (Proposed - Unadjusted)",
                    type: "custom",
                    data: errorBarData,
                    renderItem: (params, api)=>{
                        const xIndex = api.value(0);
                        const effect = api.value(1);
                        const margin = api.value(2);
                        const strokeColor = "#231f52";
                        const low = api.coord([
                            xIndex,
                            effect - margin
                        ]);
                        const high = api.coord([
                            xIndex,
                            effect + margin
                        ]);
                        return {
                            type: "group",
                            children: [
                                {
                                    type: "line",
                                    shape: {
                                        x1: low[0],
                                        y1: low[1],
                                        x2: high[0],
                                        y2: high[1]
                                    },
                                    style: api.style({
                                        stroke: strokeColor,
                                        lineWidth: 1.5
                                    })
                                },
                                {
                                    type: "line",
                                    shape: {
                                        x1: low[0] - CAP_LEN_PX / 2,
                                        y1: low[1],
                                        x2: low[0] + CAP_LEN_PX / 2,
                                        y2: low[1]
                                    },
                                    style: api.style({
                                        stroke: strokeColor,
                                        lineWidth: 1.5
                                    })
                                },
                                {
                                    type: "line",
                                    shape: {
                                        x1: high[0] - CAP_LEN_PX / 2,
                                        y1: high[1],
                                        x2: high[0] + CAP_LEN_PX / 2,
                                        y2: high[1]
                                    },
                                    style: api.style({
                                        stroke: strokeColor,
                                        lineWidth: 1.5
                                    })
                                }
                            ]
                        };
                    },
                    z: 1,
                    showInLegend: false
                }
            ] : [],
            {
                name: "Performance Gain (Proposed - Unadjusted)",
                type: "line",
                data: hasData ? lineData : [],
                itemStyle: {
                    color: "#231f52"
                },
                symbol: "diamond",
                symbolSize: 12,
                lineStyle: {
                    width: 2
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: "rgba(0,0,0,0.06)"
                    },
                    data: [
                        [
                            {
                                yAxis: -0.05
                            },
                            {
                                yAxis: 0.05
                            }
                        ]
                    ]
                },
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: "#999",
                        type: "dashed",
                        width: 1
                    },
                    data: [
                        {
                            yAxis: -0.05
                        },
                        {
                            yAxis: 0.05
                        }
                    ]
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full bg-white rounded-[8px] overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                option: option,
                style: {
                    height: "100%",
                    width: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute text-small1 text-[#484646]",
                style: {
                    left: "50px",
                    bottom: "17%",
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1,
                    padding: "3px 6px",
                    border: "1px solid var(--M3-ref-neutral-neutral70, #AEA9B1)",
                    background: "var(--surface-60, rgba(255, 255, 255, 0.60))"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 5,
                            minHeight: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 flex items-center justify-center",
                                style: {
                                    width: 16,
                                    height: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 6,
                                        height: 6,
                                        backgroundColor: "#231f52",
                                        transform: "rotate(45deg)",
                                        borderRadius: "1px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Performance Gain (Proposed - Unadjusted)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 5,
                            minHeight: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 flex items-center justify-center",
                                style: {
                                    width: 16,
                                    height: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 16,
                                        height: 10,
                                        backgroundColor: "rgba(0,0,0,0.06)",
                                        borderRadius: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Non-significant Zone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c = Step3PerformanceGainChart;
var _c;
__turbopack_context__.k.register(_c, "Step3PerformanceGainChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Step4DecisionStabilityChart",
    ()=>Step4DecisionStabilityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/chartStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
const STABILITY_THRESHOLD = 0.8;
/** M3/ref/primary/primary15 */ const PRIMARY_15 = "#262255";
function Step4DecisionStabilityChart(param) {
    let { apiData } = param;
    const decisionStabilityData = (apiData === null || apiData === void 0 ? void 0 : apiData.result_decisionstability) || [];
    const xAxisData = decisionStabilityData.map((item)=>item.scenario);
    const series1Data = decisionStabilityData.map((item)=>{
        try {
            const probArray = JSON.parse(item.probability_of_go_decision);
            return probArray[0] || 0;
        } catch (e) {
            return 0;
        }
    });
    const series2Data = decisionStabilityData.map((item)=>{
        try {
            const probArray = JSON.parse(item.probability_of_go_decision);
            return probArray[1] || 0;
        } catch (e) {
            return 0;
        }
    });
    const option = {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartTitle"])("Decision Stability across Perturbations"),
        graphic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chartGraphicDivider"])(720),
        legend: {
            show: false
        },
        grid: {
            left: "3%",
            right: "3%",
            top: "60px",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            name: "",
            nameLocation: "middle",
            nameGap: 16,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            data: xAxisData,
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            name: 'Probability of "Go" Decision (Power)',
            nameLocation: "middle",
            nameGap: 28,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_NAME"],
            axisLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_AXIS_LABEL"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$chartStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHART_Y_AXIS_SPLIT_LINE"]
        },
        series: [
            {
                name: "Proposed Design",
                type: "bar",
                data: series1Data,
                itemStyle: {
                    color: PRIMARY_15,
                    borderRadius: [
                        6,
                        6,
                        6,
                        6
                    ]
                },
                barWidth: "25%",
                barGap: "20%",
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: "#7452f4",
                        type: "dashed",
                        width: 1.5
                    },
                    data: [
                        {
                            yAxis: STABILITY_THRESHOLD
                        }
                    ]
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#E9DDFF"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(255, 255, 255, 0.0)"
                                }
                            ]
                        }
                    },
                    data: [
                        [
                            {
                                yAxis: 0
                            },
                            {
                                yAxis: STABILITY_THRESHOLD
                            }
                        ]
                    ]
                }
            },
            {
                name: "Standard Design",
                type: "bar",
                data: series2Data,
                itemStyle: {
                    color: "#A692D6",
                    borderRadius: [
                        6,
                        6,
                        6,
                        6
                    ]
                },
                barWidth: "25%"
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full bg-white rounded-[8px] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    option: option,
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute text-small1 text-[#484646]",
                    style: {
                        left: "50px",
                        bottom: "10%",
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 6,
                        padding: "4px 8px",
                        border: "1px solid var(--M3-ref-neutral-neutral70, #AEA9B1)",
                        background: "var(--surface-60, rgba(255, 255, 255, 0.60))"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            style: {
                                gap: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 border-t border-dashed border-[#7452f4]",
                                    style: {
                                        width: 20,
                                        borderWidth: 1.5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Target Stability Threshold (80%)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            style: {
                                gap: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 w-5 h-3 rounded-sm",
                                    style: {
                                        backgroundColor: PRIMARY_15
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Proposed Design"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            style: {
                                gap: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 w-5 h-3 rounded-sm bg-[#A692D6]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Standard Design"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute text-small2 text-[#484646]",
                    style: {
                        left: "50%",
                        transform: "translateX(-50%)",
                        bottom: "45%",
                        display: "inline-flex",
                        flexDirection: "column",
                        padding: "4px 8px",
                        alignItems: "center",
                        gap: 2,
                        border: "1px solid var(--M3-ref-neutral-neutral70, #AEA9B1)",
                        background: "var(--surface-60, rgba(255, 255, 255, 0.60))"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#262255]",
                            children: "Proposed design remains STABLE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#262255]",
                            children: "(above 80% threshold)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c = Step4DecisionStabilityChart;
var _c;
__turbopack_context__.k.register(_c, "Step4DecisionStabilityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/charts/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step1TypeISafetyChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step2VarianceDeclineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step2VarianceDeclineChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step2BoxplotChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step2BoxplotChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step3AbsolutePerformanceChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step3PerformanceGainChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step4DecisionStabilityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/studyService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callMLStudyDesign",
    ()=>callMLStudyDesign,
    "downloadReportFile",
    ()=>downloadReportFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var _process_env_NEXT_PUBLIC_API_BASE_URL;
const BACKEND_URL = (_process_env_NEXT_PUBLIC_API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL) !== null && _process_env_NEXT_PUBLIC_API_BASE_URL !== void 0 ? _process_env_NEXT_PUBLIC_API_BASE_URL : "https://nexus.oprimed.com";
const callMLStudyDesign = async (parameters)=>{
    // 타임아웃 설정 (10분 = 600초, 큰 응답 처리용)
    const timeout = 600000; // 10분
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), timeout);
    try {
        const isClient = "object" !== "undefined";
        const url = ("TURBOPACK compile-time truthy", 1) ? "/api/proxy/study-play" : "TURBOPACK unreachable";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify(parameters),
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
            const errorText = await response.text();
            // API 응답 오류
            throw new Error("HTTP error! status: ".concat(response.status, ", message: ").concat(errorText));
        }
        // 큰 응답을 위한 스트리밍 처리
        const data = await response.json();
        return data;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error) {
            if (error.name === "AbortError") {
                // API 호출 타임아웃
                throw new Error("요청 시간이 초과되었습니다. 응답이 너무 큽니다. 잠시 후 다시 시도해주세요.");
            }
            if (error.message.includes("Failed to fetch") || error.name === "TypeError") {
                throw new Error("네트워크 연결에 실패했습니다. 서버에 연결할 수 없습니다.");
            }
            throw error;
        }
        throw new Error("API 호출에 실패했습니다.");
    }
};
const downloadReportFile = async (taskId)=>{
    try {
        const isClient = "object" !== "undefined";
        const url = ("TURBOPACK compile-time truthy", 1) ? "/api/proxy/download/".concat(taskId) : "TURBOPACK unreachable";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error("HTTP error! status: ".concat(response.status, ", message: ").concat(errorText));
        }
        const blob = await response.blob();
        return blob;
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("Failed to fetch") || error.name === "TypeError") {
                throw new Error("네트워크 연결에 실패했습니다. 서버에 연결할 수 없습니다.");
            }
            throw error;
        }
        throw new Error("파일 다운로드에 실패했습니다.");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/Loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loading",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Loading(param) {
    let { isLoading = true } = param;
    if (!isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-[#787776]/70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/assets/loading.gif",
                alt: "Loading...",
                className: "w-32 h-32"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Loading.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/Loading.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Loading.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/report/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/arrow-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/SingleBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step1TypeISafetyChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step1TypeISafetyChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step2VarianceDeclineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step2VarianceDeclineChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step2BoxplotChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step2BoxplotChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step3AbsolutePerformanceChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step3AbsolutePerformanceChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step3PerformanceGainChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step3PerformanceGainChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step4DecisionStabilityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ats/simulation/report/charts/Step4DecisionStabilityChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$studyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/studyService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Loading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function StepCard(param) {
    let { stepNumber, title, description, chartContent } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[16px] min-h-[512px] p-5 flex flex-col items-start flex-1 bg-[#f5f5f6]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col flex-shrink-0 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-3 py-1 bg-[#f06600] rounded-[8px] text-body5m text-white h-6",
                            children: [
                                "Step ",
                                stepNumber
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-h3 text-[#1b1b1b] mb-6",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-body3 text-[#666b73] max-w-[500px]",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[264px] flex-shrink-0 overflow-hidden",
                children: chartContent
            }, void 0, false, {
                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = StepCard;
function ReportPage() {
    var _apiData_result_resultsoverview_OPTIVIS_, _apiData_result_resultsoverview_OPTIVIS, _apiData_result_resultsoverview, _apiData_result_resultsoverview_OPTIVIS_1, _apiData_result_resultsoverview_OPTIVIS1, _apiData_result_resultsoverview1, _apiData_result_resultsoverview_OPTIVIS_2, _apiData_result_resultsoverview_OPTIVIS2, _apiData_result_resultsoverview2, _apiData_result_resultsoverview_OPTIVIS_3, _apiData_result_resultsoverview_OPTIVIS3, _apiData_result_resultsoverview3, _apiData_sample_size_evaluation, _apiData_sample_size_evaluation1, _this, _this1, _this2;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const simulationBasePath = pathname.startsWith("/ats/") ? "/ats/simulation" : pathname.startsWith("/tsi/") ? "/tsi" : "/simulation";
    const { isApplied, apiData, taskId, sampleSizeControl, disease, primaryEndpoint, primaryEffectSize, secondaryEndpoint, secondaryEffectSize, primaryEndpoints, secondaryEndpoints, nominalPower, alpha, treatmentDuration, hypothesisType, treatmentArms, randomizationRatio, setApiData, setTaskId, setIsApplied } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])();
    const [isDownloadingPDF, setIsDownloadingPDF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Apply를 안 눌렀을 때는 시뮬레이션 페이지로 리다이렉트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportPage.useEffect": ()=>{
            if (!isApplied || !apiData) {
                router.push(simulationBasePath);
            }
        }
    }["ReportPage.useEffect"], [
        isApplied,
        apiData,
        router,
        simulationBasePath
    ]);
    // 헤더의 Save as PDF 버튼 이벤트 리스너
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportPage.useEffect": ()=>{
            const handler = {
                "ReportPage.useEffect.handler": ()=>handleDownloadPDF()
            }["ReportPage.useEffect.handler"];
            window.addEventListener("save-report-pdf", handler);
            return ({
                "ReportPage.useEffect": ()=>window.removeEventListener("save-report-pdf", handler)
            })["ReportPage.useEffect"];
        }
    }["ReportPage.useEffect"]);
    // 리포트 페이지는 result_resultsoverview만 사용하므로 하이라이트 데이터 로직 제거
    // 리포트 데이터 계산 - result_resultsoverview만 사용 (시뮬레이션 페이지와 독립적)
    const reportData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportPage.useMemo[reportData]": ()=>{
            var _overview_OPTIVIS, _overview_TRADITIONAL;
            // sample_size_evaluation 데이터 출력
            // 리포트 페이지는 result_resultsoverview 데이터만 사용
            if (!(apiData === null || apiData === void 0 ? void 0 : apiData.result_resultsoverview)) {
                return null;
            }
            const overview = apiData.result_resultsoverview;
            const optivisItem = (_overview_OPTIVIS = overview.OPTIVIS) === null || _overview_OPTIVIS === void 0 ? void 0 : _overview_OPTIVIS[0];
            const traditionalItem = (_overview_TRADITIONAL = overview.TRADITIONAL) === null || _overview_TRADITIONAL === void 0 ? void 0 : _overview_TRADITIONAL[0];
            if (!optivisItem || !traditionalItem) return null;
            // Percentage 계산
            const smallerSamplePctRaw = optivisItem.sample_size_reduction * 100;
            const smallerSamplePct = Math.abs(smallerSamplePctRaw).toFixed(0);
            const smallerSampleIsNegative = smallerSamplePctRaw < 0;
            const smallerNToScreenPctRaw = optivisItem.enrollment_reduction * 100;
            const smallerNToScreenPct = Math.abs(smallerNToScreenPctRaw).toFixed(1);
            const smallerNToScreenIsNegative = smallerNToScreenPctRaw < 0;
            const lowerCostPctRaw = optivisItem.cost_reduction;
            const lowerCostPct = Math.abs(lowerCostPctRaw).toFixed(0);
            const lowerCostIsNegative = lowerCostPctRaw < 0;
            const costReductionValue = Math.abs(optivisItem.cost_reduction / 1000000).toFixed(1);
            const enrollmentReductionRaw = optivisItem.enrollment_reduction * 100;
            const enrollmentReduction = Math.abs(enrollmentReductionRaw).toFixed(1);
            const enrollmentIsNegative = enrollmentReductionRaw < 0;
            // Reduction View 데이터 계산
            const sampleSizeReductionRaw = optivisItem.sample_size_reduction * 100;
            const sampleSizeReduction = Math.abs(sampleSizeReductionRaw).toFixed(0);
            const sampleSizeIsNegative = sampleSizeReductionRaw < 0;
            const costReductionRaw = optivisItem.cost_reduction;
            const costReduction = Math.abs(costReductionRaw).toFixed(0);
            const costIsNegative = costReductionRaw < 0;
            return {
                smallerSample: {
                    percentage: "".concat(smallerSamplePct, "%"),
                    isNegative: smallerSampleIsNegative
                },
                smallerNToScreen: {
                    percentage: "".concat(smallerNToScreenPct, "%"),
                    isNegative: smallerNToScreenIsNegative
                },
                lowerCost: {
                    percentage: "$".concat(costReductionValue, "M"),
                    isNegative: lowerCostIsNegative
                },
                // Reduction View 데이터 (Results Overview용)
                reductionView: {
                    charts: [
                        {
                            label: "Sample Size",
                            change: "".concat(sampleSizeReduction, "%"),
                            optivis: optivisItem.sample_size,
                            traditional: traditionalItem.sample_size,
                            isNegative: sampleSizeIsNegative
                        },
                        {
                            label: "Power",
                            change: optivisItem.power >= traditionalItem.power ? "No loss" : "".concat(((traditionalItem.power - optivisItem.power) * 100).toFixed(1), "%"),
                            optivis: Math.round(optivisItem.power * 100),
                            traditional: Math.round(traditionalItem.power * 100),
                            isNegative: optivisItem.power < traditionalItem.power
                        },
                        {
                            label: "Enrollment Time",
                            change: "".concat(enrollmentReduction, "%"),
                            optivis: optivisItem.enrollment,
                            traditional: traditionalItem.enrollment,
                            isNegative: enrollmentIsNegative
                        },
                        {
                            label: "Cost",
                            change: "$".concat(costReductionValue, "M"),
                            optivis: Math.round(optivisItem.cost / 1000000),
                            traditional: Math.round(traditionalItem.cost / 1000000),
                            isNegative: costIsNegative
                        }
                    ]
                }
            };
        }
    }["ReportPage.useMemo[reportData]"], [
        apiData
    ]);
    // 현재 날짜/시간 포맷팅
    const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportPage.useMemo[currentDate]": ()=>{
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            return "".concat(year, ". ").concat(month, ". ").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
        }
    }["ReportPage.useMemo[currentDate]"], []);
    // PDF 다운로드 함수 - 클라이언트에서 생성 (기존)
    const handleDownloadPDF = async ()=>{
        setIsDownloadingPDF(true);
        try {
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                orientation: "portrait",
                unit: "px",
                format: [
                    1772,
                    2508
                ]
            });
            // 모든 섹션을 순서대로 한 페이지에 넣기 (헤더 포함)
            const allSections = [
                "report-header",
                "trial-design-summary",
                "results-overview",
                "prediction-accuracy",
                "demonstration-robustness"
            ];
            const padding = 40;
            const sectionGap = 100;
            let currentHeight = padding; // 첫 번째 섹션의 시작 위치를 padding으로 설정
            const pageHeight = pdf.internal.pageSize.getHeight();
            const pageWidth = pdf.internal.pageSize.getWidth();
            const backgroundColor = "#e9e7e9";
            // 페이지 배경색 설정 함수
            const setPageBackground = ()=>{
                pdf.setFillColor(233, 231, 233); // #e9e7e9를 RGB로 변환
                pdf.rect(0, 0, pageWidth, pageHeight, "F");
            };
            // 첫 페이지 배경색 설정
            setPageBackground();
            for (const sectionId of allSections){
                const element = document.getElementById(sectionId);
                if (element) {
                    // 요소의 원래 배경색 저장
                    const originalBgColor = element.style.backgroundColor;
                    // 임시로 배경색 설정
                    element.style.backgroundColor = backgroundColor;
                    let captureTarget = element;
                    let cleanupCaptureTarget = null;
                    if (sectionId === "results-overview") {
                        const savedStyles = [];
                        const setStyle = (target, prop, value)=>{
                            savedStyles.push({
                                el: target,
                                prop,
                                val: target.style[prop]
                            });
                            target.style[prop] = value;
                        };
                        const targetWidth = pageWidth - padding * 2;
                        setStyle(captureTarget, "width", "".concat(targetWidth, "px"));
                        setStyle(captureTarget, "minWidth", "".concat(targetWidth, "px"));
                        setStyle(captureTarget, "maxWidth", "".concat(targetWidth, "px"));
                        const flexColWrapper = captureTarget.children.item(1);
                        if (flexColWrapper) {
                            setStyle(flexColWrapper, "display", "flex");
                            setStyle(flexColWrapper, "width", "100%");
                            setStyle(flexColWrapper, "flexDirection", "row");
                            setStyle(flexColWrapper, "alignItems", "stretch");
                            setStyle(flexColWrapper, "gap", "24px");
                            const gridEl = flexColWrapper.children[0];
                            if (gridEl) {
                                setStyle(gridEl, "flex", "3 1 0%");
                                setStyle(gridEl, "minWidth", "0");
                                setStyle(gridEl, "width", "100%");
                            }
                            const insightEl = flexColWrapper.children[1];
                            if (insightEl) {
                                setStyle(insightEl, "flex", "2 1 0%");
                                setStyle(insightEl, "minWidth", "0");
                                setStyle(insightEl, "width", "100%");
                            }
                        }
                        cleanupCaptureTarget = ()=>{
                            for(let i = savedStyles.length - 1; i >= 0; i--){
                                const item = savedStyles[i];
                                item.el.style[item.prop] = item.val;
                            }
                            window.dispatchEvent(new Event("resize"));
                        };
                        await new Promise((resolve)=>{
                            requestAnimationFrame(()=>{
                                requestAnimationFrame(()=>{
                                    resolve();
                                });
                            });
                        });
                        window.dispatchEvent(new Event("resize"));
                        await new Promise((resolve)=>{
                            setTimeout(()=>resolve(), 120);
                        });
                    }
                    try {
                        const imgData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(captureTarget, {
                            backgroundColor: backgroundColor,
                            pixelRatio: 2,
                            quality: 1,
                            cacheBust: true
                        });
                        // 원래 배경색 복원
                        element.style.backgroundColor = originalBgColor;
                        cleanupCaptureTarget === null || cleanupCaptureTarget === void 0 ? void 0 : cleanupCaptureTarget();
                        const pdfWithImageProps = pdf;
                        const imageProps = pdfWithImageProps.getImageProperties(imgData);
                        const maxWidth = pageWidth - padding * 2;
                        const captureWidth = captureTarget.offsetWidth;
                        const imgWidth = sectionId === "results-overview" ? maxWidth : Math.min(maxWidth, captureWidth);
                        const imgHeight = imageProps.height * imgWidth / imageProps.width;
                        const x = sectionId === "results-overview" ? (pageWidth - imgWidth) / 2 : padding;
                        // 현재 페이지에 넣을 수 있는지 확인 (하단 padding 고려)
                        if (currentHeight + imgHeight > pageHeight - padding) {
                            // 새 페이지 추가 및 배경색 설정
                            pdf.addPage();
                            setPageBackground();
                            currentHeight = padding; // 새 페이지의 시작 위치를 padding으로 설정
                        }
                        pdf.addImage(imgData, "PNG", x, currentHeight, imgWidth, imgHeight);
                        currentHeight += imgHeight + sectionGap; // 섹션 간 간격 100px
                    } catch (error) {
                        // 에러 발생 시 원래 배경색 복원
                        element.style.backgroundColor = originalBgColor;
                        cleanupCaptureTarget === null || cleanupCaptureTarget === void 0 ? void 0 : cleanupCaptureTarget();
                        throw error;
                    }
                }
            }
            // 모든 페이지에 페이지 번호 추가
            const totalPages = pdf.internal.getNumberOfPages();
            for(let i = 1; i <= totalPages; i++){
                pdf.setPage(i);
                pdf.setFontSize(40);
                pdf.setTextColor(50, 50, 50); // 진한 회색
                // Inter 폰트 사용 (helvetica는 Inter와 유사한 sans-serif 폰트)
                // Inter 폰트 파일이 필요하면 추가해야 함
                pdf.setFont("helvetica", "bold");
                const pageText = "-".concat(i, "-");
                const textWidth = pdf.getTextWidth(pageText);
                pdf.text(pageText, (pageWidth - textWidth) / 2, pageHeight - 40); // 하단 중앙
            }
            pdf.save("simulation-report.pdf");
            setIsDownloadingPDF(false);
        } catch (error) {
            // PDF 다운로드 실패
            alert("PDF 다운로드에 실패했습니다.");
            setIsDownloadingPDF(false);
        }
    };
    // PDF 다운로드 함수 - 백엔드 API 호출 (맨 아래 버튼용)
    const handleDownloadPDFFromBackend = async ()=>{
        try {
            // store에서 task_id 가져오기
            if (!taskId) {
                alert("task_id를 찾을 수 없습니다.");
                return;
            }
            // API 서비스를 통해 파일 다운로드
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$studyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadReportFile"])(taskId);
            // 파일 다운로드
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "simulation-report.pdf";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            // PDF 다운로드 실패
            alert("PDF 다운로드에 실패했습니다.");
        }
    };
    if (!isApplied || !apiData || !reportData) {
        return null; // 리다이렉트 중
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLayout"], {
                headerType: "ats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "report-page-root",
                        className: "jsx-20ca2f99cd134e45" + " " + "w-full h-full min-h-0 overflow-hidden flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-20ca2f99cd134e45" + " " + "flex items-start justify-between mb-4 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "report-header",
                                    className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col gap-1 flex-shrink-0 items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-20ca2f99cd134e45" + " " + "text-title text-neutral-5 text-left mb-2",
                                            children: "Adaptive Trial Simulation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2m text-neutral-50 text-left",
                                            children: currentDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "report-content",
                                style: {
                                    gap: "0px"
                                },
                                className: "jsx-20ca2f99cd134e45" + " " + "flex flex-1 min-h-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20ca2f99cd134e45" + " " + "w-[700px] flex-shrink-0 h-full flex flex-col",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-20ca2f99cd134e45" + " " + "figma-nine-slice figma-home-panel-middle relative px-[42px] py-9 flex-1 flex flex-col",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "results-overview",
                                                className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-h2 text-[#2d1067] mb-8",
                                                        children: "Results Overview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col gap-6 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex-1 flex flex-col",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: "24px",
                                                                        gap: "24px"
                                                                    },
                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col items-center bg-[#231f52] rounded-[16px] w-full flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-h3 text-white text-left w-full",
                                                                            children: "Insight Summary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 503,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                marginTop: "24px"
                                                                            },
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "space-y-4 w-full",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-8",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: "/assets/simulation/insight-summary-sample.svg",
                                                                                            alt: "Sample Size",
                                                                                            width: 20,
                                                                                            height: 18,
                                                                                            className: "flex-shrink-0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 511,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2 text-white",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "font-semibold",
                                                                                                children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_resultsoverview = apiData.result_resultsoverview) === null || _apiData_result_resultsoverview === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS = _apiData_result_resultsoverview.OPTIVIS) === null || _apiData_result_resultsoverview_OPTIVIS === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS_ = _apiData_result_resultsoverview_OPTIVIS[0]) === null || _apiData_result_resultsoverview_OPTIVIS_ === void 0 ? void 0 : _apiData_result_resultsoverview_OPTIVIS_.sample_size_text) || ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 519,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 518,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 510,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#adaaaa]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-8",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: "/assets/simulation/insight-summary-enrollment.svg",
                                                                                            alt: "Enrollment",
                                                                                            width: 20,
                                                                                            height: 18,
                                                                                            className: "flex-shrink-0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 527,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2 text-white",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "font-semibold",
                                                                                                children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_resultsoverview1 = apiData.result_resultsoverview) === null || _apiData_result_resultsoverview1 === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS1 = _apiData_result_resultsoverview1.OPTIVIS) === null || _apiData_result_resultsoverview_OPTIVIS1 === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS_1 = _apiData_result_resultsoverview_OPTIVIS1[0]) === null || _apiData_result_resultsoverview_OPTIVIS_1 === void 0 ? void 0 : _apiData_result_resultsoverview_OPTIVIS_1.enrollment_text) || ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 535,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 526,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#adaaaa]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 541,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-8",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: "/assets/simulation/insight-summary-cost.svg",
                                                                                            alt: "Cost",
                                                                                            width: 20,
                                                                                            height: 18,
                                                                                            className: "flex-shrink-0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 543,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2 text-white",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "font-semibold",
                                                                                                children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_resultsoverview2 = apiData.result_resultsoverview) === null || _apiData_result_resultsoverview2 === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS2 = _apiData_result_resultsoverview2.OPTIVIS) === null || _apiData_result_resultsoverview_OPTIVIS2 === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS_2 = _apiData_result_resultsoverview_OPTIVIS2[0]) === null || _apiData_result_resultsoverview_OPTIVIS_2 === void 0 ? void 0 : _apiData_result_resultsoverview_OPTIVIS_2.cost_text) || ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 551,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 550,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 542,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#adaaaa]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 557,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-8",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: "/assets/simulation/insight-summary-loss.svg",
                                                                                            alt: "Power Loss",
                                                                                            width: 20,
                                                                                            height: 18,
                                                                                            className: "flex-shrink-0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 559,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2 text-white",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "font-semibold",
                                                                                                children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_resultsoverview3 = apiData.result_resultsoverview) === null || _apiData_result_resultsoverview3 === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS3 = _apiData_result_resultsoverview3.OPTIVIS) === null || _apiData_result_resultsoverview_OPTIVIS3 === void 0 ? void 0 : (_apiData_result_resultsoverview_OPTIVIS_3 = _apiData_result_resultsoverview_OPTIVIS3[0]) === null || _apiData_result_resultsoverview_OPTIVIS_3 === void 0 ? void 0 : _apiData_result_resultsoverview_OPTIVIS_3.power_text) || ""
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 567,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 566,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 558,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 506,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "bg-white rounded-[16px] p-4 w-full mt-auto flex flex-col",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "text-h3 text-[#231f52]",
                                                                                    children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_sample_size_evaluation = apiData.sample_size_evaluation) === null || _apiData_sample_size_evaluation === void 0 ? void 0 : _apiData_sample_size_evaluation.title) || ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 575,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "text-body4m text-neutral-5 whitespace-pre-line mt-auto",
                                                                                    children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_sample_size_evaluation1 = apiData.sample_size_evaluation) === null || _apiData_sample_size_evaluation1 === void 0 ? void 0 : _apiData_sample_size_evaluation1.content) || ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 578,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 574,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "grid grid-cols-2 gap-4",
                                                                children: reportData.reductionView.charts.map((chart, index)=>{
                                                                    const formatter = chart.label === "Cost" ? (val)=>"".concat(val, "M") : chart.label === "Enrollment Time" ? (val)=>val.toFixed(2) : chart.label === "Power" ? (val)=>"".concat(val, "%") : undefined;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            gap: "12px"
                                                                        },
                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col items-center bg-white rounded-[16px] p-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex items-start justify-between w-full",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2 text-[#262255]",
                                                                                            children: chart.label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 608,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-1 mt-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    direction: chart.isNegative ? "up" : "down",
                                                                                                    color: "#231F52"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                    lineNumber: 612,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "text-h4 text-neutral-15",
                                                                                                    children: chart.change
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                    lineNumber: 618,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 611,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 607,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-20ca2f99cd134e45" + " " + "grid grid-cols-2 gap-2 w-full",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col gap-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                height: "150px",
                                                                                                width: "100%"
                                                                                            },
                                                                                            className: "jsx-20ca2f99cd134e45",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                                value: chart.optivis,
                                                                                                maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                                color: "#f06600",
                                                                                                height: "100%",
                                                                                                formatter: formatter
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 633,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 627,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 626,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex flex-col gap-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                height: "150px",
                                                                                                width: "100%"
                                                                                            },
                                                                                            className: "jsx-20ca2f99cd134e45",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                                value: chart.traditional,
                                                                                                maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                                color: "#231f52",
                                                                                                height: "100%",
                                                                                                formatter: formatter
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 653,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 647,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 646,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20ca2f99cd134e45" + " " + "flex-1 min-w-0 h-full flex flex-col",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-20ca2f99cd134e45" + " " + "figma-nine-slice figma-home-panel-middle relative px-[42px] py-9 flex-1 flex flex-col overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-20ca2f99cd134e45" + " " + "w-full overflow-y-auto flex-1 min-h-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: "trial-design-summary",
                                                        className: "jsx-20ca2f99cd134e45" + " " + "mb-[100px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-h2 text-[#2d1067] mb-[44px]",
                                                                children: "Trial Design Conditions Summary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex-1 bg-white rounded-[16px] p-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex justify-left mb-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            width: "175px",
                                                                                            height: "24px",
                                                                                            borderRadius: "100px"
                                                                                        },
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "bg-[#ededed] flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-semibold leading-[18.02px] tracking-[-0.51px] text-[#231f52]",
                                                                                            children: "Endpoints Design"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 698,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 690,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 689,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "min-h-[200px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "w-full",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                                className: "jsx-20ca2f99cd134e45",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                    className: "jsx-20ca2f99cd134e45",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "Endpoint Type"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 708,
                                                                                                            columnNumber: 35
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "No"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 711,
                                                                                                            columnNumber: 35
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "Outcome"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 714,
                                                                                                            columnNumber: 35
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "Type"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 717,
                                                                                                            columnNumber: 35
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "Nominal Power"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 720,
                                                                                                            columnNumber: 35
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "Threshold"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 723,
                                                                                                            columnNumber: 35
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-left py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                            children: "Expected Effect size"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 726,
                                                                                                            columnNumber: 35
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                    lineNumber: 707,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 706,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                                className: "jsx-20ca2f99cd134e45",
                                                                                                children: [
                                                                                                    primaryEndpoints.map((endpoint, index)=>{
                                                                                                        const isFirstPrimary = index === 0;
                                                                                                        const effectSize = endpoint.effectSize;
                                                                                                        // 색상 결정: High (7.0~10.0 초록), Moderate (4.0~6.9 파랑), Low (0.1~3.9 빨강)
                                                                                                        let barColor = "#f06600"; // 기본값
                                                                                                        if (effectSize >= 7.0 && effectSize <= 10.0) {
                                                                                                            barColor = "#22c55e"; // 초록색
                                                                                                        } else if (effectSize >= 4.0 && effectSize <= 6.9) {
                                                                                                            barColor = "#3b82f6"; // 파랑색
                                                                                                        } else if (effectSize >= 0.1 && effectSize <= 3.9) {
                                                                                                            barColor = "#ef4444"; // 빨강색
                                                                                                        }
                                                                                                        const barWidth = Math.min((effectSize - 0.1) / (10.0 - 0.1) * 100, 100);
                                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                            children: [
                                                                                                                isFirstPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                                    className: "jsx-20ca2f99cd134e45",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "pl-4 py-0",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#AEA9B1]"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                lineNumber: 762,
                                                                                                                                columnNumber: 45
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 761,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            colSpan: 5,
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "p-0",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#AEA9B1]"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                lineNumber: 765,
                                                                                                                                columnNumber: 45
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 764,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "pr-4 py-0",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#AEA9B1]"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                lineNumber: 768,
                                                                                                                                columnNumber: 45
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 767,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 760,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                                    className: "jsx-20ca2f99cd134e45",
                                                                                                                    children: [
                                                                                                                        index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            rowSpan: primaryEndpoints.length,
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c] align-top",
                                                                                                                            children: "Primary"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 774,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                            children: [
                                                                                                                                "#",
                                                                                                                                index + 1
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 781,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                            children: endpoint.name
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 784,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                            children: endpoint.type || "Continuous"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 787,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                            children: index === 0 ? "".concat(Math.round(nominalPower * 100), "%") : "-"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 790,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                            children: endpoint.type === "Binary" && endpoint.threshold !== null && endpoint.threshold !== undefined ? endpoint.threshold.toFixed(1) : "-"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 797,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-2",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17px] text-[#1c1b1c] whitespace-nowrap",
                                                                                                                                        children: effectSize.toFixed(1)
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                        lineNumber: 806,
                                                                                                                                        columnNumber: 45
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-1 flex-1",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-[14px] text-[#666b73] whitespace-nowrap",
                                                                                                                                                children: "Low"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                                lineNumber: 810,
                                                                                                                                                columnNumber: 47
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex-1 h-2 bg-[#787878]/20 rounded-[3px] relative max-w-[200px]",
                                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    style: {
                                                                                                                                                        width: "".concat(barWidth, "%"),
                                                                                                                                                        backgroundColor: barColor
                                                                                                                                                    },
                                                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-2 rounded-[3px]"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                                    lineNumber: 814,
                                                                                                                                                    columnNumber: 49
                                                                                                                                                }, this)
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                                lineNumber: 813,
                                                                                                                                                columnNumber: 47
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-[14px] text-[#666b73] whitespace-nowrap",
                                                                                                                                                children: "High"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                                lineNumber: 822,
                                                                                                                                                columnNumber: 47
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                        lineNumber: 809,
                                                                                                                                        columnNumber: 45
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                lineNumber: 805,
                                                                                                                                columnNumber: 43
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                            lineNumber: 804,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 772,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, "primary-".concat(index), true, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 757,
                                                                                                            columnNumber: 37
                                                                                                        }, this);
                                                                                                    }),
                                                                                                    primaryEndpoints.length > 0 && secondaryEndpoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                        className: "jsx-20ca2f99cd134e45",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "pl-4 py-0",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#AEA9B1]"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 838,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                lineNumber: 837,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                colSpan: 5,
                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "p-0",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#AEA9B1]"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 841,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                lineNumber: 840,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "pr-4 py-0",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-[1px] bg-[#AEA9B1]"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 844,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                lineNumber: 843,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 836,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    secondaryEndpoints.map((endpoint, index)=>{
                                                                                                        const effectSize = endpoint.effectSize;
                                                                                                        // 색상 결정: High (7.0~10.0 초록), Moderate (4.0~6.9 파랑), Low (0.1~3.9 빨강)
                                                                                                        let barColor = "#f06600"; // 기본값
                                                                                                        if (effectSize >= 7.0 && effectSize <= 10.0) {
                                                                                                            barColor = "#22c55e"; // 초록색
                                                                                                        } else if (effectSize >= 4.0 && effectSize <= 6.9) {
                                                                                                            barColor = "#3b82f6"; // 파랑색
                                                                                                        } else if (effectSize >= 0.1 && effectSize <= 3.9) {
                                                                                                            barColor = "#ef4444"; // 빨강색
                                                                                                        }
                                                                                                        const barWidth = Math.min((effectSize - 0.1) / (10.0 - 0.1) * 100, 100);
                                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                            className: "jsx-20ca2f99cd134e45",
                                                                                                            children: [
                                                                                                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    rowSpan: secondaryEndpoints.length,
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c] align-top",
                                                                                                                    children: "Secondary"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 875,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                    children: [
                                                                                                                        "#",
                                                                                                                        index + 1
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 882,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                    children: endpoint.name
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 885,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                    children: endpoint.type || "Continuous"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 888,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                    children: "-"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 891,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                                    children: endpoint.type === "Binary" && endpoint.threshold !== null && endpoint.threshold !== undefined ? endpoint.threshold.toFixed(1) : "-"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 894,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-2",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17px] text-[#1c1b1c] whitespace-nowrap",
                                                                                                                                children: effectSize.toFixed(1)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                lineNumber: 903,
                                                                                                                                columnNumber: 43
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex items-center gap-1 flex-1",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[14px] text-[#666b73] whitespace-nowrap",
                                                                                                                                        children: "Low"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                        lineNumber: 907,
                                                                                                                                        columnNumber: 45
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex-1 h-2 bg-[#787878]/20 rounded-[3px] relative max-w-[200px]",
                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            style: {
                                                                                                                                                width: "".concat(barWidth, "%"),
                                                                                                                                                backgroundColor: barColor
                                                                                                                                            },
                                                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "h-2 rounded-[3px]"
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                            lineNumber: 911,
                                                                                                                                            columnNumber: 47
                                                                                                                                        }, this)
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                        lineNumber: 910,
                                                                                                                                        columnNumber: 45
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[14px] text-[#666b73] whitespace-nowrap",
                                                                                                                                        children: "High"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                        lineNumber: 919,
                                                                                                                                        columnNumber: 45
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                                lineNumber: 906,
                                                                                                                                columnNumber: 43
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                        lineNumber: 902,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                    lineNumber: 901,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, "secondary-".concat(index), true, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 873,
                                                                                                            columnNumber: 37
                                                                                                        }, this);
                                                                                                    })
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 731,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 705,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 704,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-20ca2f99cd134e45" + " " + "w-[556px] bg-white rounded-[16px] p-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "inline-block px-4 py-1.5 bg-[#ededed] rounded-[100px] mb-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-semibold leading-[18.02px] tracking-[-0.51px] text-[#231f52]",
                                                                                        children: "Trial Design"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 938,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 937,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "px-[18px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex gap-14",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "space-y-2.5 flex-shrink-0",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                        children: "Primary Endpoint"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 946,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                        children: "Hypothesis Type"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 949,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                        children: "Treatment Arms"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 952,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#1c1b1c]",
                                                                                                        children: "Randomization Ratio"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 955,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 945,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "space-y-2.5",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#4f378a]",
                                                                                                        children: treatmentDuration
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 961,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#4f378a]",
                                                                                                        children: hypothesisType
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 964,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#4f378a]",
                                                                                                        children: [
                                                                                                            treatmentArms,
                                                                                                            "-arm"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 967,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-[12px] font-medium leading-[17.85px] tracking-[-0.51px] text-[#4f378a]",
                                                                                                        children: randomizationRatio
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 970,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 960,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 943,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 942,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 936,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 935,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: "prediction-accuracy",
                                                        className: "jsx-20ca2f99cd134e45" + " " + "mb-[100px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-h2 text-[#2d1067] mb-[44px]",
                                                                children: "Prediction Accuracy by Model"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 983,
                                                                columnNumber: 21
                                                            }, this),
                                                            ((_this = apiData) === null || _this === void 0 ? void 0 : _this.graph_acc_model) && apiData.graph_acc_model.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex gap-4 mb-6",
                                                                children: apiData.graph_acc_model.slice(0, 3).map((graphItem, index)=>{
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: "378px"
                                                                        },
                                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex-1 bg-white rounded-[16px] p-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "h-full flex items-center justify-center overflow-hidden",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: graphItem.model_svg,
                                                                                alt: "".concat(graphItem.model, " graph"),
                                                                                className: "jsx-20ca2f99cd134e45" + " " + "max-w-full max-h-full object-contain"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                lineNumber: 1001,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 999,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, graphItem.id, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 994,
                                                                        columnNumber: 33
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 25
                                                            }, this),
                                                            ((_this1 = apiData) === null || _this1 === void 0 ? void 0 : _this1.result_prec_model) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-20ca2f99cd134e45" + " " + "bg-white rounded-[16px] p-2 mb-5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "overflow-x-auto relative",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                className: "jsx-20ca2f99cd134e45" + " " + "w-full",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                        className: "jsx-20ca2f99cd134e45",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                            className: "jsx-20ca2f99cd134e45",
                                                                                            children: Object.entries(apiData.result_prec_model.table_head).map((param, index, array)=>{
                                                                                                let [key, header] = param;
                                                                                                const isFirstCell = index === 0;
                                                                                                const isLastCell = index === array.length - 1;
                                                                                                // description이 있는 항목들만 필터링하여 번호 매기기
                                                                                                const headersWithDescription = Object.entries(apiData.result_prec_model.table_head).filter((param)=>{
                                                                                                    let [_, h] = param;
                                                                                                    return h.description;
                                                                                                });
                                                                                                const descriptionIndex = headersWithDescription.findIndex((param)=>{
                                                                                                    let [k] = param;
                                                                                                    return k === key;
                                                                                                });
                                                                                                const hasDescription = descriptionIndex !== -1;
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "text-left py-5 px-4 text-primary-15 font-medium relative",
                                                                                                    children: [
                                                                                                        hasDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "absolute top-3 left-1 text-body5 text-primary-15 leading-none",
                                                                                                            children: [
                                                                                                                descriptionIndex + 1,
                                                                                                                ")"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 1058,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "text-body2",
                                                                                                            children: header.display_value
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 1062,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            style: {
                                                                                                                left: isFirstCell ? "16px" : "0",
                                                                                                                right: isLastCell ? "16px" : "0"
                                                                                                            },
                                                                                                            className: "jsx-20ca2f99cd134e45" + " " + "absolute bottom-0 border-b border-[#e2e1e5]"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                            lineNumber: 1065,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, key, true, {
                                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                    lineNumber: 1053,
                                                                                                    columnNumber: 41
                                                                                                }, this);
                                                                                            })
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                            lineNumber: 1020,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 1019,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                        className: "jsx-20ca2f99cd134e45",
                                                                                        children: apiData.result_prec_model.data.map((row, rowIndex)=>{
                                                                                            const keys = Object.keys(apiData.result_prec_model.table_head);
                                                                                            const isLastRow = rowIndex === apiData.result_prec_model.data.length - 1;
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                className: "jsx-20ca2f99cd134e45",
                                                                                                children: keys.map((key, cellIndex)=>{
                                                                                                    const value = row[key];
                                                                                                    let displayValue = "";
                                                                                                    if (key === "r_square") {
                                                                                                        displayValue = value.toFixed(3);
                                                                                                    } else if (key === "mse") {
                                                                                                        displayValue = value.toFixed(2);
                                                                                                    } else if (key === "rmse") {
                                                                                                        displayValue = value.toFixed(2);
                                                                                                    } else if (key === "ratio") {
                                                                                                        displayValue = value.toFixed(3);
                                                                                                    } else {
                                                                                                        displayValue = String(value);
                                                                                                    }
                                                                                                    const isFirstCell = cellIndex === 0;
                                                                                                    const isLastCell = cellIndex === keys.length - 1;
                                                                                                    const showBorder = rowIndex > 0;
                                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "py-3 px-4 text-body2m text-neutral-30 ".concat(showBorder ? "relative" : ""),
                                                                                                        children: [
                                                                                                            displayValue,
                                                                                                            showBorder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                style: {
                                                                                                                    left: isFirstCell ? "16px" : "0",
                                                                                                                    right: isLastCell ? "16px" : "0"
                                                                                                                },
                                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "absolute top-0 border-t border-[#e2e1e5]"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                                lineNumber: 1125,
                                                                                                                columnNumber: 49
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, key, true, {
                                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                        lineNumber: 1117,
                                                                                                        columnNumber: 45
                                                                                                    }, this);
                                                                                                })
                                                                                            }, row.id, false, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 1092,
                                                                                                columnNumber: 39
                                                                                            }, this);
                                                                                        })
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 1078,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                lineNumber: 1018,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 1017,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 1016,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    (()=>{
                                                                        const descriptions = Object.entries(apiData.result_prec_model.table_head).filter((param)=>{
                                                                            let [_, header] = param;
                                                                            return header.description && header.description.trim() !== "";
                                                                        }).map((param)=>{
                                                                            let [_, header] = param;
                                                                            return header.description;
                                                                        });
                                                                        if (descriptions.length === 0) return null;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "flex gap-6",
                                                                            children: descriptions.map((description, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-20ca2f99cd134e45" + " " + "flex-1",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-body4m text-[#666b73]",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-body4m text-[#666b73]",
                                                                                                children: [
                                                                                                    index + 1,
                                                                                                    ")"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                                lineNumber: 1171,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            " ",
                                                                                            description
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                        lineNumber: 1170,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, index, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 1169,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 1167,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                    })()
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: "demonstration-robustness",
                                                        className: "jsx-20ca2f99cd134e45" + " " + "mb-[100px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "text-h2 text-[#2d1067] mb-[44px]",
                                                                children: "Demonstration of Robustness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 1187,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "grid grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                                                        stepNumber: 1,
                                                                        title: "Type I safety",
                                                                        description: "Demonstrate appropriate control of the Type I error under the null treatment effect.",
                                                                        chartContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step1TypeISafetyChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step1TypeISafetyChart"], {
                                                                            apiData: apiData
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 1198,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 1193,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                                                        stepNumber: 2,
                                                                        title: "Sample size reduction",
                                                                        description: "Demonstrate that efficiency gains from prognostic adjustment scale smoothly with model performance and remain stable under degradation of predictive accuracy.",
                                                                        chartContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "w-full h-full flex gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step2VarianceDeclineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step2VarianceDeclineChart"], {
                                                                                    apiData: apiData
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 1209,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step2BoxplotChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step2BoxplotChart"], {
                                                                                    apiData: apiData
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 1210,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 1208,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 1203,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                                                        stepNumber: 3,
                                                                        title: "Data robustness",
                                                                        description: "Demonstrate the robustness of statistical conclusions under realistic data complexities, including missingness and outcome non linearity.",
                                                                        chartContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-20ca2f99cd134e45" + " " + "w-full h-full flex gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step3AbsolutePerformanceChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step3AbsolutePerformanceChart"], {
                                                                                    apiData: apiData
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 1222,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step3PerformanceGainChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step3PerformanceGainChart"], {
                                                                                    apiData: apiData
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                                    lineNumber: 1223,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 1221,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 1216,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepCard, {
                                                                        stepNumber: 4,
                                                                        title: "Decision stability size reduction",
                                                                        description: "Demonstrate the stability of key trial decisions (e.g., go/no go conclusions) across plausible perturbations in design assumptions and data generating processes.",
                                                                        chartContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ats$2f$simulation$2f$report$2f$charts$2f$Step4DecisionStabilityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step4DecisionStabilityChart"], {
                                                                            apiData: apiData
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                            lineNumber: 1234,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 1229,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 19
                                                    }, this),
                                                    ((_this2 = apiData) === null || _this2 === void 0 ? void 0 : _this2.appendix) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-20ca2f99cd134e45",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-20ca2f99cd134e45" + " " + "flex items-center justify-between mb-[44px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "jsx-20ca2f99cd134e45" + " " + "text-h2 text-[#2d1067]",
                                                                    children: apiData.appendix.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                    lineNumber: 1244,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 1243,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: "132px"
                                                                },
                                                                className: "jsx-20ca2f99cd134e45" + " " + "bg-white rounded-[16px] p-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-20ca2f99cd134e45" + " " + "h-full flex items-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-20ca2f99cd134e45" + " " + "text-body3m text-neutral-20 max-w-[1000px]",
                                                                        children: apiData.appendix.content
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                        lineNumber: 1255,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                lineNumber: 1250,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 1242,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-20ca2f99cd134e45" + " " + "flex items-center justify-end py-6 flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-20ca2f99cd134e45" + " " + "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "jsx-20ca2f99cd134e45" + " " + "px-5 py-2.5 bg-[#aaaaad] text-white rounded-[100px] text-body3 hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2",
                                                                    children: "Save Simulation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                    lineNumber: 1265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    variant: "orange",
                                                                    size: "md",
                                                                    onClick: ()=>router.push("/"),
                                                                    className: "rounded-[100px]",
                                                                    children: "Go to Main"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                                    lineNumber: 1268,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                        lineNumber: 1263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                            lineNumber: 678,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "20ca2f99cd134e45",
                        children: "#report-content .text-h2{letter-spacing:-.84px!important;font-size:28px!important;line-height:28px!important}#report-content .text-h3{letter-spacing:-.5px!important;font-size:25px!important;line-height:25px!important}#report-content .text-h4{letter-spacing:-.6px!important;font-size:20px!important;line-height:20px!important}#report-content .text-body2{letter-spacing:-.56px!important;font-size:14px!important;line-height:16.8px!important}#report-content .text-body2m{letter-spacing:-.42px!important;font-size:14px!important;line-height:16.8px!important}#report-content .text-body3,#report-content .text-body3m{letter-spacing:-.36px!important;font-size:12px!important;line-height:12.6px!important}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {
                isLoading: isDownloadingPDF
            }, void 0, false, {
                fileName: "[project]/src/app/ats/simulation/report/page.tsx",
                lineNumber: 1322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ReportPage, "zG72QFZNBUY3vJ30cgQZEwhh0E0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"]
    ];
});
_c1 = ReportPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepCard");
__turbopack_context__.k.register(_c1, "ReportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dd83aee5._.js.map