"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Video.module.css";

export function Video({
  as: _Component = _Builtin.DOM,
  vIdeoPlaceholder = "",
  objectPosition = "object-position: 50% 50%;",
  videoClass,
  videoLink,
  imageLoading = "lazy",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "g_visual_wrap",
        "position-relative",
        "is-video"
      )}
      tag="div"
      data-video="container"
      data-video-src={videoLink}
      style={objectPosition}
      class={videoClass}
    >
      <_Builtin.Image
        className={_utils.cx(
          _styles,
          "g_visual_img",
          "cover-absolute",
          "video-placeholder"
        )}
        loading={imageLoading}
        width="auto"
        height="auto"
        alt=""
        src={vIdeoPlaceholder}
      />
    </_Component>
  );
}
