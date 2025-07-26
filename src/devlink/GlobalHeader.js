"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GlobalHeader.module.css";

export function GlobalHeader({
  as: _Component = _Builtin.RichText,
  text = "",
  size = "Base",
  customClass = "child-contain mb-4",
}) {
  const _styleVariantMap = {
    Base: "",
    Display: "w-variant-b99f85d7-8761-f28a-7436-b823499f73fa",
    H1: "w-variant-2961088f-5e99-9340-0ab4-7fdde90a0d73",
    H2: "w-variant-58479d3c-2434-4f33-b027-b02628919705",
    H3: "w-variant-8e4a1542-c15c-a224-5ce7-9db02bc63221",
    H4: "w-variant-062f86df-8c94-66bc-11f1-2dec3363176b",
    H5: "w-variant-99ef0c6f-d120-4697-e0fe-eeda93f42751",
    H6: "w-variant-ad1158d2-fbf0-7764-81fe-6e618e53cb14",
  };

  const _activeStyleVariant = _styleVariantMap[size];

  return (
    <_Component
      className={_utils.cx(_styles, "header-rich-text", _activeStyleVariant)}
      tag="div"
      slot=""
    >
      {text}
    </_Component>
  );
}
