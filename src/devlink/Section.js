"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalBackground } from "./GlobalBackground";
import { SectionSpace } from "./SectionSpace";
import * as _utils from "./utils";
import _styles from "./Section.module.css";

export function Section({
  as: _Component = _Builtin.Block,
  slot,
  paddingPaddingBottom = null,
  paddingPaddingTop = null,
  theme = "Inherit",
  backgroundBackgroundColor = null,
  customContainerClass = "container-large",
  sectionId,
}) {
  const _styleVariantMap = {
    Inherit: "",
    "Theme Light": "w-variant-06bfd700-a8fe-1bee-dfa2-248c38c5ee34",
    "Theme Dark": "w-variant-dfb2104f-deee-7b68-37bd-88633f0d3adf",
  };

  const _activeStyleVariant = _styleVariantMap[theme];

  return (
    <_Component
      className={_utils.cx(_styles, "g_section", _activeStyleVariant)}
      tag="section"
      id={sectionId}
    >
      <GlobalBackground
        variant={backgroundBackgroundColor}
        class="cover-absolute"
      />
      <SectionSpace variant={paddingPaddingTop} />
      <_Builtin.NotSupported _atom="Slot" />
      <SectionSpace variant={paddingPaddingBottom} />
    </_Component>
  );
}
