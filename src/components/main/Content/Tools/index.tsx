import { tools } from "@/data/tools";
import React from "react";

const Tools: () => JSX.Element = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8 w-full">
      {tools.map(({ label, nodes }, id) => (
        <div className="flex-1 min-w-[180px]" key={id}>
          <h2 className="font-homeVideo text-zinc-400 text-[13px] tracking-widest uppercase mb-4">
            {label}
          </h2>
          <div className="flex flex-col gap-1">
            {nodes.map(({ toolname, toolcomponent, experience }) => (
              <div
                key={toolname}
                className="flex flex-row items-center gap-3 py-2 border-b border-zinc-800"
              >
                <span className="text-zinc-400">
                  {React.cloneElement(toolcomponent, {
                    size: 16,
                  })}
                </span>
                <span className="font-homeVideo text-zinc-100 text-[13px]">
                  {toolname}
                </span>
                <span className="font-homeVideo text-zinc-500 text-[11px] ml-auto">
                  {experience}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
