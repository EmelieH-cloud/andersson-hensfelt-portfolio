import PropTypes from "prop-types";
import "./circledecor.css";

function CircleDecor({
  size = 300,
  width,
  height,
  mobileWidth,
  mobileHeight,
  top,
  bottom,
  left,
  right,
  mobileSize,
  mobileTop,
  mobileLeft,
  mobileRight,
  tone = "medium",
  transparency = "medium",
  whiteHalo = false,
  shadow,
  transform,
  zIndex = 0,
  className = ""
}) {

  const style = {
    "--circle-width": typeof (width ?? size) === "number" ? `${width ?? size}px` : (width ?? size),
    "--circle-height": typeof (height ?? size) === "number" ? `${height ?? size}px` : (height ?? size),
    "--circle-top": top,
    "--circle-bottom": bottom,
    "--circle-left": left,
    "--circle-right": right,
    "--circle-mobile-width": typeof (mobileWidth ?? mobileSize) === "number" ? `${mobileWidth ?? mobileSize}px` : (mobileWidth ?? mobileSize),
    "--circle-mobile-height": typeof (mobileHeight ?? mobileSize) === "number" ? `${mobileHeight ?? mobileSize}px` : (mobileHeight ?? mobileSize),
    "--circle-mobile-top": mobileTop,
    "--circle-mobile-left": mobileLeft,
    "--circle-mobile-right": mobileRight,
    boxShadow: shadow,
    transform,
    zIndex
  };

  return (
    <div
      aria-hidden="true"
      className={`circle-decor circle-decor--${tone} circle-decor--transparency-${transparency} ${whiteHalo ? "circle-decor--white-halo" : ""} ${className}`.trim()}
      style={style}
    />
  );
}

CircleDecor.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mobileWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mobileHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  mobileSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mobileTop: PropTypes.string,
  mobileLeft: PropTypes.string,
  mobileRight: PropTypes.string,
  tone: PropTypes.oneOf(["light", "medium", "dark", "surface"]),
  transparency: PropTypes.oneOf(["low", "medium", "high"]),
  whiteHalo: PropTypes.bool,
  shadow: PropTypes.string,
  transform: PropTypes.string,
  zIndex: PropTypes.number,
  className: PropTypes.string
};

export default CircleDecor;
