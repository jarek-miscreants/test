import * as React from "react";
import * as Types from "./types";

declare function ContentText(props: {
  as?: React.ElementType;
  text?: Types.Basic.RichTextChildren;
  variant?: "Text Size Main" | "Text Size Large" | "Text Size Small";
  customClass?: Types.Builtin.Text;
}): React.JSX.Element;
