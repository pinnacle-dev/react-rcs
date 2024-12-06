"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.CardCarousel = void 0;
const React = __importStar(require("react"));
const react_select_1 = __importDefault(require("react-select"));
const lucide_react_1 = require("lucide-react");
const CardCarousel = ({ cards, showDevtools = false, }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
    };
    return (React.createElement("div", { className: "relative flex flex-col items-center" },
        React.createElement("div", { className: "min-h-[420px] relative w-full" },
            React.createElement("div", { className: "flex justify-between w-full absolute top-[250px] -translate-y-1/2 px-4 pointer-events-none z-50" },
                React.createElement("button", { onClick: handlePrevious, disabled: currentIndex === 0, className: "bg-ios-gray4-dark p-2 rounded-full disabled:opacity-50 pointer-events-auto -translate-x-2" },
                    React.createElement("svg", { className: "w-6 h-6 text-white", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }))),
                React.createElement("button", { onClick: handleNext, disabled: currentIndex === cards.length - 1, className: "bg-ios-gray4-dark p-2 rounded-full disabled:opacity-50 pointer-events-auto translate-x-2" },
                    React.createElement("svg", { className: "w-6 h-6 text-white", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
            React.createElement("div", { className: "relative flex flex-row items-center justify-center" }, cards.map((card, index) => {
                var _a, _b;
                return (React.createElement("div", { key: index, className: "relative transition-all duration-300 ease-in-out", style: ((_a = card.quickReplies) === null || _a === void 0 ? void 0 : _a.length) || 0 > 0
                        ? {
                            marginLeft: index !== 0 ? `-${350 + index * 6}px` : "0",
                            transform: `scale(${index === currentIndex
                                ? 1
                                : 1 - Math.abs(index - currentIndex) * 0.05}) rotate(${index < currentIndex ? -2 : index > currentIndex ? 2 : 0}deg) translateX(${(index - currentIndex) * 10}px)`,
                            zIndex: cards.length - Math.abs(index - currentIndex),
                        }
                        : {
                            marginLeft: index !== 0 ? `-${390 + index * 6}px` : "0",
                            // marginBottom:
                            //   index !== 0
                            //     ? `${card.quickReplies?.length || 0} * 100px`
                            //     : "0",
                            transform: `scale(${index === currentIndex
                                ? 1
                                : 1 - Math.abs(index - currentIndex) * 0.05}) rotate(${index < currentIndex ? -2 : index > currentIndex ? 2 : 0}deg) translateX(${(index - currentIndex) * 60}px)`,
                            zIndex: cards.length - Math.abs(index - currentIndex),
                        } },
                    index === currentIndex && (React.createElement("div", { className: "absolute -top-4 left-0 dark:text-ios-gray-dark text-ios-caption-2" },
                        React.createElement("div", { className: "flex flex-row items-center gap-1" },
                            React.createElement(lucide_react_1.WalletCards, { width: 12, height: 12 }),
                            React.createElement("p", null,
                                index + 1,
                                " of ",
                                cards.length)))),
                    index !== currentIndex ? (React.createElement("div", { style: {
                            transform: `translateY(${(((_b = cards[currentIndex].quickReplies) === null || _b === void 0 ? void 0 : _b.length) || 0) * -20}px)`,
                        } },
                        React.createElement(exports.Card, Object.assign({}, card, { isCarousel: true, showDevtools: showDevtools, overlayValue: Math.abs(index - currentIndex) * 0.15, quickRepliesHidden: index !== currentIndex })))) : (React.createElement(exports.Card, Object.assign({}, card, { isCarousel: true, showDevtools: showDevtools, overlayValue: Math.abs(index - currentIndex) * 0.15, quickRepliesHidden: index !== currentIndex })))));
            })))));
};
exports.CardCarousel = CardCarousel;
const Card = ({ title = "Default Card Title", subtitle, quickReplies, mediaUrl, options = [], isCarousel = false, quickRepliesHidden, overlayValue = 0, showDevtools = false, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `rounded-2xl dark:bg-ios-gray5-dark max-w-[380px] w-[380px] ${isCarousel ? "h-[380px]" : "h-auto"} flex flex-col items-start justify-center shadow-sm relative ${!mediaUrl ? "border dark:border-ios-gray4-dark" : ""}` },
            React.createElement("div", { className: `absolute inset-0 dark:bg-red-500/${overlayValue} rounded-2xl` }),
            React.createElement("div", { className: "w-full h-full flex flex-col relative z-10 select-none" },
                mediaUrl && (React.createElement("img", { src: mediaUrl, alt: "logo", className: `rounded-t-2xl ${isCarousel ? "flex-1 object-cover min-h-0" : ""}` })),
                React.createElement("div", { className: `px-4 pt-2 pb-2 m-0 flex flex-col justify-center ${!mediaUrl ? "h-full" : ""}` },
                    title && (React.createElement("h3", { className: "font-[500] dark:text-white font-ios-body" }, title)),
                    subtitle && (React.createElement("div", { className: "text-iosBlue text-ios-callout text-ios-gray-dark" }, subtitle))),
                options.length > 0 && (React.createElement(react_select_1.default, { placeholder: "Options", options: options, className: "px-4 pb-3 select-none", menuPlacement: "top", classNames: {
                        control: () => "!bg-ios-gray4-dark !border-none !shadow-none !rounded-xl text-ios-callout w-[350px]",
                        menu: () => "!bg-ios-gray4-dark !border-none !rounded-xl mt-1 z-10",
                        option: (state) => `!bg-ios-gray4-dark ${state.isFocused ? "!bg-ios-gray4-dark" : ""} !text-white border-b !border-ios-gray3-dark last:border-b-0 font-[400]`,
                        singleValue: () => "!text-white",
                        dropdownIndicator: () => "!text-white",
                        indicatorSeparator: () => "hidden",
                        placeholder: () => "!text-white",
                    }, components: {
                        DropdownIndicator: () => (React.createElement("svg", { className: "w-5 h-5 text-ios-gray-dark mr-2", viewBox: "0 0 24 24", fill: "currentColor" },
                            React.createElement("path", { fillRule: "evenodd", d: "M4.293 8.293a1 1 0 011.414 0L12 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z", clipRule: "evenodd" }))),
                    } })))),
        !quickRepliesHidden && quickReplies && quickReplies.length > 0 && (React.createElement("div", { className: `select-none mt-0.5 flex flex-col items-start dark:bg-ios-gray5-dark rounded-2xl px-4 py-3 gap-2 max-w-xs ${options && "mt-1"}` }, quickReplies.map((reply, index) => (React.createElement("div", { key: index, className: "w-full" },
            React.createElement("div", { className: "flex flex-row items-center justify-between" },
                React.createElement("p", { className: "efont-base dark:text-ios-blue-dark text-ios-subhead" }, typeof reply === "string" ? reply : reply.reply),
                showDevtools && typeof reply !== "string" && (React.createElement("p", { className: "text-xs text-ios-gray-dark relative overflow-hidden" },
                    React.createElement("div", { className: "flex flex-row items-center gap-1" },
                        React.createElement(lucide_react_1.Code, { className: "w-4 h-4" }),
                        React.createElement("span", { className: "relative z-10 hover:bg-[rgba(147, 51, 234, 0.3)]" }, reply.payload),
                        React.createElement(lucide_react_1.CodeXml, { className: "w-4 h-4" })),
                    React.createElement("div", { className: "purple-streak absolute inset-0" })))),
            index < quickReplies.length - 1 && (React.createElement("div", { className: "h-[1px] dark:bg-ios-gray4-dark w-full mt-2" })))))))));
};
exports.Card = Card;
