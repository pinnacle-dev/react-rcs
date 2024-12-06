"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithOptions = exports.WithQuickReplies = exports.WithTitleAndSubtitle = exports.WithTitle = exports.Default = void 0;
const index_1 = require("../index");
const meta = {
    title: "Components/Card",
    component: index_1.Card,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.WithTitle = {
    args: {
        title: "Example Card",
    },
};
exports.WithTitleAndSubtitle = {
    args: {
        title: "Skims Shirt Black",
        subtitle: "It's on sale for the first time ever!",
    },
};
exports.WithQuickReplies = {
    args: {
        mediaUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
        title: "Skims Shirt Black",
        subtitle: "It's on sale for the first time ever!",
        quickReplies: ["Add to Cart", "Share", "Favorite"],
    },
};
exports.WithOptions = {
    args: {
        mediaUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
        title: "Skims Shirt Black",
        subtitle: "It's on sale for the first time ever!",
        quickReplies: ["Add to Cart", "Share", "Favorite"],
        options: [
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
        ],
    },
};
