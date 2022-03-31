import { useCallback, useEffect, useState } from "react"

export function useHoverPerspective() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const onMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setPosition(e);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [])
  
  return {
    position
  }
}