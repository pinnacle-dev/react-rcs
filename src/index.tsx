import * as React from "react";
import Select from "react-select";
import { WalletCards } from "lucide-react";
export interface CardData {
  title?: string;
  subtitle?: string;
  quickReplies?: { reply: string; payload?: string }[] | string[];
  mediaUrl?: string;
  options?: { value: string; label: string }[];
  isCarousel?: boolean;
  quickRepliesHidden?: boolean;
  overlayValue?: number;
  showDevtools?: boolean;
}

export interface CardCarouselProps {
  cards: CardData[];
  showDevtools?: boolean;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  cards,
  showDevtools = false,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="min-h-[420px] relative w-full">
        <div className="flex justify-between w-full absolute top-[250px] -translate-y-1/2 px-4 pointer-events-none z-50">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-ios-gray4-dark p-2 rounded-full disabled:opacity-50 pointer-events-auto -translate-x-2"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="bg-ios-gray4-dark p-2 rounded-full disabled:opacity-50 pointer-events-auto translate-x-2"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex flex-row items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative transition-all duration-300 ease-in-out"
              style={
                card.quickReplies?.length || 0 > 0
                  ? {
                      marginLeft: index !== 0 ? `-${350 + index * 6}px` : "0",
                      transform: `scale(${
                        index === currentIndex
                          ? 1
                          : 1 - Math.abs(index - currentIndex) * 0.05
                      }) rotate(${
                        index < currentIndex ? -2 : index > currentIndex ? 2 : 0
                      }deg) translateX(${(index - currentIndex) * 10}px)`,
                      zIndex: cards.length - Math.abs(index - currentIndex),
                    }
                  : {
                      marginLeft: index !== 0 ? `-${390 + index * 6}px` : "0",
                      // marginBottom:
                      //   index !== 0
                      //     ? `${card.quickReplies?.length || 0} * 100px`
                      //     : "0",
                      transform: `scale(${
                        index === currentIndex
                          ? 1
                          : 1 - Math.abs(index - currentIndex) * 0.05
                      }) rotate(${
                        index < currentIndex ? -2 : index > currentIndex ? 2 : 0
                      }deg) translateX(${(index - currentIndex) * 60}px)`,
                      zIndex: cards.length - Math.abs(index - currentIndex),
                    }
              }
            >
              {index === currentIndex && (
                <div className="absolute -top-4 left-0 dark:text-ios-gray-dark text-ios-caption-2">
                  <div className="flex flex-row items-center gap-1">
                    <WalletCards width={12} height={12} />
                    <p>
                      {index + 1} of {cards.length}
                    </p>
                  </div>
                </div>
              )}
              {index !== currentIndex ? (
                <div
                  style={{
                    transform: `translateY(${
                      (cards[currentIndex].quickReplies?.length || 0) * -20
                    }px)`,
                  }}
                >
                  <Card
                    {...card}
                    isCarousel={true}
                    showDevtools={showDevtools}
                    overlayValue={Math.abs(index - currentIndex) * 0.15}
                    quickRepliesHidden={index !== currentIndex}
                  />
                </div>
              ) : (
                <Card
                  {...card}
                  isCarousel={true}
                  showDevtools={showDevtools}
                  overlayValue={Math.abs(index - currentIndex) * 0.15}
                  quickRepliesHidden={index !== currentIndex}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card: React.FC<CardData> = ({
  title = "Default Card Title",
  subtitle,
  quickReplies,
  mediaUrl,
  options = [],
  isCarousel = false,
  quickRepliesHidden,
  overlayValue = 0,
  showDevtools = false,
}) => {
  return (
    <>
      <div
        className={`rounded-2xl dark:bg-ios-gray5-dark max-w-[380px] w-[380px] h-${
          isCarousel ? "[380px]" : "auto"
        } flex flex-col items-start justify-center shadow-sm relative ${
          !mediaUrl ? "border dark:border-ios-gray4-dark" : ""
        }`}
      >
        <div
          className={`absolute inset-0 dark:bg-red-500/${overlayValue} rounded-2xl`}
        />

        <div className="w-full h-full flex flex-col relative z-10 select-none">
          {mediaUrl && (
            <img
              src={mediaUrl}
              alt="logo"
              className={`rounded-t-2xl ${
                isCarousel ? "flex-1 object-cover min-h-0" : ""
              }`}
            />
          )}
          <div
            className={`px-4 pt-2 pb-2 m-0 flex flex-col justify-center ${
              !mediaUrl ? "h-full" : ""
            }`}
          >
            {title && (
              <h3 className="font-[500] dark:text-white font-ios-body">
                {title}
              </h3>
            )}
            {subtitle && (
              <div className="text-iosBlue text-ios-callout text-ios-gray-dark">
                {subtitle}
              </div>
            )}
          </div>
          {options.length > 0 && (
            <Select
              placeholder="Options"
              options={options}
              className="px-4 pb-3 select-none"
              menuPlacement="top"
              classNames={{
                control: () =>
                  "!bg-ios-gray4-dark !border-none !shadow-none !rounded-xl text-ios-callout w-[350px]",
                menu: () =>
                  "!bg-ios-gray4-dark !border-none !rounded-xl mt-1 z-10",
                option: (state) =>
                  `!bg-ios-gray4-dark ${
                    state.isFocused ? "!bg-ios-gray4-dark" : ""
                  } !text-white border-b !border-ios-gray3-dark last:border-b-0 font-[400]`,
                singleValue: () => "!text-white",
                dropdownIndicator: () => "!text-white",
                indicatorSeparator: () => "hidden",
                placeholder: () => "!text-white",
              }}
              components={{
                DropdownIndicator: () => (
                  <svg
                    className="w-5 h-5 text-ios-gray-dark mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 8.293a1 1 0 011.414 0L12 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              }}
            />
          )}
        </div>
      </div>
      {!quickRepliesHidden && quickReplies && quickReplies.length > 0 && (
        <div
          className={`select-none mt-0.5 flex flex-col items-start dark:bg-ios-gray5-dark rounded-2xl px-4 py-3 gap-2 max-w-xs ${
            options && "mt-1"
          }`}
        >
          {quickReplies.map((reply, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-row items-center justify-between">
                <p className="efont-base dark:text-ios-blue-dark text-ios-subhead">
                  {typeof reply === "string" ? reply : reply.reply}
                </p>
                {showDevtools && typeof reply !== "string" && (
                  <p className="text-xs text-ios-gray-dark relative overflow-hidden">
                    <span className="relative z-10 hover:bg-[rgba(147, 51, 234, 0.3)]">
                      {reply.payload}
                    </span>
                    <div className="purple-streak absolute inset-0"></div>
                  </p>
                )}
              </div>
              {index < quickReplies.length - 1 && (
                <div className="h-[1px] dark:bg-ios-gray4-dark w-full mt-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
