"use client";
import { useEffect, useState } from "react";
let timeout: ReturnType<typeof setTimeout> | undefined;

export default function useDebounce(value: string, delay: number) {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSearchValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return searchValue;
}
