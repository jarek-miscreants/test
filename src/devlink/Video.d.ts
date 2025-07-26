import * as React from "react";
import * as Types from "./types";

declare function Video(props: {
  as?: React.ElementType;
  vIdeoPlaceholder?: Types.Asset.Image;
  objectPosition?: Types.Builtin.Text;
  videoClass?: Types.Builtin.Text;
  videoLink?: Types.Builtin.Text;
  imageLoading?: Types.Builtin.Text;
}): React.JSX.Element;
