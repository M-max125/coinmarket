import React from 'react'
import { useTheme } from "@mui/material/styles";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Link from "next/link";

const BackButton = () => {
    const theme = useTheme();
  return (
    <Link href='/' passHref={true}>
    <div className={`${
        theme.palette.mode === "dark" ? "text-white" : "text-[#6188FF]"
      } flex p-2 px-5 w-min  mt-5 cursor-pointer hover:opacity-60` }>
            <ArrowLeftIcon /> Back
        </div>
    </Link>
  )
}

export default BackButton