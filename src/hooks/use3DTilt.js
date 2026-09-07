import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Custom hook for realistic 3D card tilt and specular glare reflection on mouse movement.
 * @param {Object} options Configuration options for 3D tilt behavior.
 * @returns {Object} Card ref, dynamic transform style, glare style, and event handlers.
 */
export const use3DTilt = (options = {}) => {
  const {
    maxTilt = 12,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    glare = true,
    maxGlare = 0.3,
    reverse = false,
    disabled = false,
  } = options;

  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: `transform ${speed}ms ${easing}`,
  });

  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, ${maxGlare}) 0%, rgba(255, 255, 255, 0) 75%)`,
    transition: `opacity ${speed}ms ${easing}`,
  });

  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (disabled || !cardRef.current) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        // Calculate relative position within the card (0 to 1)
        const xPos = (clientX - rect.left) / rect.width;
        const yPos = (clientY - rect.top) / rect.height;

        // Normalize between -1 and 1
        const xOffset = Math.max(-1, Math.min(1, (xPos - 0.5) * 2));
        const yOffset = Math.max(-1, Math.min(1, (yPos - 0.5) * 2));

        const mult = reverse ? -1 : 1;
        const rotX = -(yOffset * maxTilt * mult).toFixed(2);
        const rotY = (xOffset * maxTilt * mult).toFixed(2);

        setTransformStyle({
          transform: `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`,
          transition: "transform 80ms ease-out",
        });

        if (glare) {
          const glareX = Math.round(xPos * 100);
          const glareY = Math.round(yPos * 100);

          setGlareStyle({
            opacity: maxGlare,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${maxGlare}) 0%, rgba(255, 255, 255, 0) 70%)`,
            transition: "opacity 120ms ease-out",
          });
        }
      });
    },
    [disabled, maxTilt, perspective, scale, glare, maxGlare, reverse]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    setIsHovered(true);
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    if (disabled) return;
    setIsHovered(false);

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    setTransformStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms ${easing}`,
    });

    if (glare) {
      setGlareStyle({
        opacity: 0,
        background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, ${maxGlare}) 0%, rgba(255, 255, 255, 0) 75%)`,
        transition: `opacity ${speed}ms ${easing}`,
      });
    }
  }, [disabled, perspective, speed, easing, glare, maxGlare]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    ref: cardRef,
    style: transformStyle,
    glareStyle,
    isHovered,
    bind: {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

export default use3DTilt;
