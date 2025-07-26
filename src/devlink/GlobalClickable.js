"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GlobalClickable.module.css";

export function GlobalClickable({
  as: _Component = _Builtin.Block,

  link = {
    href: "#",
  },

  customTargetUseBlankForANewWindow,
  customTypeButtonSubmitEtc,
  customSrcText = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "g_clickable_wrap")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "g_clickable_link")}
        button={false}
        target={customTargetUseBlankForANewWindow}
        block="inline"
        options={link}
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "g_clickable_text")}
          tag="span"
        >
          {customSrcText}
        </_Builtin.DOM>
      </_Builtin.Link>
      <_Builtin.DOM
        className={_utils.cx(_styles, "g_clickable_btn")}
        tag="div"
        type={customTypeButtonSubmitEtc}
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "g_clickable_text")}
          tag="span"
        >
          {customSrcText}
        </_Builtin.DOM>
      </_Builtin.DOM>
    </_Component>
  );
}
