import * as React from "react";
import * as Types from "./types";

declare function GlobalClickable(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  customTargetUseBlankForANewWindow?: Types.Builtin.Text;
  customTypeButtonSubmitEtc?: Types.Builtin.Text;
  customSrcText?: React.ReactNode;
}): React.JSX.Element;
