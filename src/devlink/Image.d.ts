import * as React from "react";
import * as Types from "./types";

declare function Image(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  imageClass?: Types.Builtin.Text;
  objectPosition?: Types.Builtin.Text;
  imageAltText?: Types.Basic.AltText;
  aspectRatio?: Types.Builtin.Text;
}): React.JSX.Element;
