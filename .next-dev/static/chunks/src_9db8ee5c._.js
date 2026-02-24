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
"[project]/src/components/home/feature-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FeatureCard(param) {
    let { title, description, icon, selectedIcon, variant = "glass", isSelected = false, onClick, sectionType = "package", locked = false, disabled = false } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isPackage = sectionType === "package";
    // 카드 배경색
    let cardBg;
    let cardBorder;
    let cardShadow;
    if (isPackage) {
        if (disabled) {
            cardBg = "linear-gradient(180deg, rgba(196,196,196,0.95) 0%, rgba(182,182,182,0.92) 100%)";
            cardBorder = "1px solid rgba(166,166,166,0.92)";
            cardShadow = "inset 0 1px 0 rgba(255,255,255,0.30)";
        } else if (isSelected) {
            // Figma: Fill #262255, Glass Effect black r=24
            cardBg = "linear-gradient(180deg, rgba(56,51,110,1) 0%, rgba(38,34,85,1) 100%)";
            cardBorder = "1px solid rgba(255,255,255,0.15)";
            cardShadow = "inset 0 1px 0 rgba(255,255,255,0.1)";
        } else {
            // Figma: Fill white, Glass Effect black r=24
            cardBg = "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.90) 100%)";
            cardBorder = "1px solid rgba(255,255,255,0.8)";
            cardShadow = "inset 0 1px 0 rgba(255,255,255,0.9)";
        }
    } else {
        if (disabled) {
            cardBg = "linear-gradient(180deg, rgba(226,226,226,0.95) 0%, rgba(215,215,215,0.92) 100%)";
            cardBorder = "1px solid rgba(196,196,196,0.92)";
            cardShadow = "inset 0 1px 0 rgba(255,255,255,0.45)";
        } else if (isSelected || isHovered) {
            // Service card selected/hovered: lavender glass background
            cardBg = "linear-gradient(180deg, rgba(232,230,255,0.8) 0%, rgba(220,218,255,0.75) 100%)";
            cardBorder = "1px solid rgba(100,88,220,0.4)";
            cardShadow = "inset 0 1px 0 rgba(255,255,255,0.9)";
        } else {
            // Default: white background
            cardBg = "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.90) 100%)";
            cardBorder = "1px solid rgba(255,255,255,0.8)";
            cardShadow = "inset 0 1px 0 rgba(255,255,255,0.9)";
        }
    }
    // 아이콘 배경색 및 필터 (검정색 아이콘 효과)
    let iconBg;
    let iconFilter = "none";
    if (isPackage) {
        if (disabled) {
            iconBg = "transparent";
            iconFilter = "brightness(0) saturate(0) opacity(0.58)";
        } else if (isSelected) {
            if (selectedIcon) {
                // 전용 선택 아이콘이 있는 경우 배경을 투명하게 하여 흰색 테두리 방지
                iconBg = "transparent";
            } else {
                iconBg = "#FFFFFF";
            }
            iconFilter = "none";
        } else {
            iconBg = "transparent"; /* 그레이 배경 제거 */ 
            iconFilter = "brightness(0)"; // 아이콘 완전 블랙
        }
    } else {
        if (disabled) {
            iconBg = "transparent";
            iconFilter = "brightness(0) saturate(0) opacity(0.58)";
        } else if (isSelected || isHovered) {
            if (selectedIcon) {
                // 이미 디자인된 전용 아이콘이 있는 경우 (예: Adaptive Trial)
                // 배경을 투명하게 하고 필터를 해제하여 원본 이미지를 그대로 노출 (중복 원 방지)
                iconBg = "transparent";
                iconFilter = "none";
            } else {
                // 전용 아이콘이 없는 경우 기본 아이콘을 화이트로 변경하여 사용
                iconBg = "#bdb9e9";
                iconFilter = "brightness(0) invert(1)";
            }
        } else {
            iconBg = "transparent"; /* 기본 상태 그레이 배경 제거 */ 
            iconFilter = "brightness(0)"; // 아이콘 완전 블랙
        }
    }
    // 텍스트 색상
    const titleColor = disabled ? "#7A7A7A" : isPackage && isSelected ? "#FFFFFF" : "#000000";
    const descColor = disabled ? "#888888" : isPackage && isSelected ? "rgba(255,255,255,0.85)" : "#484646";
    // 아이콘 소스 (호버 시에도 선택된 아이콘 사용하도록 변경, 단 Package는 선택 시에만)
    const iconSrc = (isSelected || !isPackage && isHovered && !disabled) && selectedIcon ? selectedIcon : icon;
    // 카드 padding / gap - Figma 기준
    const cardPad = 24; // 모든 방향 24px
    const iconTextGap = isPackage ? 60 : 30; // Package: 60px gap, Service: 30px
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: disabled ? undefined : onClick,
        onMouseEnter: ()=>{
            if (!disabled) setIsHovered(true);
        },
        onMouseLeave: ()=>{
            if (!disabled) setIsHovered(false);
        },
        style: {
            width: "100%",
            /* 높이는 내용에 따라 flex로 채움 (Figma 352px 기준이나 반응형 허용) */ flex: 1,
            minHeight: "200px",
            padding: "".concat(cardPad, "px"),
            borderRadius: "24px",
            background: cardBg,
            border: cardBorder,
            boxShadow: cardShadow,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: isPackage && isHovered && !isSelected && !disabled ? "translateY(-4px)" : "none",
            display: "flex",
            flexDirection: "column",
            cursor: disabled ? "default" : "pointer",
            opacity: 1
        },
        className: "jsx-98c6f0fd47b26a45" + " " + "relative flex flex-col",
        children: [
            locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "29px",
                    height: "29px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                className: "jsx-98c6f0fd47b26a45",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "jsx-98c6f0fd47b26a45",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 10V7.5C8 5.01472 10.0147 3 12.5 3C14.9853 3 17 5.01472 17 7.5V10",
                            stroke: "#767676",
                            strokeWidth: "1.8",
                            strokeLinecap: "round",
                            className: "jsx-98c6f0fd47b26a45"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/feature-card.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "6",
                            y: "10",
                            width: "13",
                            height: "11",
                            rx: "2.5",
                            stroke: "#767676",
                            strokeWidth: "1.8",
                            className: "jsx-98c6f0fd47b26a45"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/feature-card.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/feature-card.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/feature-card.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: iconBg,
                    transition: "background-color 0.2s ease",
                    position: "relative"
                },
                className: "jsx-98c6f0fd47b26a45" + " " + "home-feature-card-icon flex-shrink-0 flex items-center justify-center overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: iconSrc,
                    alt: title,
                    width: 140,
                    height: 140,
                    className: "home-feature-card-icon-img object-cover",
                    style: {
                        filter: iconFilter,
                        transition: "filter 0.2s ease",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        /* 줌 효과 제거: 모든 상태에서 일정한 크기 유지 */ transform: "translate(-50%, -50%) scale(1)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/feature-card.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/feature-card.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-98c6f0fd47b26a45" + " " + "flex-1"
            }, void 0, false, {
                fileName: "[project]/src/components/home/feature-card.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gap: "8px"
                },
                className: "jsx-98c6f0fd47b26a45" + " " + "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "Inter",
                            fontSize: "19.5px",
                            fontWeight: 600,
                            lineHeight: "100%",
                            letterSpacing: "-0.585px",
                            color: titleColor,
                            margin: 0,
                            transition: "color 0.2s ease"
                        },
                        className: "jsx-98c6f0fd47b26a45" + " " + "home-feature-card-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/feature-card.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "Inter",
                            fontSize: "15px",
                            fontWeight: isPackage && isSelected ? 500 : 400,
                            lineHeight: "1.115",
                            letterSpacing: "-0.3px",
                            color: descColor,
                            margin: 0,
                            transition: "color 0.2s ease"
                        },
                        className: "jsx-98c6f0fd47b26a45" + " " + "home-feature-card-desc",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/feature-card.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/feature-card.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "98c6f0fd47b26a45",
                children: ""
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/feature-card.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(FeatureCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/feature-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$feature$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/feature-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function FeatureSection(param) {
    let { title, features, selectedId: externalSelectedId, onSelect: externalOnSelect, slotRows, maxVisibleFeatures } = param;
    const handleCardClick = (feature)=>{
        if (feature.disabled) {
            return;
        }
        if (externalOnSelect) {
            externalOnSelect(feature.id);
        }
    };
    const selectedId = externalSelectedId;
    const sectionType = title.includes("Package") ? "package" : "service";
    const panelClass = sectionType === "package" ? "figma-home-panel-left" : "figma-home-panel-middle";
    const displayedFeatures = typeof maxVisibleFeatures === "number" && maxVisibleFeatures > 0 ? features.slice(0, maxVisibleFeatures) : features;
    const shouldUseSlotLayout = typeof slotRows === "number" && slotRows > 0;
    // Figma: 섹션 번호/이름 파싱 ("01 Package" -> "01", "Package")
    const parts = title.split(" ");
    const sectionNum = parts[0]; // "01" or "02"
    const sectionName = parts.slice(1).join(" "); // "Package" or "Service"
    return(/*
     * Figma: Frame 1618872466 / Frame 1618872472
     * 470px(package) / 469px(service) × 1200px
     * padding: 28px, gap: 16px
     * bg: Liquid Glass (Fill #F5F5F5 r=36 + Glass Effect white r=36)
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            flex: 1,
            minHeight: 0,
            padding: "28px",
            gap: "16px",
            borderRadius: "36px",
            overflow: "hidden"
        },
        className: "jsx-88de419ba8a49d4" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col figma-nine-slice", panelClass) || ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gap: "12px",
                    flexShrink: 0
                },
                className: "jsx-88de419ba8a49d4" + " " + "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            gap: "20.6px"
                        },
                        className: "jsx-88de419ba8a49d4" + " " + "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "Inter",
                                    fontSize: "17px",
                                    fontWeight: 500,
                                    lineHeight: "19px",
                                    color: "#5F5E5E"
                                },
                                className: "jsx-88de419ba8a49d4" + " " + "home-feature-section-text",
                                children: sectionNum
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/feature-section.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "Inter",
                                    fontSize: "17px",
                                    fontWeight: 500,
                                    lineHeight: "19px",
                                    color: "#5F5E5E"
                                },
                                className: "jsx-88de419ba8a49d4" + " " + "home-feature-section-text",
                                children: sectionName
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/feature-section.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/feature-section.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: "1px",
                            backgroundColor: "#929090",
                            flexShrink: 0
                        },
                        className: "jsx-88de419ba8a49d4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/feature-section.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/feature-section.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: shouldUseSlotLayout ? {
                    gridTemplateRows: "repeat(".concat(slotRows, ", minmax(0, 1fr))"),
                    gap: "16px",
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden"
                } : {
                    gap: "16px",
                    flex: 1,
                    overflowY: "auto",
                    minHeight: 0
                },
                className: "jsx-88de419ba8a49d4" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(shouldUseSlotLayout ? "grid" : "flex flex-col") || ""),
                children: displayedFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minHeight: 0,
                            display: shouldUseSlotLayout ? "flex" : "block"
                        },
                        className: "jsx-88de419ba8a49d4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$feature$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: feature.title,
                            description: feature.description,
                            icon: feature.icon,
                            selectedIcon: feature.selectedIcon,
                            variant: feature.variant || "glass",
                            isSelected: !feature.disabled && selectedId === feature.id,
                            onClick: ()=>handleCardClick(feature),
                            sectionType: sectionType,
                            locked: feature.locked,
                            disabled: feature.disabled
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/feature-section.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, feature.id, false, {
                        fileName: "[project]/src/components/home/feature-section.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/home/feature-section.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "88de419ba8a49d4",
                children: ""
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/feature-section.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this));
}
_c = FeatureSection;
var _c;
__turbopack_context__.k.register(_c, "FeatureSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/hero-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroPanel(param) {
    let { title, description, imageUrl, videoUrl, serviceId } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isDisabled = serviceId === "6";
    const getSimulationPath = ()=>{
        if (serviceId === "4") return "/ats/simulation";
        if (serviceId === "5") return "/tsi";
        return "/simulation";
    };
    const handleNewSimulation = ()=>{
        if (!isDisabled) {
            router.push(getSimulationPath());
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            gap: "clamp(20px, 4%, 288px)",
            alignItems: "flex-start",
            flexWrap: "wrap"
        },
        className: "jsx-c9554552126e553a" + " " + "flex w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gap: "clamp(20px, 6%, 72px)",
                    flex: "1 1 350px",
                    minWidth: 0
                },
                className: "jsx-c9554552126e553a" + " " + "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            gap: "21.99px"
                        },
                        className: "jsx-c9554552126e553a" + " " + "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "Poppins",
                                    fontSize: "clamp(28px, 3.5vw, 50px)",
                                    fontWeight: 600,
                                    lineHeight: "1.1",
                                    letterSpacing: "-0.06em",
                                    color: "#111111",
                                    margin: 0
                                },
                                className: "jsx-c9554552126e553a" + " " + "home-hero-title",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/hero-panel.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "Inter",
                                    fontSize: "clamp(15px, 1.4vw, 20px)",
                                    fontWeight: 400,
                                    lineHeight: "1.4",
                                    letterSpacing: "-0.02em",
                                    color: "#484646",
                                    margin: 0
                                },
                                className: "jsx-c9554552126e553a" + " " + "home-hero-desc",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/hero-panel.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/hero-panel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNewSimulation,
                        disabled: isDisabled,
                        style: {
                            width: "218px",
                            height: "48px",
                            backgroundColor: isDisabled ? "#CCCCCC" : "#FF6B00",
                            borderRadius: "32px",
                            paddingLeft: "28px",
                            paddingRight: "24px",
                            paddingTop: "6px",
                            paddingBottom: "6px",
                            gap: "8px",
                            border: "none",
                            cursor: isDisabled ? "not-allowed" : "pointer",
                            flexShrink: 0
                        },
                        className: "jsx-c9554552126e553a" + " " + "flex items-center justify-center transition-opacity hover:opacity-90 active:opacity-80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "Inter",
                                    fontSize: "19.5px",
                                    fontWeight: 600,
                                    lineHeight: "100%",
                                    letterSpacing: "-0.585px",
                                    color: "#FFFFFF",
                                    whiteSpace: "nowrap"
                                },
                                className: "jsx-c9554552126e553a" + " " + "home-hero-btn-text",
                                children: "New Simulation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/hero-panel.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "21",
                                height: "21",
                                viewBox: "0 0 21 21",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: {
                                    flexShrink: 0
                                },
                                className: "jsx-c9554552126e553a" + " " + "home-hero-btn-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4.5 10.5H16.5M16.5 10.5L11.5 5.5M16.5 10.5L11.5 15.5",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "jsx-c9554552126e553a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/hero-panel.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/hero-panel.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/hero-panel.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/hero-panel.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: "1 1 400px",
                    maxWidth: "675px",
                    aspectRatio: "675 / 400",
                    borderRadius: "24px"
                },
                className: "jsx-c9554552126e553a" + " " + "overflow-hidden bg-black",
                children: videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: videoUrl,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    className: "jsx-c9554552126e553a" + " " + "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/hero-panel.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: title,
                    width: 675,
                    height: 400,
                    className: "w-full h-full object-cover",
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/home/hero-panel.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/hero-panel.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c9554552126e553a",
                children: ""
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/hero-panel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(HeroPanel, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeroPanel;
var _c;
__turbopack_context__.k.register(_c, "HeroPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/package-video-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageVideoPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PackageVideoPanel(param) {
    let { title, description, videoUrl, videoStartOffsetSeconds, videoPlaybackRate = 0.7, videoScale = 1, videoReverseLoop = false } = param;
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAppliedStartOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const reverseAnimationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reverseLastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isReversingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PackageVideoPanel.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) {
                return;
            }
            hasAppliedStartOffsetRef.current = false;
            const stopReverseAnimation = {
                "PackageVideoPanel.useEffect.stopReverseAnimation": ()=>{
                    if (reverseAnimationFrameRef.current !== null) {
                        cancelAnimationFrame(reverseAnimationFrameRef.current);
                        reverseAnimationFrameRef.current = null;
                    }
                    reverseLastTimestampRef.current = null;
                    isReversingRef.current = false;
                }
            }["PackageVideoPanel.useEffect.stopReverseAnimation"];
            const startForwardPlayback = {
                "PackageVideoPanel.useEffect.startForwardPlayback": ()=>{
                    stopReverseAnimation();
                    video.playbackRate = videoPlaybackRate;
                    void video.play();
                }
            }["PackageVideoPanel.useEffect.startForwardPlayback"];
            const runReversePlayback = {
                "PackageVideoPanel.useEffect.runReversePlayback": (timestamp)=>{
                    if (!isReversingRef.current) {
                        return;
                    }
                    if (reverseLastTimestampRef.current === null) {
                        reverseLastTimestampRef.current = timestamp;
                    }
                    const deltaSeconds = (timestamp - reverseLastTimestampRef.current) / 1000;
                    reverseLastTimestampRef.current = timestamp;
                    const nextTime = video.currentTime - deltaSeconds * Math.abs(videoPlaybackRate);
                    if (nextTime <= 0) {
                        video.currentTime = 0;
                        startForwardPlayback();
                        return;
                    }
                    video.currentTime = nextTime;
                    reverseAnimationFrameRef.current = requestAnimationFrame(runReversePlayback);
                }
            }["PackageVideoPanel.useEffect.runReversePlayback"];
            const startReversePlayback = {
                "PackageVideoPanel.useEffect.startReversePlayback": ()=>{
                    if (!videoReverseLoop || isReversingRef.current) {
                        return;
                    }
                    video.pause();
                    isReversingRef.current = true;
                    reverseLastTimestampRef.current = null;
                    reverseAnimationFrameRef.current = requestAnimationFrame(runReversePlayback);
                }
            }["PackageVideoPanel.useEffect.startReversePlayback"];
            const applyPlaybackConfig = {
                "PackageVideoPanel.useEffect.applyPlaybackConfig": ()=>{
                    video.playbackRate = videoPlaybackRate;
                    if (!hasAppliedStartOffsetRef.current && typeof videoStartOffsetSeconds === "number" && videoStartOffsetSeconds > 0 && Number.isFinite(video.duration)) {
                        const maxStart = Math.max(0, video.duration - 0.1);
                        video.currentTime = Math.min(videoStartOffsetSeconds, maxStart);
                        hasAppliedStartOffsetRef.current = true;
                    }
                }
            }["PackageVideoPanel.useEffect.applyPlaybackConfig"];
            const handleTimeUpdate = {
                "PackageVideoPanel.useEffect.handleTimeUpdate": ()=>{
                    if (!videoReverseLoop || !Number.isFinite(video.duration)) {
                        return;
                    }
                    if (video.currentTime >= video.duration - 0.05) {
                        startReversePlayback();
                    }
                }
            }["PackageVideoPanel.useEffect.handleTimeUpdate"];
            applyPlaybackConfig();
            video.addEventListener("loadedmetadata", applyPlaybackConfig);
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("ended", startReversePlayback);
            return ({
                "PackageVideoPanel.useEffect": ()=>{
                    video.removeEventListener("loadedmetadata", applyPlaybackConfig);
                    video.removeEventListener("timeupdate", handleTimeUpdate);
                    video.removeEventListener("ended", startReversePlayback);
                    stopReverseAnimation();
                }
            })["PackageVideoPanel.useEffect"];
        }
    }["PackageVideoPanel.useEffect"], [
        videoUrl,
        videoPlaybackRate,
        videoStartOffsetSeconds,
        videoReverseLoop
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderRadius: "24px",
            backgroundColor: "#000"
        },
        className: "jsx-a53a879e1b89ad0f" + " " + "relative flex flex-col w-full h-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: videoUrl,
                autoPlay: true,
                loop: !videoReverseLoop,
                muted: true,
                playsInline: true,
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(".concat(videoScale, ")"),
                    transformOrigin: "center center"
                },
                className: "jsx-a53a879e1b89ad0f" + " " + "absolute inset-0 h-full w-full object-cover object-center"
            }, void 0, false, {
                fileName: "[project]/src/components/home/package-video-panel.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                    width: "100%",
                    padding: "40px",
                    gap: "16px"
                },
                className: "jsx-a53a879e1b89ad0f" + " " + "relative z-10 flex flex-col items-start justify-start p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: "Poppins",
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 600,
                            lineHeight: "1.1",
                            letterSpacing: "-0.02em",
                            color: "#FFFFFF",
                            margin: 0,
                            maxWidth: "80%",
                            textShadow: "0px 2px 4px rgba(0,0,0,0.3)"
                        },
                        className: "jsx-a53a879e1b89ad0f" + " " + "home-package-video-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/package-video-panel.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "Inter",
                            fontSize: "clamp(16px, 1.5vw, 20px)",
                            fontWeight: 400,
                            lineHeight: "1.65",
                            color: "rgba(255, 255, 255, 0.9)",
                            margin: 0,
                            maxWidth: "600px",
                            textShadow: "0px 1px 2px rgba(0,0,0,0.3)"
                        },
                        className: "jsx-a53a879e1b89ad0f" + " " + "home-package-video-desc",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/package-video-panel.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/package-video-panel.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a53a879e1b89ad0f",
                children: ""
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/package-video-panel.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(PackageVideoPanel, "Yqxx2/oOHA37HQHbXXySGy5xqxI=");
_c = PackageVideoPanel;
var _c;
__turbopack_context__.k.register(_c, "PackageVideoPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/simulation-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulationSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
"use client";
;
;
function SimulationSearch(param) {
    let { value, onChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "min(408px, 100%)",
            height: "48px",
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "12px",
            paddingBottom: "12px",
            gap: "10.24px",
            flexShrink: 0
        },
        className: "jsx-c947ce3bc95ea952" + " " + "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "23",
                height: "23",
                viewBox: "0 0 23 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    flexShrink: 0
                },
                className: "jsx-c947ce3bc95ea952" + " " + "home-simulation-search-icon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "10",
                        r: "6.5",
                        stroke: "#929090",
                        strokeWidth: "1.8",
                        className: "jsx-c947ce3bc95ea952"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/simulation-search.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 15L20 20",
                        stroke: "#929090",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        className: "jsx-c947ce3bc95ea952"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/simulation-search.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/simulation-search.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: "Search",
                style: {
                    fontFamily: "Inter",
                    fontSize: "19.5px",
                    fontWeight: 600,
                    lineHeight: "100%",
                    letterSpacing: "-0.585px",
                    color: "#929090",
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    outline: "none"
                },
                className: "jsx-c947ce3bc95ea952" + " " + "home-simulation-search-text"
            }, void 0, false, {
                fileName: "[project]/src/components/home/simulation-search.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c947ce3bc95ea952",
                children: ""
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/simulation-search.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SimulationSearch;
var _c;
__turbopack_context__.k.register(_c, "SimulationSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/simulation-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulationTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MOCK_SIMULATIONS = [
    {
        id: "sim-001",
        simulationName: "ATS Cohort A Dose Sweep",
        disease: "NSCLC",
        outcome: "+18% ORR",
        description: "Dose escalation with biomarker-positive subgroup",
        lastUpdated: "2026-02-12"
    },
    {
        id: "sim-002",
        simulationName: "ATS Safety Window v2",
        disease: "AML",
        outcome: "DLT -9%",
        description: "Safety boundary optimization for cycle-1 toxicity",
        lastUpdated: "2026-02-13"
    },
    {
        id: "sim-003",
        simulationName: "Adaptive Interim Rule-3",
        disease: "Breast Cancer",
        outcome: "Power 82%",
        description: "Interim stopping rule tuning for futility",
        lastUpdated: "2026-02-13"
    },
    {
        id: "sim-004",
        simulationName: "Subgroup Response Alpha",
        disease: "RA",
        outcome: "+11% ACR50",
        description: "Responder enrichment by baseline CRP",
        lastUpdated: "2026-02-14"
    },
    {
        id: "sim-005",
        simulationName: "ATS Enrollment Stress",
        disease: "IBD",
        outcome: "Timeline -6w",
        description: "Enrollment volatility and site-mix simulation",
        lastUpdated: "2026-02-14"
    },
    {
        id: "sim-006",
        simulationName: "Twin Predict ARM-B",
        disease: "HCC",
        outcome: "HR 0.78",
        description: "Historical control blending for ARM-B",
        lastUpdated: "2026-02-15"
    },
    {
        id: "sim-007",
        simulationName: "Protocol Drift Guard",
        disease: "SLE",
        outcome: "Bias -14%",
        description: "Protocol deviation sensitivity analysis",
        lastUpdated: "2026-02-15"
    },
    {
        id: "sim-008",
        simulationName: "Dropout Robustness Set",
        disease: "COPD",
        outcome: "Power 79%",
        description: "MNAR dropout correction scenario",
        lastUpdated: "2026-02-16"
    },
    {
        id: "sim-009",
        simulationName: "Dose Frequency Beta",
        disease: "Psoriasis",
        outcome: "+9% PASI90",
        description: "Q2W vs Q4W exposure-response comparison",
        lastUpdated: "2026-02-16"
    },
    {
        id: "sim-010",
        simulationName: "ATS Site Quality Mix",
        disease: "Melanoma",
        outcome: "SDV -22%",
        description: "Site quality weighted randomization impact",
        lastUpdated: "2026-02-16"
    },
    {
        id: "sim-011",
        simulationName: "Event Accrual Predictor",
        disease: "mCRC",
        outcome: "Readout -5w",
        description: "Event accrual acceleration under adaptive design",
        lastUpdated: "2026-02-17"
    },
    {
        id: "sim-012",
        simulationName: "Synthetic Arm Gamma",
        disease: "Glioblastoma",
        outcome: "HR 0.83",
        description: "Synthetic control arm calibration by age strata",
        lastUpdated: "2026-02-17"
    },
    {
        id: "sim-013",
        simulationName: "Stage Shift Scenario",
        disease: "Pancreatic",
        outcome: "+7% PFS",
        description: "Stage migration effect on progression curves",
        lastUpdated: "2026-02-18"
    },
    {
        id: "sim-014",
        simulationName: "Adaptive Randomization R1",
        disease: "Ovarian",
        outcome: "+13% ORR",
        description: "Response-adaptive randomization trial run",
        lastUpdated: "2026-02-18"
    },
    {
        id: "sim-015",
        simulationName: "Bayesian Borrowing Delta",
        disease: "DLBCL",
        outcome: "Posterior 0.91",
        description: "Borrowing intensity tuning from external cohort",
        lastUpdated: "2026-02-19"
    },
    {
        id: "sim-016",
        simulationName: "Eligibility Relaxation Test",
        disease: "UC",
        outcome: "Enroll +21%",
        description: "Inclusion criterion relaxation what-if",
        lastUpdated: "2026-02-19"
    },
    {
        id: "sim-017",
        simulationName: "Biomarker Cutoff 0.35",
        disease: "TNBC",
        outcome: "AUC 0.84",
        description: "Predictive cutoff optimization for stratification",
        lastUpdated: "2026-02-20"
    },
    {
        id: "sim-018",
        simulationName: "Covariate Drift Monitor",
        disease: "Atopic Derm.",
        outcome: "Bias -8%",
        description: "Temporal covariate drift stress simulation",
        lastUpdated: "2026-02-20"
    },
    {
        id: "sim-019",
        simulationName: "Adaptive Futility Rule",
        disease: "Parkinson's",
        outcome: "Cost -12%",
        description: "Early futility stop with preserved power",
        lastUpdated: "2026-02-21"
    },
    {
        id: "sim-020",
        simulationName: "Endpoint Robustness E2",
        disease: "NASH",
        outcome: "CV 0.17",
        description: "Primary endpoint robustness under noise",
        lastUpdated: "2026-02-21"
    }
];
function SimulationTable(param) {
    let { serviceId, searchQuery } = param;
    _s();
    const isATSorTSI = serviceId === "4" || serviceId === "5";
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_SIMULATIONS);
    const columns = isATSorTSI ? [
        {
            label: "",
            flex: 54
        },
        {
            label: "Simulation name",
            flex: 145
        },
        {
            label: "Disease",
            flex: 165
        },
        {
            label: "Outcome",
            flex: 140
        },
        {
            label: "Description",
            flex: 283
        },
        {
            label: "Last updated",
            flex: 161
        },
        {
            label: "",
            flex: 54
        }
    ] : [
        {
            label: "",
            flex: 54
        },
        {
            label: "Patient ID",
            flex: 145
        },
        {
            label: "Disease",
            flex: 165
        },
        {
            label: "Outcome",
            flex: 140
        },
        {
            label: "Description",
            flex: 283
        },
        {
            label: "Last updated",
            flex: 161
        },
        {
            label: "",
            flex: 54
        }
    ];
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationTable.useMemo[filteredRows]": ()=>rows.filter({
                "SimulationTable.useMemo[filteredRows]": (row)=>{
                    if (!normalizedQuery) {
                        return true;
                    }
                    return row.simulationName.toLowerCase().includes(normalizedQuery) || row.disease.toLowerCase().includes(normalizedQuery) || row.outcome.toLowerCase().includes(normalizedQuery) || row.description.toLowerCase().includes(normalizedQuery) || row.lastUpdated.toLowerCase().includes(normalizedQuery);
                }
            }["SimulationTable.useMemo[filteredRows]"])
    }["SimulationTable.useMemo[filteredRows]"], [
        rows,
        normalizedQuery
    ]);
    const moveRow = (id, direction)=>{
        setRows((prev)=>{
            const index = prev.findIndex((row)=>row.id === id);
            if (index === -1) {
                return prev;
            }
            const targetIndex = direction === "up" ? index - 1 : index + 1;
            if (targetIndex < 0 || targetIndex >= prev.length) {
                return prev;
            }
            const next = [
                ...prev
            ];
            [next[index], next[targetIndex]] = [
                next[targetIndex],
                next[index]
            ];
            return next;
        });
    };
    const deleteRow = (id)=>{
        setRows((prev)=>prev.filter((row)=>row.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            gap: "12px",
            flex: 1,
            minHeight: 0
        },
        className: "jsx-7360db7849c3891b" + " " + "flex flex-col w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "41px",
                    backgroundColor: "#000000",
                    borderRadius: "24px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    flexShrink: 0,
                    overflow: "hidden"
                },
                className: "jsx-7360db7849c3891b" + " " + "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        gap: "16px",
                        width: "100%"
                    },
                    className: "jsx-7360db7849c3891b" + " " + "flex items-center",
                    children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "Inter",
                                fontSize: "13px",
                                fontWeight: 600,
                                lineHeight: "17px",
                                letterSpacing: "-0.3px",
                                color: "#FFFFFF",
                                flex: "".concat(col.flex, " 1 0px"),
                                minWidth: 0,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            },
                            className: "jsx-7360db7849c3891b" + " " + "home-simulation-table-header-text",
                            children: col.label
                        }, col.label, false, {
                            fileName: "[project]/src/components/home/simulation-table.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/simulation-table.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/simulation-table.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "24px",
                    minHeight: "394px",
                    flex: 1,
                    padding: "10px 8px",
                    overflowY: "auto"
                },
                className: "jsx-7360db7849c3891b" + " " + "w-full",
                children: filteredRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-7360db7849c3891b" + " " + "flex h-full min-h-[360px] items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "Inter",
                            fontSize: "19.5px",
                            fontWeight: 600,
                            lineHeight: "100%",
                            letterSpacing: "-0.585px",
                            color: "#C6C5C9"
                        },
                        className: "jsx-7360db7849c3891b" + " " + "home-simulation-table-empty-text",
                        children: normalizedQuery ? "No matching simulations." : "No saved simulations."
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/simulation-table.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/simulation-table.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        gap: "8px"
                    },
                    className: "jsx-7360db7849c3891b" + " " + "flex flex-col",
                    children: filteredRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "linear-gradient(180deg, rgba(250,250,250,0.95) 0%, rgba(245,245,245,0.92) 100%)",
                                border: "1px solid rgba(225,225,225,0.9)",
                                borderRadius: "16px",
                                minHeight: "52px",
                                padding: "8px 14px",
                                gap: "16px"
                            },
                            className: "jsx-7360db7849c3891b" + " " + "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: "54 1 0px",
                                        minWidth: 0
                                    },
                                    className: "jsx-7360db7849c3891b" + " " + "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gap: "2px"
                                        },
                                        className: "jsx-7360db7849c3891b" + " " + "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>moveRow(row.id, "up"),
                                                "aria-label": "Move up",
                                                style: {
                                                    width: "18px",
                                                    height: "16px",
                                                    border: "none",
                                                    background: "transparent",
                                                    color: "#6F6F6F",
                                                    cursor: "pointer",
                                                    lineHeight: 1
                                                },
                                                className: "jsx-7360db7849c3891b",
                                                children: "▲"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/simulation-table.tsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>moveRow(row.id, "down"),
                                                "aria-label": "Move down",
                                                style: {
                                                    width: "18px",
                                                    height: "16px",
                                                    border: "none",
                                                    background: "transparent",
                                                    color: "#6F6F6F",
                                                    cursor: "pointer",
                                                    lineHeight: 1
                                                },
                                                className: "jsx-7360db7849c3891b",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/simulation-table.tsx",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/simulation-table.tsx",
                                        lineNumber: 217,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: "145 1 0px",
                                        minWidth: 0,
                                        fontFamily: "Inter",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: "#202020",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    className: "jsx-7360db7849c3891b",
                                    children: row.simulationName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: "165 1 0px",
                                        minWidth: 0,
                                        fontFamily: "Inter",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: "#3F3F3F",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    className: "jsx-7360db7849c3891b",
                                    children: row.disease
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 256,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: "140 1 0px",
                                        minWidth: 0,
                                        fontFamily: "Inter",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: "#2E3F68",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    className: "jsx-7360db7849c3891b",
                                    children: row.outcome
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: "283 1 0px",
                                        minWidth: 0,
                                        fontFamily: "Inter",
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "#5B5B5B",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    className: "jsx-7360db7849c3891b",
                                    children: row.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: "161 1 0px",
                                        minWidth: 0,
                                        fontFamily: "Inter",
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "#6B6B6B",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    className: "jsx-7360db7849c3891b",
                                    children: row.lastUpdated
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: "54 1 0px",
                                        minWidth: 0
                                    },
                                    className: "jsx-7360db7849c3891b" + " " + "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>deleteRow(row.id),
                                        "aria-label": "Delete row",
                                        style: {
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
                                            justifyContent: "center"
                                        },
                                        className: "jsx-7360db7849c3891b",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/simulation-table.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/simulation-table.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, row.id, true, {
                            fileName: "[project]/src/components/home/simulation-table.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/simulation-table.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/simulation-table.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7360db7849c3891b",
                children: ""
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/simulation-table.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(SimulationTable, "XYPbvPRzeXtSWMj22asUZNiYv5I=");
_c = SimulationTable;
var _c;
__turbopack_context__.k.register(_c, "SimulationTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/homeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHomeStore",
    ()=>useHomeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const initialState = {
    selectedPackageId: "1",
    selectedServiceId: null
};
const useHomeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        ...initialState,
        setSelectedPackageId: (packageId)=>set({
                selectedPackageId: packageId
            }),
        setSelectedServiceId: (serviceId)=>set({
                selectedServiceId: serviceId
            }),
        reset: ()=>set(initialState)
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$feature$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/feature-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$hero$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/hero-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$package$2d$video$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/package-video-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$simulation$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/simulation-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$simulation$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/simulation-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/homeStore.ts [app-client] (ecmascript)");
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
const packages = [
    {
        id: "1",
        title: "Twin Predict",
        description: "Simulates individual patient outcomes under various treatment conditions. Offers tailored response probabilities and treatment recommendations for clinical decision-making.",
        icon: "/assets/icons/twin-predict.svg",
        selectedIcon: "/assets/icons/twin-predict-selected.svg",
        services: [
            {
                id: "7",
                title: "Patient Outcome Prediction",
                description: "Simulates individual patient outcomes under various treatment conditions. Offers tailored response probabilities and treatment recommendations for clinical decision-making.",
                icon: "/assets/icons/twin-predict.svg",
                variant: "glass",
                selectedIcon: "/assets/icons/twin-predict-selected.svg",
                locked: true,
                disabled: true
            }
        ]
    },
    {
        id: "2",
        title: "Trial Optimizer",
        description: "Generates optimal clinical trial design strategies through repeated simulations across diverse trial design conditions.",
        icon: "/assets/icons/trial-optimizer.svg",
        selectedIcon: "/assets/icons/trial-optimizer-selected.svg",
        services: [
            {
                id: "4",
                title: "Adaptive Trial Simulation",
                description: "Generates optimal clinical trial design strategies through repeated simulations across diverse trial design conditions.",
                icon: "/assets/icons/adaptive-trial.svg",
                selectedIcon: "/assets/icons/adaptive-trial-selected.svg",
                variant: "glass"
            },
            {
                id: "5",
                title: "Target Subgroup Identification",
                description: "Simulates individual patient outcomes under various treatment conditions. Offers tailored response probabilities and treatment recommendations for clinical decision-making.",
                icon: "/assets/icons/target-subgroup.svg",
                variant: "glass"
            },
            {
                id: "6",
                title: "Drug Response Prediction Dashboard",
                description: "Supports early trial design by identifying target subgroups and simulating different scenarios. Helps sponsors reduce sample size, optimize power, and refine study strategies.",
                icon: "/assets/icons/drug-response.svg",
                selectedIcon: "/assets/icons/drug-response-selected.svg",
                variant: "glass"
            }
        ]
    },
    {
        id: "3",
        title: "Virtual Control",
        description: "Supports early trial design by identifying target subgroups and simulating different scenarios. Helps sponsors reduce sample size, optimize power, and refine study strategies.",
        icon: "/assets/icons/virtual-control.svg",
        selectedIcon: "/assets/icons/virtual-control-selected.svg",
        services: [
            {
                id: "8",
                title: "Synthetic Control Arm",
                description: "Generates a synthetic control group based on historical data to compare with the experimental arm, reducing the need for placebo patients.",
                icon: "/assets/icons/virtual-control.svg",
                variant: "glass",
                selectedIcon: "/assets/icons/virtual-control-selected.svg",
                locked: true,
                disabled: true
            },
            {
                id: "9",
                title: "Historical Data Analysis",
                description: "Analyzes historical clinical trial data to inform current study design and predict potential outcomes.",
                icon: "/assets/icons/virtual-control.svg",
                variant: "glass",
                selectedIcon: "/assets/icons/virtual-control-selected.svg",
                locked: true,
                disabled: true
            }
        ]
    }
];
const serviceContentMap = {
    "4": {
        title: "Adaptive Trial\nSimulation",
        description: "Generates optimal clinical trial design strategies through repeated simulations across diverse trial design conditions.",
        imageUrl: "/assets/main/adaptive-trial.png",
        videoUrl: "https://pub-797907feee5143c4a0f4f34c25916ee8.r2.dev/oprimed_movie/KakaoTalk_20260212_213739053.mp4"
    },
    "5": {
        title: "Target Subgroup\nIdentification",
        description: "Simulates individual patient outcomes under various treatment conditions. Offers tailored response probabilities and treatment recommendations for clinical decision-making.",
        imageUrl: "/assets/main/target-subgroup-identification.png"
    },
    "6": {
        title: "Conditional Drug\nResponse Prediction",
        description: "Drug level simulation based on patient baseline information and Simulation Settings, with support for multiple conditions per scenario",
        imageUrl: "/assets/main/conditional-drug.png"
    },
    "7": {
        title: "Patient Outcome\nPrediction",
        description: "Simulates individual patient outcomes under various treatment conditions. Offers tailored response probabilities and treatment recommendations for clinical decision-making.",
        imageUrl: "/assets/main/adaptive-trial.png"
    },
    "8": {
        title: "Synthetic Control\nArm",
        description: "Generates a synthetic control group based on historical data to compare with the experimental arm, reducing the need for placebo patients.",
        imageUrl: "/assets/main/target-subgroup-identification.png"
    },
    "9": {
        title: "Historical Data\nAnalysis",
        description: "Analyzes historical clinical trial data to inform current study design and predict potential outcomes.",
        imageUrl: "/assets/main/conditional-drug.png"
    }
};
const packageContentMap = {
    "1": {
        title: "Twin Predict",
        description: "Simulates individual patient outcomes under various treatment conditions. Offers tailored response probabilities and treatment recommendations for clinical decision-making.",
        imageUrl: "",
        videoUrl: "https://pub-797907feee5143c4a0f4f34c25916ee8.r2.dev/oprimed_movie/2-to.mp4",
        videoStartOffsetSeconds: 3,
        videoPlaybackRate: 0.8,
        videoScale: 1.08
    },
    "2": {
        title: "Trial Optimizer",
        description: "Generates optimal clinical trial design strategies through repeated simulations across diverse trial design conditions.",
        imageUrl: "",
        videoUrl: "https://pub-797907feee5143c4a0f4f34c25916ee8.r2.dev/oprimed_movie/1-tp.mp4",
        videoStartOffsetSeconds: 1,
        videoPlaybackRate: 0.8,
        videoScale: 1.24,
        videoReverseLoop: true
    },
    "3": {
        title: "Virtual Control",
        description: "Supports early trial design by identifying target subgroups and simulating different scenarios. Helps sponsors reduce sample size, optimize power, and refine study strategies.",
        imageUrl: "",
        videoUrl: "https://pub-797907feee5143c4a0f4f34c25916ee8.r2.dev/oprimed_movie/3-vc.mp4"
    }
};
function HomePage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { selectedPackageId, selectedServiceId, setSelectedPackageId, setSelectedServiceId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomeStore"])();
    const selectedPackage = packages.find((p)=>p.id === selectedPackageId);
    const availableServices = (selectedPackage === null || selectedPackage === void 0 ? void 0 : selectedPackage.services) || [];
    const rightPanelContent = selectedServiceId && serviceContentMap[selectedServiceId] ? serviceContentMap[selectedServiceId] : null;
    const handlePackageSelect = (packageId)=>{
        if (packageId === selectedPackageId) {
            return;
        }
        setSelectedPackageId(packageId);
        setSelectedServiceId(null);
    };
    const handleServiceSelect = (serviceId)=>{
        const newServiceId = serviceId === selectedServiceId ? null : serviceId;
        setSelectedServiceId(newServiceId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                gap: "1.986px",
                width: "100%",
                flex: 1,
                /* 부모(main) flex-1로 100% 높이 */ alignItems: "stretch",
                minHeight: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: "470 1 0",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0,
                        minWidth: "250px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$feature$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "01 Package",
                        features: packages.map((pkg)=>({
                                id: pkg.id,
                                title: pkg.title,
                                description: pkg.description,
                                icon: pkg.icon,
                                selectedIcon: pkg.selectedIcon,
                                locked: pkg.id === "1" || pkg.id === "3"
                            })),
                        selectedId: selectedPackageId,
                        onSelect: handlePackageSelect,
                        slotRows: packages.length,
                        maxVisibleFeatures: packages.length
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: "469 1 0",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0,
                        minWidth: "250px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$feature$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "02 Service",
                        features: availableServices,
                        selectedId: selectedServiceId,
                        onSelect: handleServiceSelect,
                        slotRows: 3,
                        maxVisibleFeatures: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "figma-nine-slice figma-home-panel-right",
                    style: {
                        flex: "1452 1 0",
                        minWidth: "500px",
                        minHeight: 0,
                        display: "flex",
                        flexDirection: "column",
                        padding: "28px",
                        borderRadius: "36px",
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "21px",
                            flex: 1,
                            overflowY: "auto",
                            minHeight: 0
                        },
                        children: rightPanelContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$hero$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: rightPanelContent.title,
                                    description: rightPanelContent.description,
                                    imageUrl: rightPanelContent.imageUrl,
                                    videoUrl: rightPanelContent.videoUrl,
                                    serviceId: selectedServiceId
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                        flex: 1,
                                        minHeight: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$simulation$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: searchQuery,
                                            onChange: setSearchQuery
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$simulation$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            serviceId: selectedServiceId,
                                            searchQuery: searchQuery
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : selectedPackageId && packageContentMap[selectedPackageId] ? /* Package 선택 시 (Service 미선택) -> 비디오 패널 표시 (Full height) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                height: "100%",
                                minHeight: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$package$2d$video$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: packageContentMap[selectedPackageId].title,
                                description: packageContentMap[selectedPackageId].description,
                                videoUrl: packageContentMap[selectedPackageId].videoUrl,
                                videoStartOffsetSeconds: packageContentMap[selectedPackageId].videoStartOffsetSeconds,
                                videoPlaybackRate: packageContentMap[selectedPackageId].videoPlaybackRate,
                                videoScale: packageContentMap[selectedPackageId].videoScale,
                                videoReverseLoop: packageContentMap[selectedPackageId].videoReverseLoop
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 329,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%"
                            },
                            className: "jsx-5ebbb62fc79c459e",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "Inter",
                                        fontSize: "19.5px",
                                        fontWeight: 600,
                                        color: "#828993",
                                        letterSpacing: "-0.585px"
                                    },
                                    className: "jsx-5ebbb62fc79c459e" + " " + "home-empty-guide-text",
                                    children: selectedPackageId ? "Service를 선택해주세요." : "Package를 선택해주세요."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "5ebbb62fc79c459e",
                                    children: ""
                                }, void 0, false, void 0, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 341,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 241,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s(HomePage, "1dUHRlLxC2D8l+zD+oP1RJaMS6k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomeStore"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9db8ee5c._.js.map