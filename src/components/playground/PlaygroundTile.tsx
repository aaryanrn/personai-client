import { color } from "framer-motion";
import { ReactNode, useState } from "react";

const titleHeight = 32;

type PlaygroundTileProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  childrenClassName?: string;
  padding?: boolean;
  backgroundColor?: string;
  persona_name?: string;
};

export type PlaygroundTab = {
  title: string;
  content: ReactNode;
};

export type PlaygroundTabbedTileProps = {
  tabs: PlaygroundTab[];
  initialTab?: number;
} & PlaygroundTileProps;

export const PlaygroundTile: React.FC<PlaygroundTileProps> = ({
  children,
  title,
  className,
  childrenClassName,
  padding = true,
  backgroundColor = "transparent",
  persona_name,
}) => {
  const contentPadding = padding ? 4 : 0;
  return (
    <div
      className={`m-1 p-2 flex flex-col border rounded-sm border-gray-800 text-black dark:text-white bg-${backgroundColor} ${className}`}
    >
      {title && (
        <div
          className="font-bold flex items-center justify-center text-lg uppercase py-2 border-b border-b-gray-800 tracking-wider"
          style={{
            height: `${titleHeight}px`,
          }}
        >
          <h2 className="text-black dark:text-white">{persona_name}</h2>
        </div>
      )}
      <div
        className={`flex flex-col items-center grow w-full font-bold !text-black dark:text-white ${childrenClassName}`}
        style={{
          height: `calc(100% - ${title ? titleHeight + "px" : "0px"})`,
          padding: `${contentPadding * 4}px`,
        }}
      >
      {children}
      </div>
    </div>
  );
};

export const PlaygroundTabbedTile: React.FC<PlaygroundTabbedTileProps> = ({
  tabs,
  initialTab = 0,
  className,
  childrenClassName,
  backgroundColor = "transparent",
}) => {
  const contentPadding = 4;
  const [activeTab, setActiveTab] = useState(initialTab);
  if(activeTab >= tabs.length) {
    return null;
  }
  return (
    <div
      className={`flex flex-col h-full border rounded-sm border-gray-800 text-gray-500 bg-${backgroundColor} ${className}`}
    >
      <div
        className="flex items-center justify-start text-xs uppercase border-b border-b-gray-800 tracking-wider"
        style={{
          height: `${titleHeight}px`,
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-sm hover:bg-gray-800 hover:text-gray-300 border-r border-r-gray-800 ${
              index === activeTab
                ? `bg-gray-900 text-gray-300`
                : `bg-transparent text-gray-500`
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className={`w-full ${childrenClassName}`}
        style={{
          height: `calc(100% - ${titleHeight}px)`,
          padding: `${contentPadding * 4}px`,
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
