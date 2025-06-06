import React, { memo } from "react";
import "../styles/Background.scss";

const Background: React.FC = () => {
  return (
    <div className="noise-background" role="presentation" aria-hidden="true" />
  );
};

export default memo(Background);
