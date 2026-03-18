import { avatarButtons } from "@/config/buttons";
import { FC } from "react";

interface Props {
  activeOption(value: string): void;
  currentPanel: string;
}

export const PanelSelector: FC<Props> = ({ activeOption, currentPanel }) => {
  return (
    <nav className="flex flex-row gap-10 w-full justify-center border-t border-b border-zinc-800 py-3">
      {avatarButtons.map(({ label, value }) => (
        <button
          key={value}
          className={`font-homeVideo text-[11px] tracking-[0.2em] uppercase transition-colors ${
            currentPanel === value
              ? "text-zinc-100"
              : "text-zinc-600 hover:text-zinc-300"
          }`}
          onClick={() => activeOption(value)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default PanelSelector;
