import { ArrowBigUp, CornerDownLeft } from "lucide-react";
import React, { useEffect, useRef, useCallback } from "react";

interface AutoResizeTextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  minRows?: number;
  maxRows?: number;
  className?: string;
  showShiftEnterHint?: boolean;
}

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
  placeholder = "Description",
  value = "",
  onChange,
  minRows = 1,
  maxRows = 6,
  className = "",
  showShiftEnterHint = true,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = parseInt(computedStyle.lineHeight || "24", 10);
    const minHeight = minRows * lineHeight;
    const maxHeight = maxRows * lineHeight;
    const newHeight = Math.min(
      Math.max(textarea.scrollHeight, minHeight),
      maxHeight
    );

    textarea.style.height = `${newHeight}px`;
  }, [minRows, maxRows]);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (textareaRef.current) {
        const focusableElements = [
          "button:not([disabled])",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          '[tabindex]:not([tabindex="-1"])',
        ].join(",");

        const allFocusable = Array.from(
          document.querySelectorAll<HTMLElement>(focusableElements)
        ).filter((el) => el.offsetParent !== null);

        const currentIndex = allFocusable.indexOf(textareaRef.current);
        const nextElement = allFocusable[currentIndex + 1];

        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        ref={textareaRef}
        value={value}
        placeholder={placeholder}
        className={`w-full resize-none text-neutral-50 placeholder:text-neutral-600 focus:outline-none hide-scrollbar pr-16 ${className}`}
        onInput={(e) => {
          onChange?.((e.target as HTMLTextAreaElement).value);
          adjustHeight();
        }}
        onKeyDown={handleKeyDown}
        onFocus={adjustHeight}
        onBlur={adjustHeight}
        rows={minRows}
      />
      {showShiftEnterHint && (
        <div className="absolute bottom-4 right-0 flex items-center gap-1 pointer-events-none">
          <span className="text-[10px] text-neutral-400 font-mono flex items-center justify-center gap-1">
            <span className="p-0.5 bg-neutral-50/10 rounded-sm">
              <CornerDownLeft size={12} />
            </span>
            +
            <span className="p-0.5 bg-neutral-50/10 rounded-sm">
              <ArrowBigUp size={12} />
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default AutoResizeTextarea;
