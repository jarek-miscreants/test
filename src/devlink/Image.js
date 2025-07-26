"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Image.module.css";

export function Image({
  as: _Component = _Builtin.DOM,
  image = "",
  imageClass,
  objectPosition = "object-position: 50% 50%;",
  imageAltText = "__wf_reserved_inherit",
  aspectRatio = "aspect-ratio: 1 / 1;",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "g_visual_wrap", "position-relative")}
      tag="div"
      style={aspectRatio}
      class={imageClass}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "g_visual_img", "cover-absolute")}
        loading="lazy"
        width="auto"
        height="auto"
        src={image}
      />
    </_Component>
  );
}
