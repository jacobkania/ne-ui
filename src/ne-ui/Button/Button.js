import React, { useContext } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import BaseColorContext from "ne-ui/utils/BaseColorContext";
import colorTransform, { targets } from "ne-ui/utils/colorTransform";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  button: (props) => ({
    borderWidth: "0",
    borderRadius: "0.5em",
    padding: "0.5em 1em",
    fontSize: "1em",
    boxShadow: `0.25rem 0.25rem 0.5rem ${colorTransform(
      props.baseColor.primary,
      targets.shadow
    )}, -0.25rem -0.25rem 0.5rem ${colorTransform(
      props.baseColor.primary,
      targets.highlight
    )}`,
    color: props.baseColor.text,
    outline: "none",

    "&:active": {
      boxShadow: `inset 0.25rem 0.25rem 0.5rem ${colorTransform(
        props.baseColor.primary,
        targets.shadow
      )}, inset -0.25rem -0.25rem 0.5rem ${colorTransform(
        props.baseColor.primary,
        targets.highlight
      )}`,
      color: props.baseColor.text,
      "& span": {
        fontSize: "0.95em",
      },
    },
  }),
  flat: (props) => ({
    background: props.baseColor.primary,
    "&:focus": {
      background: props.baseColor.focus,
    },
  }),
  inward: (props) => ({
    background: `linear-gradient(145deg, ${colorTransform(
      props.baseColor.primary,
      targets.darkerAccent
    )}, ${colorTransform(props.baseColor.primary, targets.lighterAccent)})`,
    "&:focus": {
      background: props.baseColor.focus,
    },
  }),
  outward: (props) => ({
    background: `linear-gradient(145deg, ${colorTransform(
      props.baseColor.primary,
      targets.lighterAccent
    )}, ${colorTransform(props.baseColor.primary, targets.darkerAccent)})`,
    "&:focus": {
      background: props.baseColor.focus,
    },
  }),
});

const Button = ({ label, onClick, type }) => {
  const baseColor = useContext(BaseColorContext);
  const classes = useStyles({ baseColor });

  return (
    <button
      className={classNames(classes.button, classes[type])}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["flat", "inward", "outward"]),
};

Button.defaultProps = {
  type: "flat",
};

export default Button;
