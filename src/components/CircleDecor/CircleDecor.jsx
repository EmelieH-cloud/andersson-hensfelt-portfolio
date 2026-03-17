import PropTypes from "prop-types";
import "./circledecor.css";

function CircleDecor({
  size = 300,
  top,
  bottom,
  left,
  right,
  opacity = 0.2,
  tone = "medium",
  animation = "float",
  speed = 12
}) {

  const style = {
    width: size,
    height: size,
    top,
    bottom,
    left,
    right,
    opacity,
    animationDuration: `${speed}s`
  };

  return (
    <div
      className={`circle-decor circle-${tone} ${animation}`}
      style={style}
    />
  );
}

CircleDecor.propTypes = {
  size: PropTypes.number,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  opacity: PropTypes.number,
  tone: PropTypes.oneOf(["light", "medium", "dark"]),
  animation: PropTypes.oneOf(["float", "pulse", "drift", "none"]),
  speed: PropTypes.number
};

export default CircleDecor;