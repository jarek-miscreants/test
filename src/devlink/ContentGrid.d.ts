import * as React from "react";
import * as Types from "./types";

declare function ContentGrid(props: {
  as?: React.ElementType;
  slot?: Types.Slots.SlotContent;
  columnsSpan?:
    | "Base"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
}): React.JSX.Element;
