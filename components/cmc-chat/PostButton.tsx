import React from "react";
import { useTheme } from "@mui/material/styles";

const PostButton: React.FC<{
  label: string;
  onPress?: () => void;
}> = (props) => {
  const theme = useTheme();
  return (
    <button
      className="bg-[#6188FF] px-5 py-2 rounded-lg text-white mt-3"
      onClick={props.onPress}
    >
      {props.label}
    </button>
  );
};

export default PostButton;
