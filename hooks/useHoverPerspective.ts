import { useCallback, useEffect, useState } from "react"

export function useHoverPerspective() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const onMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setPosition(e);
    /*
      const xRange = (x !== undefined) ? x : 20
      const yRange = (y !== undefined) ? y : 20
      const ax = -(store.state.screen.width / 2 - store.state.screen.mouseX) / xRange
      const ay = (store.state.screen.height / 2 - store.state.screen.mouseY) / yRange
      return {
        transform: `rotateY(${ax}deg) rotateX(${ay}deg) scale(${scale !== undefined ? scale : 1})`
      }
    */
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