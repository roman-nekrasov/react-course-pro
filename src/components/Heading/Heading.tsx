import React from 'react'

import s from "./Heading.module.scss"

interface HeadingProps {
    children: string;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p?: boolean;

}

const Heading = ( {children, h1 = false, h2 = false, h3= false, h4 = false, h5 = false, h6= false, p = false}: HeadingProps) => {
    return (
        <>
        {
            h1 && <h1 className={s.h1}>{children}</h1> ||
            h2 && <h2 className={s.h2}>{children}</h2> ||
            h3 && <h3 className={s.h3}>{children}</h3> ||
            h4 && <h4 className={s.h4}>{children}</h4> ||
            h5 && <h5 className={s.h5}>{children}</h5> ||
            h6 && <h6 className={s.h6}>{children}</h6> ||
            p && <p className={s.p}>{children}</p>
        }
        </>
    )
  
}

export default Heading