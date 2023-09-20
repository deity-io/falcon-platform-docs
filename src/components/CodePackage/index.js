import React from "react";

import styles from "./styles.module.scss";

const icon = (
  <svg viewBox="120 130 250 210" height="24" width="24">
    <polygon
      fill="currentColor"
      points="195.568,185.811 142.681,250.173 195.568,314.534 208.077,293.962 172.44,250.173 208.077,206.384"
    />
    <polygon
      fill="currentColor"
      points="228.707,313 251.922,313 288.816,187 265.6,187"
    />
    <polygon
      fill="currentColor"
      points="303.876,185.81 291.37,206.384 327.005,250.173 291.37,293.961 303.876,314.535 356.765,250.173"
    />
  </svg>
);

const CodePackage = ({ name }) => {
  return (
    <div className={styles.codePackage}>
      {icon}
      <span>package:</span>
      <span className={styles.packageName}>{name}</span>
    </div>
  );
};

export default CodePackage;
