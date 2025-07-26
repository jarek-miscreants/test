"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContentGrid.module.css";

export function ContentGrid({
  as: _Component = _Builtin.Block,
  slot,
  columnsSpan = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    2: "w-variant-24213516-d2b0-10b8-4467-6914345e12db",
    3: "w-variant-a0a668a1-0cb9-2231-25be-aeb1a9f89b28",
    4: "w-variant-3eec9c8d-1944-bd59-9168-880bffdac103",
    5: "w-variant-b70de027-9167-d648-4978-eb3ff2c89e00",
    6: "w-variant-fc540237-9646-bc80-acd1-b38f51505218",
    7: "w-variant-44c2def3-1f2d-69a2-c22a-a8fea36abaf3",
    8: "w-variant-f02a0948-6847-ce1d-4c21-68a870653144",
    9: "w-variant-5e97ccd6-3240-a80f-fed9-77adfde5a150",
    10: "w-variant-ea250c6e-3e46-a072-6a57-3d3af44e0a82",
    11: "w-variant-f5bb1cc8-65ac-ad77-1ccd-dfc92595b3fe",
    12: "w-variant-0ee410a8-6de4-96fe-b537-41ca0b0d9c87",
  };

  const _activeStyleVariant = _styleVariantMap[columnsSpan];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "g_content_grid",
        "column-custom",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  );
}
