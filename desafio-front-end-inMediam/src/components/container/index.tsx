import React from "react";
import { ContainerItemProps } from "../../utils/interfaces/container-items-props";

const ContainerItem = ({ children }: ContainerItemProps) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default ContainerItem;
