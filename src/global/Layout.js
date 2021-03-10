import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";

import { cls } from "./utils";

export const distributions = {
  SPACED: "spaced",
  MIDDLE: "middle",
  CENTER: "center",
  FULLSIZE: "fl-1",
};

export const paddings = {
  BIG: "padding--big",
  LARGE: "padding--large",
  MEDIUM: "padding--medium",
  SMALL: "padding--small",
  TINY: "padding--tiny",
};

const composeClassNames = (
  flexType,
  distribution,
  className,
  padding,
  verticalPadding,
  horizontalPadding
) => {
  const vPadding = verticalPadding ? `${verticalPadding}--vertical` : "";
  const hPadding = horizontalPadding ? `${horizontalPadding}--horizontal` : "";

  return cls(flexType, distribution, className, padding, vPadding, hPadding);
};

export const RowLayout = ({
  testId,
  distribution,
  className,
  padding,
  verticalPadding,
  horizontalPadding,
  onClick,
  children,
}) => (
  <div
    data-testid={testId}
    className={composeClassNames(
      "row",
      distribution,
      className,
      padding,
      verticalPadding,
      horizontalPadding
    )}
    onClick={onClick}
  >
    {children}
  </div>
);

export const ColumnLayout = ({
  testId,
  distribution,
  className,
  padding,
  verticalPadding,
  horizontalPadding,
  onClick,
  children,
}) => (
  <div
    data-testid={testId}
    className={composeClassNames(
      "column",
      distribution,
      className,
      padding,
      verticalPadding,
      horizontalPadding
    )}
    onClick={onClick}
  >
    {children}
  </div>
);

const propTypes = {
  testId: PropTypes.string,
  distribution: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  className: PropTypes.string,
  padding: PropTypes.string,
  verticalPadding: PropTypes.string,
  horizontalPadding: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const defaultProps = {
  testId: "",
  distribution: null,
  className: null,
  padding: null,
  verticalPadding: null,
  horizontalPadding: null,
  onClick: null,
  children: null,
};

RowLayout.propTypes = propTypes;
ColumnLayout.propTypes = propTypes;
RowLayout.defaultProps = defaultProps;
ColumnLayout.defaultProps = defaultProps;
