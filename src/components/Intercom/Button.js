import React from "react";

const ButtonStyles = {
  display: "block",
  position: "fixed",
  textAlign: "center",
  backgroundColor: "var(--ifm-link-color)",
  padding: 0,
  borderRadius: "50%",
  right: 20,
  bottom: 20,
  width: 60,
  height: 60,
  boxShadow:
    "0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16)",
  zIndex: 999,
  border: "none",
};

export const Button = (props) => {
  return (
    <button
      type="button"
      style={ButtonStyles}
      {...props}
      aria-label="Open live chat"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 32"
        width="28"
        height="32"
      >
        <title>Intercom Logo</title>
        <path
          fill="white"
          d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"
        />
      </svg>
    </button>
  );
};
