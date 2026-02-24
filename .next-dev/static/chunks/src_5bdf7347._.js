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
"[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ATSHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ATSHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TSIHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/TSIHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MainContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MainContainer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const AppLayout = (param)=>{
    let { children, headerType = "default" } = param;
    return(/*
     * Figma 전체 프레임: 2560×1314px
     * bg: rgb(231,229,231) = #E7E5E7
     * Sidebar: 96px 고정 (position fixed)
     * 나머지: sidebar 이후 영역
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#E7E5E7"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    width: "calc(100% - 96px)",
                    marginLeft: "96px",
                    overflow: "hidden"
                },
                children: [
                    headerType === "ats" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ATSHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATSHeader"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : headerType === "tsi" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$TSIHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TSIHeader"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 54,
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
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppLayout.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
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
"[project]/src/hooks/useProcessedStudyData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProcessedStudyData",
    ()=>useProcessedStudyData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MIN_POWER = 0.6; // 최소 power 60%
const DEFAULT_POWER = 0.8; // 디폴트 power 80%
const MAX_POWER = 0.95; // 최대 power 95% (sample size control 범위와 동일)
const useProcessedStudyData = (optivisData, traditionalData, userNominalPower)=>{
    _s();
    // 1. 필터링 및 정렬된 데이터 (0.6 ~ 0.95 범위)
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProcessedStudyData.useMemo[filteredData]": ()=>{
            const filteredOptivis = optivisData.filter({
                "useProcessedStudyData.useMemo[filteredData].filteredOptivis": (item)=>item.primary_endpoint_power >= MIN_POWER && item.primary_endpoint_power <= MAX_POWER
            }["useProcessedStudyData.useMemo[filteredData].filteredOptivis"]).sort({
                "useProcessedStudyData.useMemo[filteredData].filteredOptivis": (a, b)=>a.primary_endpoint_power - b.primary_endpoint_power
            }["useProcessedStudyData.useMemo[filteredData].filteredOptivis"]);
            const filteredTraditional = traditionalData.filter({
                "useProcessedStudyData.useMemo[filteredData].filteredTraditional": (item)=>item.primary_endpoint_power >= MIN_POWER && item.primary_endpoint_power <= MAX_POWER
            }["useProcessedStudyData.useMemo[filteredData].filteredTraditional"]).sort({
                "useProcessedStudyData.useMemo[filteredData].filteredTraditional": (a, b)=>a.primary_endpoint_power - b.primary_endpoint_power
            }["useProcessedStudyData.useMemo[filteredData].filteredTraditional"]);
            return {
                optivis: filteredOptivis,
                traditional: filteredTraditional
            };
        }
    }["useProcessedStudyData.useMemo[filteredData]"], [
        optivisData,
        traditionalData
    ]);
    // 2. 차트용 데이터 변환
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProcessedStudyData.useMemo[chartData]": ()=>{
            // OPTIVIS 데이터가 없으면 빈 배열 반환
            if (filteredData.optivis.length === 0) {
                return {
                    chart1Data: {
                        optivis: [],
                        traditional: []
                    },
                    chart2Data: {
                        optivis: [],
                        traditional: []
                    },
                    chart3Data: {
                        optivis: [],
                        traditional: []
                    }
                };
            }
            // Chart 1: Sample Size vs CI Width (x: total_patient, y: n_to_screen)
            // demo 프로젝트에서는 n_to_screen을 직접 사용
            const chart1Data = {
                optivis: filteredData.optivis.map({
                    "useProcessedStudyData.useMemo[chartData]": (item)=>[
                            item.total_patient,
                            item.n_to_screen
                        ]
                }["useProcessedStudyData.useMemo[chartData]"]),
                traditional: filteredData.traditional.map({
                    "useProcessedStudyData.useMemo[chartData]": (item)=>[
                            item.total_patient,
                            item.n_to_screen
                        ]
                }["useProcessedStudyData.useMemo[chartData]"])
            };
            // Chart 2: Enrollment Time vs Power (x: enrollment, y: primary_endpoint_power)
            const chart2Data = {
                optivis: filteredData.optivis.map({
                    "useProcessedStudyData.useMemo[chartData]": (item)=>[
                            item.enrollment,
                            item.primary_endpoint_power
                        ]
                }["useProcessedStudyData.useMemo[chartData]"]),
                traditional: filteredData.traditional.map({
                    "useProcessedStudyData.useMemo[chartData]": (item)=>[
                            item.enrollment,
                            item.primary_endpoint_power
                        ]
                }["useProcessedStudyData.useMemo[chartData]"])
            };
            // Chart 3: Sample Size vs Cost (x: total_patient, y: cost / 1000000)
            const chart3Data = {
                optivis: filteredData.optivis.map({
                    "useProcessedStudyData.useMemo[chartData]": (item)=>[
                            item.total_patient,
                            item.cost / 1000000
                        ]
                }["useProcessedStudyData.useMemo[chartData]"]),
                traditional: filteredData.traditional.map({
                    "useProcessedStudyData.useMemo[chartData]": (item)=>[
                            item.total_patient,
                            item.cost / 1000000
                        ]
                }["useProcessedStudyData.useMemo[chartData]"])
            };
            return {
                chart1Data,
                chart2Data,
                chart3Data
            };
        }
    }["useProcessedStudyData.useMemo[chartData]"], [
        filteredData.optivis,
        filteredData.traditional
    ]);
    // 3. 디폴트 Power에 가장 가까운 인덱스 찾기
    const defaultPowerIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProcessedStudyData.useMemo[defaultPowerIndex]": ()=>{
            const filtered = filteredData.optivis;
            if (filtered.length === 0) return 0;
            const targetPower = userNominalPower !== null && userNominalPower !== void 0 ? userNominalPower : DEFAULT_POWER;
            let closestIndex = 0;
            let minDiff = Math.abs(filtered[0].primary_endpoint_power - targetPower);
            for(let i = 1; i < filtered.length; i++){
                const diff = Math.abs(filtered[i].primary_endpoint_power - targetPower);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = i;
                }
            }
            return closestIndex;
        }
    }["useProcessedStudyData.useMemo[defaultPowerIndex]"], [
        filteredData.optivis,
        userNominalPower
    ]);
    return {
        filteredData,
        chartData,
        defaultPowerIndex,
        minPower: MIN_POWER,
        maxPower: MAX_POWER,
        defaultPower: userNominalPower !== null && userNominalPower !== void 0 ? userNominalPower : DEFAULT_POWER
    };
};
_s(useProcessedStudyData, "sd7k9+JviTCNYgmnJQFUX+NgA3g=");
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
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Select(param) {
    let { value, placeholder = "Select", options = [], onChange, className, disabled = false, iconPath, iconWidth = 14, iconHeight = 22 } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Select.useEffect": ()=>{
            if (!isOpen) return;
            const handleClickOutside = {
                "Select.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (selectRef.current && !selectRef.current.contains(target)) {
                        setIsOpen(false);
                    }
                }
            }["Select.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Select.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Select.useEffect"];
        }
    }["Select.useEffect"], [
        isOpen
    ]);
    const handleSelect = (option)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
        setIsOpen(false);
    };
    const hasWidthClass = className === null || className === void 0 ? void 0 : className.includes("w-");
    const defaultWidth = hasWidthClass ? "" : "w-[180px]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: selectRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", defaultWidth, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>!disabled && setIsOpen((v)=>!v),
                disabled: disabled,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full bg-neutral-90 h-[26px] px-3 flex items-center justify-between", "text-body5 text-neutral-50", "cursor-pointer transition-all rounded-[8px]", disabled && "opacity-50 cursor-not-allowed"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-left truncate text-body5 py-1",
                        children: value || placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    iconPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: iconPath,
                        alt: "",
                        width: iconWidth,
                        height: iconHeight,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform flex-shrink-0 object-contain", isOpen && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-transform flex-shrink-0", isOpen && "rotate-180"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            style: {
                                mixBlendMode: "plus-darker"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6.77336 6.10156L13.3829 6.10156C13.621 6.10156 13.7956 6.15113 13.9067 6.25026C14.021 6.34939 14.0781 6.46727 14.0781 6.60391C14.0781 6.72447 14.0369 6.84771 13.9543 6.97363L10.7115 11.6555C10.5972 11.8216 10.494 11.9368 10.4019 12.0011C10.313 12.0681 10.2051 12.1016 10.0781 12.1016C9.95432 12.1016 9.84638 12.0681 9.75432 12.0011C9.66225 11.9368 9.55908 11.8216 9.44479 11.6555L6.20193 6.97363C6.1194 6.84771 6.07813 6.72447 6.07813 6.60391C6.07813 6.46727 6.13527 6.34939 6.24955 6.25026C6.36384 6.15113 6.53844 6.10156 6.77336 6.10156Z",
                                fill: "var(--neutral-50)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/select.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/select.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            isOpen && options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-[calc(100%+4px)] z-50 py-2 bg-neutral-90 rounded-[8px] border border-neutral-80 max-h-[200px] overflow-auto shadow-lg min-w-0",
                role: "listbox",
                children: options.map((option, index)=>{
                    const isSelected = value === option;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-1 py-1 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "option",
                                "aria-selected": isSelected,
                                onClick: ()=>handleSelect(option),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left text-body5 relative flex items-center flex-shrink-0 self-stretch cursor-pointer", isSelected ? "text-white" : "text-neutral-50"),
                                style: {
                                    fontSize: "12px",
                                    fontWeight: 590,
                                    letterSpacing: "-0.36px",
                                    lineHeight: "13.2px",
                                    height: "24px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full flex items-center px-2 rounded-[8px] transition-colors", isSelected ? "bg-tertiary-40" : "bg-transparent hover:bg-neutral-85"),
                                    children: option
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/select.tsx",
                                    lineNumber: 129,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/select.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            index < options.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-3 right-3 h-[1px] bg-neutral-80"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/select.tsx",
                                lineNumber: 141,
                                columnNumber: 19
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 111,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Select, "y+Rn+yOePWMEDwICXiujn+Gqj7I=");
_c = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Slider(param) {
    let { value, min = 0, max = 1, step = 0.01, onChange, showValue = true, valuePrecision, className, disabled = false } = param;
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const percentage = (value - min) / (max - min) * 100;
    const handleMouseDown = (e)=>{
        if (disabled) return;
        e.preventDefault(); // 텍스트 선택 방지
        e.stopPropagation(); // 이벤트 전파 방지
        setIsDragging(true);
        updateValue(e);
    };
    const handleMouseMove = (e)=>{
        if (!isDragging || disabled) return;
        e.preventDefault(); // 드래그 중 텍스트 선택 방지
        updateValue(e);
    };
    const handleMouseUp = (e)=>{
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsDragging(false);
    };
    const updateValue = (e)=>{
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, x / rect.width * 100));
        const newValue = min + percentage / 100 * (max - min);
        const steppedValue = Math.round(newValue / step) * step;
        const clampedValue = Math.max(min, Math.min(max, steppedValue));
        onChange === null || onChange === void 0 ? void 0 : onChange(clampedValue);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            if (isDragging) {
                // 드래그 중 모든 텍스트 선택 방지
                const preventSelect = {
                    "Slider.useEffect.preventSelect": (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                }["Slider.useEffect.preventSelect"];
                const preventDrag = {
                    "Slider.useEffect.preventDrag": (e)=>{
                        e.preventDefault();
                        return false;
                    }
                }["Slider.useEffect.preventDrag"];
                const handleMouseMoveWrapper = {
                    "Slider.useEffect.handleMouseMoveWrapper": (e)=>{
                        e.preventDefault();
                        handleMouseMove(e);
                    }
                }["Slider.useEffect.handleMouseMoveWrapper"];
                const handleMouseUpWrapper = {
                    "Slider.useEffect.handleMouseUpWrapper": (e)=>{
                        e.preventDefault();
                        handleMouseUp(e);
                    }
                }["Slider.useEffect.handleMouseUpWrapper"];
                // 모든 선택 관련 이벤트 차단
                document.addEventListener("mousemove", handleMouseMoveWrapper, {
                    passive: false
                });
                document.addEventListener("mouseup", handleMouseUpWrapper, {
                    passive: false
                });
                document.addEventListener("selectstart", preventSelect);
                document.addEventListener("select", preventSelect);
                document.addEventListener("dragstart", preventDrag);
                // 전역 스타일로 텍스트 선택 완전히 차단
                const bodyStyle = document.body.style;
                const originalUserSelect = bodyStyle.userSelect;
                const originalWebkitUserSelect = bodyStyle.webkitUserSelect;
                const originalMozUserSelect = bodyStyle.mozUserSelect;
                const originalMsUserSelect = bodyStyle.msUserSelect;
                bodyStyle.userSelect = "none";
                bodyStyle.webkitUserSelect = "none";
                bodyStyle.mozUserSelect = "none";
                bodyStyle.msUserSelect = "none";
                // CSS 클래스로도 차단
                document.body.classList.add("no-select");
                return ({
                    "Slider.useEffect": ()=>{
                        document.removeEventListener("mousemove", handleMouseMoveWrapper);
                        document.removeEventListener("mouseup", handleMouseUpWrapper);
                        document.removeEventListener("selectstart", preventSelect);
                        document.removeEventListener("select", preventSelect);
                        document.removeEventListener("dragstart", preventDrag);
                        // 원래 스타일 복원
                        const bodyStyle = document.body.style;
                        bodyStyle.userSelect = originalUserSelect;
                        bodyStyle.webkitUserSelect = originalWebkitUserSelect;
                        bodyStyle.mozUserSelect = originalMozUserSelect;
                        bodyStyle.msUserSelect = originalMsUserSelect;
                        document.body.classList.remove("no-select");
                    }
                })["Slider.useEffect"];
            }
        }
    }["Slider.useEffect"], [
        isDragging,
        disabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1 select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-body5m text-[#c9c6c5] w-[21px]",
                    children: "Min"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/slider.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: trackRef,
                        className: "relative h-[24px] flex items-center cursor-pointer select-none",
                        onMouseDown: handleMouseDown,
                        style: {
                            userSelect: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full h-[6px] rounded-[3px] bg-[#e2e1e5]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/slider.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute h-[6px] rounded-[3px] bg-[#231f52]",
                                style: {
                                    width: "".concat(percentage, "%")
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/slider.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full flex justify-between px-0",
                                style: {
                                    top: "17px"
                                },
                                children: [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((tick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 rounded-full bg-[#e2e1e5]"
                                    }, tick, false, {
                                        fileName: "[project]/src/components/ui/slider.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/slider.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-[38px] h-[24px] rounded-full bg-[#fcf8f8] border border-[#e2e1e5] cursor-grab active:cursor-grabbing",
                                style: {
                                    left: "calc(".concat(percentage, "% - 19px)"),
                                    transform: "translateY(-50%)",
                                    top: "50%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/slider.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/slider.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/slider.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-body5m text-[#c9c6c5] w-[23px] text-right",
                    children: "Max"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/slider.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                showValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#ebebf0] rounded-[8px] h-[24px] px-2 flex items-center justify-center min-w-[36px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-body5 text-[#787776]",
                        children: valuePrecision !== undefined ? value.toFixed(valuePrecision) : value.toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/slider.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/slider.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/slider.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/slider.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(Slider, "aipZN7oisvQQEwnO40ozZr+uX5M=");
_c = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/info-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function InfoIcon(param) {
    let { className, color = "#484646" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_46_5844)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "10",
                        height: "10",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/info-icon.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.99967 9.16732C7.30086 9.16732 9.16634 7.30184 9.16634 5.00065C9.16634 2.69946 7.30086 0.833984 4.99967 0.833984C2.69849 0.833984 0.833008 2.69946 0.833008 5.00065C0.833008 7.30184 2.69849 9.16732 4.99967 9.16732Z",
                        stroke: color,
                        strokeWidth: "1.25488",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/info-icon.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.99609 7.19189L4.99609 4.48242",
                        stroke: color,
                        strokeWidth: "1.25488",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/info-icon.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 3.33398H5.00418",
                        stroke: color,
                        strokeWidth: "1.25488",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/info-icon.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4.35059",
                        y: "2.79297",
                        width: "1.28405",
                        height: "1.28405",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/info-icon.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/info-icon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_46_5844",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "10",
                        height: "10",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/info-icon.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/info-icon.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/info-icon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/info-icon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = InfoIcon;
var _c;
__turbopack_context__.k.register(_c, "InfoIcon");
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
"[project]/src/components/ui/hypothesis-type-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HypothesisTypeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function HypothesisTypeModal(param) {
    let { open, onOpenChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                    className: "fixed inset-0 bg-black/80 z-[110]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: "opacity-94 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-[880px] h-[522px] p-0 border-0 bg-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    children: "Hypothesis Type Overview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                    children: "Choose the hypothesis based on your study goal and margin assumptions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/simulation/hypothesis-overview.png",
                                    alt: "Hypothesis Type Overview",
                                    width: 880,
                                    height: 522,
                                    className: "w-full h-full object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute top-6 right-6 w-[120px] h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/simulation/close-button.png",
                                            alt: "Close",
                                            width: 120,
                                            height: 48,
                                            className: "flex-shrink-0 w-full h-full object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/hypothesis-type-modal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = HypothesisTypeModal;
var _c;
__turbopack_context__.k.register(_c, "HypothesisTypeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/add-endpoints-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddEndpointsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
// Removed import Image from "next/image"; as the module or types can't be found.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MULTIPLICITY_OPTIONS = [
    "Bonferroni",
    "Holm",
    "Hochberg"
];
const OUTCOME_OPTIONS = [
    "ADAS Cog 11",
    "MMSE",
    "CDR"
];
const TYPE_OPTIONS = [
    "Continuous",
    "Binary"
];
const ALPHA_OPTIONS = [
    "0.05",
    "0.025",
    "0.01"
];
const TARGET_POWER_OPTIONS = [
    "80%",
    "85%",
    "90%"
];
/** Primary + Secondary 합계 최대 개수 */ const MAX_TOTAL_ENDPOINTS = 5;
// Effect size 0.1 ~ 10 step 0.1
const EFFECT_SIZE_OPTIONS = Array.from({
    length: 100
}, (_, i)=>((i + 1) * 0.1).toFixed(1));
// 간단한 고유 ID 생성 (각 행 구분용)
let idCounter = 0;
function generateId() {
    return "row-".concat(Date.now(), "-").concat(++idCounter, "-").concat(Math.random().toString(36).substring(2, 9));
}
function ensureInOptions(options, value) {
    if (!value || options.includes(value)) return options;
    const num = parseFloat(value);
    if (options.some((o)=>parseFloat(o) === num)) return options;
    return [
        ...options,
        value
    ].sort((a, b)=>parseFloat(a) - parseFloat(b));
}
/** id 제외한 행 데이터만 비교용으로 직렬화 */ function serializePrimary(row) {
    const { id: _id, ...rest } = row;
    return rest;
}
function serializeSecondary(row) {
    const { id: _id, ...rest } = row;
    return rest;
}
function targetPowerToNumber(s) {
    if (s === "80%") return 0.8;
    if (s === "85%") return 0.85;
    if (s === "90%") return 0.9;
    const n = parseFloat(s.replace("%", ""));
    return Number.isFinite(n) ? n / 100 : 0.8;
}
function AddEndpointsModal(param) {
    let { open, onOpenChange, isSaveDisabled = false, primaryEndpoints, secondaryEndpoints, nominalPower, alpha, multiplicity: initialMultiplicity, onSave } = param;
    var _primaryRows_, _primaryRows_1, _primaryRows_2;
    _s();
    const [multiplicity, setMultiplicity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMultiplicity || MULTIPLICITY_OPTIONS[0]);
    const handleMultiplicityChange = (v)=>setMultiplicity(v);
    const [primaryRows, setPrimaryRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [secondaryRows, setSecondaryRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    /** 모달 열렸을 때의 초기 스냅샷 (Save 버튼 활성화 판단용) */ const initialSnapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // 모달이 막 열릴 때만 multiplicity 동기화 + Primary/Secondary 초기화 + 초기 스냅샷 저장 (배열 기반)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddEndpointsModal.useEffect": ()=>{
            if (open) {
                setMultiplicity(initialMultiplicity || MULTIPLICITY_OPTIONS[0]);
            }
            if (open && !prevOpenRef.current) {
                prevOpenRef.current = true;
                const powerStr = nominalPower <= 0.82 ? "80%" : nominalPower <= 0.87 ? "85%" : "90%";
                const alphaStr = alpha === 0.025 ? "0.025" : alpha === 0.01 ? "0.01" : "0.05";
                const thresholdStr = {
                    "AddEndpointsModal.useEffect.thresholdStr": (v)=>v != null && Number.isFinite(v) ? String(v) : ""
                }["AddEndpointsModal.useEffect.thresholdStr"];
                const typeStr = {
                    "AddEndpointsModal.useEffect.typeStr": (t)=>t === "Binary" ? "Binary" : "Continuous"
                }["AddEndpointsModal.useEffect.typeStr"];
                const newPrimary = primaryEndpoints.length > 0 ? primaryEndpoints.map({
                    "AddEndpointsModal.useEffect": (ep, i)=>({
                            id: generateId(),
                            outcome: ep.name || OUTCOME_OPTIONS[0],
                            type: typeStr(ep.type),
                            effectSize: ep.effectSize.toFixed(1),
                            threshold: thresholdStr(ep.threshold),
                            alpha: alphaStr,
                            targetPower: powerStr
                        })
                }["AddEndpointsModal.useEffect"]) : [
                    {
                        id: generateId(),
                        outcome: OUTCOME_OPTIONS[0],
                        type: "Continuous",
                        effectSize: "3.0",
                        threshold: "",
                        alpha: alphaStr,
                        targetPower: powerStr
                    }
                ];
                const newSecondary = secondaryEndpoints.map({
                    "AddEndpointsModal.useEffect.newSecondary": (ep)=>({
                            id: generateId(),
                            outcome: ep.name || OUTCOME_OPTIONS[0],
                            type: typeStr(ep.type),
                            effectSize: ep.effectSize.toFixed(1),
                            threshold: thresholdStr(ep.threshold)
                        })
                }["AddEndpointsModal.useEffect.newSecondary"]);
                setPrimaryRows(newPrimary);
                setSecondaryRows(newSecondary);
                initialSnapshotRef.current = {
                    multiplicity: multiplicity,
                    primary: newPrimary.map(serializePrimary),
                    secondary: newSecondary.map(serializeSecondary)
                };
            }
            if (!open) {
                prevOpenRef.current = false;
                initialSnapshotRef.current = null;
            }
        }
    }["AddEndpointsModal.useEffect"], [
        open,
        initialMultiplicity,
        multiplicity,
        primaryEndpoints,
        secondaryEndpoints,
        nominalPower,
        alpha
    ]);
    /** 데이터가 추가/수정/삭제되어 저장할 내용이 있으면 true */ const hasChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddEndpointsModal.useMemo[hasChanges]": ()=>{
            const snap = initialSnapshotRef.current;
            if (!open || !snap) return false;
            if (multiplicity !== snap.multiplicity) return true;
            if (primaryRows.length !== snap.primary.length || secondaryRows.length !== snap.secondary.length) return true;
            const primarySame = JSON.stringify(primaryRows.map(serializePrimary)) === JSON.stringify(snap.primary);
            const secondarySame = JSON.stringify(secondaryRows.map(serializeSecondary)) === JSON.stringify(snap.secondary);
            return !primarySame || !secondarySame;
        }
    }["AddEndpointsModal.useMemo[hasChanges]"], [
        open,
        multiplicity,
        primaryRows,
        secondaryRows
    ]);
    var _primaryRows__effectSize;
    const effectSizeOptions = ensureInOptions(EFFECT_SIZE_OPTIONS, (_primaryRows__effectSize = (_primaryRows_ = primaryRows[0]) === null || _primaryRows_ === void 0 ? void 0 : _primaryRows_.effectSize) !== null && _primaryRows__effectSize !== void 0 ? _primaryRows__effectSize : "");
    var _primaryRows__targetPower;
    const targetPowerOptions = ensureInOptions(TARGET_POWER_OPTIONS, (_primaryRows__targetPower = (_primaryRows_1 = primaryRows[0]) === null || _primaryRows_1 === void 0 ? void 0 : _primaryRows_1.targetPower) !== null && _primaryRows__targetPower !== void 0 ? _primaryRows__targetPower : "");
    const handleAddPrimary = ()=>{
        setPrimaryRows((prev)=>{
            var _primaryRows_;
            var _primaryRows__targetPower;
            return [
                ...prev,
                {
                    id: generateId(),
                    outcome: OUTCOME_OPTIONS[0],
                    type: "Continuous",
                    effectSize: "3.0",
                    threshold: "",
                    alpha: "0.05",
                    targetPower: (_primaryRows__targetPower = (_primaryRows_ = primaryRows[0]) === null || _primaryRows_ === void 0 ? void 0 : _primaryRows_.targetPower) !== null && _primaryRows__targetPower !== void 0 ? _primaryRows__targetPower : "80%"
                }
            ];
        });
    };
    const handleAddSecondary = ()=>{
        setSecondaryRows((prev)=>[
                ...prev,
                {
                    id: generateId(),
                    outcome: OUTCOME_OPTIONS[0],
                    type: "Continuous",
                    effectSize: "3.0",
                    threshold: ""
                }
            ]);
    };
    const updatePrimary = (id, field, value)=>{
        if (field === "targetPower") {
            setPrimaryRows((prev)=>prev.map((row)=>({
                        ...row,
                        targetPower: value
                    })));
        } else {
            setPrimaryRows((prev)=>prev.map((row)=>row.id === id ? {
                        ...row,
                        [field]: value
                    } : row));
        }
    };
    const updateSecondaryRow = (id, field, value)=>{
        setSecondaryRows((prev)=>prev.map((row)=>row.id === id ? {
                    ...row,
                    [field]: value
                } : row));
    };
    const removePrimaryRow = (id)=>{
        setPrimaryRows((prev)=>prev.filter((row)=>row.id !== id));
    };
    const removeSecondaryRow = (id)=>{
        setSecondaryRows((prev)=>prev.filter((row)=>row.id !== id));
    };
    var _primaryRows__targetPower1;
    const sharedTargetPower = (_primaryRows__targetPower1 = (_primaryRows_2 = primaryRows[0]) === null || _primaryRows_2 === void 0 ? void 0 : _primaryRows_2.targetPower) !== null && _primaryRows__targetPower1 !== void 0 ? _primaryRows__targetPower1 : "0.8";
    /** Primary 행들의 Alpha 값 합산 (FWER 행 표시용) */ const alphaSum = primaryRows.reduce((sum, row)=>sum + (parseFloat(row.alpha) || 0), 0);
    const alphaSumDisplay = Number.isInteger(alphaSum) || alphaSum === 0 ? String(alphaSum) : alphaSum.toFixed(3).replace(/\.?0+$/, "");
    const totalEndpoints = primaryRows.length + secondaryRows.length;
    const canAddMore = totalEndpoints < MAX_TOTAL_ENDPOINTS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                    className: "fixed inset-0 bg-black/80 z-[110]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-[1032px] h-auto min-h-[482px] max-h-[700px] overflow-auto p-0 border-0 bg-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    children: "Add Endpoints"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                    children: "Add primary and secondary endpoints for your trial design"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full min-h-[482px] rounded-[36px] overflow-hidden opacity-94",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/simulation/endpoint-bg.png",
                                    alt: "Add Endpoints Modal",
                                    width: 1032,
                                    height: 482,
                                    className: "absolute inset-0 w-full h-full object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 p-6 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-14",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[36px] font-semibold leading-[36px] tracking-[-0.72px] text-white",
                                                    children: "Add Endpoints"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                if (!hasChanges) return;
                                                                const firstPrimary = primaryRows[0];
                                                                const parseThreshold = (s)=>{
                                                                    if (s == null || s.trim() === "") return null;
                                                                    const n = parseFloat(s.trim());
                                                                    return Number.isFinite(n) ? n : null;
                                                                };
                                                                var _firstPrimary_targetPower, _firstPrimary_alpha;
                                                                const payload = {
                                                                    primaryEndpoints: primaryRows.map((r)=>({
                                                                            name: r.outcome,
                                                                            effectSize: parseFloat(r.effectSize) || 0,
                                                                            type: r.type === "Binary" ? "Binary" : "Continuous",
                                                                            threshold: parseThreshold(r.threshold)
                                                                        })),
                                                                    secondaryEndpoints: secondaryRows.map((r)=>({
                                                                            name: r.outcome,
                                                                            effectSize: parseFloat(r.effectSize) || 0,
                                                                            type: r.type === "Binary" ? "Binary" : "Continuous",
                                                                            threshold: parseThreshold(r.threshold)
                                                                        })),
                                                                    nominalPower: targetPowerToNumber((_firstPrimary_targetPower = firstPrimary === null || firstPrimary === void 0 ? void 0 : firstPrimary.targetPower) !== null && _firstPrimary_targetPower !== void 0 ? _firstPrimary_targetPower : "80%"),
                                                                    alpha: parseFloat((_firstPrimary_alpha = firstPrimary === null || firstPrimary === void 0 ? void 0 : firstPrimary.alpha) !== null && _firstPrimary_alpha !== void 0 ? _firstPrimary_alpha : "0.05") || 0.05,
                                                                    multiplicity: multiplicity
                                                                };
                                                                onSave === null || onSave === void 0 ? void 0 : onSave(payload);
                                                                onOpenChange(false);
                                                            },
                                                            disabled: !hasChanges,
                                                            className: "flex items-center justify-center transition-opacity z-10 ".concat(!hasChanges ? " cursor-not-allowed" : "hover:opacity-70 cursor-pointer"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: !hasChanges ? "/assets/simulation/savebtn-disabled.png" : "/assets/simulation/savebtn.png",
                                                                alt: "Save",
                                                                width: 115,
                                                                height: 48,
                                                                className: "flex-shrink-0 w-full h-full object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "w-[120px] h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer z-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/assets/simulation/close-button.png",
                                                                    alt: "Close",
                                                                    width: 120,
                                                                    height: 48,
                                                                    className: "flex-shrink-0 w-full h-full object-contain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[158px] min-h-[36px] flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        value: multiplicity,
                                                        options: [
                                                            ...MULTIPLICITY_OPTIONS
                                                        ],
                                                        onChange: handleMultiplicityChange,
                                                        className: "w-[158px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleAddPrimary,
                                                            disabled: !canAddMore,
                                                            className: "rounded-[16px] h-[36px] px-4 text-body4 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 ".concat(canAddMore ? "bg-[#3a11d8] hover:bg-[#2e09bb] cursor-pointer" : "bg-[#535252] cursor-not-allowed"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "whitespace-nowrap",
                                                                    children: "Add Primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    className: "flex-shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            width: "24",
                                                                            height: "24",
                                                                            rx: "12",
                                                                            fill: "white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 423,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M6 12H18",
                                                                            stroke: canAddMore ? "#3A11D8" : "#535252",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 424,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12 6V18",
                                                                            stroke: canAddMore ? "#3A11D8" : "#535252",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 429,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleAddSecondary,
                                                            disabled: !canAddMore,
                                                            className: "rounded-[16px] h-[36px] px-4 text-body4 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 ".concat(canAddMore ? "bg-[#f06600] hover:bg-[#d85a00] cursor-pointer" : "bg-[#535252] cursor-not-allowed"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "whitespace-nowrap",
                                                                    children: "Add Secondary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    className: "flex-shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            width: "24",
                                                                            height: "24",
                                                                            rx: "12",
                                                                            fill: "white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M6 12H18",
                                                                            stroke: canAddMore ? "#f06600" : "#535252",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 455,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12 6V18",
                                                                            stroke: canAddMore ? "#f06600" : "#535252",
                                                                            strokeWidth: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-t-[18px] rounded-b-[18px] overflow-auto max-h-[450px] flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-auto p-4 pr-5 min-h-[240px]",
                                                    style: {
                                                        scrollbarGutter: "stable"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full table-fixed border-collapse",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-[#c6c5c9]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[12%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Endpoint Type"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 478,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[6%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "No"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 481,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[18%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Outcome"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 484,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[14%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Type"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 487,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[14%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Effect size"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 490,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[12%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Threshold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[12%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Alpha"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 496,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[18%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold",
                                                                                children: "Target Power"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 499,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "w-[3%] p-1 pl-4 text-left text-body5 text-neutral-30 font-semibold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                lineNumber: 502,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                        lineNumber: 477,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 9,
                                                                            className: "h-1 p-0 border-0 bg-transparent"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 505,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "text-body5 text-neutral-5",
                                                                children: [
                                                                    primaryRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    rowSpan: primaryRows.length,
                                                                                    className: "p-1 align-middle relative",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-[4px] rounded-[8px] bg-primary-95 flex items-center justify-start px-3 text-body5 font-semibold text-neutral-30",
                                                                                        children: "Primary"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 520,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 516,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-[8px] bg-neutral-90 min-w-[48px] h-[26px] flex items-center justify-start px-3 text-body5 text-neutral-50",
                                                                                        children: [
                                                                                            "#",
                                                                                            index + 1
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 526,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        value: row.outcome,
                                                                                        options: OUTCOME_OPTIONS,
                                                                                        onChange: (v)=>updatePrimary(row.id, "outcome", v),
                                                                                        className: "w-full min-w-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 531,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 530,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        value: row.type,
                                                                                        options: TYPE_OPTIONS,
                                                                                        onChange: (v)=>updatePrimary(row.id, "type", v),
                                                                                        className: "w-full min-w-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 541,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 540,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: row.effectSize,
                                                                                        onChange: (e)=>updatePrimary(row.id, "effectSize", e.target.value),
                                                                                        className: "w-full h-[26px] px-3 rounded-[8px] bg-neutral-90 text-body5 text-neutral-50 border-0 outline-none"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 549,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 548,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: row.threshold,
                                                                                        onChange: (e)=>updatePrimary(row.id, "threshold", e.target.value),
                                                                                        disabled: row.type === "Continuous",
                                                                                        placeholder: row.type === "Continuous" ? "Disabled" : undefined,
                                                                                        className: "w-full h-[26px] px-3 rounded-[8px] bg-neutral-90 text-body5 text-neutral-50 border-0 outline-none ".concat(row.type === "Continuous" ? "opacity-50 cursor-not-allowed" : "")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 563,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 562,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: row.alpha,
                                                                                        onChange: (e)=>updatePrimary(row.id, "alpha", e.target.value),
                                                                                        className: "w-full h-[26px] px-3 rounded-[8px] bg-neutral-90 text-body5 text-neutral-50 border-0 outline-none"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 587,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 586,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: index === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        value: sharedTargetPower,
                                                                                        options: targetPowerOptions,
                                                                                        onChange: (v)=>updatePrimary(row.id, "targetPower", v),
                                                                                        className: "w-full min-w-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 598,
                                                                                        columnNumber: 31
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-neutral-40"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 607,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 596,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle w-[3%]",
                                                                                    children: index === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-block w-6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 612,
                                                                                        columnNumber: 31
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removePrimaryRow(row.id),
                                                                                        className: "text-neutral-40 hover:text-neutral-5",
                                                                                        "aria-label": "Delete row",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "/assets/icons/trash.svg",
                                                                                            alt: "Delete row",
                                                                                            width: 20,
                                                                                            height: 26,
                                                                                            className: "w-5 h-[26px] object-contain"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                            lineNumber: 620,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 614,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 610,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, row.id, true, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 25
                                                                        }, this)),
                                                                    secondaryRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: [
                                                                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    rowSpan: secondaryRows.length,
                                                                                    className: "p-1 align-middle relative",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-[4px] rounded-[8px] bg-primary-95 flex items-center justify-start px-3 text-body5 font-semibold text-neutral-30",
                                                                                        children: "Secondary"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 641,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 637,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "rounded-[8px] bg-neutral-90 min-w-[48px] h-[26px] flex items-center justify-start px-3 text-body5 text-neutral-50",
                                                                                        children: [
                                                                                            "#",
                                                                                            index + 1
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 647,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 646,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        value: row.outcome,
                                                                                        options: OUTCOME_OPTIONS,
                                                                                        onChange: (v)=>updateSecondaryRow(row.id, "outcome", v),
                                                                                        className: "w-full min-w-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 652,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 651,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        value: row.type,
                                                                                        options: TYPE_OPTIONS,
                                                                                        onChange: (v)=>updateSecondaryRow(row.id, "type", v),
                                                                                        className: "w-full min-w-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 662,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 661,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: row.effectSize,
                                                                                        onChange: (e)=>updateSecondaryRow(row.id, "effectSize", e.target.value),
                                                                                        className: "w-full h-[26px] px-3 rounded-[8px] bg-neutral-90 text-body5 text-neutral-50 border-0 outline-none"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 672,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 671,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        value: row.threshold,
                                                                                        onChange: (e)=>updateSecondaryRow(row.id, "threshold", e.target.value),
                                                                                        disabled: row.type === "Continuous",
                                                                                        placeholder: row.type === "Continuous" ? "Disabled" : undefined,
                                                                                        className: "w-full h-[26px] px-3 rounded-[8px] bg-neutral-90 text-body5 text-neutral-50 border-0 outline-none ".concat(row.type === "Continuous" ? "opacity-50 cursor-not-allowed" : "")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 686,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 685,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle text-neutral-40"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 710,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle text-neutral-40"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 711,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-1 align-middle w-[3%]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        onClick: ()=>removeSecondaryRow(row.id),
                                                                                        className: "text-neutral-40 hover:text-neutral-5",
                                                                                        "aria-label": "Delete row",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: "/assets/icons/trash.svg",
                                                                                            alt: "Delete row",
                                                                                            width: 20,
                                                                                            height: 26,
                                                                                            className: "w-5 h-[26px] object-contain"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                            lineNumber: 719,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                        lineNumber: 713,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                                    lineNumber: 712,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, row.id, true, {
                                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                            lineNumber: 635,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative grid items-center bg-[#e2e1e5] px-4 py-2 rounded-b-[18px] gap-0 pl-4 pr-5",
                                                    style: {
                                                        gridTemplateColumns: "12fr 6fr 18fr 14fr 14fr 12fr 12fr 18fr 3fr"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute left-1/2 -translate-x-1/2 text-body3 text-neutral-5 font-semibold pointer-events-none",
                                                            "aria-hidden": true,
                                                            children: "FWER"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body3 text-neutral-5 font-semibold text-left pl-1 leading-none",
                                                            children: alphaSumDisplay
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body3 text-neutral-5 font-semibold text-left pl-1 leading-none whitespace-nowrap",
                                                            children: primaryRows[0] ? "".concat(sharedTargetPower, "(Primary)") : "80%(Primary)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
            lineNumber: 306,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/add-endpoints-modal.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
_s(AddEndpointsModal, "8KlT/xR6zlm5hCv2mSZtF52rR1o=");
_c = AddEndpointsModal;
var _c;
__turbopack_context__.k.register(_c, "AddEndpointsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ats/LeftPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftPanel",
    ()=>LeftPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplebar$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simplebar-react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/info-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$hypothesis$2d$type$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/hypothesis-type-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$add$2d$endpoints$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/add-endpoints-modal.tsx [app-client] (ecmascript)");
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
const ENDPOINT_OPTIONS = [
    "ADAS Cog 11",
    "MMSE",
    "CDR"
];
function LeftPanel(param) {
    let { sampleSizeControl, setSampleSizeControl, disease, setDisease, primaryEndpoints, setPrimaryEndpoints, secondaryEndpoints, setSecondaryEndpoints, nominalPower, setNominalPower, alpha, multiplicity, treatmentDuration, setTreatmentDuration, hypothesisType, setHypothesisType, treatmentArms, setTreatmentArms, randomizationRatio, setRandomizationRatio, subpopulation, setSubpopulation, activeData, setActiveData, onApply, isLoading, onSaveEndpoints } = param;
    _s();
    const [isHypothesisModalOpen, setIsHypothesisModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddEndpointsModalOpen, setIsAddEndpointsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full h-full min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full min-h-0 flex flex-col overflow-visible",
                style: {
                    borderImage: 'url("/assets/figma/home/frame-panel-left.png") 72 fill / 36px / 0 stretch',
                    borderStyle: "solid",
                    borderWidth: "30px",
                    borderColor: "transparent"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full h-full p-0 min-h-0 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[18px] p-4 flex-shrink-0",
                            style: {
                                background: "var(--primary-15)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-body2 text-white",
                                        children: "Sample Size Control"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-body5 text-neutral-98",
                                            children: "Size -"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-body5 text-neutral-98",
                                            children: "Power +"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative select-none",
                                    style: {
                                        userSelect: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[12px] rounded-full bg-neutral-50",
                                            style: {
                                                opacity: 0.2
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        (()=>{
                                            const minPower = 0.6;
                                            const maxPower = 0.95;
                                            const powerRange = maxPower - minPower;
                                            const sliderPercentage = (sampleSizeControl - minPower) / powerRange * 100;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[12px] rounded-full absolute top-0 left-0",
                                                        style: {
                                                            width: "".concat(Math.max(0, Math.min(100, sliderPercentage)), "%"),
                                                            background: "var(--secondary-60)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 -translate-y-1/2 w-[38px] h-[24px] rounded-full bg-white cursor-grab active:cursor-grabbing",
                                                        style: {
                                                            left: "calc(".concat(Math.max(0, Math.min(100, sliderPercentage)), "% - 19px)")
                                                        },
                                                        onMouseDown: (e)=>{
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            const slider = e.currentTarget.parentElement;
                                                            if (!slider) return;
                                                            const preventSelect = (event)=>{
                                                                event.preventDefault();
                                                                event.stopPropagation();
                                                                return false;
                                                            };
                                                            const preventDrag = (event)=>{
                                                                event.preventDefault();
                                                                return false;
                                                            };
                                                            const handleMouseMove = (moveEvent)=>{
                                                                moveEvent.preventDefault();
                                                                const rect = slider.getBoundingClientRect();
                                                                const x = moveEvent.clientX - rect.left;
                                                                const percentage = Math.max(0, Math.min(100, x / rect.width * 100));
                                                                const rawPower = minPower + percentage / 100 * powerRange;
                                                                const steppedPower = Math.round(rawPower / 0.05) * 0.05;
                                                                const clampedPower = Math.max(minPower, Math.min(maxPower, steppedPower));
                                                                setSampleSizeControl(parseFloat(clampedPower.toFixed(2)));
                                                            };
                                                            const handleMouseUp = (upEvent)=>{
                                                                upEvent.preventDefault();
                                                                upEvent.stopPropagation();
                                                                document.removeEventListener("mousemove", handleMouseMove);
                                                                document.removeEventListener("mouseup", handleMouseUp);
                                                                document.removeEventListener("selectstart", preventSelect);
                                                                document.removeEventListener("select", preventSelect);
                                                                document.removeEventListener("dragstart", preventDrag);
                                                                const bodyStyle = document.body.style;
                                                                bodyStyle.userSelect = "";
                                                                bodyStyle.webkitUserSelect = "";
                                                                bodyStyle.mozUserSelect = "";
                                                                bodyStyle.msUserSelect = "";
                                                                document.body.classList.remove("no-select");
                                                            };
                                                            const bodyStyle = document.body.style;
                                                            bodyStyle.userSelect = "none";
                                                            bodyStyle.webkitUserSelect = "none";
                                                            bodyStyle.mozUserSelect = "none";
                                                            bodyStyle.msUserSelect = "none";
                                                            document.body.classList.add("no-select");
                                                            document.addEventListener("mousemove", handleMouseMove, {
                                                                passive: false
                                                            });
                                                            document.addEventListener("mouseup", handleMouseUp, {
                                                                passive: false
                                                            });
                                                            document.addEventListener("selectstart", preventSelect);
                                                            document.addEventListener("select", preventSelect);
                                                            document.addEventListener("dragstart", preventDrag);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true);
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-body5m text-neutral-50",
                                            children: "Min"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-body5m text-neutral-50",
                                            children: "Max"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col min-h-0 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-[18px] overflow-hidden w-full h-full flex flex-col min-h-0 bg-neutral-95",
                                style: {
                                    backgroundColor: "var(--neutral-95)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-h-0 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplebar$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "w-full h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col w-full p-4 gap-3 bg-neutral-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-body2 text-black flex-shrink-0",
                                                        children: "Simulation Setting"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-body4 text-neutral-5",
                                                                            children: "Disease"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-body4 text-tertiary-30",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-neutral-90 rounded-[8px] h-[26px] px-3 flex items-center w-[154px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: disease,
                                                                            onChange: (e)=>setDisease(e.target.value),
                                                                            className: "w-full bg-transparent text-body5 text-neutral-50 outline-none",
                                                                            placeholder: "Alzheimer's disease"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 253,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "18",
                                                                            height: "18",
                                                                            viewBox: "0 0 18 18",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            className: "flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                style: {
                                                                                    mixBlendMode: "plus-darker"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M6.77336 6.10156L13.3829 6.10156C13.621 6.10156 13.7956 6.15113 13.9067 6.25026C14.021 6.34939 14.0781 6.46727 14.0781 6.60391C14.0781 6.72447 14.0369 6.84771 13.9543 6.97363L10.7115 11.6555C10.5972 11.8216 10.494 11.9368 10.4019 12.0011C10.313 12.0681 10.2051 12.1016 10.0781 12.1016C9.95432 12.1016 9.84638 12.0681 9.75432 12.0011C9.66225 11.9368 9.55908 11.8216 9.44479 11.6555L6.20193 6.97363C6.1194 6.84771 6.07813 6.72447 6.07813 6.60391C6.07813 6.46727 6.13527 6.34939 6.24955 6.25026C6.36384 6.15113 6.53844 6.10156 6.77336 6.10156Z",
                                                                                    fill: "var(--neutral-50)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                    lineNumber: 269,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-body4 text-neutral-5",
                                                                        children: "Endpoints Design"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setIsAddEndpointsModalOpen(true),
                                                                        className: "w-6 h-6 rounded-[8px] flex items-center justify-center cursor-pointer flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "24",
                                                                            height: "24",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z",
                                                                                    fill: "#231F52"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                    lineNumber: 294,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M7.96436 13.5649V11.9097H16.0356V13.5649H7.96436ZM11.1724 16.7363V8.73828H12.8276V16.7363H11.1724Z",
                                                                                    fill: "white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                    lineNumber: 298,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-[12px] p-4 flex flex-col gap-2",
                                                                children: [
                                                                    primaryEndpoints.map((ep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-body5 text-neutral-40",
                                                                                            children: [
                                                                                                "Primary Endpoint #",
                                                                                                i + 1
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 312,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            value: ep.name,
                                                                                            options: ENDPOINT_OPTIONS,
                                                                                            onChange: (value)=>{
                                                                                                setPrimaryEndpoints((prev)=>prev.map((e, j)=>j === i ? {
                                                                                                            ...e,
                                                                                                            name: value
                                                                                                        } : e));
                                                                                            },
                                                                                            className: "w-[154px]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 315,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-col gap-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-body5 text-neutral-40",
                                                                                                    children: "Expected Effect Size"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                    lineNumber: 330,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-body5 text-tertiary-30",
                                                                                                    children: "*"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                    lineNumber: 333,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 329,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            value: ep.effectSize,
                                                                                            min: 0.1,
                                                                                            max: 10,
                                                                                            step: 0.1,
                                                                                            onChange: (value)=>{
                                                                                                const rounded = Math.round(value * 10) / 10;
                                                                                                const clamped = Math.max(0.1, Math.min(10, rounded));
                                                                                                setPrimaryEndpoints((prev)=>prev.map((e, j)=>j === i ? {
                                                                                                            ...e,
                                                                                                            effectSize: clamped
                                                                                                        } : e));
                                                                                            },
                                                                                            className: "w-full"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 337,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                    lineNumber: 328,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, "primary-".concat(i), true, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 307,
                                                                            columnNumber: 27
                                                                        }, this)),
                                                                    secondaryEndpoints.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-[1px] bg-neutral-80"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 363,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            secondaryEndpoints.map((ep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-col gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-body5 text-neutral-40",
                                                                                                    children: [
                                                                                                        "Secondary Endpoint #",
                                                                                                        i + 1
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                    lineNumber: 370,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    value: ep.name,
                                                                                                    placeholder: "Select",
                                                                                                    options: ENDPOINT_OPTIONS,
                                                                                                    onChange: (value)=>{
                                                                                                        setSecondaryEndpoints((prev)=>prev.map((e, j)=>j === i ? {
                                                                                                                    ...e,
                                                                                                                    name: value
                                                                                                                } : e));
                                                                                                    },
                                                                                                    className: "w-[154px]"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                    lineNumber: 373,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 369,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex flex-col gap-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-body5 text-neutral-40",
                                                                                                            children: "Expected Effect Size"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                            lineNumber: 389,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-body5 text-tertiary-30",
                                                                                                            children: "*"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                            lineNumber: 392,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                    lineNumber: 388,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    value: ep.effectSize,
                                                                                                    min: 0.1,
                                                                                                    max: 10,
                                                                                                    step: 0.1,
                                                                                                    onChange: (value)=>{
                                                                                                        const rounded = Math.round(value * 10) / 10;
                                                                                                        const clamped = Math.max(0.1, Math.min(10, rounded));
                                                                                                        setSecondaryEndpoints((prev)=>prev.map((e, j)=>j === i ? {
                                                                                                                    ...e,
                                                                                                                    effectSize: clamped
                                                                                                                } : e));
                                                                                                    },
                                                                                                    className: "w-full"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                    lineNumber: 396,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 387,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, "secondary-".concat(i), true, {
                                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                    lineNumber: 365,
                                                                                    columnNumber: 31
                                                                                }, this)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-[1px] bg-neutral-80"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 421,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-40",
                                                                                        children: "Norminal Power"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 426,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-tertiary-30",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 429,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 425,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: nominalPower,
                                                                                min: 0.8,
                                                                                max: 0.9,
                                                                                step: 0.05,
                                                                                onChange: (value)=>{
                                                                                    const rounded = Math.round(value / 0.05) * 0.05;
                                                                                    setNominalPower(Math.max(0.8, Math.min(0.9, rounded)));
                                                                                },
                                                                                valuePrecision: 2,
                                                                                className: "w-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 433,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-body4 text-neutral-5",
                                                                            children: "Treatment Duration"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-body4 text-tertiary-30",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                            lineNumber: 456,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    value: treatmentDuration,
                                                                    options: [
                                                                        "3 months",
                                                                        "6 months",
                                                                        "9 months",
                                                                        "12 months",
                                                                        "15 months",
                                                                        "18 months",
                                                                        "21 months",
                                                                        "24 months"
                                                                    ],
                                                                    onChange: setTreatmentDuration,
                                                                    className: "w-[100px] [&>button]:h-[26px]",
                                                                    iconPath: "/assets/icons/chevron-select.svg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-body4 text-neutral-5",
                                                                children: "Trial Design"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-[12px] px-2 py-2 flex flex-col gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-body5 text-neutral-40",
                                                                                                children: "Hypothesis Type"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                lineNumber: 484,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-body5 text-tertiary-30",
                                                                                                children: "*"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                                lineNumber: 487,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 483,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>setIsHypothesisModalOpen(true),
                                                                                        className: "cursor-pointer hover:opacity-80 transition-opacity",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                            lineNumber: 495,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 491,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 482,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: hypothesisType,
                                                                                options: [
                                                                                    "Superiority",
                                                                                    "Non-inferiority",
                                                                                    "Equivalence"
                                                                                ],
                                                                                onChange: setHypothesisType,
                                                                                className: "w-[154px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 498,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-40",
                                                                                        children: "Treatment Arms"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 511,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-tertiary-30",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 514,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 510,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: treatmentArms,
                                                                                options: [
                                                                                    "1",
                                                                                    "2"
                                                                                ],
                                                                                onChange: (value)=>{
                                                                                    setTreatmentArms(value);
                                                                                    if (value === "1") {
                                                                                        if (![
                                                                                            "1:1",
                                                                                            "2:1"
                                                                                        ].includes(randomizationRatio)) {
                                                                                            setRandomizationRatio("1:1");
                                                                                        }
                                                                                    } else if (value === "2") {
                                                                                        if (![
                                                                                            "1:1:1",
                                                                                            "2:1:1"
                                                                                        ].includes(randomizationRatio)) {
                                                                                            setRandomizationRatio("1:1:1");
                                                                                        }
                                                                                    }
                                                                                },
                                                                                className: "w-[154px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 518,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 509,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-40",
                                                                                        children: "Randomization Ratio"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 544,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-tertiary-30",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                        lineNumber: 547,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 543,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: randomizationRatio,
                                                                                options: treatmentArms === "1" ? [
                                                                                    "1:1",
                                                                                    "2:1"
                                                                                ] : treatmentArms === "2" ? [
                                                                                    "1:1:1",
                                                                                    "2:1:1"
                                                                                ] : [],
                                                                                onChange: setRandomizationRatio,
                                                                                className: "w-[154px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 551,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-body5 text-neutral-40",
                                                                                children: "Subpopulation"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: subpopulation,
                                                                                options: [
                                                                                    "ALL",
                                                                                    "Mild AD",
                                                                                    "Moderate AD"
                                                                                ],
                                                                                onChange: setSubpopulation,
                                                                                className: "w-[154px]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                                lineNumber: 568,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 564,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                lineNumber: 240,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto flex-shrink-0 p-4 pt-0 flex flex-col gap-3 bg-neutral-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "19",
                                                                    height: "19",
                                                                    viewBox: "0 0 19 19",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M17.75 4.91667C17.75 6.9425 14.0558 8.58333 9.5 8.58333C4.94417 8.58333 1.25 6.9425 1.25 4.91667M17.75 4.91667C17.75 2.89083 14.0558 1.25 9.5 1.25C4.94417 1.25 1.25 2.89083 1.25 4.91667M17.75 4.91667V9.5M1.25 4.91667V9.5M1.25 9.5C1.25 11.5258 4.94417 13.1667 9.5 13.1667M1.25 9.5V14.0833C1.25 16.1092 4.94417 17.75 9.5 17.75M15 12.25V15M15 15V17.75M15 15H17.75M15 15H12.25",
                                                                        stroke: "var(--neutral-5)",
                                                                        strokeWidth: "1.5",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                        lineNumber: 592,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-body4 text-neutral-5 ",
                                                                    children: "Active Data"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                            lineNumber: 583,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: activeData,
                                                            options: [
                                                                "Oprimed data",
                                                                "Historical data",
                                                                "Synthetic data"
                                                            ],
                                                            onChange: setActiveData,
                                                            className: " [&>button]:h-[26px]",
                                                            iconPath: "/assets/icons/active-data-edit.svg",
                                                            iconWidth: 18,
                                                            iconHeight: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "orange",
                                                size: "md",
                                                icon: "play",
                                                iconPosition: "right",
                                                onClick: onApply,
                                                disabled: isLoading,
                                                className: "self-end h-[30px] text-body4",
                                                children: isLoading ? "Loading..." : "Apply"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ats/LeftPanel.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ats/LeftPanel.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$hypothesis$2d$type$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isHypothesisModalOpen,
                onOpenChange: setIsHypothesisModalOpen
            }, void 0, false, {
                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$add$2d$endpoints$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isAddEndpointsModalOpen,
                onOpenChange: setIsAddEndpointsModalOpen,
                primaryEndpoints: primaryEndpoints,
                secondaryEndpoints: secondaryEndpoints,
                nominalPower: nominalPower,
                alpha: alpha,
                multiplicity: multiplicity,
                onSave: onSaveEndpoints
            }, void 0, false, {
                fileName: "[project]/src/components/ats/LeftPanel.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ats/LeftPanel.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(LeftPanel, "8l68O7eZWC70R+74StOMmHoDefA=");
_c = LeftPanel;
var _c;
__turbopack_context__.k.register(_c, "LeftPanel");
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
"[project]/src/components/charts/LineChartWithHighlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChartWithHighlight",
    ()=>LineChartWithHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// y축 값에 가장 가까운 포인트 인덱스를 찾는 함수
const findClosestIndexByY = (data, yValue)=>{
    if (data.length === 0) return -1;
    let closestIndex = 0;
    let minDiff = Math.abs(data[0][1] - yValue);
    for(let i = 1; i < data.length; i++){
        const diff = Math.abs(data[i][1] - yValue);
        if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
        }
    }
    return closestIndex;
};
// x축 값에 가장 가까운 포인트 인덱스를 찾는 함수
const findClosestIndexByX = (data, xValue)=>{
    if (data.length === 0) return -1;
    let closestIndex = 0;
    let minDiff = Math.abs(data[0][0] - xValue);
    for(let i = 1; i < data.length; i++){
        const diff = Math.abs(data[i][0] - xValue);
        if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
        }
    }
    return closestIndex;
};
const LineChartWithHighlight = (param)=>{
    let { optivisData, traditionalData, xAxisName, yAxisName, highlightIndex, highlightXValue, grid = {
        left: 60,
        right: 20,
        top: 20,
        bottom: 50
    }, xAxisConfig = {}, yAxisConfig = {}, showGrid = true, showAxes = true, showTicks = true, showTooltip = true, optivisColor = "#f06600", traditionalColor = "#231f52", optivisSymbolSize = 6, traditionalSymbolSize = 6, optivisLineWidth = 2, traditionalLineWidth = 2, showAreaStyle = false, optivisAreaColor = "rgba(240, 102, 0, 0.25)", traditionalAreaColor = "rgba(35, 31, 82, 0.25)", onChartClick } = param;
    _s();
    const [tooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // 하이라이트 포인트 계산 메모이제이션
    const { optivisPoint, traditionalPoint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineChartWithHighlight.useMemo": ()=>{
            let optivisHighlightIndex;
            if (highlightXValue !== undefined) {
                optivisHighlightIndex = findClosestIndexByX(optivisData, highlightXValue);
            } else if (highlightIndex !== undefined) {
                optivisHighlightIndex = Math.min(Math.max(0, highlightIndex), optivisData.length - 1);
            } else {
                optivisHighlightIndex = -1;
            }
            const optivisY = optivisHighlightIndex >= 0 && optivisHighlightIndex < optivisData.length ? optivisData[optivisHighlightIndex][1] : null;
            const traditionalHighlightIndex = optivisY !== null ? findClosestIndexByY(traditionalData, optivisY) : -1;
            const oPoint = optivisHighlightIndex >= 0 && optivisHighlightIndex < optivisData.length ? optivisData[optivisHighlightIndex] : null;
            const tPoint = traditionalHighlightIndex >= 0 && traditionalHighlightIndex < traditionalData.length ? traditionalData[traditionalHighlightIndex] : null;
            return {
                optivisPoint: oPoint,
                traditionalPoint: tPoint
            };
        }
    }["LineChartWithHighlight.useMemo"], [
        optivisData,
        traditionalData,
        highlightIndex,
        highlightXValue
    ]);
    // ECharts option 객체 메모이제이션
    const chartOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LineChartWithHighlight.useMemo[chartOption]": ()=>{
            const series = [
                {
                    name: "OPTIVIS",
                    type: "line",
                    data: optivisData,
                    lineStyle: {
                        color: optivisColor,
                        width: optivisLineWidth
                    },
                    symbol: "circle",
                    symbolSize: optivisSymbolSize,
                    itemStyle: {
                        color: optivisColor
                    },
                    smooth: true,
                    z: 3,
                    markPoint: optivisPoint ? {
                        data: [
                            {
                                coord: optivisPoint,
                                symbol: "circle",
                                symbolSize: 19,
                                itemStyle: {
                                    color: optivisColor,
                                    opacity: 0.5
                                }
                            },
                            {
                                coord: optivisPoint,
                                symbol: "circle",
                                symbolSize: 9,
                                itemStyle: {
                                    color: optivisColor,
                                    opacity: 0.8
                                }
                            }
                        ],
                        label: {
                            show: false
                        },
                        z: 10
                    } : undefined,
                    markLine: optivisPoint ? {
                        symbol: "none",
                        lineStyle: {
                            type: "dashed",
                            width: 1,
                            opacity: 1
                        },
                        data: [
                            {
                                xAxis: optivisPoint[0],
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    color: optivisColor,
                                    type: "solid",
                                    width: 2,
                                    opacity: 1
                                }
                            },
                            {
                                yAxis: optivisPoint[1],
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    color: "#7654F0",
                                    type: [
                                        4,
                                        3
                                    ],
                                    width: 1.5,
                                    opacity: 0.8
                                }
                            }
                        ],
                        z: 5
                    } : undefined,
                    ...showAreaStyle && {
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
                                        color: optivisAreaColor
                                    },
                                    {
                                        offset: 0.5,
                                        color: optivisAreaColor.replace("0.25", "0.12")
                                    },
                                    {
                                        offset: 1,
                                        color: optivisAreaColor.replace("0.25", "0.03")
                                    }
                                ]
                            },
                            origin: "start"
                        }
                    }
                },
                {
                    name: "Traditional",
                    type: "line",
                    data: traditionalData,
                    lineStyle: {
                        color: traditionalColor,
                        width: traditionalLineWidth
                    },
                    symbol: "circle",
                    symbolSize: traditionalSymbolSize,
                    itemStyle: {
                        color: traditionalColor
                    },
                    smooth: true,
                    z: 2,
                    markPoint: traditionalPoint ? {
                        data: [
                            {
                                coord: traditionalPoint,
                                symbol: "circle",
                                symbolSize: 19,
                                itemStyle: {
                                    color: traditionalColor,
                                    opacity: 0.5
                                }
                            },
                            {
                                coord: traditionalPoint,
                                symbol: "circle",
                                symbolSize: 9,
                                itemStyle: {
                                    color: traditionalColor,
                                    opacity: 0.8
                                }
                            }
                        ],
                        label: {
                            show: false
                        },
                        z: 10
                    } : undefined,
                    markLine: traditionalPoint ? {
                        symbol: "none",
                        lineStyle: {
                            type: "dashed",
                            width: 1,
                            opacity: 1
                        },
                        data: [
                            {
                                xAxis: traditionalPoint[0],
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    color: traditionalColor,
                                    type: "solid",
                                    width: 2,
                                    opacity: 1
                                }
                            }
                        ],
                        z: 5
                    } : undefined,
                    ...showAreaStyle && {
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
                                        color: traditionalAreaColor
                                    },
                                    {
                                        offset: 0.5,
                                        color: traditionalAreaColor.replace("0.25", "0.12")
                                    },
                                    {
                                        offset: 1,
                                        color: traditionalAreaColor.replace("0.25", "0.03")
                                    }
                                ]
                            },
                            origin: "start"
                        }
                    }
                }
            ];
            var _xAxisConfig_nameGap, _xAxisConfig_nameTextStyle, _xAxisConfig_scale, _yAxisConfig_nameGap, _yAxisConfig_nameTextStyle, _yAxisConfig_scale;
            return {
                grid,
                xAxis: {
                    type: "value",
                    name: xAxisName,
                    nameLocation: "middle",
                    nameGap: (_xAxisConfig_nameGap = xAxisConfig.nameGap) !== null && _xAxisConfig_nameGap !== void 0 ? _xAxisConfig_nameGap : 30,
                    nameTextStyle: (_xAxisConfig_nameTextStyle = xAxisConfig.nameTextStyle) !== null && _xAxisConfig_nameTextStyle !== void 0 ? _xAxisConfig_nameTextStyle : {
                        fontSize: 12,
                        color: "#666"
                    },
                    axisLine: {
                        show: showAxes,
                        ...showAxes && {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    },
                    axisTick: {
                        show: showTicks
                    },
                    axisLabel: {
                        show: showTicks,
                        ...xAxisConfig.axisLabel && {
                            fontSize: xAxisConfig.axisLabel.fontSize,
                            fontWeight: xAxisConfig.axisLabel.fontWeight,
                            color: xAxisConfig.axisLabel.color
                        }
                    },
                    splitLine: {
                        show: showGrid,
                        lineStyle: {
                            color: "#e0e0e0",
                            type: "dashed"
                        }
                    },
                    scale: (_xAxisConfig_scale = xAxisConfig.scale) !== null && _xAxisConfig_scale !== void 0 ? _xAxisConfig_scale : false
                },
                yAxis: {
                    type: "value",
                    name: yAxisName,
                    nameLocation: "middle",
                    nameGap: (_yAxisConfig_nameGap = yAxisConfig.nameGap) !== null && _yAxisConfig_nameGap !== void 0 ? _yAxisConfig_nameGap : 40,
                    nameTextStyle: (_yAxisConfig_nameTextStyle = yAxisConfig.nameTextStyle) !== null && _yAxisConfig_nameTextStyle !== void 0 ? _yAxisConfig_nameTextStyle : {
                        fontSize: 12,
                        color: "#666"
                    },
                    axisLine: {
                        show: showAxes,
                        ...showAxes && {
                            lineStyle: {
                                color: "#999"
                            }
                        }
                    },
                    axisTick: {
                        show: showTicks
                    },
                    axisLabel: {
                        show: showTicks,
                        ...yAxisConfig.axisLabel && {
                            fontSize: yAxisConfig.axisLabel.fontSize,
                            fontWeight: yAxisConfig.axisLabel.fontWeight,
                            color: yAxisConfig.axisLabel.color
                        }
                    },
                    splitLine: {
                        show: showGrid,
                        lineStyle: {
                            color: "#e0e0e0",
                            type: "dashed"
                        }
                    },
                    scale: (_yAxisConfig_scale = yAxisConfig.scale) !== null && _yAxisConfig_scale !== void 0 ? _yAxisConfig_scale : false
                },
                series,
                tooltip: {
                    show: false
                }
            };
        }
    }["LineChartWithHighlight.useMemo[chartOption]"], [
        optivisData,
        traditionalData,
        optivisPoint,
        traditionalPoint,
        grid,
        xAxisName,
        yAxisName,
        xAxisConfig,
        yAxisConfig,
        showGrid,
        showAxes,
        showTicks,
        showAreaStyle,
        optivisColor,
        traditionalColor,
        optivisSymbolSize,
        traditionalSymbolSize,
        optivisLineWidth,
        traditionalLineWidth,
        optivisAreaColor,
        traditionalAreaColor
    ]);
    const handleChartClick = (e)=>{
        if (!showTooltip || !optivisPoint && !traditionalPoint) return;
        // 클릭 위치 가져오기
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // 아무 곳이나 클릭하면 토글
        if (tooltipVisible) {
            setTooltipVisible(false);
        } else {
            setTooltipPosition({
                x,
                y
            });
            setTooltipVisible(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            height: "100%",
            width: "100%"
        },
        onClick: handleChartClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                option: chartOption,
                notMerge: true,
                lazyUpdate: true,
                style: {
                    height: "100%",
                    width: "100%"
                },
                onEvents: onChartClick ? {
                    click: onChartClick
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showTooltip && tooltipVisible && (optivisPoint || traditionalPoint) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "".concat(tooltipPosition.x, "px"),
                    top: "".concat(tooltipPosition.y, "px"),
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "5.67px",
                    padding: "8px 12px",
                    minWidth: "87px",
                    zIndex: 10,
                    transform: "translate(-50%, -100%)",
                    marginTop: "-8px"
                },
                children: [
                    optivisPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "4px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "16px",
                                            height: "16px",
                                            borderRadius: "50%",
                                            backgroundColor: optivisColor,
                                            marginRight: "8px",
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-body4 text-white",
                                        children: "OPTIVIS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                        lineNumber: 470,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                lineNumber: 453,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-body4 text-neutral-98",
                                    children: [
                                        Math.round(optivisPoint[0]),
                                        " , ",
                                        optivisPoint[1].toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                    lineNumber: 473,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                lineNumber: 472,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                        lineNumber: 452,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    traditionalPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "4px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "16px",
                                            height: "16px",
                                            borderRadius: "50%",
                                            backgroundColor: traditionalColor,
                                            marginRight: "8px",
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                        lineNumber: 489,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-body4 text-white",
                                        children: "Traditional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                        lineNumber: 499,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-body4 text-neutral-98",
                                    children: [
                                        Math.round(traditionalPoint[0]),
                                        " ,",
                                        " ",
                                        traditionalPoint[1].toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                    lineNumber: 502,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                                lineNumber: 501,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                        lineNumber: 481,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
                lineNumber: 436,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/charts/LineChartWithHighlight.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LineChartWithHighlight, "DHUoGbefXtZEz8W3C221QU/H8kU=");
_c = LineChartWithHighlight;
var _c;
__turbopack_context__.k.register(_c, "LineChartWithHighlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/SmallerSampleChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmallerSampleChart",
    ()=>SmallerSampleChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/LineChartWithHighlight.tsx [app-client] (ecmascript)");
"use client";
;
;
const SmallerSampleChart = (param)=>{
    let { optivisData, traditionalData, highlightIndex, highlightXValue, compactMode = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartWithHighlight"], {
        optivisData: optivisData,
        traditionalData: traditionalData,
        xAxisName: "Sample Size",
        yAxisName: "CI Width",
        highlightIndex: highlightIndex,
        highlightXValue: highlightXValue,
        grid: compactMode ? {
            left: 20,
            right: 5,
            top: 10,
            bottom: 20,
            containLabel: true
        } : {
            left: 60,
            right: 20,
            top: 20,
            bottom: 50
        },
        xAxisConfig: compactMode ? {
            nameGap: 5,
            nameTextStyle: {
                fontSize: 10,
                fontWeight: 510,
                letterSpacing: -0.2,
                color: "#1B1B1B"
            },
            scale: true
        } : {
            nameGap: 30,
            nameTextStyle: {
                fontSize: 12,
                color: "#666"
            },
            scale: true
        },
        yAxisConfig: compactMode ? {
            nameGap: 5,
            nameTextStyle: {
                fontSize: 10,
                fontWeight: 510,
                letterSpacing: -0.2,
                color: "#1B1B1B"
            },
            scale: true
        } : {
            nameGap: 40,
            nameTextStyle: {
                fontSize: 12,
                color: "#666"
            },
            scale: true
        },
        showGrid: compactMode ? false : true,
        showAxes: compactMode ? false : true,
        showTicks: compactMode ? false : true,
        showTooltip: true,
        optivisColor: "#f06600",
        traditionalColor: "#231f52",
        optivisSymbolSize: 6,
        traditionalSymbolSize: 6,
        optivisLineWidth: 2,
        traditionalLineWidth: 2,
        showAreaStyle: true,
        optivisAreaColor: "rgba(240, 102, 0, 0.25)",
        traditionalAreaColor: "rgba(35, 31, 82, 0.25)"
    }, void 0, false, {
        fileName: "[project]/src/components/charts/SmallerSampleChart.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SmallerSampleChart;
var _c;
__turbopack_context__.k.register(_c, "SmallerSampleChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/SmallerNToScreenChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmallerNToScreenChart",
    ()=>SmallerNToScreenChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/LineChartWithHighlight.tsx [app-client] (ecmascript)");
"use client";
;
;
const SmallerNToScreenChart = (param)=>{
    let { optivisData, traditionalData, highlightIndex, highlightXValue, compactMode = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartWithHighlight"], {
        optivisData: optivisData,
        traditionalData: traditionalData,
        xAxisName: "Enrollment Time",
        yAxisName: "Power",
        highlightIndex: highlightIndex,
        highlightXValue: highlightXValue,
        grid: compactMode ? {
            left: 20,
            right: 5,
            top: 10,
            bottom: 20,
            containLabel: true
        } : {
            left: 20,
            right: 5,
            top: 10,
            bottom: 20,
            containLabel: true
        },
        xAxisConfig: {
            nameGap: compactMode ? 3 : 5,
            nameTextStyle: {
                fontSize: compactMode ? 8 : 10,
                fontWeight: 510,
                letterSpacing: -0.2,
                color: "#1B1B1B"
            },
            scale: true
        },
        yAxisConfig: {
            nameGap: compactMode ? 3 : 5,
            nameTextStyle: {
                fontSize: compactMode ? 8 : 10,
                fontWeight: 510,
                letterSpacing: -0.2,
                color: "#1B1B1B"
            },
            scale: true
        },
        showGrid: compactMode ? false : false,
        showAxes: compactMode ? false : false,
        showTicks: compactMode ? false : false,
        showTooltip: false,
        optivisColor: "#f06600",
        traditionalColor: "#231f52",
        optivisSymbolSize: 4,
        traditionalSymbolSize: 4,
        optivisLineWidth: 2,
        traditionalLineWidth: 2,
        showAreaStyle: true,
        optivisAreaColor: "rgba(240, 102, 0, 0.25)",
        traditionalAreaColor: "rgba(35, 31, 82, 0.25)"
    }, void 0, false, {
        fileName: "[project]/src/components/charts/SmallerNToScreenChart.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SmallerNToScreenChart;
var _c;
__turbopack_context__.k.register(_c, "SmallerNToScreenChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/charts/LowerCostChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LowerCostChart",
    ()=>LowerCostChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/LineChartWithHighlight.tsx [app-client] (ecmascript)");
"use client";
;
;
const LowerCostChart = (param)=>{
    let { optivisData, traditionalData, highlightIndex, highlightXValue, compactMode = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartWithHighlight"], {
        optivisData: optivisData,
        traditionalData: traditionalData,
        xAxisName: "Sample Size",
        yAxisName: "Cost",
        highlightIndex: highlightIndex,
        highlightXValue: highlightXValue,
        grid: compactMode ? {
            left: 20,
            right: 5,
            top: 10,
            bottom: 20,
            containLabel: true
        } : {
            left: 20,
            right: 5,
            top: 10,
            bottom: 20,
            containLabel: true
        },
        xAxisConfig: {
            nameGap: compactMode ? 3 : 5,
            nameTextStyle: {
                fontSize: compactMode ? 8 : 10,
                fontWeight: 510,
                letterSpacing: -0.2,
                color: "#1B1B1B"
            },
            scale: true
        },
        yAxisConfig: {
            nameGap: compactMode ? 3 : 5,
            nameTextStyle: {
                fontSize: compactMode ? 8 : 10,
                fontWeight: 510,
                letterSpacing: -0.2,
                color: "#1B1B1B"
            },
            scale: true
        },
        showGrid: compactMode ? false : false,
        showAxes: compactMode ? false : false,
        showTicks: compactMode ? false : false,
        showTooltip: false,
        optivisColor: "#f06600",
        traditionalColor: "#231f52",
        optivisSymbolSize: 4,
        traditionalSymbolSize: 4,
        optivisLineWidth: 2,
        traditionalLineWidth: 2,
        showAreaStyle: true,
        optivisAreaColor: "rgba(240, 102, 0, 0.25)",
        traditionalAreaColor: "rgba(35, 31, 82, 0.25)"
    }, void 0, false, {
        fileName: "[project]/src/components/charts/LowerCostChart.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LowerCostChart;
var _c;
__turbopack_context__.k.register(_c, "LowerCostChart");
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
"[project]/src/components/charts/ComparisonBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonBarChart",
    ()=>ComparisonBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
"use client";
;
;
function ComparisonBarChart(param) {
    let { optivisValue, traditionalValue, height = "100%", formatter = (val, label)=>label === 'Cost' ? "".concat(val, "M") : String(val), label } = param;
    const maxValue = Math.max(optivisValue, traditionalValue);
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
                        optivisValue
                    ],
                    itemStyle: {
                        color: '#f06600',
                        borderRadius: [
                            8,
                            8,
                            0,
                            0
                        ]
                    },
                    barWidth: '45%',
                    barGap: '10%',
                    label: {
                        show: true,
                        position: 'insideTop',
                        formatter: formatter(optivisValue, label),
                        color: '#ffffff',
                        fontSize: 19.5,
                        fontWeight: 590,
                        letterSpacing: -0.585
                    }
                },
                {
                    type: 'bar',
                    data: [
                        traditionalValue
                    ],
                    itemStyle: {
                        color: '#231f52',
                        borderRadius: [
                            8,
                            8,
                            0,
                            0
                        ]
                    },
                    barWidth: '45%',
                    label: {
                        show: true,
                        position: 'insideTop',
                        formatter: formatter(traditionalValue, label),
                        color: '#ffffff',
                        fontSize: 19.5,
                        fontWeight: 590,
                        letterSpacing: -0.585
                    }
                }
            ]
        },
        notMerge: true,
        lazyUpdate: true,
        style: {
            height,
            width: '100%'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/charts/ComparisonBarChart.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = ComparisonBarChart;
var _c;
__turbopack_context__.k.register(_c, "ComparisonBarChart");
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
"[project]/src/components/ui/fullscreen-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FullscreenIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FullscreenIcon(param) {
    let { className = "", color = "#FAFAFA", backgroundColor = "#c4c3c5" } = param;
    _s();
    const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId().replace(/:/g, '_');
    const clipPathId0 = "clip0_fullscreen_".concat(uniqueId);
    const clipPathId1 = "clip1_fullscreen_".concat(uniqueId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "cursor-pointer ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "36",
                height: "36",
                rx: "8.47059",
                fill: backgroundColor,
                fillOpacity: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#".concat(clipPathId0, ")"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#".concat(clipPathId1, ")"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10.5879 25.4609L24.4016 11.6472",
                            stroke: color,
                            strokeWidth: "2.11765",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M25.2669 25.4141L25.2669 10.737L10.5898 10.737",
                            stroke: color,
                            strokeWidth: "2.11765",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: clipPathId0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "16.9412",
                            height: "16.9412",
                            fill: "white",
                            transform: "translate(9.5293 9.5293)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: clipPathId1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "16.7738",
                            height: "16.7738",
                            fill: "white",
                            transform: "translate(9.5293 9.61328)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/fullscreen-icon.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(FullscreenIcon, "xfMyHNFebGjSN1/YPqrD8z5EdLc=");
_c = FullscreenIcon;
var _c;
__turbopack_context__.k.register(_c, "FullscreenIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/math/FormulaDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormulaDisplay",
    ()=>FormulaDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-katex/dist/react-katex.js [app-client] (ecmascript)");
"use client";
;
;
;
function FormulaDisplay(param) {
    let { formula, displayMode = false, className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(className, " ").concat(!displayMode ? 'katex-display-inline' : ''),
        children: displayMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockMath"], {
            math: formula,
            throwOnError: false,
            errorColor: "#cc0000"
        }, void 0, false, {
            fileName: "[project]/src/components/math/FormulaDisplay.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineMath"], {
            math: formula,
            throwOnError: false,
            errorColor: "#cc0000"
        }, void 0, false, {
            fileName: "[project]/src/components/math/FormulaDisplay.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/math/FormulaDisplay.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = FormulaDisplay;
var _c;
__turbopack_context__.k.register(_c, "FormulaDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/math/FormulaCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormulaCard",
    ()=>FormulaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/math/FormulaDisplay.tsx [app-client] (ecmascript)");
"use client";
;
;
function FormulaCard(param) {
    let { title = "Formula & Used Value", formula, usedValues = [], definitions = [], className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[18px] overflow-hidden max-w-[410px] ".concat(className),
        style: {
            backgroundImage: "url(/assets/simulation/formula-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 pb-1 flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-body4 text-white ",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#111111]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormulaDisplay"], {
                            formula: formula,
                            displayMode: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/math/FormulaCard.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/math/FormulaCard.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                usedValues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: usedValues.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/30 rounded-lg p-2 flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-small1 text-[#ebebf0]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormulaDisplay"], {
                                        formula: item.label,
                                        displayMode: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/math/FormulaCard.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-body3 text-[#ebebf0]",
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/math/FormulaCard.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this),
                definitions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-body4 text-white ",
                            children: "Definitions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/math/FormulaCard.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/30 rounded-lg p-3 flex flex-col gap-2",
                            children: definitions.map((def, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-[20px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-small1 text-[#ebebf0]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormulaDisplay"], {
                                                    formula: "".concat(def.symbol, ":"),
                                                    displayMode: false
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/math/FormulaCard.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/math/FormulaCard.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-medium text-[#ebebf0] leading-[10px] tracking-[-0.525px] break-words",
                                            children: def.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/math/FormulaCard.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/math/FormulaCard.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/math/FormulaCard.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/math/FormulaCard.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/math/FormulaCard.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = FormulaCard;
var _c;
__turbopack_context__.k.register(_c, "FormulaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/math/FormulaTooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormulaTooltip",
    ()=>FormulaTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/math/FormulaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/info-icon.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function FormulaTooltip(param) {
    let { trigger, formula, usedValues = [], definitions = [], side = "bottom", align = "start" } = param;
    const defaultTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/math/FormulaTooltip.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/math/FormulaTooltip.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                asChild: true,
                children: trigger || defaultTrigger
            }, void 0, false, {
                fileName: "[project]/src/components/math/FormulaTooltip.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: "z-[9999] outline-none",
                    side: side,
                    align: align,
                    sideOffset: side === "left" || side === "right" ? 8 : 0,
                    alignOffset: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormulaCard"], {
                        title: "Formula & Used Value",
                        formula: formula,
                        usedValues: usedValues,
                        definitions: definitions
                    }, void 0, false, {
                        fileName: "[project]/src/components/math/FormulaTooltip.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/math/FormulaTooltip.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/math/FormulaTooltip.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/math/FormulaTooltip.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = FormulaTooltip;
var _c;
__turbopack_context__.k.register(_c, "FormulaTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/fullscreen-chart-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FullscreenChartModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/LineChartWithHighlight.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function FullscreenChartModal(param) {
    let { open, onOpenChange, title, subtitle, percentage, optivisData, traditionalData, highlightXValue, xAxisName, yAxisName, isNegative = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                    className: "fixed inset-0 bg-black/80 z-[110]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: "opacity-94 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-full max-w-[1664px] h-full max-h-[830px] p-0 border-0 bg-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    children: [
                                        title,
                                        " Fullscreen Chart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                    children: [
                                        "Fullscreen view of ",
                                        title,
                                        " chart with detailed visualization"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/simulation/fullscreen-bg.png",
                                    alt: "Fullscreen Background",
                                    fill: true,
                                    className: "object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-6 left-6 right-6 z-10 flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-neutral-98",
                                                    style: {
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: 510,
                                                        fontSize: "24px",
                                                        letterSpacing: "-0.64px",
                                                        lineHeight: "28.8px"
                                                    },
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-neutral-98",
                                                    style: {
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: 590,
                                                        fontSize: "15px",
                                                        letterSpacing: "-0.6px",
                                                        lineHeight: "16.5px"
                                                    },
                                                    children: subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "44",
                                                            height: "44",
                                                            viewBox: "0 0 44 44",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "flex-shrink-0",
                                                            style: {
                                                                transform: isNegative ? "rotate(180deg)" : "none",
                                                                transition: "transform 0.2s"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                    clipPath: "url(#clip0_fullscreen_arrow)",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M21.9902 -3.00195L21.9902 40.5039",
                                                                            stroke: "white",
                                                                            strokeWidth: "6",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                            lineNumber: 101,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M39.793 22.7061L21.9951 40.5039L4.19727 22.7061",
                                                                            stroke: "white",
                                                                            strokeWidth: "6",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                        id: "clip0_fullscreen_arrow",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            width: "44",
                                                                            height: "44",
                                                                            fill: "white",
                                                                            transform: "matrix(0 1 1 4.37114e-08 0 0)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-98",
                                                            style: {
                                                                fontFamily: "Inter",
                                                                fontStyle: "normal",
                                                                fontWeight: 510,
                                                                fontSize: "60px",
                                                                letterSpacing: "-1.8px",
                                                                lineHeight: "60px"
                                                            },
                                                            children: percentage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-[120px] h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/simulation/close-button.png",
                                                    alt: "Close",
                                                    width: 120,
                                                    height: 48,
                                                    className: "flex-shrink-0 w-full h-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 right-6 top-[180px] z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-neutral-95 rounded-[24px] border border-white p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-8 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-[#f06600]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "Inter",
                                                                    fontStyle: "normal",
                                                                    fontWeight: 590,
                                                                    fontSize: "16px",
                                                                    letterSpacing: "-0.64px",
                                                                    lineHeight: "19.2px",
                                                                    color: "#f06600"
                                                                },
                                                                children: "OPTIVIS NEXUS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-[#231f52]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "Inter",
                                                                    fontStyle: "normal",
                                                                    fontWeight: 590,
                                                                    fontSize: "16px",
                                                                    letterSpacing: "-0.64px",
                                                                    lineHeight: "19.2px",
                                                                    color: "#231f52"
                                                                },
                                                                children: "Traditional Design"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full min-h-[400px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LineChartWithHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChartWithHighlight"], {
                                                    optivisData: optivisData,
                                                    traditionalData: traditionalData,
                                                    xAxisName: xAxisName,
                                                    yAxisName: yAxisName,
                                                    highlightXValue: highlightXValue,
                                                    grid: {
                                                        left: 80,
                                                        right: 40,
                                                        top: 40,
                                                        bottom: 80,
                                                        containLabel: false
                                                    },
                                                    xAxisConfig: {
                                                        nameGap: 35,
                                                        nameTextStyle: {
                                                            fontSize: 19.5,
                                                            fontWeight: 590,
                                                            letterSpacing: -0.78,
                                                            color: "#1c1b1c"
                                                        },
                                                        scale: true,
                                                        axisLabel: {
                                                            fontSize: 10,
                                                            fontWeight: 510,
                                                            color: "#484646"
                                                        }
                                                    },
                                                    yAxisConfig: {
                                                        nameGap: 60,
                                                        nameTextStyle: {
                                                            fontSize: 19.5,
                                                            fontWeight: 590,
                                                            letterSpacing: -0.78,
                                                            color: "#1c1b1c"
                                                        },
                                                        scale: true,
                                                        axisLabel: {
                                                            fontSize: 10,
                                                            fontWeight: 510,
                                                            color: "#484646"
                                                        }
                                                    },
                                                    showGrid: true,
                                                    showAxes: true,
                                                    showTicks: true,
                                                    showTooltip: true,
                                                    optivisColor: "#f06600",
                                                    traditionalColor: "#231f52",
                                                    optivisSymbolSize: 8,
                                                    traditionalSymbolSize: 8,
                                                    optivisLineWidth: 3,
                                                    traditionalLineWidth: 3,
                                                    showAreaStyle: true,
                                                    optivisAreaColor: "rgba(240, 102, 0, 0.25)",
                                                    traditionalAreaColor: "rgba(35, 31, 82, 0.25)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/fullscreen-chart-modal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = FullscreenChartModal;
var _c;
__turbopack_context__.k.register(_c, "FullscreenChartModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/fullscreen-bar-chart-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FullscreenBarChartModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/DynamicECharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/arrow-icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function FullscreenBarChartModal(param) {
    let { open, onOpenChange, title, subtitle, percentage, optivisValue, traditionalValue, isNegative = false, formatter } = param;
    _s();
    const [showReduction, setShowReduction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduction = traditionalValue - optivisValue;
    const handleOpenChange = (newOpen)=>{
        if (!newOpen) {
            setShowReduction(false);
        }
        onOpenChange(newOpen);
    };
    // 차트 영역 전체 클릭 감지
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FullscreenBarChartModal.useEffect": ()=>{
            var _chartRef_current;
            if (!open) return;
            const chartInstance = (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.getEchartsInstance();
            if (!chartInstance) return;
            const zr = chartInstance.getZr();
            const handleClick = {
                "FullscreenBarChartModal.useEffect.handleClick": ()=>{
                    if (reduction > 0) {
                        setShowReduction({
                            "FullscreenBarChartModal.useEffect.handleClick": (prev)=>!prev
                        }["FullscreenBarChartModal.useEffect.handleClick"]);
                    }
                }
            }["FullscreenBarChartModal.useEffect.handleClick"];
            zr.on("click", handleClick);
            return ({
                "FullscreenBarChartModal.useEffect": ()=>{
                    zr.off("click", handleClick);
                }
            })["FullscreenBarChartModal.useEffect"];
        }
    }["FullscreenBarChartModal.useEffect"], [
        open,
        reduction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: open,
        onOpenChange: handleOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                    className: "fixed inset-0 bg-black/80 z-[110]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: "opacity-94 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-full max-w-[1664px] h-full max-h-[830px] p-0 border-0 bg-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    children: [
                                        title,
                                        " Fullscreen Chart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                    children: [
                                        "Fullscreen view of ",
                                        title,
                                        " bar chart with detailed visualization"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/simulation/fullscreen-bg.png",
                                    alt: "Fullscreen Background",
                                    fill: true,
                                    className: "object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-6 left-6 right-6 z-10 flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-neutral-98",
                                                    style: {
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: 510,
                                                        fontSize: "24px",
                                                        letterSpacing: "-0.64px",
                                                        lineHeight: "28.8px"
                                                    },
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-neutral-98",
                                                    style: {
                                                        fontFamily: "Inter",
                                                        fontStyle: "normal",
                                                        fontWeight: 590,
                                                        fontSize: "15px",
                                                        letterSpacing: "-0.6px",
                                                        lineHeight: "16.5px"
                                                    },
                                                    children: subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            direction: isNegative ? "up" : "down",
                                                            color: "#fafafa",
                                                            className: "w-11 h-11"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-neutral-98",
                                                            style: {
                                                                fontFamily: "Inter",
                                                                fontStyle: "normal",
                                                                fontWeight: 510,
                                                                fontSize: "60px",
                                                                letterSpacing: "-1.8px",
                                                                lineHeight: "60px"
                                                            },
                                                            children: percentage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-[120px] h-12 flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/simulation/close-button.png",
                                                    alt: "Close",
                                                    width: 120,
                                                    height: 48,
                                                    className: "flex-shrink-0 w-full h-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 right-6 top-[180px] z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-neutral-95 rounded-[24px] border border-white p-6 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-8 mb-4 flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-[#f06600]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "Inter",
                                                                    fontStyle: "normal",
                                                                    fontWeight: 590,
                                                                    fontSize: "16px",
                                                                    letterSpacing: "-0.64px",
                                                                    lineHeight: "19.2px",
                                                                    color: "#f06600"
                                                                },
                                                                children: "OPTIVIS NEXUS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-[#231f52]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "Inter",
                                                                    fontStyle: "normal",
                                                                    fontWeight: 590,
                                                                    fontSize: "16px",
                                                                    letterSpacing: "-0.64px",
                                                                    lineHeight: "19.2px",
                                                                    color: "#231f52"
                                                                },
                                                                children: "Traditional Design"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 w-full min-h-0 relative cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$DynamicECharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    ref: chartRef,
                                                    option: {
                                                        grid: {
                                                            left: 80,
                                                            right: 40,
                                                            top: 40,
                                                            bottom: 80,
                                                            containLabel: false
                                                        },
                                                        xAxis: {
                                                            type: "category",
                                                            data: [
                                                                "Optivis",
                                                                "Traditional"
                                                            ],
                                                            axisLine: {
                                                                show: true,
                                                                lineStyle: {
                                                                    color: "#999"
                                                                }
                                                            },
                                                            axisTick: {
                                                                show: true
                                                            },
                                                            axisLabel: {
                                                                show: true,
                                                                fontSize: 19.5,
                                                                fontWeight: 590,
                                                                color: "#484646",
                                                                fontFamily: "Inter",
                                                                letterSpacing: -0.78
                                                            }
                                                        },
                                                        yAxis: {
                                                            type: "value",
                                                            name: title,
                                                            nameLocation: "middle",
                                                            nameGap: 60,
                                                            nameTextStyle: {
                                                                fontSize: 19.5,
                                                                fontWeight: 590,
                                                                letterSpacing: -0.78,
                                                                color: "#1c1b1c",
                                                                fontFamily: "Inter"
                                                            },
                                                            axisLine: {
                                                                show: true,
                                                                lineStyle: {
                                                                    color: "#999"
                                                                }
                                                            },
                                                            axisTick: {
                                                                show: true
                                                            },
                                                            axisLabel: {
                                                                show: true,
                                                                fontSize: 10,
                                                                fontWeight: 510,
                                                                color: "#484646",
                                                                fontFamily: "Inter",
                                                                letterSpacing: -0.2
                                                            },
                                                            splitLine: {
                                                                show: true,
                                                                lineStyle: {
                                                                    color: "#e0e0e0",
                                                                    type: "dashed"
                                                                }
                                                            },
                                                            max: Math.max(optivisValue, traditionalValue) * 1.2
                                                        },
                                                        series: [
                                                            {
                                                                type: "bar",
                                                                data: [
                                                                    optivisValue,
                                                                    traditionalValue
                                                                ],
                                                                itemStyle: {
                                                                    color: (params)=>{
                                                                        return params.dataIndex === 0 ? "#f06600" : "#231f52";
                                                                    },
                                                                    borderRadius: [
                                                                        9,
                                                                        9,
                                                                        9,
                                                                        9
                                                                    ]
                                                                },
                                                                barWidth: "60%",
                                                                label: {
                                                                    show: true,
                                                                    position: "insideTop",
                                                                    formatter: (params)=>{
                                                                        const value = params.value;
                                                                        return formatter ? formatter(value, title) : String(value);
                                                                    },
                                                                    color: "#ffffff",
                                                                    fontSize: 36,
                                                                    fontWeight: 590,
                                                                    lineHeight: 36,
                                                                    letterSpacing: -0.72,
                                                                    fontFamily: "Inter"
                                                                }
                                                            },
                                                            // 감소량 표시용 커스텀 shape (클릭 시에만 표시, Optivis에만)
                                                            ...showReduction && reduction > 0 ? [
                                                                {
                                                                    type: "custom",
                                                                    renderItem: (params, api)=>{
                                                                        // Optivis(첫 번째 카테고리, dataIndex 0)에만 표시
                                                                        if (params.dataIndex !== 0) return null;
                                                                        // 각 카테고리의 중심점 좌표 계산
                                                                        const optivisCenter = api.coord([
                                                                            0,
                                                                            0
                                                                        ]); // Optivis 중심
                                                                        const traditionalCenter = api.coord([
                                                                            1,
                                                                            0
                                                                        ]); // Traditional 중심
                                                                        // 카테고리 간격 계산
                                                                        const categoryGap = traditionalCenter[0] - optivisCenter[0];
                                                                        // barWidth가 60%이므로 실제 픽셀 너비 계산
                                                                        const barWidth = categoryGap * 0.6;
                                                                        // Optivis 바의 왼쪽 시작점과 중심점
                                                                        const barCenterX = optivisCenter[0];
                                                                        const rectX = barCenterX - barWidth / 2;
                                                                        // y축 위치 계산
                                                                        const traditionalBarCoord = api.coord([
                                                                            0,
                                                                            traditionalValue
                                                                        ]);
                                                                        const optivisBarCoord = api.coord([
                                                                            0,
                                                                            optivisValue
                                                                        ]);
                                                                        const rectTopY = traditionalBarCoord[1];
                                                                        const rectBottomY = optivisBarCoord[1];
                                                                        const rectHeight = rectTopY - rectBottomY;
                                                                        return {
                                                                            type: "group",
                                                                            children: [
                                                                                {
                                                                                    // 그라데이션 영역
                                                                                    type: "rect",
                                                                                    shape: {
                                                                                        x: rectX,
                                                                                        y: rectBottomY,
                                                                                        width: barWidth,
                                                                                        height: rectHeight
                                                                                    },
                                                                                    style: {
                                                                                        fill: {
                                                                                            type: "linear",
                                                                                            x: 0,
                                                                                            y: rectTopY,
                                                                                            x2: 0,
                                                                                            y2: rectBottomY,
                                                                                            colorStops: [
                                                                                                {
                                                                                                    offset: 0,
                                                                                                    color: "rgba(240, 102, 0, 0.6)"
                                                                                                },
                                                                                                {
                                                                                                    offset: 1,
                                                                                                    color: "rgb(255, 255, 255)"
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    silent: true
                                                                                },
                                                                                {
                                                                                    // 상단 보더 선
                                                                                    type: "line",
                                                                                    shape: {
                                                                                        x1: rectX,
                                                                                        y1: rectTopY,
                                                                                        x2: rectX + barWidth,
                                                                                        y2: rectTopY
                                                                                    },
                                                                                    style: {
                                                                                        stroke: "#f06600",
                                                                                        lineWidth: 2
                                                                                    },
                                                                                    silent: true
                                                                                },
                                                                                {
                                                                                    // 감소량 텍스트
                                                                                    type: "text",
                                                                                    position: [
                                                                                        barCenterX,
                                                                                        rectBottomY + rectHeight / 2
                                                                                    ],
                                                                                    style: {
                                                                                        text: "-".concat(formatter ? formatter(reduction, title) : String(Math.round(reduction))),
                                                                                        fill: "#f06600",
                                                                                        fontSize: 36,
                                                                                        fontWeight: 590,
                                                                                        textAlign: "center",
                                                                                        textVerticalAlign: "middle",
                                                                                        fontFamily: "Inter"
                                                                                    },
                                                                                    silent: true
                                                                                }
                                                                            ]
                                                                        };
                                                                    },
                                                                    // x축 카테고리 ["Optivis", "Traditional"]에 매핑
                                                                    // Optivis에만 값 설정, Traditional은 null
                                                                    data: [
                                                                        traditionalValue,
                                                                        null
                                                                    ],
                                                                    z: 10
                                                                }
                                                            ] : []
                                                        ],
                                                        tooltip: {
                                                            show: false
                                                        }
                                                    },
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/fullscreen-bar-chart-modal.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(FullscreenBarChartModal, "+1LIw+miIZk/vDVZrEAer1t3hN4=");
_c = FullscreenBarChartModal;
var _c;
__turbopack_context__.k.register(_c, "FullscreenBarChartModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ats/RightPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightPanel",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SmallerSampleChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/SmallerSampleChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SmallerNToScreenChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/SmallerNToScreenChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LowerCostChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/LowerCostChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/SingleBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$ComparisonBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts/ComparisonBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/arrow-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/fullscreen-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/info-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/math/FormulaTooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$chart$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/fullscreen-chart-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$bar$2d$chart$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/fullscreen-bar-chart-modal.tsx [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\beta=Phileft(Phi^{-1}left(alpha/2\right)+sqrt{n}\frac{	au}{sigma}\right)+Phileft(Phi^{-1}left(alpha/2\right)-sqrt{n}\frac{	au}{sigma}\right)"
    ], [
        "\\beta=\\Phi\\left(\\Phi^{-1}\\left(\\alpha/2\\right)+\\sqrt{n}\\frac{\\tau}{\\sigma}\\right)+\\Phi\\left(\\Phi^{-1}\\left(\\alpha/2\\right)-\\sqrt{n}\\frac{\\tau}{\\sigma}\\right)"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Phi"
    ], [
        "\\Phi"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Phi^{-1}"
    ], [
        "\\Phi^{-1}"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "alpha"
    ], [
        "\\alpha"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\beta"
    ], [
        "\\beta"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "	au"
    ], [
        "\\tau"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "sigma"
    ], [
        "\\sigma"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Phi"
    ], [
        "\\Phi"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Phi^{-1}"
    ], [
        "\\Phi^{-1}"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "alpha"
    ], [
        "\\alpha"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\beta"
    ], [
        "\\beta"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
function _templateObject11() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "	au"
    ], [
        "\\tau"
    ]);
    _templateObject11 = function() {
        return data;
    };
    return data;
}
function _templateObject12() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "sigma"
    ], [
        "\\sigma"
    ]);
    _templateObject12 = function() {
        return data;
    };
    return data;
}
function _templateObject13() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Phi"
    ], [
        "\\Phi"
    ]);
    _templateObject13 = function() {
        return data;
    };
    return data;
}
function _templateObject14() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "Phi^{-1}"
    ], [
        "\\Phi^{-1}"
    ]);
    _templateObject14 = function() {
        return data;
    };
    return data;
}
function _templateObject15() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "alpha"
    ], [
        "\\alpha"
    ]);
    _templateObject15 = function() {
        return data;
    };
    return data;
}
function _templateObject16() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\beta"
    ], [
        "\\beta"
    ]);
    _templateObject16 = function() {
        return data;
    };
    return data;
}
function _templateObject17() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "	au"
    ], [
        "\\tau"
    ]);
    _templateObject17 = function() {
        return data;
    };
    return data;
}
function _templateObject18() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "sigma"
    ], [
        "\\sigma"
    ]);
    _templateObject18 = function() {
        return data;
    };
    return data;
}
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
// API endpoint 값을 UI 텍스트로 변환하는 함수
const convertEndpointToDisplayText = (endpoint)=>{
    const endpointMap = {
        ADTOT70: "ADAS-Cog Total Score",
        MMTOTSCORE: "MMSE Total Score",
        CDTOTSCORE: "CDR Total Score"
    };
    return endpointMap[endpoint] || endpoint;
};
function RightPanel(param) {
    let { activeTab, setActiveTab, isApplied, simulationData, chartDataToUse, getHighlightXValue, apiData } = param;
    var _simulationData_reductionView, _simulationData_smallerSample, _simulationData_smallerSample1, _simulationData_smallerSample2, _simulationData_smallerSample3, _simulationData_smallerNToScreen, _simulationData_smallerNToScreen1, _simulationData_lowerCost, _simulationData_lowerCost1, _apiData_result_trialdesignconditionsummary, _apiData_result_trialdesignconditionsummary1, _simulationData_smallerSample4, _simulationData_smallerNToScreen2, _simulationData_lowerCost2, _simulationData_smallerSample5, _simulationData_smallerSample6, _simulationData_smallerNToScreen3, _simulationData_smallerNToScreen4, _simulationData_smallerNToScreen5, _simulationData_lowerCost3, _simulationData_lowerCost4, _simulationData_lowerCost5;
    _s();
    const [fullscreenModalOpen, setFullscreenModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullscreenChartType, setFullscreenChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fullscreenBarModalOpen, setFullscreenBarModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullscreenBarChartProps, setFullscreenBarChartProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const reductionCharts = Array.isArray(simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_reductionView = simulationData.reductionView) === null || _simulationData_reductionView === void 0 ? void 0 : _simulationData_reductionView.charts) ? simulationData.reductionView.charts : [];
    const handleFullscreenClick = (chartType)=>{
        setFullscreenChartType(chartType);
        setFullscreenModalOpen(true);
    };
    const handleBarChartFullscreenClick = (title, subtitle, percentage, optivisValue, traditionalValue, isNegative, formatter)=>{
        setFullscreenBarChartProps({
            title,
            subtitle,
            percentage,
            optivisValue,
            traditionalValue,
            isNegative,
            formatter
        });
        setFullscreenBarModalOpen(true);
    };
    /** Formula & Used Value 툴팁용 (OPTIVIS/Traditional 헤더 info 아이콘 클릭 시, 좌측에 표시) */ const sampleSizeFormulaProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RightPanel.useMemo[sampleSizeFormulaProps]": ()=>{
            var _apiData_result_formula_OPTIVIS, _apiData_result_formula;
            return {
                formula: String.raw(_templateObject()),
                usedValues: isApplied && (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_formula = apiData.result_formula) === null || _apiData_result_formula === void 0 ? void 0 : (_apiData_result_formula_OPTIVIS = _apiData_result_formula.OPTIVIS) === null || _apiData_result_formula_OPTIVIS === void 0 ? void 0 : _apiData_result_formula_OPTIVIS[0]) ? [
                    {
                        label: String.raw(_templateObject1()),
                        value: String(apiData.result_formula.OPTIVIS[0].beta)
                    },
                    {
                        label: String.raw(_templateObject2()),
                        value: String(apiData.result_formula.OPTIVIS[0].inverse_phi)
                    },
                    {
                        label: String.raw(_templateObject3()),
                        value: String(apiData.result_formula.OPTIVIS[0].alpha)
                    },
                    {
                        label: String.raw(_templateObject4()),
                        value: String(apiData.result_formula.OPTIVIS[0].beta)
                    },
                    {
                        label: String.raw(_templateObject5()),
                        value: String(apiData.result_formula.OPTIVIS[0].tau)
                    },
                    {
                        label: String.raw(_templateObject6()),
                        value: String(apiData.result_formula.OPTIVIS[0].sigma)
                    }
                ] : [
                    {
                        label: String.raw(_templateObject7()),
                        value: ""
                    },
                    {
                        label: String.raw(_templateObject8()),
                        value: ""
                    },
                    {
                        label: String.raw(_templateObject9()),
                        value: ""
                    },
                    {
                        label: String.raw(_templateObject10()),
                        value: ""
                    },
                    {
                        label: String.raw(_templateObject11()),
                        value: ""
                    },
                    {
                        label: String.raw(_templateObject12()),
                        value: ""
                    }
                ],
                definitions: [
                    {
                        symbol: String.raw(_templateObject13()),
                        description: "Represents the variance scale parameter (Φ), characterizing the dispersion of the outcome distribution beyond what is explained by the mean structure"
                    },
                    {
                        symbol: String.raw(_templateObject14()),
                        description: "Represents the inverse of the variance scale parameter (1/Φ), commonly interpreted as statistical precision."
                    },
                    {
                        symbol: String.raw(_templateObject15()),
                        description: "Denotes the significance level (α), defined as the probability of rejecting the null hypothesis when it is true"
                    },
                    {
                        symbol: String.raw(_templateObject16()),
                        description: "Represents the effect size or regression coefficient (β), quantifying the linear influence of covariates (e.g., prognostic scores) on the outcome"
                    },
                    {
                        symbol: String.raw(_templateObject17()),
                        description: "The expected treatment effect"
                    },
                    {
                        symbol: String.raw(_templateObject18()),
                        description: "The reduced standard deviation achieved by incorporating the prognostic score is applied"
                    }
                ]
            };
        }
    }["RightPanel.useMemo[sampleSizeFormulaProps]"], [
        apiData,
        isApplied
    ]);
    var _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup1, _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup1, _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup2, _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup2, _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup3, _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full min-h-[880px] flex flex-col overflow-visible",
                style: {
                    borderImage: 'url("/assets/figma/home/frame-panel-middle.png") 72 fill / 36px / 0 stretch',
                    borderStyle: "solid",
                    borderWidth: "30px",
                    borderColor: "transparent"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full h-full p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between flex-shrink-0 mb-3 px-[12px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-full p-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab("compare"),
                                                className: "px-[18px] py-[10px] rounded-full transition-all cursor-pointer ".concat(activeTab === "compare" ? "bg-primary-20 text-white text-body4m" : "text-neutral-30 text-body4"),
                                                children: "Compare View"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab("reduction"),
                                                disabled: !isApplied,
                                                className: "px-[18px] py-[10px] rounded-full transition-all ".concat(!isApplied ? "cursor-not-allowed" : "cursor-pointer", " ").concat(activeTab === "reduction" ? "bg-primary-20 text-white text-body4m" : "text-neutral-30 text-body4"),
                                                children: "Reduction View"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 rounded-full bg-secondary-60 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] font-semibold text-secondary-60 leading-[16.5px] tracking-[-0.75px]",
                                                    children: "OPTIVIS NEXUS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 rounded-full bg-primary-20 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] font-semibold text-primary-20 leading-[16.5px] tracking-[-0.75px]",
                                                    children: "Traditional Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex gap-4 min-h-0 mt-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 flex flex-col gap-4",
                                    children: [
                                        activeTab === "compare" ? /* Smaller Sample Card - Compare View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[18px] overflow-hidden flex-[3] min-h-0",
                                            style: {
                                                background: "var(--primary-15)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col w-full h-full p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-4 flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-body1m text-neutral-98",
                                                                        children: "Smaller Sample"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 332,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-body4 text-neutral-98",
                                                                        children: "Sample Size vs CI Width"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 335,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1 mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                width: "44",
                                                                                height: "44",
                                                                                viewBox: "0 0 44 44",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "flex-shrink-0",
                                                                                style: {
                                                                                    transform: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample = simulationData.smallerSample) === null || _simulationData_smallerSample === void 0 ? void 0 : _simulationData_smallerSample.isNegative) ? "rotate(180deg)" : "none",
                                                                                    transition: "transform 0.2s"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                        clipPath: "url(#clip0_smaller_sample_arrow)",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: "M21.9902 -3.00195L21.9902 40.5039",
                                                                                                stroke: "white",
                                                                                                strokeWidth: "6",
                                                                                                strokeLinejoin: "round"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 356,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: "M39.793 22.7061L21.9951 40.5039L4.19727 22.7061",
                                                                                                stroke: "white",
                                                                                                strokeWidth: "6",
                                                                                                strokeLinejoin: "round"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 362,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 355,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                                            id: "clip0_smaller_sample_arrow",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                width: "44",
                                                                                                height: "44",
                                                                                                fill: "white",
                                                                                                transform: "matrix(0 1 1 4.37114e-08 0 0)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 371,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 370,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 369,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 340,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-h0 text-neutral-98",
                                                                                children: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample1 = simulationData.smallerSample) === null || _simulationData_smallerSample1 === void 0 ? void 0 : _simulationData_smallerSample1.percentage) || "--"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 380,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 339,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 23
                                                            }, this),
                                                            isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleFullscreenClick("smallerSample"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    backgroundColor: "#1c1942"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-auto bg-neutral-95 rounded-[12px]",
                                                        style: {
                                                            height: "66%"
                                                        },
                                                        children: chartDataToUse && chartDataToUse.smallerSample.optivis.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SmallerSampleChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmallerSampleChart"], {
                                                            optivisData: chartDataToUse.smallerSample.optivis,
                                                            traditionalData: chartDataToUse.smallerSample.traditional,
                                                            highlightXValue: getHighlightXValue(chartDataToUse.smallerSample.optivis, "sampleSize")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                lineNumber: 328,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this) : /* Sample Size & Power Card - Reduction View */ isApplied && reductionCharts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[18px] overflow-hidden flex-[3] min-h-0",
                                            style: {
                                                background: "#262255"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col w-full h-full p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1 mb-4 flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-body1m text-neutral-98",
                                                                children: "Smaller Sample"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-body4 text-neutral-98",
                                                                children: "Sample Size vs Power"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 23
                                                            }, this),
                                                            isApplied && (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample2 = simulationData.smallerSample) === null || _simulationData_smallerSample2 === void 0 ? void 0 : _simulationData_smallerSample2.percentage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "44",
                                                                        height: "44",
                                                                        viewBox: "0 0 44 44",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "flex-shrink-0",
                                                                        style: {
                                                                            transform: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample3 = simulationData.smallerSample) === null || _simulationData_smallerSample3 === void 0 ? void 0 : _simulationData_smallerSample3.isNegative) ? "rotate(180deg)" : "none",
                                                                            transition: "transform 0.2s"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                clipPath: "url(#clip0_smaller_sample_reduction)",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M21.9902 -3.00195L21.9902 40.5039",
                                                                                        stroke: "white",
                                                                                        strokeWidth: "6",
                                                                                        strokeLinejoin: "round"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 452,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M39.793 22.7061L21.9951 40.5039L4.19727 22.7061",
                                                                                        stroke: "white",
                                                                                        strokeWidth: "6",
                                                                                        strokeLinejoin: "round"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 458,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 451,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                                    id: "clip0_smaller_sample_reduction",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                        width: "44",
                                                                                        height: "44",
                                                                                        fill: "white",
                                                                                        transform: "matrix(0 1 1 4.37114e-08 0 0)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 467,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 466,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 465,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-h0 text-neutral-98",
                                                                        children: simulationData.smallerSample.percentage
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-auto bg-neutral-95 rounded-[12px]",
                                                        style: {
                                                            height: "66%"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4 h-full pt-4 px-4 pb-4",
                                                            children: [
                                                                reductionCharts.find((c)=>c.label === "Sample Size") && (()=>{
                                                                    const chart = reductionCharts.find((c)=>c.label === "Sample Size");
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col h-full",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-body2 text-[#262255]",
                                                                                                children: chart.label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 500,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 mt-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                        direction: chart.isNegative ? "up" : "down",
                                                                                                        color: "#231F52"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 504,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-h4 text-neutral-15",
                                                                                                        children: chart.change
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 510,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 503,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 499,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleBarChartFullscreenClick(chart.label, "Optivis VS Traditional", chart.change, chart.optivis, chart.traditional, chart.isNegative),
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 527,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 515,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 498,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-2 gap-2 mt-auto items-end",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                height: "270px",
                                                                                                width: "100%"
                                                                                            },
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                                value: chart.optivis,
                                                                                                maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                                color: "#f06600",
                                                                                                height: "100%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 536,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 533,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 532,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                height: "270px",
                                                                                                width: "100%"
                                                                                            },
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                                value: chart.traditional,
                                                                                                maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                                color: "#231f52",
                                                                                                height: "100%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 552,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 549,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 548,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 530,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                })(),
                                                                reductionCharts.find((c)=>c.label === "Power") && (()=>{
                                                                    const chart = reductionCharts.find((c)=>c.label === "Power");
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col h-full",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-body2 text-[#262255]",
                                                                                                children: chart.label
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 579,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 mt-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                        direction: chart.isNegative ? "up" : "down",
                                                                                                        color: "#231F52"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 583,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-h4 text-neutral-15",
                                                                                                        children: chart.change
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 589,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 582,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 578,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleBarChartFullscreenClick(chart.label, "Optivis VS Traditional", chart.change, chart.optivis, chart.traditional, chart.isNegative),
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 606,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 594,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 577,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-2 gap-2 mt-auto items-end",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                height: "270px",
                                                                                                width: "100%"
                                                                                            },
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                                value: chart.optivis,
                                                                                                maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                                color: "#f06600",
                                                                                                height: "100%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 615,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 612,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 611,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                height: "270px",
                                                                                                width: "100%"
                                                                                            },
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                                value: chart.traditional,
                                                                                                maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                                color: "#231f52",
                                                                                                height: "100%"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 631,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 628,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 627,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 609,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                })()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 flex-[2] min-h-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0 rounded-[24px] overflow-hidden",
                                                    style: {
                                                        backgroundColor: "rgba(255, 255, 255, 0.6)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col w-full h-full p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-4",
                                                                children: activeTab === "compare" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-body4 text-neutral-15",
                                                                                    children: "Smaller N to screen"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 667,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-small1 text-neutral-15",
                                                                                    children: isApplied && simulationData ? simulationData.smallerNToScreen.subtitle : "at the same Power"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 670,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-1 mt-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            direction: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerNToScreen = simulationData.smallerNToScreen) === null || _simulationData_smallerNToScreen === void 0 ? void 0 : _simulationData_smallerNToScreen.isNegative) ? "up" : "down",
                                                                                            color: "#231F52"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 677,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-h4 text-neutral-15",
                                                                                            children: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerNToScreen1 = simulationData.smallerNToScreen) === null || _simulationData_smallerNToScreen1 === void 0 ? void 0 : _simulationData_smallerNToScreen1.percentage) || "--"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 685,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 676,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleFullscreenClick("smallerNToScreen"),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 698,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 693,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : isApplied && reductionCharts.length > 0 ? (()=>{
                                                                    const chart = reductionCharts.find((c)=>c.label === "Enrollment Time");
                                                                    return chart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "text-body4 text-neutral-15",
                                                                                        children: chart.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 710,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-1 mt-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                direction: chart.isNegative ? "up" : "down",
                                                                                                color: "#231F52"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 714,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-h4 text-neutral-15",
                                                                                                children: chart.change
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 718,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 713,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 709,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const chart = reductionCharts.find((c)=>c.label === "Enrollment Time");
                                                                                    if (chart) {
                                                                                        handleBarChartFullscreenClick(chart.label, "Optivis VS Traditional", chart.change, chart.optivis, chart.traditional, chart.isNegative);
                                                                                    }
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 741,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 724,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : null;
                                                                })() : null
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-auto bg-white/60 rounded-[12px] flex-1 min-h-0",
                                                                children: activeTab === "compare" ? chartDataToUse && chartDataToUse.smallerNToScreen.optivis.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SmallerNToScreenChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmallerNToScreenChart"], {
                                                                    optivisData: chartDataToUse.smallerNToScreen.optivis,
                                                                    traditionalData: chartDataToUse.smallerNToScreen.traditional,
                                                                    highlightXValue: getHighlightXValue(chartDataToUse.smallerNToScreen.optivis, "enrollment")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 756,
                                                                    columnNumber: 27
                                                                }, this) : null : isApplied && reductionCharts.length > 0 ? (()=>{
                                                                    const chart = reductionCharts.find((c)=>c.label === "Enrollment Time");
                                                                    return chart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-2 gap-2 h-full pt-2 px-2 pb-2 items-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        height: "140px",
                                                                                        width: "100%"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                        value: chart.optivis,
                                                                                        maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                        color: "#f06600",
                                                                                        height: "100%"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 779,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 778,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        height: "140px",
                                                                                        width: "100%"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                        value: chart.traditional,
                                                                                        maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                        color: "#231f52",
                                                                                        height: "100%"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 793,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 792,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 791,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 775,
                                                                        columnNumber: 29
                                                                    }, this) : null;
                                                                })() : null
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 750,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0 rounded-[24px] overflow-hidden",
                                                    style: {
                                                        backgroundColor: "rgba(255, 255, 255, 0.6)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col w-full h-full p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-4",
                                                                children: activeTab === "compare" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-body4 text-neutral-15",
                                                                                    children: "Lower cost"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 825,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-small1 text-neutral-15",
                                                                                    children: isApplied && simulationData ? simulationData.lowerCost.subtitle : "at the same sample size"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 828,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-1  mt-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            direction: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_lowerCost = simulationData.lowerCost) === null || _simulationData_lowerCost === void 0 ? void 0 : _simulationData_lowerCost.isNegative) ? "up" : "down",
                                                                                            color: "#231F52"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 835,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-h4 text-neutral-15",
                                                                                            children: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_lowerCost1 = simulationData.lowerCost) === null || _simulationData_lowerCost1 === void 0 ? void 0 : _simulationData_lowerCost1.percentage) || "--"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 843,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 834,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 824,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleFullscreenClick("lowerCost"),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 854,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 851,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : isApplied && reductionCharts.length > 0 ? (()=>{
                                                                    const chart = reductionCharts.find((c)=>c.label === "Cost");
                                                                    return chart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "text-body4 text-neutral-15",
                                                                                        children: chart.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 866,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-1 mt-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                direction: chart.isNegative ? "up" : "down",
                                                                                                color: "#231F52"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 870,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-h4 text-neutral-15",
                                                                                                children: chart.change
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 874,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 869,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 865,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            isApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const chart = reductionCharts.find((c)=>c.label === "Cost");
                                                                                    if (chart) {
                                                                                        handleBarChartFullscreenClick(chart.label, "Optivis VS Traditional", chart.change, chart.optivis, chart.traditional, chart.isNegative, (val)=>"".concat(val, "M"));
                                                                                    }
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 898,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 880,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : null;
                                                                })() : null
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 821,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-auto bg-white/60 rounded-[12px] flex-1 min-h-0",
                                                                children: activeTab === "compare" ? chartDataToUse && chartDataToUse.lowerCost.optivis.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LowerCostChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LowerCostChart"], {
                                                                    optivisData: chartDataToUse.lowerCost.optivis,
                                                                    traditionalData: chartDataToUse.lowerCost.traditional,
                                                                    highlightXValue: getHighlightXValue(chartDataToUse.lowerCost.optivis, "cost")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 913,
                                                                    columnNumber: 27
                                                                }, this) : null : isApplied && reductionCharts.length > 0 ? (()=>{
                                                                    const chart = reductionCharts.find((c)=>c.label === "Cost");
                                                                    return chart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-2 gap-2 h-full pt-2 px-2 pb-2 items-end",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        height: "140px",
                                                                                        width: "100%"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                        value: chart.optivis,
                                                                                        maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                        color: "#f06600",
                                                                                        height: "100%",
                                                                                        formatter: (val)=>"".concat(val, "M")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 934,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 933,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 932,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        height: "140px",
                                                                                        width: "100%"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SingleBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleBarChart"], {
                                                                                        value: chart.traditional,
                                                                                        maxValue: Math.max(chart.optivis, chart.traditional),
                                                                                        color: "#231f52",
                                                                                        height: "100%",
                                                                                        formatter: (val)=>"".concat(val, "M")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 949,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 948,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 947,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 930,
                                                                        columnNumber: 29
                                                                    }, this) : null;
                                                                })() : null
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 907,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 819,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 653,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[min(34%,460px)] max-[1536px]:w-full flex-shrink-0 flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-[24px] flex flex-col flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 pt-4 pb-3 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-body2 text-neutral-10",
                                                        children: "OPTIVIS NEXUS vs Traditional Design"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 977,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 976,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col px-4 pb-4 mt-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end mb-0 flex-shrink-0 border-b border-neutral-80 pb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 986,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 w-[98px]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-body5m text-secondary-60",
                                                                                    children: "OPTIVIS"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 989,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormulaTooltip"], {
                                                                                    ...sampleSizeFormulaProps,
                                                                                    side: "left",
                                                                                    align: "start",
                                                                                    trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "flex-shrink-0 mt-0.5 cursor-pointer hover:opacity-70 transition-opacity",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            className: "flex-shrink-0",
                                                                                            color: "#f06600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 998,
                                                                                            columnNumber: 31
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 997,
                                                                                        columnNumber: 29
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 992,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 988,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 w-[98px]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-body5m text-primary-20",
                                                                                    children: "Traditional"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1007,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$math$2f$FormulaTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormulaTooltip"], {
                                                                                    ...sampleSizeFormulaProps,
                                                                                    side: "left",
                                                                                    align: "start",
                                                                                    trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "flex-shrink-0 mt-0.5 cursor-pointer hover:opacity-70 transition-opacity",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$info$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            className: "flex-shrink-0",
                                                                                            color: "#231f52"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1016,
                                                                                            columnNumber: 31
                                                                                        }, void 0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1015,
                                                                                        columnNumber: 29
                                                                                    }, void 0)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1010,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1006,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 987,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end border-b border-neutral-80 py-3 flex-shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-30",
                                                                                        children: "Enrollment"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1033,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-small1 text-neutral-60",
                                                                                        children: "Est. Enrollment Period in Months"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1036,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1032,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1031,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-4 items-end",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-[98px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body1m text-secondary-60",
                                                                                        children: isApplied && simulationData ? simulationData.comparisonTable.enrollment.optivis : "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1043,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1042,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-[98px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body1m text-primary-20",
                                                                                        children: isApplied && simulationData ? simulationData.comparisonTable.enrollment.traditional : "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1051,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1050,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1041,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 1030,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end border-b border-neutral-80 py-3 flex-shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-30",
                                                                                        children: "Primary Endpoint Power"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1065,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-small1 text-neutral-60",
                                                                                        children: (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_trialdesignconditionsummary = apiData.result_trialdesignconditionsummary) === null || _apiData_result_trialdesignconditionsummary === void 0 ? void 0 : _apiData_result_trialdesignconditionsummary.primary_endpoint) ? convertEndpointToDisplayText(apiData.result_trialdesignconditionsummary.primary_endpoint) : "ADAS-Cog Total Score"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1068,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1064,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1063,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-4 items-end",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-[98px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body1m text-secondary-60",
                                                                                        children: isApplied && simulationData ? simulationData.comparisonTable.primaryEndpointPower.optivis : "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1081,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1080,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-[98px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body1m text-primary-20",
                                                                                        children: isApplied && simulationData ? simulationData.comparisonTable.primaryEndpointPower.traditional : "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1089,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1088,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1079,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 1062,
                                                                    columnNumber: 21
                                                                }, this),
                                                                (apiData === null || apiData === void 0 ? void 0 : (_apiData_result_trialdesignconditionsummary1 = apiData.result_trialdesignconditionsummary) === null || _apiData_result_trialdesignconditionsummary1 === void 0 ? void 0 : _apiData_result_trialdesignconditionsummary1.secondary_endpoint) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end border-b border-neutral-80 py-3 flex-shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-30",
                                                                                        children: "Secondary Endpoint Power"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1105,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-small1 text-neutral-60",
                                                                                        children: convertEndpointToDisplayText(apiData.result_trialdesignconditionsummary.secondary_endpoint)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1108,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1104,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1103,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-4 items-end",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-[98px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body1m text-secondary-60",
                                                                                        children: isApplied && simulationData ? simulationData.comparisonTable.secondaryEndpointPower.optivis : "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1118,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1117,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-[98px]",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body1m text-primary-20",
                                                                                        children: isApplied && simulationData ? simulationData.comparisonTable.secondaryEndpointPower.traditional : "-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1126,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1125,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 1102,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end py-3 flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 flex flex-col",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-1",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-neutral-30",
                                                                                        children: "Sample Size"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1142,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1141,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1 flex flex-col gap-0.5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-small1 text-neutral-60",
                                                                                                        children: "Treatment Group 1"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1150,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1149,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-secondary-60",
                                                                                                                children: isApplied && simulationData ? (_simulationData_comparisonTable_sampleSize_optivis_treatmentGroup1 = simulationData.comparisonTable.sampleSize.optivis.treatmentGroup1) !== null && _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup1 !== void 0 ? _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup1 : "-" : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1156,
                                                                                                                columnNumber: 35
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1155,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-primary-20",
                                                                                                                children: isApplied && simulationData ? (_simulationData_comparisonTable_sampleSize_traditional_treatmentGroup1 = simulationData.comparisonTable.sampleSize.traditional.treatmentGroup1) !== null && _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup1 !== void 0 ? _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup1 : "-" : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1164,
                                                                                                                columnNumber: 35
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1163,
                                                                                                            columnNumber: 33
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1154,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1148,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        isApplied && simulationData && (simulationData.comparisonTable.sampleSize.optivis.treatmentGroup2 !== null || simulationData.comparisonTable.sampleSize.traditional.treatmentGroup2 !== null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-small1 text-neutral-60",
                                                                                                        children: "Treatment Group 2"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1182,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1181,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-secondary-60",
                                                                                                                children: (_simulationData_comparisonTable_sampleSize_optivis_treatmentGroup2 = simulationData.comparisonTable.sampleSize.optivis.treatmentGroup2) !== null && _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup2 !== void 0 ? _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup2 : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1188,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1187,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-primary-20",
                                                                                                                children: (_simulationData_comparisonTable_sampleSize_traditional_treatmentGroup2 = simulationData.comparisonTable.sampleSize.traditional.treatmentGroup2) !== null && _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup2 !== void 0 ? _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup2 : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1194,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1193,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1186,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1180,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        isApplied && simulationData && (simulationData.comparisonTable.sampleSize.optivis.treatmentGroup3 !== null || simulationData.comparisonTable.sampleSize.traditional.treatmentGroup3 !== null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-small1 text-neutral-60",
                                                                                                        children: "Treatment Group 3"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1211,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1210,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-secondary-60",
                                                                                                                children: (_simulationData_comparisonTable_sampleSize_optivis_treatmentGroup3 = simulationData.comparisonTable.sampleSize.optivis.treatmentGroup3) !== null && _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup3 !== void 0 ? _simulationData_comparisonTable_sampleSize_optivis_treatmentGroup3 : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1217,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1216,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-primary-20",
                                                                                                                children: (_simulationData_comparisonTable_sampleSize_traditional_treatmentGroup3 = simulationData.comparisonTable.sampleSize.traditional.treatmentGroup3) !== null && _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup3 !== void 0 ? _simulationData_comparisonTable_sampleSize_traditional_treatmentGroup3 : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1223,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1222,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1215,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1209,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-small1 text-neutral-60",
                                                                                                        children: "Control Group"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1234,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1233,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-secondary-60",
                                                                                                                children: isApplied && simulationData ? simulationData.comparisonTable.sampleSize.optivis.controlGroup : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1240,
                                                                                                                columnNumber: 35
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1239,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-primary-20",
                                                                                                                children: isApplied && simulationData ? simulationData.comparisonTable.sampleSize.traditional.controlGroup : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1248,
                                                                                                                columnNumber: 35
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1247,
                                                                                                            columnNumber: 33
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1238,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1232,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center justify-between gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-small1 text-neutral-60",
                                                                                                        children: "Total"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1260,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1259,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex items-center gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-secondary-60",
                                                                                                                children: isApplied && simulationData ? simulationData.comparisonTable.sampleSize.optivis.total : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1266,
                                                                                                                columnNumber: 35
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1265,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "w-[98px] text-left",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "text-body5 text-primary-20",
                                                                                                                children: isApplied && simulationData ? simulationData.comparisonTable.sampleSize.traditional.total : "-"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                                lineNumber: 1274,
                                                                                                                columnNumber: 35
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                            lineNumber: 1273,
                                                                                                            columnNumber: 33
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                    lineNumber: 1264,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1258,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1146,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1140,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1139,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                    lineNumber: 1138,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                            lineNumber: 1028,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 983,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 974,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-[24px] flex flex-col flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 pt-4 pb-3 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-body2 text-neutral-10",
                                                        children: activeTab === "compare" ? "Reduction View" : "Compare View"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 1295,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex flex-col px-4 pb-4 min-h-0 overflow-hidden",
                                                    children: activeTab === "compare" ? isApplied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2 h-full",
                                                        children: reductionCharts.map((chart, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-2 h-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-body5 text-black",
                                                                                        children: chart.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1312,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-1 mt-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                direction: chart.isNegative ? "up" : "down",
                                                                                                color: "#231F52"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1316,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-body1m text-neutral-30",
                                                                                                children: chart.change
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1322,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1315,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1311,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const formatter = chart.label === "Cost" ? (val)=>"".concat(val, "M") : undefined;
                                                                                    handleBarChartFullscreenClick(chart.label, "Optivis VS Traditional", chart.change, chart.optivis, chart.traditional, chart.isNegative, formatter);
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1344,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1327,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1310,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-auto",
                                                                        style: {
                                                                            height: "120px",
                                                                            width: "100%"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$ComparisonBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonBarChart"], {
                                                                            optivisValue: chart.optivis,
                                                                            traditionalValue: chart.traditional,
                                                                            height: "100%",
                                                                            label: chart.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1348,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1347,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 1309,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 1306,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 bg-[#f8f8f8] rounded-[12px] border border-[#e5e5e5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 23
                                                    }, this) : /* Compare View Charts - when activeTab is "reduction" */ isApplied && chartDataToUse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2 h-full overflow-hidden",
                                                        children: [
                                                            chartDataToUse.smallerSample.optivis.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-2 flex-1 min-h-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-col gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "text-body5 text-neutral-10",
                                                                                        children: "Smaller Sample"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1372,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    simulationData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-1 mt-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                direction: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample4 = simulationData.smallerSample) === null || _simulationData_smallerSample4 === void 0 ? void 0 : _simulationData_smallerSample4.isNegative) ? "up" : "down",
                                                                                                color: "#231F52"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1377,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-body1m text-neutral-30",
                                                                                                children: simulationData.smallerSample.percentage || "--"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1385,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1376,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1371,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleFullscreenClick("smallerSample"),
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1397,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1392,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1370,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-white rounded-[12px] flex-1 min-h-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SmallerSampleChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmallerSampleChart"], {
                                                                            optivisData: chartDataToUse.smallerSample.optivis,
                                                                            traditionalData: chartDataToUse.smallerSample.traditional,
                                                                            highlightXValue: getHighlightXValue(chartDataToUse.smallerSample.optivis, "sampleSize"),
                                                                            compactMode: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                            lineNumber: 1403,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 1369,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-3 flex-1 min-h-0",
                                                                children: [
                                                                    chartDataToUse.smallerNToScreen.optivis.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-body5 text-neutral-10",
                                                                                                children: "Smaller N to screen"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1424,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            simulationData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 mt-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                        direction: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerNToScreen2 = simulationData.smallerNToScreen) === null || _simulationData_smallerNToScreen2 === void 0 ? void 0 : _simulationData_smallerNToScreen2.isNegative) ? "up" : "down",
                                                                                                        color: "#231F52"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1429,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-body1m text-neutral-30",
                                                                                                        children: simulationData.smallerNToScreen.percentage || "--"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1438,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1428,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1423,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleFullscreenClick("smallerNToScreen"),
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1450,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1445,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1422,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "bg-white rounded-[12px] flex-1 min-h-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$SmallerNToScreenChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmallerNToScreenChart"], {
                                                                                    optivisData: chartDataToUse.smallerNToScreen.optivis,
                                                                                    traditionalData: chartDataToUse.smallerNToScreen.traditional,
                                                                                    highlightXValue: getHighlightXValue(chartDataToUse.smallerNToScreen.optivis, "enrollment"),
                                                                                    compactMode: true
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1456,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1453,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1421,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    chartDataToUse.lowerCost.optivis.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex flex-col gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-body5 text-neutral-10",
                                                                                                children: "Lower cost"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1477,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            simulationData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 mt-1",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$arrow$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                        direction: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_lowerCost2 = simulationData.lowerCost) === null || _simulationData_lowerCost2 === void 0 ? void 0 : _simulationData_lowerCost2.isNegative) ? "up" : "down",
                                                                                                        color: "#231F52"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1482,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-body1m text-neutral-30",
                                                                                                        children: simulationData.lowerCost.percentage || "--"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                        lineNumber: 1490,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                                lineNumber: 1481,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1476,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleFullscreenClick("lowerCost"),
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                            lineNumber: 1502,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                        lineNumber: 1497,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1475,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "bg-white rounded-[12px] flex-1 min-h-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2f$LowerCostChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LowerCostChart"], {
                                                                                    optivisData: chartDataToUse.lowerCost.optivis,
                                                                                    traditionalData: chartDataToUse.lowerCost.traditional,
                                                                                    highlightXValue: getHighlightXValue(chartDataToUse.lowerCost.optivis, "cost"),
                                                                                    compactMode: true
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                    lineNumber: 1508,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                                lineNumber: 1505,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                        lineNumber: 1474,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                                lineNumber: 1418,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 bg-[#f8f8f8] rounded-[12px] border border-[#e5e5e5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                        lineNumber: 1525,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                                            lineNumber: 1292,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                                    lineNumber: 972,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ats/RightPanel.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ats/RightPanel.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ats/RightPanel.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            fullscreenChartType === "smallerSample" && chartDataToUse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$chart$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: fullscreenModalOpen,
                onOpenChange: setFullscreenModalOpen,
                title: "Smaller Sample",
                subtitle: "Sample Size vs CI Width",
                percentage: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample5 = simulationData.smallerSample) === null || _simulationData_smallerSample5 === void 0 ? void 0 : _simulationData_smallerSample5.percentage) || "--",
                optivisData: chartDataToUse.smallerSample.optivis,
                traditionalData: chartDataToUse.smallerSample.traditional,
                highlightXValue: getHighlightXValue(chartDataToUse.smallerSample.optivis, "sampleSize"),
                xAxisName: "Sample Size",
                yAxisName: "CI Width",
                isNegative: simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerSample6 = simulationData.smallerSample) === null || _simulationData_smallerSample6 === void 0 ? void 0 : _simulationData_smallerSample6.isNegative
            }, void 0, false, {
                fileName: "[project]/src/components/ats/RightPanel.tsx",
                lineNumber: 1538,
                columnNumber: 9
            }, this),
            fullscreenChartType === "smallerNToScreen" && chartDataToUse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$chart$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: fullscreenModalOpen,
                onOpenChange: setFullscreenModalOpen,
                title: "Smaller N to Screen",
                subtitle: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerNToScreen3 = simulationData.smallerNToScreen) === null || _simulationData_smallerNToScreen3 === void 0 ? void 0 : _simulationData_smallerNToScreen3.subtitle) || "Enrollment Time vs Power",
                percentage: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerNToScreen4 = simulationData.smallerNToScreen) === null || _simulationData_smallerNToScreen4 === void 0 ? void 0 : _simulationData_smallerNToScreen4.percentage) || "--",
                optivisData: chartDataToUse.smallerNToScreen.optivis,
                traditionalData: chartDataToUse.smallerNToScreen.traditional,
                highlightXValue: getHighlightXValue(chartDataToUse.smallerNToScreen.optivis, "enrollment"),
                xAxisName: "Enrollment Time",
                yAxisName: "Power",
                isNegative: simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_smallerNToScreen5 = simulationData.smallerNToScreen) === null || _simulationData_smallerNToScreen5 === void 0 ? void 0 : _simulationData_smallerNToScreen5.isNegative
            }, void 0, false, {
                fileName: "[project]/src/components/ats/RightPanel.tsx",
                lineNumber: 1556,
                columnNumber: 9
            }, this),
            fullscreenChartType === "lowerCost" && chartDataToUse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$chart$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: fullscreenModalOpen,
                onOpenChange: setFullscreenModalOpen,
                title: "Lower cost",
                subtitle: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_lowerCost3 = simulationData.lowerCost) === null || _simulationData_lowerCost3 === void 0 ? void 0 : _simulationData_lowerCost3.subtitle) || "Sample Size vs Cost",
                percentage: (simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_lowerCost4 = simulationData.lowerCost) === null || _simulationData_lowerCost4 === void 0 ? void 0 : _simulationData_lowerCost4.percentage) || "--",
                optivisData: chartDataToUse.lowerCost.optivis,
                traditionalData: chartDataToUse.lowerCost.traditional,
                highlightXValue: getHighlightXValue(chartDataToUse.lowerCost.optivis, "cost"),
                xAxisName: "Sample Size",
                yAxisName: "Cost",
                isNegative: simulationData === null || simulationData === void 0 ? void 0 : (_simulationData_lowerCost5 = simulationData.lowerCost) === null || _simulationData_lowerCost5 === void 0 ? void 0 : _simulationData_lowerCost5.isNegative
            }, void 0, false, {
                fileName: "[project]/src/components/ats/RightPanel.tsx",
                lineNumber: 1577,
                columnNumber: 9
            }, this),
            fullscreenBarModalOpen && fullscreenBarChartProps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$fullscreen$2d$bar$2d$chart$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: fullscreenBarModalOpen,
                onOpenChange: setFullscreenBarModalOpen,
                title: fullscreenBarChartProps.title,
                subtitle: fullscreenBarChartProps.subtitle,
                percentage: fullscreenBarChartProps.percentage,
                optivisValue: fullscreenBarChartProps.optivisValue,
                traditionalValue: fullscreenBarChartProps.traditionalValue,
                isNegative: fullscreenBarChartProps.isNegative,
                formatter: fullscreenBarChartProps.formatter
            }, void 0, false, {
                fileName: "[project]/src/components/ats/RightPanel.tsx",
                lineNumber: 1597,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ats/RightPanel.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s(RightPanel, "ls8NJY9YaY8i0DSAEGZ4uFpeTlQ=");
_c = RightPanel;
var _c;
__turbopack_context__.k.register(_c, "RightPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ats/simulation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$studyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/studyService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProcessedStudyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProcessedStudyData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ats$2f$LeftPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ats/LeftPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ats$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ats/RightPanel.tsx [app-client] (ecmascript)");
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
function SimulationPage() {
    _s();
    // Zustand store에서 상태 가져오기
    const { activeTab, isApplied, sampleSizeControl, disease, primaryEndpoints, secondaryEndpoints, primaryEndpoint, primaryEffectSize, secondaryEndpoint, secondaryEffectSize, nominalPower, alpha, multiplicity, treatmentDuration, hypothesisType, treatmentArms, randomizationRatio, subpopulation, activeData, apiData, isLoading, error, setActiveTab, setIsApplied, setSampleSizeControl, setDisease, setPrimaryEndpoints, setSecondaryEndpoints, setNominalPower, setAlpha, setMultiplicity, setTreatmentDuration, setHypothesisType, setTreatmentArms, setRandomizationRatio, setSubpopulation, setActiveData, setApiData, setTaskId, setIsLoading, setError, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])();
    const handleSaveEndpoints = (data)=>{
        setPrimaryEndpoints(data.primaryEndpoints);
        setSecondaryEndpoints(data.secondaryEndpoints);
        setNominalPower(data.nominalPower);
        setAlpha(data.alpha);
        var _data_multiplicity;
        setMultiplicity((_data_multiplicity = data.multiplicity) !== null && _data_multiplicity !== void 0 ? _data_multiplicity : "Bonferroni");
    };
    // 페이지 로드 시 상태 초기화는 제거
    // 뒤로가기로 돌아왔을 때 데이터를 유지하기 위해 reset() 호출을 제거
    // 새로고침 시에는 Zustand store가 자동으로 초기화됨
    // Sample Size Control 값을 x축 값으로 변환하는 함수
    // sampleSizeControl은 power 값을 나타내므로, findHighlightedData에서 찾은 데이터 포인트의 x축 값을 반환
    // chartType: 'sampleSize' | 'enrollment' | 'cost' - 차트 타입에 따라 다른 x축 값 반환
    const getHighlightXValue = function(optivisData) {
        let chartType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "sampleSize";
        if (!findHighlightedData || !findHighlightedData.optivis) {
            return undefined;
        }
        const highlightedPoint = findHighlightedData.optivis;
        // 차트 타입에 따라 다른 x축 값 반환
        switch(chartType){
            case "sampleSize":
                // Chart 1: Sample Size vs CI Width (x축 = total_patient)
                return highlightedPoint.total_patient;
            case "enrollment":
                // Chart 2: Enrollment Time vs Power (x축 = enrollment)
                return highlightedPoint.enrollment;
            case "cost":
                // Chart 3: Sample Size vs Cost (x축 = total_patient)
                return highlightedPoint.total_patient;
            default:
                return highlightedPoint.total_patient;
        }
    };
    // API 데이터 처리
    const optivisData = (apiData === null || apiData === void 0 ? void 0 : apiData.OPTIVIS) || [];
    const traditionalData = (apiData === null || apiData === void 0 ? void 0 : apiData.Traditional) || [];
    const { filteredData, chartData, defaultPowerIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProcessedStudyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessedStudyData"])(optivisData, traditionalData, nominalPower);
    // 하이라이트된 포인트의 실제 데이터를 찾는 함수
    // sampleSizeControl은 power 값을 나타냄 (0~1)
    const findHighlightedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationPage.useMemo[findHighlightedData]": ()=>{
            if (!apiData || optivisData.length === 0) {
                return null;
            }
            // 필터링된 데이터가 비어있으면 원본 데이터 사용
            const optivisToSearch = filteredData.optivis.length > 0 ? filteredData.optivis : optivisData;
            if (optivisToSearch.length === 0) return null;
            // sampleSizeControl을 power 값으로 사용하여 가장 가까운 데이터 포인트 찾기
            const targetPower = sampleSizeControl;
            // OPTIVIS에서 power 값이 가장 가까운 포인트 찾기
            let optivisIndex = 0;
            let minPowerDiff = Math.abs(optivisToSearch[0].primary_endpoint_power - targetPower);
            for(let i = 1; i < optivisToSearch.length; i++){
                const powerDiff = Math.abs(optivisToSearch[i].primary_endpoint_power - targetPower);
                if (powerDiff < minPowerDiff) {
                    minPowerDiff = powerDiff;
                    optivisIndex = i;
                }
            }
            const optivisPoint = optivisToSearch[optivisIndex];
            if (!optivisPoint) return null;
            // Traditional 데이터가 없으면 OPTIVIS만 반환
            const traditionalToSearch = filteredData.traditional.length > 0 ? filteredData.traditional : traditionalData;
            if (traditionalToSearch.length === 0) {
                return {
                    optivis: optivisPoint,
                    traditional: null
                };
            }
            // Traditional에서도 같은 power 값에 가장 가까운 포인트 찾기
            let traditionalIndex = 0;
            let minTraditionalPowerDiff = Math.abs(traditionalToSearch[0].primary_endpoint_power - targetPower);
            for(let i = 1; i < traditionalToSearch.length; i++){
                const powerDiff = Math.abs(traditionalToSearch[i].primary_endpoint_power - targetPower);
                if (powerDiff < minTraditionalPowerDiff) {
                    minTraditionalPowerDiff = powerDiff;
                    traditionalIndex = i;
                }
            }
            const traditionalPoint = traditionalToSearch[traditionalIndex];
            return {
                optivis: optivisPoint,
                traditional: traditionalPoint
            };
        }
    }["SimulationPage.useMemo[findHighlightedData]"], [
        apiData,
        sampleSizeControl,
        filteredData,
        optivisData,
        traditionalData
    ]);
    // 슬라이더 값에 따라 동적으로 계산된 데이터
    const dynamicSimulationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationPage.useMemo[dynamicSimulationData]": ()=>{
            var _optivis_treatment_group_1, _optivis_treatment_group_2, _optivis_treatment_group_3, _optivis_control_group, _traditional_treatment_group_1, _traditional_treatment_group_2, _traditional_treatment_group_3, _traditional_control_group;
            if (!findHighlightedData) {
                return null;
            }
            const { optivis, traditional } = findHighlightedData;
            // Traditional 데이터가 없으면 OPTIVIS 데이터만 반환
            if (!traditional) {
                var _optivis_treatment_group_11, _optivis_treatment_group_21, _optivis_treatment_group_31, _optivis_control_group1;
                return {
                    topMetrics: {
                        nToScreen: optivis.n_to_screen.toLocaleString(),
                        sampleSize: optivis.total_patient.toLocaleString(),
                        enrollment: optivis.enrollment.toFixed(2),
                        primaryEndpointPower: (optivis.primary_endpoint_power * 100).toFixed(1),
                        secondaryEndpointPower: optivis.secondary_endpoint_power ? (optivis.secondary_endpoint_power * 100).toFixed(1) : "0.0",
                        estimatedCostReduction: "-",
                        gaugeValue: optivis.primary_endpoint_power,
                        gaugeText: "".concat((optivis.primary_endpoint_power * 100).toFixed(1), "%")
                    },
                    smallerSample: {
                        percentage: "-",
                        chartData: {
                            optivis: chartData.chart1Data.optivis,
                            traditional: chartData.chart1Data.traditional
                        }
                    },
                    smallerNToScreen: {
                        percentage: "-",
                        subtitle: "Enrollment Time vs Power",
                        chartData: {
                            optivis: chartData.chart2Data.optivis,
                            traditional: chartData.chart2Data.traditional
                        }
                    },
                    lowerCost: {
                        percentage: "-",
                        subtitle: "Sample Size vs Cost",
                        chartData: {
                            optivis: chartData.chart3Data.optivis,
                            traditional: chartData.chart3Data.traditional
                        }
                    },
                    comparisonTable: {
                        enrollment: {
                            optivis: optivis.enrollment.toFixed(2),
                            traditional: "-"
                        },
                        primaryEndpointPower: {
                            optivis: "".concat((optivis.primary_endpoint_power * 100).toFixed(1), "%"),
                            traditional: "-"
                        },
                        secondaryEndpointPower: {
                            optivis: optivis.secondary_endpoint_power ? "".concat((optivis.secondary_endpoint_power * 100).toFixed(1), "%") : "0.0%",
                            traditional: "-"
                        },
                        sampleSize: {
                            optivis: {
                                treatmentGroup1: ((_optivis_treatment_group_11 = optivis.treatment_group_1) === null || _optivis_treatment_group_11 === void 0 ? void 0 : _optivis_treatment_group_11.toString()) || null,
                                treatmentGroup2: ((_optivis_treatment_group_21 = optivis.treatment_group_2) === null || _optivis_treatment_group_21 === void 0 ? void 0 : _optivis_treatment_group_21.toString()) || null,
                                treatmentGroup3: ((_optivis_treatment_group_31 = optivis.treatment_group_3) === null || _optivis_treatment_group_31 === void 0 ? void 0 : _optivis_treatment_group_31.toString()) || null,
                                controlGroup: ((_optivis_control_group1 = optivis.control_group) === null || _optivis_control_group1 === void 0 ? void 0 : _optivis_control_group1.toString()) || "0",
                                total: optivis.total_patient.toString()
                            },
                            traditional: {
                                treatmentGroup1: null,
                                treatmentGroup2: null,
                                treatmentGroup3: null,
                                controlGroup: "-",
                                total: "-"
                            }
                        }
                    },
                    reductionView: {
                        charts: [
                            {
                                label: "Sample Size",
                                change: "-",
                                optivis: optivis.total_patient,
                                traditional: 0
                            },
                            {
                                label: "Power",
                                change: "-",
                                optivis: Math.round(optivis.primary_endpoint_power * 100),
                                traditional: 0
                            },
                            {
                                label: "Enrollment Time",
                                change: "-",
                                optivis: Math.round(optivis.enrollment),
                                traditional: 0
                            },
                            {
                                label: "Cost",
                                change: "-",
                                optivis: Math.round(optivis.cost / 1000000),
                                traditional: 0
                            }
                        ]
                    }
                };
            }
            // Percentage 계산 (Smaller Sample, Smaller N to Screen, Lower Cost)
            // 음수가 나오면 안 되므로, 절댓값을 사용하고 화살표 방향을 조정
            // Smaller Sample: (Traditional total_patient - OPTIVIS total_patient) / Traditional total_patient * 100
            const smallerSamplePctRaw = (traditional.total_patient - optivis.total_patient) / traditional.total_patient * 100;
            const smallerSamplePct = Math.abs(smallerSamplePctRaw).toFixed(0);
            const smallerSampleIsNegative = smallerSamplePctRaw < 0;
            // Smaller N to Screen: (Traditional enrollment - OPTIVIS enrollment) / Traditional enrollment * 100
            // 그래프가 enrollment를 X축으로 사용하므로 enrollment로 계산
            const smallerNToScreenPctRaw = (traditional.enrollment - optivis.enrollment) / traditional.enrollment * 100;
            const smallerNToScreenPct = Math.abs(smallerNToScreenPctRaw).toFixed(1);
            const smallerNToScreenIsNegative = smallerNToScreenPctRaw < 0;
            // Lower Cost: (Traditional cost - OPTIVIS cost) / Traditional cost * 100
            const lowerCostPctRaw = (traditional.cost - optivis.cost) / traditional.cost * 100;
            const lowerCostPct = Math.abs(lowerCostPctRaw).toFixed(0);
            const lowerCostIsNegative = lowerCostPctRaw < 0;
            // Reduction 계산 (Reduction View용)
            // 음수가 나오면 안 되므로, 절댓값을 사용하고 화살표 방향을 조정
            const sampleSizeReductionRaw = (traditional.total_patient - optivis.total_patient) / traditional.total_patient * 100;
            const sampleSizeReduction = Math.abs(sampleSizeReductionRaw).toFixed(0);
            const sampleSizeIsNegative = sampleSizeReductionRaw < 0;
            const enrollmentReductionRaw = (traditional.enrollment - optivis.enrollment) / traditional.enrollment * 100;
            const enrollmentReduction = Math.abs(enrollmentReductionRaw).toFixed(1);
            const enrollmentIsNegative = enrollmentReductionRaw < 0;
            const costReductionRaw = (traditional.cost - optivis.cost) / traditional.cost * 100;
            const costReduction = Math.abs(costReductionRaw).toFixed(0);
            const costReductionValue = Math.abs((traditional.cost - optivis.cost) / 1000000).toFixed(1);
            const costIsNegative = costReductionRaw < 0;
            return {
                topMetrics: {
                    nToScreen: optivis.n_to_screen.toLocaleString(),
                    sampleSize: optivis.total_patient.toLocaleString(),
                    enrollment: optivis.enrollment.toFixed(2),
                    primaryEndpointPower: (optivis.primary_endpoint_power * 100).toFixed(1),
                    secondaryEndpointPower: optivis.secondary_endpoint_power ? (optivis.secondary_endpoint_power * 100).toFixed(1) : "0.0",
                    estimatedCostReduction: costReduction,
                    gaugeValue: optivis.primary_endpoint_power,
                    gaugeText: "".concat((optivis.primary_endpoint_power * 100).toFixed(1), "%")
                },
                smallerSample: {
                    percentage: "".concat(smallerSamplePct, "%"),
                    isNegative: smallerSampleIsNegative,
                    chartData: {
                        optivis: chartData.chart1Data.optivis,
                        traditional: chartData.chart1Data.traditional
                    }
                },
                smallerNToScreen: {
                    percentage: "".concat(smallerNToScreenPct, "%"),
                    isNegative: smallerNToScreenIsNegative,
                    subtitle: "Enrollment Time vs Power",
                    chartData: {
                        optivis: chartData.chart2Data.optivis,
                        traditional: chartData.chart2Data.traditional
                    }
                },
                lowerCost: {
                    percentage: "".concat(lowerCostPct, "%"),
                    isNegative: lowerCostIsNegative,
                    subtitle: "Sample Size vs Cost",
                    chartData: {
                        optivis: chartData.chart3Data.optivis,
                        traditional: chartData.chart3Data.traditional
                    }
                },
                comparisonTable: {
                    // OPTIVIS vs Traditional 데이터 직접 사용
                    enrollment: {
                        optivis: optivis.enrollment.toFixed(2),
                        traditional: traditional.enrollment.toFixed(2)
                    },
                    primaryEndpointPower: {
                        optivis: "".concat((optivis.primary_endpoint_power * 100).toFixed(1), "%"),
                        traditional: "".concat((traditional.primary_endpoint_power * 100).toFixed(1), "%")
                    },
                    secondaryEndpointPower: {
                        optivis: optivis.secondary_endpoint_power ? "".concat((optivis.secondary_endpoint_power * 100).toFixed(1), "%") : "0.0%",
                        traditional: traditional.secondary_endpoint_power ? "".concat((traditional.secondary_endpoint_power * 100).toFixed(1), "%") : "0.0%"
                    },
                    sampleSize: {
                        optivis: {
                            treatmentGroup1: ((_optivis_treatment_group_1 = optivis.treatment_group_1) === null || _optivis_treatment_group_1 === void 0 ? void 0 : _optivis_treatment_group_1.toString()) || null,
                            treatmentGroup2: ((_optivis_treatment_group_2 = optivis.treatment_group_2) === null || _optivis_treatment_group_2 === void 0 ? void 0 : _optivis_treatment_group_2.toString()) || null,
                            treatmentGroup3: ((_optivis_treatment_group_3 = optivis.treatment_group_3) === null || _optivis_treatment_group_3 === void 0 ? void 0 : _optivis_treatment_group_3.toString()) || null,
                            controlGroup: ((_optivis_control_group = optivis.control_group) === null || _optivis_control_group === void 0 ? void 0 : _optivis_control_group.toString()) || "0",
                            total: optivis.total_patient.toString()
                        },
                        traditional: {
                            treatmentGroup1: ((_traditional_treatment_group_1 = traditional.treatment_group_1) === null || _traditional_treatment_group_1 === void 0 ? void 0 : _traditional_treatment_group_1.toString()) || null,
                            treatmentGroup2: ((_traditional_treatment_group_2 = traditional.treatment_group_2) === null || _traditional_treatment_group_2 === void 0 ? void 0 : _traditional_treatment_group_2.toString()) || null,
                            treatmentGroup3: ((_traditional_treatment_group_3 = traditional.treatment_group_3) === null || _traditional_treatment_group_3 === void 0 ? void 0 : _traditional_treatment_group_3.toString()) || null,
                            controlGroup: ((_traditional_control_group = traditional.control_group) === null || _traditional_control_group === void 0 ? void 0 : _traditional_control_group.toString()) || "0",
                            total: traditional.total_patient.toString()
                        }
                    }
                },
                reductionView: {
                    // Reduction View Bar Chart 데이터 - OPTIVIS vs Traditional 직접 사용
                    charts: [
                        {
                            label: "Sample Size",
                            change: "".concat(sampleSizeReduction, "%"),
                            optivis: optivis.total_patient,
                            traditional: traditional.total_patient,
                            isNegative: sampleSizeIsNegative
                        },
                        {
                            label: "Power",
                            change: optivis.primary_endpoint_power >= traditional.primary_endpoint_power ? "No loss" : "".concat(((traditional.primary_endpoint_power - optivis.primary_endpoint_power) * 100).toFixed(1), "%"),
                            optivis: Math.round(optivis.primary_endpoint_power * 100),
                            traditional: Math.round(traditional.primary_endpoint_power * 100),
                            isNegative: optivis.primary_endpoint_power < traditional.primary_endpoint_power
                        },
                        {
                            label: "Enrollment Time",
                            change: "".concat(enrollmentReduction, "%"),
                            optivis: optivis.enrollment,
                            traditional: traditional.enrollment,
                            isNegative: enrollmentIsNegative
                        },
                        {
                            label: "Cost",
                            change: "$".concat(costReductionValue, "M"),
                            optivis: Math.round(optivis.cost / 1000000),
                            traditional: Math.round(traditional.cost / 1000000),
                            isNegative: costIsNegative
                        }
                    ]
                }
            };
        }
    }["SimulationPage.useMemo[dynamicSimulationData]"], [
        findHighlightedData,
        chartData,
        filteredData
    ]);
    // 동적 데이터 사용 (슬라이더 값에 따라 업데이트됨)
    // API 데이터가 있을 때만 실제 데이터 사용
    const simulationData = apiData && dynamicSimulationData ? dynamicSimulationData : null;
    // API 데이터를 차트 형식으로 변환 - 활성 탭의 데이터만 계산 (lazy)
    const apiChartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationPage.useMemo[apiChartData]": ()=>{
            if (!apiData || optivisData.length === 0) {
                return null;
            }
            // Compare View에서 사용하는 라인 차트 데이터 (compare 탭일 때만 계산)
            // Reduction View에서도 우측 Compare View 카드에서 사용하므로 항상 계산
            const chart1Optivis = chartData.chart1Data.optivis.length > 0 ? chartData.chart1Data.optivis : optivisData.map({
                "SimulationPage.useMemo[apiChartData]": (item)=>[
                        item.total_patient,
                        item.n_to_screen
                    ]
            }["SimulationPage.useMemo[apiChartData]"]);
            const chart1Traditional = chartData.chart1Data.traditional.length > 0 ? chartData.chart1Data.traditional : traditionalData.map({
                "SimulationPage.useMemo[apiChartData]": (item)=>[
                        item.total_patient,
                        item.n_to_screen
                    ]
            }["SimulationPage.useMemo[apiChartData]"]);
            const chart2Optivis = chartData.chart2Data.optivis.length > 0 ? chartData.chart2Data.optivis : optivisData.map({
                "SimulationPage.useMemo[apiChartData]": (item)=>[
                        item.enrollment,
                        item.primary_endpoint_power
                    ]
            }["SimulationPage.useMemo[apiChartData]"]);
            const chart2Traditional = chartData.chart2Data.traditional.length > 0 ? chartData.chart2Data.traditional : traditionalData.map({
                "SimulationPage.useMemo[apiChartData]": (item)=>[
                        item.enrollment,
                        item.primary_endpoint_power
                    ]
            }["SimulationPage.useMemo[apiChartData]"]);
            const chart3Optivis = chartData.chart3Data.optivis.length > 0 ? chartData.chart3Data.optivis : optivisData.map({
                "SimulationPage.useMemo[apiChartData]": (item)=>[
                        item.total_patient,
                        item.cost / 1000000
                    ]
            }["SimulationPage.useMemo[apiChartData]"]);
            const chart3Traditional = chartData.chart3Data.traditional.length > 0 ? chartData.chart3Data.traditional : traditionalData.map({
                "SimulationPage.useMemo[apiChartData]": (item)=>[
                        item.total_patient,
                        item.cost / 1000000
                    ]
            }["SimulationPage.useMemo[apiChartData]"]);
            return {
                smallerSample: {
                    optivis: chart1Optivis,
                    traditional: chart1Traditional
                },
                smallerNToScreen: {
                    optivis: chart2Optivis,
                    traditional: chart2Traditional
                },
                lowerCost: {
                    optivis: chart3Optivis,
                    traditional: chart3Traditional
                }
            };
        }
    }["SimulationPage.useMemo[apiChartData]"], [
        apiData,
        chartData,
        optivisData,
        traditionalData
    ]);
    // 차트에 사용할 데이터 (API 데이터가 있을 때만 사용)
    const chartDataToUse = apiChartData;
    // Primary Endpoint를 API 형식으로 변환
    const convertPrimaryEndpoint = (endpoint)=>{
        const endpointMap = {
            "ADAS Cog 11": "ADTOT70",
            MMSE: "MMTOTSCORE",
            CDR: "CDTOTSCORE"
        };
        return endpointMap[endpoint] || endpoint;
    };
    // API 호출 함수
    const handleApplySettings = async ()=>{
        try {
            var _response_data, _response_data_table_results, _response_data1, _response_data_table_results1, _response_data2, _response_data_table_results2, _response_data3, _response_data_table_results3, _response_data4, _response_data_table_results4, _response_data5, _response_data_table_results5, _response_data6, _response_data_table_results6, _response_data7, _response_data_table_results7, _response_data8, _response_data_table_results8, _response_data9, _response_data_table_results9, _response_data10, _response_data_table_results10, _response_data11, _response_data_table_results11, _response_data12;
            setIsLoading(true);
            setError(null);
            // 값들을 정확히 반올림 (부동소수점 오차 방지)
            const roundedNominalPower = parseFloat((Math.round(nominalPower / 0.05) * 0.05).toFixed(2));
            // UI type(Continuous/Binary) -> API type(Continous/Binary). 넘겨준 값 또는 기본값 사용
            const toApiType = (t)=>t === "Binary" ? "Binary" : "Continous";
            // threshold: 단일 값. 없으면 null, 있으면 number (리스트 아님)
            const thresholdPayload = (v)=>v != null && Number.isFinite(v) ? {
                    threshold: v
                } : {
                    threshold: null
                };
            // Primary 데이터 구성: multiplicity·type은 넘겨준 값(또는 기본값) 사용
            const primaryDataList = primaryEndpoints.map((ep, index)=>{
                const outcome = convertPrimaryEndpoint(ep.name);
                const effectSize = parseFloat((Math.round(ep.effectSize * 10) / 10).toFixed(1));
                return {
                    no: index + 1,
                    outcome: [
                        outcome
                    ],
                    type: [
                        toApiType(ep.type)
                    ],
                    effect_size: [
                        effectSize
                    ],
                    ...thresholdPayload(ep.threshold),
                    target_power: [
                        roundedNominalPower
                    ],
                    statistical_method: "ANCOVA",
                    multiplicity: multiplicity || "Bonferroni",
                    endpoint_objectives: [
                        "Confirmatory"
                    ],
                    alpha: alpha
                };
            });
            // Secondary 데이터 구성: multiplicity·type은 넘겨준 값(또는 기본값) 사용
            const secondaryDataList = secondaryEndpoints.length > 0 ? secondaryEndpoints.map((ep, index)=>{
                const outcome = convertPrimaryEndpoint(ep.name);
                const effectSize = parseFloat((Math.round(ep.effectSize * 10) / 10).toFixed(1));
                return {
                    no: index + 1,
                    outcome: [
                        outcome
                    ],
                    type: [
                        toApiType(ep.type)
                    ],
                    effect_size: [
                        effectSize
                    ],
                    ...thresholdPayload(ep.threshold),
                    target_power: [
                        roundedNominalPower
                    ],
                    statistical_method: "ANCOVA",
                    multiplicity: multiplicity || "Bonferroni",
                    endpoint_objectives: [
                        "Confirmatory"
                    ],
                    alpha: alpha
                };
            }) : [];
            // treatment_duration 검증 및 변환 (3의 배수, >0, 정수)
            const durationValue = parseInt(treatmentDuration.replace(" months", ""), 10);
            if (isNaN(durationValue) || durationValue <= 0 || durationValue % 3 !== 0) {
                throw new Error("Treatment Duration은 3의 배수인 양수여야 합니다.");
            }
            const parameters = {
                disease_area: "Alzheimer",
                treatment_duration: durationValue,
                treatment_arms: parseInt(treatmentArms, 10),
                randomization_ratio: randomizationRatio,
                stratification: false,
                hypothesis_type: hypothesisType,
                subpopulation: subpopulation,
                primary: primaryDataList,
                ...secondaryDataList.length > 0 ? {
                    secondary: secondaryDataList
                } : {}
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$studyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callMLStudyDesign"])(parameters);
            // API 응답에서 데이터 추출
            // task_id 추출 및 저장
            const taskId = (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.task_id;
            if (taskId) {
                setTaskId(taskId);
            }
            const manageResult = (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : (_response_data_table_results = _response_data1.table_results) === null || _response_data_table_results === void 0 ? void 0 : _response_data_table_results.manage_result;
            const sampleSizeEvaluation = (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : (_response_data_table_results1 = _response_data2.table_results) === null || _response_data_table_results1 === void 0 ? void 0 : _response_data_table_results1.sample_size_evaluation;
            const trialDesignConditionsSummary = (_response_data3 = response.data) === null || _response_data3 === void 0 ? void 0 : (_response_data_table_results2 = _response_data3.table_results) === null || _response_data_table_results2 === void 0 ? void 0 : _response_data_table_results2.result_trialdesignconditionsummary;
            const resultTypeSafety = (_response_data4 = response.data) === null || _response_data4 === void 0 ? void 0 : (_response_data_table_results3 = _response_data4.table_results) === null || _response_data_table_results3 === void 0 ? void 0 : _response_data_table_results3.result_type_safety;
            const resultVarianceDecline = (_response_data5 = response.data) === null || _response_data5 === void 0 ? void 0 : (_response_data_table_results4 = _response_data5.table_results) === null || _response_data_table_results4 === void 0 ? void 0 : _response_data_table_results4.result_variancedecline;
            const resultEstimatedTreatmentEffect = (_response_data6 = response.data) === null || _response_data6 === void 0 ? void 0 : (_response_data_table_results5 = _response_data6.table_results) === null || _response_data_table_results5 === void 0 ? void 0 : _response_data_table_results5.result_estimatedtreatmenteffect;
            const resultAbsolutePerformance = (_response_data7 = response.data) === null || _response_data7 === void 0 ? void 0 : (_response_data_table_results6 = _response_data7.table_results) === null || _response_data_table_results6 === void 0 ? void 0 : _response_data_table_results6.result_absoluteperformancecomparison;
            const resultRobustnessProof = (_response_data8 = response.data) === null || _response_data8 === void 0 ? void 0 : (_response_data_table_results7 = _response_data8.table_results) === null || _response_data_table_results7 === void 0 ? void 0 : _response_data_table_results7.result_robustnessproof;
            const resultDecisionStability = (_response_data9 = response.data) === null || _response_data9 === void 0 ? void 0 : (_response_data_table_results8 = _response_data9.table_results) === null || _response_data_table_results8 === void 0 ? void 0 : _response_data_table_results8.result_decisionstability;
            const graphAccModel = (_response_data10 = response.data) === null || _response_data10 === void 0 ? void 0 : (_response_data_table_results9 = _response_data10.table_results) === null || _response_data_table_results9 === void 0 ? void 0 : _response_data_table_results9.graph_acc_model;
            const resultPrecModel = (_response_data11 = response.data) === null || _response_data11 === void 0 ? void 0 : (_response_data_table_results10 = _response_data11.table_results) === null || _response_data_table_results10 === void 0 ? void 0 : _response_data_table_results10.result_prec_model;
            const appendix = (_response_data12 = response.data) === null || _response_data12 === void 0 ? void 0 : (_response_data_table_results11 = _response_data12.table_results) === null || _response_data_table_results11 === void 0 ? void 0 : _response_data_table_results11.appendix;
            if (manageResult) {
                var _response_data_table_results12, _response_data13, _response_data_table_results13, _response_data14;
                // API 응답 키는 모두 대문자: TRADITIONAL, OPTIVIS
                const optivisData = manageResult.OPTIVIS || [];
                const traditionalData = manageResult.TRADITIONAL || [];
                const resultFormula = (_response_data13 = response.data) === null || _response_data13 === void 0 ? void 0 : (_response_data_table_results12 = _response_data13.table_results) === null || _response_data_table_results12 === void 0 ? void 0 : _response_data_table_results12.result_formula;
                const resultOverview = (_response_data14 = response.data) === null || _response_data14 === void 0 ? void 0 : (_response_data_table_results13 = _response_data14.table_results) === null || _response_data_table_results13 === void 0 ? void 0 : _response_data_table_results13.result_resultsoverview;
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
                    appendix: appendix
                });
                // Nominal Power 값으로 Sample Size Control 초기 위치 설정 (Apply 시)
                // sampleSizeControl 범위: 0.6~0.95 (차트 하이라이트용)
                const roundedPower = parseFloat((Math.round(nominalPower / 0.05) * 0.05).toFixed(2));
                setSampleSizeControl(Math.max(0.6, Math.min(0.95, roundedPower)));
                setIsApplied(true);
            } else {
                throw new Error("API 응답에 데이터가 없습니다.");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "API 호출에 실패했습니다.");
        // API 호출 오류
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/src/app/ats/simulation/page.tsx",
                lineNumber: 732,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLayout"], {
                headerType: "ats",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full h-full min-h-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 items-start mb-2 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-title text-neutral-5 text-left",
                                    children: "Adaptive Trial Simulation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/page.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body2m text-neutral-50 text-left",
                                    children: "Optimize study design"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/page.tsx",
                                    lineNumber: 739,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ats/simulation/page.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ats-simulation-layout flex gap-[2px] w-full flex-1 min-h-0 max-[1536px]:flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ats-left-panel flex-[22] min-w-[280px] min-h-0 max-[1536px]:flex-none max-[1536px]:w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ats$2f$LeftPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeftPanel"], {
                                        sampleSizeControl: sampleSizeControl,
                                        setSampleSizeControl: setSampleSizeControl,
                                        disease: disease,
                                        setDisease: setDisease,
                                        primaryEndpoints: primaryEndpoints,
                                        setPrimaryEndpoints: setPrimaryEndpoints,
                                        secondaryEndpoints: secondaryEndpoints,
                                        setSecondaryEndpoints: setSecondaryEndpoints,
                                        nominalPower: nominalPower,
                                        setNominalPower: setNominalPower,
                                        alpha: alpha,
                                        multiplicity: multiplicity,
                                        treatmentDuration: treatmentDuration,
                                        setTreatmentDuration: setTreatmentDuration,
                                        hypothesisType: hypothesisType,
                                        setHypothesisType: setHypothesisType,
                                        treatmentArms: treatmentArms,
                                        setTreatmentArms: setTreatmentArms,
                                        randomizationRatio: randomizationRatio,
                                        setRandomizationRatio: setRandomizationRatio,
                                        subpopulation: subpopulation,
                                        setSubpopulation: setSubpopulation,
                                        activeData: activeData,
                                        setActiveData: setActiveData,
                                        onApply: handleApplySettings,
                                        isLoading: isLoading,
                                        onSaveEndpoints: handleSaveEndpoints
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ats/simulation/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ats-right-panel flex-[78] min-w-0 min-h-0 max-[1536px]:flex-none max-[1536px]:w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ats$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightPanel"], {
                                        activeTab: activeTab,
                                        setActiveTab: setActiveTab,
                                        isApplied: isApplied,
                                        simulationData: simulationData,
                                        chartDataToUse: chartDataToUse,
                                        getHighlightXValue: getHighlightXValue,
                                        apiData: apiData
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ats/simulation/page.tsx",
                                        lineNumber: 777,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ats/simulation/page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ats/simulation/page.tsx",
                            lineNumber: 744,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ats/simulation/page.tsx",
                    lineNumber: 734,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ats/simulation/page.tsx",
                lineNumber: 733,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SimulationPage, "mpaOuTej866ArmUjKuMGxpV+CJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProcessedStudyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProcessedStudyData"]
    ];
});
_c = SimulationPage;
var _c;
__turbopack_context__.k.register(_c, "SimulationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5bdf7347._.js.map