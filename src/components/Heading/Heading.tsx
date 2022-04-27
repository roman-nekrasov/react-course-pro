import React from 'react'

const FONT_SIZE = {
    h1: "72px",
    h2: "64px",
    h3: "36px",
    h4: "24px",
    h5: "18px",
    h6: "12px",
    p: "16px",

}
type HeadingType = keyof typeof FONT_SIZE;
interface HeadingProps {
    children: string;
    tag: HeadingType;
    className?: string;

}

const Heading = ( {children, tag, className}: HeadingProps) => {
   return  React.createElement(tag, {style: {fontSize: FONT_SIZE[tag]}, className: className}, children);
}

export default Heading