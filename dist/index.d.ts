import * as React from "react";
export interface CardData {
    title?: string;
    subtitle?: string;
    quickReplies?: {
        reply: string;
        payload?: string;
    }[] | string[];
    mediaUrl?: string;
    options?: {
        value: string;
        label: string;
    }[];
    isCarousel?: boolean;
    quickRepliesHidden?: boolean;
    overlayValue?: number;
    showDevtools?: boolean;
}
export interface CardCarouselProps {
    cards: CardData[];
    showDevtools?: boolean;
}
export declare const CardCarousel: React.FC<CardCarouselProps>;
export declare const Card: React.FC<CardData>;
