"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionSpace.module.css";

export function SectionSpace({
  as: _Component = _Builtin.Block,
  variant = "None",
}) {
  const _styleVariantMap = {
    None: "",
    Small: "w-variant-06539f70-5f1c-7b69-3356-58a6324ac143",
    Medium: "w-variant-ef9b3eac-2a11-f8cf-f392-b89b53acb212",
    Large: "w-variant-da9deacd-6bd2-1cf6-af5c-3a3c0552044d",
    "Page Top": "w-variant-6cb0206d-e10f-2d4b-08b6-0f8bb75211e1",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "g-section-space", _activeStyleVariant)}
      tag="div"
    />
  );
}
