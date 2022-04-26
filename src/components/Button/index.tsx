import React from 'react'

import cn from 'classnames';
import s from './Button.module.scss'

interface ButtonProps {
    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: string;
    fullSize?: boolean;
    small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color = "green", fullSize = false, small = false }) => {
  return (
    <button 
        type='button'
        className={cn(s.root, {[s.yellow]: color === "yellow", [s.fullSize]: fullSize, [s.small]: small})}
        onClick={onClick}
    >
       {children}
    </button>
  )
}

export default Button