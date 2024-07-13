import React from "react";
import { classNames } from "../../utils/content/classUtil.js";
import { SkeletonBonesProps } from "../../utils/interfaces/skeletonbones-interface.ts";

const SkeletonBones = ({
  height = "h-4",
  width,
  display = "flex",
  justify = "justify-between",
  rounded = "",
}: SkeletonBonesProps) => {
  return (
    <div className={classNames(display, justify)}>
      <div
        className={classNames(
          rounded,
          height,
          width,
          "relative",
          "overflow-hidden",
          "bg-gray-800"
        )}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-shimmer"
          style={{
            backgroundSize: "200% 50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkeletonBones;
