import React from "react";
import { use3DTilt } from "../../hooks/use3DTilt";
import "./Card3D.css";

/**
 * 3D Interactive Tilt Card Component with Specular Glare & Parallax Depth
 */
const Card3D = ({
  children,
  className = "",
  as: Component = "div",
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
  speed = 400,
  glare = true,
  maxGlare = 0.25,
  style = {},
  ...restProps
}) => {
  const { ref, style: tiltStyle, glareStyle, isHovered, onMouseMove, onMouseEnter, onMouseLeave } = use3DTilt({
    maxTilt,
    perspective,
    scale,
    speed,
    glare,
    maxGlare,
  });

  return (
    <Component
      ref={ref}
      className={`card-3d-root ${isHovered ? "is-hovered" : ""} ${className}`}
      style={{
        ...style,
        ...tiltStyle,
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...restProps}
    >
      <div className="card-3d-inner">
        {children}
      </div>

      {glare && (
        <div
          className="card-3d-glare"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </Component>
  );
};

export default Card3D;
