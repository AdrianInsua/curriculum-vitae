const cls = (...classNames) =>
  classNames
    .filter((className) => className)
    .map((className) => [].concat(className).join(" "))
    .join(" ");

export default cls;
