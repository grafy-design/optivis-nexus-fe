(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    let { icon, alt, size = "md", variant: _variant = "rounded", isActive: _isActive = false, className, ...props } = param;
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
    simCondCompleted: false,
    simSmilesCompleted: false,
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
        setSimCondCompleted: (completed)=>set({
                simCondCompleted: completed
            }),
        setSimSmilesCompleted: (completed)=>set({
                simSmilesCompleted: completed
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
"[project]/src/components/layout/DrdHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrdHeader",
    ()=>DrdHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const DrdHeader = (param)=>{
    let { step } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleGoBack = ()=>{
        if (step === 1) {
            router.push("/");
        } else if (step === 2) {
            router.push("/drd/default-setting");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between px-[28px] py-[24px] h-[90px] w-full bg-[#E7E5E7] sticky top-0 z-[90] shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-[36px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/drd/default-setting"),
                        className: "flex items-center gap-[8px] bg-transparent border-none p-0 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-[16px] h-[16px] rounded-full ".concat(step === 1 ? 'bg-[#262255]' : 'bg-[#929090]'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-[10px] font-bold",
                                    style: {
                                        lineHeight: 1
                                    },
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[19.5px] font-semibold tracking-[-0.78px] ".concat(step === 1 ? 'text-[#262255]' : 'text-[#787776]'),
                                children: "Default Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#B2B1B1] shadow-[0px_1px_2px_rgba(0,0,0,0.1)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "5",
                            height: "8",
                            viewBox: "0 0 8 12",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 2L6 6L2 10",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/DrdHeader.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/drd/simulation-setting"),
                        className: "flex items-center gap-[8px] bg-transparent border-none p-0 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-[16px] h-[16px] rounded-full ".concat(step === 2 ? 'bg-[#262255]' : 'bg-[#929090]'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-[10px] font-bold",
                                    style: {
                                        lineHeight: 1
                                    },
                                    children: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[19.5px] font-semibold tracking-[-0.78px] ".concat(step === 2 ? 'text-[#262255]' : 'text-[#787776]'),
                                children: "Simulation Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#B2B1B1] shadow-[0px_1px_2px_rgba(0,0,0,0.1)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "5",
                            height: "8",
                            viewBox: "0 0 8 12",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 2L6 6L2 10",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/DrdHeader.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/drd/simulation-result"),
                        className: "flex items-center gap-[8px] bg-transparent border-none p-0 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-[16px] h-[16px] rounded-full ".concat(step === 3 ? 'bg-[#262255]' : 'bg-[#929090]'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-[10px] font-bold",
                                    style: {
                                        lineHeight: 1
                                    },
                                    children: "3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[19.5px] font-semibold tracking-[-0.78px] ".concat(step === 3 ? 'text-[#262255]' : 'text-[#787776]'),
                                children: "Dash Board"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            step !== 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-[12px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGoBack,
                        title: "Go Back",
                        className: "relative w-[48px] h-[48px] flex items-center justify-center border-none cursor-pointer p-0 bg-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/icons/drd-btn-bg.png",
                                alt: "",
                                "aria-hidden": "true",
                                className: "absolute inset-0 w-full h-full object-cover pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                className: "relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19 12H5M5 12L12 19M5 12L12 5",
                                    stroke: "#484646",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        title: "Help",
                        className: "relative w-[48px] h-[48px] flex items-center justify-center border-none cursor-pointer p-0 bg-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/icons/drd-btn-bg.png",
                                alt: "",
                                "aria-hidden": "true",
                                className: "absolute inset-0 w-full h-full object-cover pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 text-[#484646] font-bold text-[18px] leading-none",
                                children: "?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/DrdHeader.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/DrdHeader.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/DrdHeader.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DrdHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DrdHeader;
var _c;
__turbopack_context__.k.register(_c, "DrdHeader");
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
const computeScale = (mode)=>{
    if (mode === "none") return 1;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const raw = mode === "height" ? vh / DESIGN_VIEWPORT_HEIGHT : mode === "fit" ? Math.min(vw / DESIGN_VIEWPORT_WIDTH, vh / DESIGN_VIEWPORT_HEIGHT) : vw / DESIGN_VIEWPORT_WIDTH;
    return Math.max(MIN_SCALE, Math.min(1, raw));
};
function useAreaScale() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "width";
    _s();
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useAreaScale.useLayoutEffect": ()=>{
            let rafId;
            const applyScale = {
                "useAreaScale.useLayoutEffect.applyScale": ()=>{
                    const nextScale = computeScale(mode);
                    setScale({
                        "useAreaScale.useLayoutEffect.applyScale": (prev)=>Math.abs(prev - nextScale) < 0.0001 ? prev : nextScale
                    }["useAreaScale.useLayoutEffect.applyScale"]);
                }
            }["useAreaScale.useLayoutEffect.applyScale"];
            const handleResize = {
                "useAreaScale.useLayoutEffect.handleResize": ()=>{
                    cancelAnimationFrame(rafId);
                    rafId = requestAnimationFrame({
                        "useAreaScale.useLayoutEffect.handleResize": ()=>{
                            applyScale();
                        }
                    }["useAreaScale.useLayoutEffect.handleResize"]);
                }
            }["useAreaScale.useLayoutEffect.handleResize"];
            applyScale();
            window.addEventListener("resize", handleResize);
            return ({
                "useAreaScale.useLayoutEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    cancelAnimationFrame(rafId);
                }
            })["useAreaScale.useLayoutEffect"];
        }
    }["useAreaScale.useLayoutEffect"], [
        mode
    ]);
    return {
        scale
    };
} // --- [TEMP_SCALE_END] ---
_s(useAreaScale, "BA9p4Y12OdE9OIszgPBvNPoWYzQ=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$DrdHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/DrdHeader.tsx [app-client] (ecmascript)");
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
    let { children, headerType = "default", drdStep = 1, scaleMode = "width" } = param;
    _s();
    const [isLayoutReady, setIsLayoutReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AppLayout.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.__NEXUS_LAYOUT_READY__ === true;
        }
    }["AppLayout.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLayout.useEffect": ()=>{
            if (window.__NEXUS_LAYOUT_READY__ !== true) {
                window.__NEXUS_LAYOUT_READY__ = true;
            }
            if (!isLayoutReady) {
                setIsLayoutReady(true);
            }
        }
    }["AppLayout.useEffect"], [
        isLayoutReady
    ]);
    // --- [TEMP_SCALE_START] proportional scaling ---
    const { scale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAreaScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAreaScale"])(scaleMode);
    // --- [TEMP_SCALE_END] ---
    if (!isLayoutReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100vw",
                height: "100vh",
                backgroundColor: "#E7E5E7"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return(/*
     * Figma 전체 프레임: 2560×1314px
     * bg: rgb(231,229,231) = #E7E5E7
     * Sidebar: 96px 고정
     * 나머지: sidebar 이후 영역
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            // --- [TEMP_SCALE_START] zoom on root for uniform proportional scaling ---
            zoom: scale,
            width: "".concat(100 / scale, "vw"),
            height: "".concat(100 / scale, "vh"),
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
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 90,
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
                        lineNumber: 118,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : headerType === "tsi" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TSIHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TSIHeader"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : headerType === "drd" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$DrdHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrdHeader"], {
                        step: drdStep
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 124,
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
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppLayout.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(AppLayout, "AfhmW1YYZc8l8IL+RmUesXARjX8=", false, function() {
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
"[project]/src/app/drd/simulation-result/charts/SpaghettiPlotChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaghettiPlotChart",
    ()=>SpaghettiPlotChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
"use client";
;
;
const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";
// Figma 디자인 기준 mock 데이터 (월별 HbA1c 감소량)
const months = [
    0,
    3,
    6,
    9,
    12,
    15,
    18,
    21,
    24
];
const strategyB = [
    0,
    -0.3,
    -0.8,
    -1.4,
    -1.8,
    -2.2,
    -2.6,
    -2.7,
    -2.5
];
const strategyA = [
    0,
    -0.1,
    -0.4,
    -0.9,
    -1.5,
    -2.0,
    -2.4,
    -2.6,
    -2.4
];
const strategyCyan = [
    0,
    0.1,
    -0.1,
    -0.6,
    -1.0,
    -1.8,
    -2.2,
    -2.3,
    -2.2
];
function SpaghettiPlotChart() {
    const option = {
        grid: {
            left: 72,
            right: 16,
            top: 12,
            bottom: 68
        },
        xAxis: {
            type: "category",
            data: months,
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: NEUTRAL_60,
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: -0.27
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: NEUTRAL_60,
                    opacity: 0.25,
                    type: "solid",
                    width: 1
                }
            },
            name: "Time since symptom onset (Months)",
            nameLocation: "middle",
            nameGap: 32,
            nameTextStyle: {
                color: "#1c1b1b",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: -0.55
            }
        },
        yAxis: {
            type: "value",
            min: -4,
            max: 0,
            interval: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: -0.27,
                formatter: (v)=>v.toFixed(1)
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: NEUTRAL_60,
                    opacity: 0.25,
                    type: "solid",
                    width: 1
                }
            },
            name: "Reduction in HbA1c",
            nameLocation: "middle",
            nameGap: 44,
            nameTextStyle: {
                color: "#1c1b1b",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: -0.55
            }
        },
        series: [
            {
                name: "B: Add-on",
                type: "line",
                data: strategyB,
                smooth: true,
                symbol: "none",
                lineStyle: {
                    color: COLOR_A,
                    width: 2.5
                },
                itemStyle: {
                    color: COLOR_A
                },
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: true,
                        position: "insideEndTop",
                        formatter: "B: Add-on",
                        color: COLOR_A,
                        fontFamily: "Inter",
                        fontSize: 9,
                        fontWeight: 500
                    },
                    lineStyle: {
                        color: COLOR_A,
                        type: "dashed",
                        width: 1,
                        opacity: 0.6
                    },
                    data: [
                        {
                            xAxis: 9
                        }
                    ]
                }
            },
            {
                name: "A: Switch",
                type: "line",
                data: strategyA,
                smooth: true,
                symbol: "none",
                lineStyle: {
                    color: COLOR_B,
                    width: 2.5
                },
                itemStyle: {
                    color: COLOR_B
                },
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: true,
                        position: "insideEndTop",
                        formatter: "A: Switch",
                        color: COLOR_B,
                        fontFamily: "Inter",
                        fontSize: 9,
                        fontWeight: 500
                    },
                    lineStyle: {
                        color: COLOR_B,
                        type: "dashed",
                        width: 1,
                        opacity: 0.6
                    },
                    data: [
                        {
                            xAxis: 15
                        }
                    ]
                }
            },
            {
                name: "C",
                type: "line",
                data: strategyCyan,
                smooth: true,
                symbol: "none",
                lineStyle: {
                    color: COLOR_C,
                    width: 2.5
                },
                itemStyle: {
                    color: COLOR_C
                },
                markLine: {
                    silent: true,
                    symbol: "none",
                    label: {
                        show: false
                    },
                    lineStyle: {
                        color: "#AAAAAD",
                        type: "dotted",
                        width: 1.5
                    },
                    data: [
                        {
                            yAxis: -1.0,
                            name: "Target : -1.0% at Month 12"
                        }
                    ]
                }
            }
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
                    letterSpacing: -0.27
                }
            }
        ],
        legend: {
            show: true,
            bottom: 16,
            icon: "roundRect",
            itemWidth: 24,
            itemHeight: 3,
            data: [
                {
                    name: "B: Add-on",
                    itemStyle: {
                        color: COLOR_A
                    },
                    lineStyle: {
                        color: COLOR_A
                    }
                },
                {
                    name: "A: Switch",
                    itemStyle: {
                        color: COLOR_B
                    },
                    lineStyle: {
                        color: COLOR_B
                    }
                }
            ],
            textStyle: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500
            }
        },
        tooltip: {
            show: false
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        option: option,
        style: {
            width: "100%",
            height: "100%"
        },
        notMerge: true
    }, void 0, false, {
        fileName: "[project]/src/app/drd/simulation-result/charts/SpaghettiPlotChart.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c = SpaghettiPlotChart;
var _c;
__turbopack_context__.k.register(_c, "SpaghettiPlotChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/drd/simulation-result/charts/HistogramChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistogramChart",
    ()=>HistogramChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
"use client";
;
;
const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";
// Figma 디자인 기준 mock 데이터 (bar top position → count)
// X: -2.0 ~ 1.0, 구간 0.1씩 / Y: patient count
const xLabels = [
    "-2.0",
    "-1.9",
    "-1.8",
    "-1.7",
    "-1.6",
    "-1.5",
    "-1.4",
    "-1.3",
    "-1.2",
    "-1.1",
    "-1.0",
    "-0.9",
    "-0.8",
    "-0.7",
    "-0.6",
    "-0.5",
    "-0.4",
    "-0.3",
    "-0.2",
    "-0.1",
    "0.0",
    "0.1",
    "0.2",
    "0.3",
    "0.4",
    "0.5",
    "0.6",
    "0.7",
    "0.8",
    "0.9",
    "1.0"
];
const dataA = [
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    5,
    9,
    11,
    12,
    14,
    24,
    25,
    19,
    22,
    23,
    30,
    48,
    46,
    22,
    11,
    5,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const dataB = [
    0,
    0,
    0,
    0,
    3,
    3,
    4,
    5,
    13,
    14,
    18,
    19,
    23,
    31,
    32,
    23,
    28,
    27,
    36,
    48,
    29,
    18,
    12,
    9,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const dataC = [
    6,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    16,
    17,
    18,
    20,
    21,
    22,
    23,
    24,
    26,
    29,
    35,
    42,
    48,
    43,
    38,
    30,
    22,
    17,
    14,
    11,
    9
];
function HistogramChart() {
    const option = {
        grid: {
            left: 72,
            right: 16,
            top: 12,
            bottom: 68
        },
        xAxis: {
            type: "category",
            data: xLabels,
            axisLine: {
                lineStyle: {
                    color: NEUTRAL_60,
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500,
                interval: 4,
                formatter: (v)=>v
            },
            splitLine: {
                show: false
            },
            name: "Primary Outcome Change (△)",
            nameLocation: "middle",
            nameGap: 32,
            nameTextStyle: {
                color: "#1c1b1b",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: -0.55
            }
        },
        yAxis: {
            type: "value",
            min: 0,
            max: 50,
            interval: 10,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: NEUTRAL_60,
                    opacity: 0.2,
                    type: "solid",
                    width: 1
                }
            },
            name: "Patient Count",
            nameLocation: "middle",
            nameGap: 44,
            nameTextStyle: {
                color: "#1c1b1b",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: -0.55
            }
        },
        series: [
            {
                name: "Strategy A",
                type: "bar",
                data: dataA,
                barWidth: "30%",
                itemStyle: {
                    color: COLOR_A,
                    opacity: 0.8,
                    borderRadius: [
                        2,
                        2,
                        0,
                        0
                    ]
                },
                emphasis: {
                    disabled: true
                },
                markLine: {
                    silent: true,
                    symbol: "none",
                    lineStyle: {
                        color: NEUTRAL_60,
                        type: "dashed",
                        width: 1
                    },
                    data: [
                        {
                            xAxis: "0.1"
                        }
                    ],
                    label: {
                        show: false
                    }
                }
            },
            {
                name: "Strategy B",
                type: "bar",
                data: dataB,
                barWidth: "30%",
                itemStyle: {
                    color: COLOR_B,
                    opacity: 0.8,
                    borderRadius: [
                        2,
                        2,
                        0,
                        0
                    ]
                },
                emphasis: {
                    disabled: true
                }
            },
            {
                name: "Strategy C",
                type: "bar",
                data: dataC,
                barWidth: "30%",
                itemStyle: {
                    color: COLOR_C,
                    opacity: 0.8,
                    borderRadius: [
                        2,
                        2,
                        0,
                        0
                    ]
                },
                emphasis: {
                    disabled: true
                }
            }
        ],
        legend: {
            show: true,
            bottom: 16,
            icon: "roundRect",
            itemWidth: 24,
            itemHeight: 8,
            data: [
                {
                    name: "Strategy A",
                    itemStyle: {
                        color: COLOR_A
                    }
                },
                {
                    name: "Strategy B",
                    itemStyle: {
                        color: COLOR_B
                    }
                },
                {
                    name: "Strategy C",
                    itemStyle: {
                        color: COLOR_C
                    }
                }
            ],
            textStyle: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500
            }
        },
        tooltip: {
            show: false
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        option: option,
        style: {
            width: "100%",
            height: "100%"
        },
        notMerge: true
    }, void 0, false, {
        fileName: "[project]/src/app/drd/simulation-result/charts/HistogramChart.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c = HistogramChart;
var _c;
__turbopack_context__.k.register(_c, "HistogramChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/drd/simulation-result/charts/BubbleChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbleChart",
    ()=>BubbleChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
"use client";
;
;
const COLOR_A = "#3a11d8";
const COLOR_B = "#f06600";
const COLOR_C = "#24c6c9";
const NEUTRAL_10 = "#1c1b1b";
const NEUTRAL_30 = "#484646";
const NEUTRAL_60 = "#929090";
function BubbleChart() {
    const option = {
        grid: {
            left: 56,
            right: 16,
            top: 12,
            bottom: 52
        },
        xAxis: {
            type: "value",
            min: 0,
            max: 10,
            interval: 5,
            axisLine: {
                lineStyle: {
                    color: NEUTRAL_60,
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: -0.27
            },
            splitLine: {
                show: false
            },
            name: "△HbA1c",
            nameLocation: "middle",
            nameGap: 28,
            nameTextStyle: {
                color: NEUTRAL_10,
                fontFamily: "Inter",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: -0.55
            }
        },
        yAxis: {
            type: "value",
            min: 0,
            max: 8,
            interval: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: NEUTRAL_30,
                fontFamily: "Inter",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: -0.27
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: NEUTRAL_60,
                    opacity: 0.2,
                    type: "solid",
                    width: 1
                }
            },
            name: "AE probability(%)",
            nameLocation: "middle",
            nameGap: 40,
            nameTextStyle: {
                color: NEUTRAL_10,
                fontFamily: "Inter",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: -0.55
            }
        },
        series: [
            {
                // Strategy C (Teal) - 작은 버블, 좌측 상단
                type: "scatter",
                data: [
                    [
                        2.5,
                        2.8
                    ]
                ],
                symbolSize: 46,
                itemStyle: {
                    color: COLOR_C,
                    opacity: 0.85
                },
                label: {
                    show: true,
                    formatter: "C",
                    color: "#fff",
                    fontFamily: "Inter",
                    fontSize: 11,
                    fontWeight: 700
                }
            },
            {
                // Strategy A (Blue) - 중간 버블
                type: "scatter",
                data: [
                    [
                        3.5,
                        2.2
                    ]
                ],
                symbolSize: 62,
                itemStyle: {
                    color: COLOR_A,
                    opacity: 0.88
                },
                label: {
                    show: true,
                    formatter: "A",
                    color: "#fff",
                    fontFamily: "Inter",
                    fontSize: 11,
                    fontWeight: 700
                }
            },
            {
                // Strategy B (Orange) - 큰 버블, 우측
                type: "scatter",
                data: [
                    [
                        8.5,
                        6.0
                    ]
                ],
                symbolSize: 96,
                itemStyle: {
                    color: COLOR_B,
                    opacity: 0.9
                },
                label: {
                    show: true,
                    formatter: "B",
                    color: "#fff",
                    fontFamily: "Inter",
                    fontSize: 13,
                    fontWeight: 700
                }
            }
        ],
        tooltip: {
            show: false
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        option: option,
        style: {
            width: "100%",
            height: "100%"
        },
        notMerge: true
    }, void 0, false, {
        fileName: "[project]/src/app/drd/simulation-result/charts/BubbleChart.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c = BubbleChart;
var _c;
__turbopack_context__.k.register(_c, "BubbleChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/drd/simulation-result/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulationResultPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drd$2f$simulation$2d$result$2f$charts$2f$SpaghettiPlotChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/drd/simulation-result/charts/SpaghettiPlotChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drd$2f$simulation$2d$result$2f$charts$2f$HistogramChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/drd/simulation-result/charts/HistogramChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drd$2f$simulation$2d$result$2f$charts$2f$BubbleChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/drd/simulation-result/charts/BubbleChart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ?? ?대?吏 ?먯뀑 寃쎈줈 ??????????????????????????????????????????????????????????
const imgFrame1618873826 = "/figma-assets/159570a2cd4a5962c7b68be950ef1ec97d5cd2e1.svg";
// ?? ?됱긽 ?곸닔 ????????????????????????????????????????????????????????????????
const COLOR_STRATEGY_A = "#3a11d8"; // chart-set06-group01
const COLOR_STRATEGY_B = "#f06600"; // chart-set06-group02 / secondary-60
const COLOR_STRATEGY_C = "#24c6c9"; // chart-set06-group03
const COLOR_PRIMARY = "#262255"; // primary-15
const COLOR_NEUTRAL_10 = "#1c1b1b";
const COLOR_NEUTRAL_30 = "#484646";
const COLOR_NEUTRAL_40 = "#5f5e5e";
const COLOR_NEUTRAL_60 = "#929090";
const COLOR_TABLE_BODY = "#787776";
function StrategyCard(param) {
    let { name, nameColor, target, drugs, extraDrug, lineColor } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            background: "#ffffff",
            borderRadius: "16px",
            flexShrink: 0,
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 16px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize: "clamp(14px, 1.4vw, 22px)",
                            color: nameColor,
                            letterSpacing: "-0.66px",
                            lineHeight: 1.2
                        },
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/basics/info.svg",
                        alt: "info",
                        width: 16,
                        height: 16,
                        style: {
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "2px",
                    background: lineColor,
                    margin: "8px 0 6px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0 16px 12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: "clamp(11px, 1vw, 16px)",
                            color: COLOR_NEUTRAL_10,
                            letterSpacing: "-0.5px",
                            lineHeight: 1.1,
                            margin: "0 0 4px"
                        },
                        children: target
                    }, void 0, false, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px"
                        },
                        children: [
                            drugs.map((drug, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 500,
                                        fontSize: "clamp(10px, 0.9vw, 14px)",
                                        color: COLOR_NEUTRAL_40,
                                        letterSpacing: "-0.42px",
                                        lineHeight: 1.1,
                                        margin: 0,
                                        paddingLeft: "16px"
                                    },
                                    children: [
                                        i + 1,
                                        ". ",
                                        drug
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)),
                            extraDrug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    paddingLeft: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imgFrame1618873826,
                                        alt: "",
                                        style: {
                                            height: "11px",
                                            objectFit: "contain"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "Inter",
                                            fontWeight: 500,
                                            fontSize: "clamp(10px, 0.9vw, 14px)",
                                            color: COLOR_NEUTRAL_40,
                                            letterSpacing: "-0.42px",
                                            margin: 0
                                        },
                                        children: extraDrug
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = StrategyCard;
// ?? ?ы띁: Primary Outcome ?뚯씠釉?(Efficacy ?? ???????????????????????????????
function PrimaryOutcomeTable() {
    const rows = [
        {
            strategy: "A",
            mean: "-1.1%",
            ci: "(-0.9, -1.3)",
            median: "-1.0",
            nnt: "6.2",
            nntW24: "48% (CI 44~52%)"
        },
        {
            strategy: "B",
            mean: "-0.6%",
            ci: "(-0.9, -1.3)",
            median: "-0.5",
            nnt: "11.4",
            nntW24: "26% (CI 22~30%)"
        },
        {
            strategy: "C",
            mean: "-0.6%",
            ci: "(-0.9, -1.3)",
            median: "-0.5",
            nnt: "11.4",
            nntW24: "26% (CI 22~30%)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: {
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "Inter",
                tableLayout: "fixed",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "16%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "13%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "19%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "13%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "12%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "27%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            borderBottom: "1px solid ".concat(COLOR_NEUTRAL_60)
                        },
                        children: [
                            "Strategy",
                            "Mean",
                            "95% CI",
                            "Median",
                            "NNT*",
                            "NNT at Week 24"
                        ].map((h, hi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                style: {
                                    fontWeight: 700,
                                    fontSize: "clamp(9px, 0.8vw, 14px)",
                                    color: COLOR_PRIMARY,
                                    textAlign: "left",
                                    padding: hi === 0 ? "0 6px 0 12px" : hi === 5 ? "0 12px 0 6px" : "0 6px",
                                    letterSpacing: "-0.42px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: h
                            }, h, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: rows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            style: {
                                borderBottom: idx < rows.length - 1 ? "1px solid #c6c5c9" : "none"
                            },
                            children: [
                                row.strategy,
                                row.mean,
                                row.ci,
                                row.median,
                                row.nnt,
                                row.nntW24
                            ].map((cell, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        fontWeight: ci === 0 ? 600 : 400,
                                        fontSize: "clamp(9px, 0.8vw, 13px)",
                                        color: COLOR_TABLE_BODY,
                                        padding: ci === 0 ? "0 6px 0 12px" : ci === 5 ? "0 12px 0 6px" : "0 6px",
                                        letterSpacing: "-0.39px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    children: cell
                                }, ci, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this))
                        }, row.strategy, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c1 = PrimaryOutcomeTable;
// ?? ?ы띁: Response Probability ?뚯씠釉?(Efficacy ?? ??????????????????????????
function ResponseProbabilityTable() {
    const rows = [
        {
            label: "Strong responder",
            a: {
                val: "32%(399)",
                bold: true,
                color: COLOR_STRATEGY_A
            },
            b: {
                val: "25%(275)",
                bold: false,
                color: COLOR_TABLE_BODY
            },
            c: {
                val: "25%(275)",
                bold: false,
                color: COLOR_TABLE_BODY
            }
        },
        {
            label: "Partial responder",
            a: {
                val: "21%(262)",
                bold: false,
                color: COLOR_TABLE_BODY
            },
            b: {
                val: "28%(298)",
                bold: false,
                color: COLOR_TABLE_BODY
            },
            c: {
                val: "28%(298)",
                bold: false,
                color: COLOR_TABLE_BODY
            }
        },
        {
            label: "Non responder",
            a: {
                val: "18%(225)",
                bold: false,
                color: COLOR_TABLE_BODY
            },
            b: {
                val: "37%(420)",
                bold: true,
                color: COLOR_STRATEGY_B
            },
            c: {
                val: "37%(420)",
                bold: true,
                color: COLOR_STRATEGY_C
            }
        },
        {
            label: "Deteriorator",
            a: {
                val: "6%(75)",
                bold: false,
                color: COLOR_TABLE_BODY
            },
            b: {
                val: "10%(88)",
                bold: false,
                color: COLOR_TABLE_BODY
            },
            c: {
                val: "10%(88)",
                bold: false,
                color: COLOR_TABLE_BODY
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: {
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "Inter",
                tableLayout: "fixed",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "34%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "22%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "22%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                            style: {
                                width: "22%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            borderBottom: "1px solid #e2e1e5"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                style: {
                                    padding: "0 6px 0 12px",
                                    textAlign: "left",
                                    fontWeight: 700,
                                    fontSize: "clamp(9px, 0.8vw, 14px)",
                                    color: COLOR_PRIMARY,
                                    letterSpacing: "-0.42px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: "Category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            [
                                {
                                    label: "Strategy A",
                                    color: COLOR_STRATEGY_A
                                },
                                {
                                    label: "Strategy B",
                                    color: COLOR_STRATEGY_B
                                },
                                {
                                    label: "Strategy C",
                                    color: COLOR_STRATEGY_C
                                }
                            ].map((param, hi)=>{
                                let { label, color } = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        padding: hi === 2 ? "0 12px 0 6px" : "0 6px",
                                        textAlign: "left",
                                        fontWeight: 700,
                                        fontSize: "clamp(9px, 0.8vw, 14px)",
                                        color,
                                        letterSpacing: "-0.42px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    children: label
                                }, label, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: rows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            style: {
                                borderTop: idx > 0 ? "1px solid #c6c5c9" : "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        padding: "0 6px 0 12px",
                                        fontWeight: 700,
                                        fontSize: "clamp(9px, 0.8vw, 14px)",
                                        color: COLOR_PRIMARY,
                                        letterSpacing: "-0.42px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    children: row.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                [
                                    row.a,
                                    row.b,
                                    row.c
                                ].map((param, ci)=>{
                                    let { val, bold, color } = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: ci === 2 ? "0 12px 0 6px" : "0 6px",
                                            fontWeight: bold ? 700 : 400,
                                            fontSize: "clamp(9px, 0.8vw, 13px)",
                                            color,
                                            letterSpacing: "-0.39px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                        },
                                        children: val
                                    }, ci, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, row.label, true, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
            lineNumber: 258,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_c2 = ResponseProbabilityTable;
function NonResponderTable(param) {
    let { strategyName, nameColor, lineColor } = param;
    const features = [
        {
            rank: "1",
            condition: "DM duration > 7y",
            score: "0.32"
        },
        {
            rank: "2",
            condition: "Age > 70",
            score: "0.31"
        },
        {
            rank: "3",
            condition: "CKD stage ??3",
            score: "0.18"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            flex: "1 1 0",
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "12px 16px 0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: "clamp(12px, 1.3vw, 20px)",
                        color: nameColor,
                        letterSpacing: "-0.6px",
                        lineHeight: 1.2
                    },
                    children: strategyName
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "1px",
                    background: lineColor,
                    margin: "8px 0 0"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "8px 16px 12px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontFamily: "Inter"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    "Rank",
                                    "Feature condition",
                                    "Impact score"
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: "clamp(9px, 0.8vw, 13px)",
                                            color: COLOR_PRIMARY,
                                            textAlign: "left",
                                            padding: "4px 4px 6px",
                                            letterSpacing: "-0.39px",
                                            whiteSpace: "nowrap"
                                        },
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderTop: "1px solid #d4d3d6"
                                    },
                                    children: [
                                        f.rank,
                                        f.condition,
                                        f.score
                                    ].map((cell, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                fontWeight: 400,
                                                fontSize: "clamp(9px, 0.8vw, 12px)",
                                                color: COLOR_NEUTRAL_30,
                                                padding: "5px 4px",
                                                letterSpacing: "-0.36px"
                                            },
                                            children: cell
                                        }, ci, false, {
                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this))
                                }, i, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_c3 = NonResponderTable;
// ?? Efficacy ??而⑦뀗痢????????????????????????????????????????????????????????
function EfficacyContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px, 1.2vw, 16px)",
            width: "100%",
            flex: 1,
            minHeight: 0,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 12,
                    alignItems: "stretch",
                    flex: 3,
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: COLOR_PRIMARY,
                            borderRadius: "22px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "flex-start"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: "Inter",
                                                fontWeight: 700,
                                                fontSize: "clamp(13px, 1.4vw, 22px)",
                                                color: "#fff",
                                                letterSpacing: "-0.66px",
                                                lineHeight: 1.2,
                                                margin: 0
                                            },
                                            children: "Primary Outcome"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/icons/basics/info.svg",
                                            alt: "info",
                                            width: 16,
                                            height: 16,
                                            style: {
                                                flexShrink: 0,
                                                filter: "brightness(0) invert(1) opacity(0.6)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    minHeight: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            fontSize: "clamp(8px, 0.7vw, 11px)",
                                            color: "rgba(255,255,255,0.75)",
                                            letterSpacing: "-0.33px",
                                            lineHeight: 1.2,
                                            margin: 0,
                                            textAlign: "right",
                                            flexShrink: 0
                                        },
                                        children: "*NNT to achieve HbA1c < 7.0%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minHeight: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryOutcomeTable, {}, void 0, false, {
                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: "rgba(255,255,255,0.6)",
                            borderRadius: "22px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "flex-start"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 700,
                                        fontSize: "clamp(13px, 1.4vw, 22px)",
                                        color: COLOR_PRIMARY,
                                        letterSpacing: "-0.66px",
                                        lineHeight: 1.2,
                                        margin: 0
                                    },
                                    children: "Response Probability"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    minHeight: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            gap: "6px",
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "4px",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            background: COLOR_STRATEGY_A
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            background: COLOR_STRATEGY_B
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "10px",
                                                            height: "10px",
                                                            borderRadius: "50%",
                                                            background: COLOR_STRATEGY_C
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "Inter",
                                                    fontSize: "clamp(8px, 0.7vw, 11px)",
                                                    color: COLOR_NEUTRAL_10
                                                },
                                                children: "High Score"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minHeight: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponseProbabilityTable, {}, void 0, false, {
                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: COLOR_PRIMARY,
                    borderRadius: "22px",
                    padding: "clamp(14px, 1.5vw, 20px)",
                    display: "flex",
                    gap: "clamp(10px, 1vw, 16px)",
                    alignItems: "stretch",
                    flex: 4.5,
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: "#fff",
                            borderRadius: "10px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0,
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "flex-start"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 700,
                                        fontSize: "clamp(12px, 1.2vw, 20px)",
                                        color: COLOR_PRIMARY,
                                        letterSpacing: "-0.6px",
                                        margin: 0
                                    },
                                    children: "Simulated Trajectory"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 4,
                                    minHeight: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drd$2f$simulation$2d$result$2f$charts$2f$SpaghettiPlotChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpaghettiPlotChart"], {}, void 0, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 591,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: "#fff",
                            borderRadius: "10px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0,
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontFamily: "Inter",
                                            fontWeight: 700,
                                            fontSize: "clamp(12px, 1.2vw, 20px)",
                                            color: COLOR_PRIMARY,
                                            letterSpacing: "-0.6px",
                                            margin: 0
                                        },
                                        children: "Counterfactual Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 611,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "Inter",
                                            fontWeight: 500,
                                            fontSize: "clamp(9px, 0.9vw, 13px)",
                                            color: COLOR_NEUTRAL_10,
                                            margin: 0
                                        },
                                        children: "Primary Outcome Distribution by Treatment Strategy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 4,
                                    minHeight: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drd$2f$simulation$2d$result$2f$charts$2f$HistogramChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistogramChart"], {}, void 0, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_c4 = EfficacyContent;
// ?? AE risk ??而⑦뀗痢?????????????????????????????????????????????????????????
function AERiskContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px, 1.2vw, 16px)",
            width: "100%",
            flex: 1,
            minHeight: 0,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "clamp(10px, 1vw, 16px)",
                    alignItems: "stretch",
                    flex: 2.5,
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "1 1 48%",
                            background: COLOR_PRIMARY,
                            borderRadius: "22px",
                            padding: "12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "Inter",
                                    fontWeight: 700,
                                    fontSize: "clamp(13px, 1.4vw, 22px)",
                                    color: "#fff",
                                    letterSpacing: "-0.66px",
                                    lineHeight: 1.2,
                                    margin: 0
                                },
                                children: "Safety Trade-off"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 674,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "#fff",
                                    borderRadius: "10px",
                                    flex: 1,
                                    minHeight: 0,
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drd$2f$simulation$2d$result$2f$charts$2f$BubbleChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BubbleChart"], {}, void 0, false, {
                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                    lineNumber: 696,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "1 1 48%",
                            background: COLOR_PRIMARY,
                            borderRadius: "22px",
                            padding: "12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "Inter",
                                            fontWeight: 700,
                                            fontSize: "clamp(13px, 1.4vw, 22px)",
                                            color: "#fff",
                                            letterSpacing: "-0.66px",
                                            lineHeight: 1.2,
                                            margin: 0
                                        },
                                        children: "AE Risk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#efeff4",
                                            borderRadius: "8px",
                                            padding: "4px 8px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "Inter",
                                                    fontWeight: 500,
                                                    fontSize: "clamp(9px, 0.8vw, 13px)",
                                                    color: "#484646"
                                                },
                                                children: "Stroke"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 739,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 12 12",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 5l3 3 3-3",
                                                    stroke: "#484646",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 740,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "#fff",
                                    borderRadius: "10px",
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                    padding: "8px",
                                    justifyContent: "flex-end"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "4px",
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "18px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "Inter",
                                                        fontWeight: 600,
                                                        fontSize: "clamp(8px, 0.75vw, 12px)",
                                                        color: COLOR_NEUTRAL_10,
                                                        writingMode: "vertical-rl",
                                                        transform: "rotate(180deg)",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "AE probability(%)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 759,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    position: "relative",
                                                    minHeight: "180px",
                                                    background: "#fff",
                                                    borderRadius: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontWeight: 500,
                                                            fontSize: "clamp(11px, 1vw, 15px)",
                                                            color: "#c6c5c9"
                                                        },
                                                        children: "Placeholder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 775,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        style: {
                                                            position: "absolute",
                                                            inset: 0,
                                                            width: "100%",
                                                            height: "100%"
                                                        },
                                                        viewBox: "0 0 400 200",
                                                        preserveAspectRatio: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "10,160 80,140 150,110 220,75 290,55 360,40 400,35",
                                                                fill: "none",
                                                                stroke: COLOR_STRATEGY_A,
                                                                strokeWidth: "2",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 783,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "10,170 80,155 150,135 220,105 290,85 360,70 400,65",
                                                                fill: "none",
                                                                stroke: COLOR_STRATEGY_B,
                                                                strokeWidth: "2",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "10,175 80,162 150,145 220,120 290,100 360,88 400,82",
                                                                fill: "none",
                                                                stroke: COLOR_STRATEGY_C,
                                                                strokeWidth: "2",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 774,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                    paddingBottom: "20px"
                                                },
                                                children: [
                                                    "8",
                                                    "6",
                                                    "4",
                                                    "2",
                                                    "0"
                                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontWeight: 400,
                                                            fontSize: "clamp(7px, 0.6vw, 10px)",
                                                            color: COLOR_NEUTRAL_30,
                                                            lineHeight: 1
                                                        },
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 809,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            paddingLeft: "22px",
                                            paddingRight: "22px"
                                        },
                                        children: [
                                            "0",
                                            "2",
                                            "4",
                                            "6",
                                            "8",
                                            "10"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "Inter",
                                                    fontWeight: 400,
                                                    fontSize: "clamp(7px, 0.6vw, 10px)",
                                                    color: COLOR_NEUTRAL_30
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 826,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "12px",
                                            justifyContent: "center",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            {
                                                color: COLOR_STRATEGY_A,
                                                label: "Strategy A"
                                            },
                                            {
                                                color: COLOR_STRATEGY_B,
                                                label: "Strategy B"
                                            },
                                            {
                                                color: COLOR_STRATEGY_C,
                                                label: "Strategy C"
                                            }
                                        ].map((param)=>{
                                            let { color, label } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "5px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "20px",
                                                            height: "3px",
                                                            background: color,
                                                            borderRadius: "2px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontSize: "clamp(8px, 0.65vw, 10px)",
                                                            color: COLOR_NEUTRAL_30
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 836,
                                                columnNumber: 17
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 701,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "rgba(255,255,255,0.6)",
                    borderRadius: "22px",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: 1,
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "Inter",
                                    fontWeight: 700,
                                    fontSize: "clamp(13px, 1.5vw, 24px)",
                                    color: COLOR_PRIMARY,
                                    letterSpacing: "-0.72px",
                                    lineHeight: 1,
                                    margin: "0 0 4px"
                                },
                                children: "Non responder Identification"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "Inter",
                                    fontWeight: 500,
                                    fontSize: "clamp(9px, 0.85vw, 13px)",
                                    color: "#313032",
                                    letterSpacing: "-0.39px",
                                    margin: 0
                                },
                                children: "Top contributing factors ranked by impact score, where higher scores indicate stronger contribution to non-response."
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 873,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 859,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "clamp(10px, 1vw, 16px)",
                            alignItems: "stretch"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NonResponderTable, {
                                strategyName: "Strategy A",
                                nameColor: COLOR_STRATEGY_A,
                                lineColor: COLOR_STRATEGY_A
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 887,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NonResponderTable, {
                                strategyName: "Strategy B",
                                nameColor: COLOR_STRATEGY_B,
                                lineColor: COLOR_STRATEGY_B
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 892,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NonResponderTable, {
                                strategyName: "Strategy C",
                                nameColor: COLOR_STRATEGY_C,
                                lineColor: COLOR_STRATEGY_C
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 897,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 886,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                lineNumber: 847,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 640,
        columnNumber: 5
    }, this);
}
_c5 = AERiskContent;
function SimulationResultPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("efficacy");
    const [showSaveModal, setShowSaveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [simName, setSimName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [simDesc, setSimDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOutcome, setSelectedOutcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("HbA1c");
    const strategies = [
        {
            name: "Strategy A",
            nameColor: COLOR_STRATEGY_A,
            target: "HbA1c / Increase 10% / 3 Months",
            drugs: [
                "Basal insulin",
                "SGLT2 inhibitors"
            ],
            extraDrug: "Dapagliflozin, Empagliflozin",
            lineColor: COLOR_STRATEGY_A
        },
        {
            name: "Strategy B",
            nameColor: COLOR_STRATEGY_B,
            target: "HbA1c / Stable 0% / 6 Months",
            drugs: [
                "Basal insulin",
                "Metformin"
            ],
            lineColor: COLOR_STRATEGY_B
        },
        {
            name: "Strategy C",
            nameColor: COLOR_STRATEGY_C,
            target: "HbA1c / Decrease -10% / 6 Months",
            drugs: [
                "Basal insulin",
                "SGLT2 inhibitors"
            ],
            extraDrug: "Dapagliflozin",
            lineColor: COLOR_STRATEGY_C
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLayout"], {
        headerType: "drd",
        drdStep: 3,
        scaleMode: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                width: "calc(100% - 24px)",
                height: "100%",
                gap: 4,
                overflow: "hidden",
                marginLeft: "8px",
                marginRight: "8px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minHeight: 0,
                        overflow: "hidden",
                        gap: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flexShrink: 0,
                                padding: "0 12px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                onClick: ()=>router.push("/drd/simulation-result"),
                                style: {
                                    fontFamily: "Poppins, Inter, sans-serif",
                                    fontSize: 42,
                                    fontWeight: 600,
                                    color: "rgb(17,17,17)",
                                    letterSpacing: "-1.5px",
                                    lineHeight: 1.1,
                                    margin: 0,
                                    cursor: "pointer"
                                },
                                children: "Drug Response Prediction Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 960,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 959,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                flex: 1,
                                minHeight: 0,
                                gap: "0px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flex: 1,
                                    alignItems: "stretch",
                                    gap: "0px",
                                    minHeight: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[380px] flex-shrink-0 rounded-[36px] gap-[12px] overflow-hidden flex flex-col",
                                        style: {
                                            borderImage: 'url("/assets/figma/home/frame-panel-middle.png") 72 fill / 36px / 0 stretch',
                                            borderStyle: "solid",
                                            borderTopWidth: "20px",
                                            borderBottomWidth: "28px",
                                            borderLeftWidth: "24px",
                                            borderRightWidth: "24px",
                                            borderColor: "transparent",
                                            paddingBottom: "4px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderRadius: "18px",
                                                    overflow: "hidden",
                                                    flexShrink: 0,
                                                    minHeight: "48px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignItems: "flex-start",
                                                    position: "relative",
                                                    padding: "12px 4px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: "relative",
                                                        zIndex: 1,
                                                        fontFamily: "Inter",
                                                        fontWeight: 700,
                                                        fontSize: "clamp(14px, 1.6vw, 26px)",
                                                        color: "#262255",
                                                        letterSpacing: "-1px",
                                                        lineHeight: 1
                                                    },
                                                    children: "Simulation strategies"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                    lineNumber: 1014,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1000,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "14px",
                                                    padding: "0px",
                                                    overflow: "hidden",
                                                    minHeight: 0
                                                },
                                                children: [
                                                    strategies.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrategyCard, {
                                                            ...s
                                                        }, s.name, false, {
                                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                            lineNumber: 1043,
                                                            columnNumber: 17
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#fff",
                                                            borderRadius: "16px",
                                                            padding: "12px 16px",
                                                            display: "flex",
                                                            flexDirection: "column"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: "Inter",
                                                                    fontWeight: 600,
                                                                    fontSize: "clamp(10px, 0.9vw, 14px)",
                                                                    color: COLOR_NEUTRAL_30,
                                                                    margin: "0 0 8px"
                                                                },
                                                                children: "Primary Outcome"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 1056,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: "1px",
                                                                    background: "#e5e4e8",
                                                                    marginBottom: "0px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 1059,
                                                                columnNumber: 17
                                                            }, this),
                                                            [
                                                                "HbA1c",
                                                                "eGFR",
                                                                "Weight",
                                                                "Complication (ex : eGFR slope)"
                                                            ].map((label, idx)=>{
                                                                const selected = selectedOutcome === label;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>setSelectedOutcome(label),
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: "8px",
                                                                        padding: "10px 0",
                                                                        borderTop: idx > 0 ? "1px solid #e5e4e8" : "none",
                                                                        cursor: "pointer"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: "14px",
                                                                                height: "14px",
                                                                                borderRadius: "50%",
                                                                                border: "2px solid ".concat(selected ? COLOR_STRATEGY_A : "#c6c5c9"),
                                                                                background: selected ? COLOR_STRATEGY_A : "transparent",
                                                                                flexShrink: 0
                                                                            },
                                                                            children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: "6px",
                                                                                    height: "6px",
                                                                                    borderRadius: "50%",
                                                                                    background: "#fff",
                                                                                    margin: "2px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                                lineNumber: 1086,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                            lineNumber: 1075,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "Inter",
                                                                                fontWeight: 400,
                                                                                fontSize: "clamp(9px, 0.85vw, 13px)",
                                                                                color: COLOR_NEUTRAL_10
                                                                            },
                                                                            children: label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                            lineNumber: 1089,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, label, true, {
                                                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                    lineNumber: 1063,
                                                                    columnNumber: 19
                                                                }, this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#fff",
                                                            borderRadius: "16px",
                                                            padding: "10px 14px",
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            "Population : N=440",
                                                            "Follow-up : 12months"
                                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: "Inter",
                                                                    fontWeight: 500,
                                                                    fontSize: "clamp(9px, 0.85vw, 13px)",
                                                                    color: COLOR_NEUTRAL_10,
                                                                    margin: "0 0 4px",
                                                                    lineHeight: 1.1
                                                                },
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1096,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1031,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flexShrink: 0,
                                                    display: "flex",
                                                    justifyContent: "right"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>router.push("/drd/default-setting"),
                                                    style: {
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
                                                        justifyContent: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                inset: 0,
                                                                borderRadius: "36px",
                                                                background: "#f06600"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                            lineNumber: 1136,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                position: "relative"
                                                            },
                                                            children: "Edit Condition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                            lineNumber: 1137,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1113,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 985,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "drd-left-panel flex-1 min-w-[280px] min-h-0 flex flex-col",
                                        style: {
                                            borderImage: 'url("/assets/figma/home/frame-panel-left.png") 72 fill / 36px / 0 stretch',
                                            borderStyle: "solid",
                                            borderTopWidth: "20px",
                                            borderBottomWidth: "28px",
                                            borderLeftWidth: "24px",
                                            borderRightWidth: "24px",
                                            borderColor: "transparent",
                                            gap: "24px",
                                            paddingBottom: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flexShrink: 0,
                                                    padding: 6,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 24
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontWeight: 700,
                                                            fontSize: "clamp(14px, 1.8vw, 30px)",
                                                            color: COLOR_PRIMARY,
                                                            letterSpacing: "-0.9px",
                                                            lineHeight: 1,
                                                            margin: 0
                                                        },
                                                        children: "Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1159,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontWeight: 500,
                                                            fontSize: "clamp(9px, 0.85vw, 13px)",
                                                            color: COLOR_NEUTRAL_30,
                                                            letterSpacing: "-0.39px",
                                                            lineHeight: 1.3,
                                                            margin: 0
                                                        },
                                                        children: [
                                                            "Based on counterfactual simulation adjusted for baseline severity, Strategy A demonstrates greater HbA1c reduction and",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 17
                                                            }, this),
                                                            "faster response, at the cost of increased hypoglycemia risk. Key drivers include longer DM duration and adherence level."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minHeight: 0,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "12px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#fff",
                                                            borderRadius: "36px",
                                                            padding: "4px",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            flexShrink: 0,
                                                            alignSelf: "flex-start"
                                                        },
                                                        children: [
                                                            "efficacy",
                                                            "ae-risk"
                                                        ].map((tab)=>{
                                                            const isActive = activeTab === tab;
                                                            const label = tab === "efficacy" ? "Efficacy" : "AE risk";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setActiveTab(tab),
                                                                style: {
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
                                                                    transition: "color 0.15s"
                                                                },
                                                                children: [
                                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: "absolute",
                                                                            inset: 0,
                                                                            borderRadius: "36px",
                                                                            background: COLOR_PRIMARY
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                        lineNumber: 1237,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            position: "relative"
                                                                        },
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                        lineNumber: 1246,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, tab, true, {
                                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                                lineNumber: 1215,
                                                                columnNumber: 21
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 15
                                                    }, this),
                                                    activeTab === "efficacy" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EfficacyContent, {}, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 43
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AERiskContent, {}, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 65
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1143,
                                        columnNumber: 12
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 975,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                            lineNumber: 964,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 948,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flexShrink: 0,
                        display: "flex",
                        justifyContent: "flex-end"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowSaveModal(true),
                        style: {
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
                            justifyContent: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "36px",
                                    background: "#f06600"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 1285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "relative"
                                },
                                children: "Save Simulation"
                            }, void 0, false, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 1286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 1262,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 1261,
                    columnNumber: 7
                }, this),
                showSaveModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(4px)"
                    },
                    onClick: ()=>setShowSaveModal(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            position: "relative",
                            width: "380px",
                            borderRadius: "20px",
                            padding: "24px 20px 20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "20px",
                                    pointerEvents: "none"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "20px",
                                            background: "rgba(255,255,255,0.6)",
                                            mixBlendMode: "color-dodge"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "20px",
                                            background: "rgba(255,255,255,0.88)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "20px",
                                            background: "rgba(0,0,0,0.04)",
                                            mixBlendMode: "hard-light"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 1320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "Inter",
                                            fontWeight: 600,
                                            fontSize: "18px",
                                            color: "#484646",
                                            letterSpacing: "-0.54px",
                                            lineHeight: 1.2,
                                            margin: 0
                                        },
                                        children: "Save Simulation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "6px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontWeight: 500,
                                                            fontSize: "13px",
                                                            color: "#484646",
                                                            letterSpacing: "-0.39px",
                                                            lineHeight: 1.2,
                                                            margin: 0
                                                        },
                                                        children: "Simulation Name *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: simName,
                                                        onChange: (e)=>setSimName(e.target.value),
                                                        placeholder: "Write a title",
                                                        style: {
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
                                                            boxSizing: "border-box"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1340,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1336,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "6px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "Inter",
                                                            fontWeight: 500,
                                                            fontSize: "13px",
                                                            color: "#484646",
                                                            letterSpacing: "-0.39px",
                                                            lineHeight: 1.2,
                                                            margin: 0
                                                        },
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1364,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: simDesc,
                                                        onChange: (e)=>setSimDesc(e.target.value.slice(0, 30)),
                                                        placeholder: "Enter a Description (max 30 characters)",
                                                        style: {
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
                                                            boxSizing: "border-box"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                        lineNumber: 1367,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                                lineNumber: 1363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 1327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 1,
                                    display: "flex",
                                    gap: "8px",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowSaveModal(false),
                                        style: {
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
                                            backdropFilter: "blur(8px)"
                                        },
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1395,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowSaveModal(false),
                                        style: {
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
                                            backdropFilter: "blur(8px)"
                                        },
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                        lineNumber: 1418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                                lineNumber: 1393,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/drd/simulation-result/page.tsx",
                    lineNumber: 1292,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/drd/simulation-result/page.tsx",
            lineNumber: 945,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/drd/simulation-result/page.tsx",
        lineNumber: 944,
        columnNumber: 5
    }, this);
}
_s(SimulationResultPage, "yHfeOToWy9pEcNmFedzKh+XXBEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c6 = SimulationResultPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StrategyCard");
__turbopack_context__.k.register(_c1, "PrimaryOutcomeTable");
__turbopack_context__.k.register(_c2, "ResponseProbabilityTable");
__turbopack_context__.k.register(_c3, "NonResponderTable");
__turbopack_context__.k.register(_c4, "EfficacyContent");
__turbopack_context__.k.register(_c5, "AERiskContent");
__turbopack_context__.k.register(_c6, "SimulationResultPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_395a0bff._.js.map