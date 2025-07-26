"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContentText.module.css";

export function ContentText({
  as: _Component = _Builtin.RichText,
  text = "",
  variant = "Text Size Main",
  customClass = "mb-1",
}) {
  const _styleVariantMap = {
    "Text Size Main": "",
    "Text Size Large": "w-variant-d1f8a31e-200a-31ea-8413-1a1d9579048a",
    "Text Size Small": "w-variant-c12058f6-417c-9a6d-715e-94c0e11b7eb9",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "content-rich-text", _activeStyleVariant)}
      tag="div"
      slot=""
    >
      {text}
    </_Component>
  );
}
