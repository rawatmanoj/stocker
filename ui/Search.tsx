import { cn } from "@/utils/helper";
import React from "react";

type SearchProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Search({
  placeholder,
  value,
  onChange,
  className,
}: SearchProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={cn(
        "border outline-0 w-full h-14 text-xl pl-3 border-l-0 border-r-0 rounded-r-lg",
        className || ""
      )}
      onChange={onChange}
    />
  );
}
