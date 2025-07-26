import * as React from "react";
import * as Types from "./types";

declare function Section(props: {
  as?: React.ElementType;
  slot?: Types.Slots.SlotContent;
  paddingPaddingBottom?: "None" | "Small" | "Medium" | "Large" | "Page Top";
  paddingPaddingTop?: "None" | "Small" | "Medium" | "Large" | "Page Top";
  theme?: "Inherit" | "Theme Light" | "Theme Dark";
  backgroundBackgroundColor?: "Transparent" | "Background 1" | "Background 2";
  customContainerClass?: Types.Builtin.Text;
  sectionId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
