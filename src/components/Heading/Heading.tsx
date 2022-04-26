import React from 'react'

import s from "./Heading.module.scss"

interface IFontSize {
    [n: string]: string;
}

const FONT_SIZE: IFontSize = {
    h1: "72px",
    h2: "64px",
    h3: "36px",
    h4: "24px",
    h5: "18px",
    h6: "12px",
    p: "16px",

}

interface HeadingProps {
    children: string;
    tag: string;

}

const Heading = ( {children, tag}: HeadingProps) => {
   return  React.createElement(tag, {style: {fontSize: FONT_SIZE[tag]}}, children);
}

export default Heading