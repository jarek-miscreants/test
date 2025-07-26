import * as React from "react";
import * as Types from "./types";

declare function GlobalHeader(props: {
  as?: React.ElementType;
  text?: Types.Basic.RichTextChildren;
  size?: "Base" | "Display" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  customClass?: Types.Builtin.Text;
}): React.JSX.Element;
