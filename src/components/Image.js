import React from "react";
import cn from "classnames";
// cn -> A simple JavaScript utility for conditionally joining classNames together.

export default function Image({image, active, rotationPosition}) {
    return(
      <>
        <img 
          alt={''}
          className={cn({active})}
          src={require(`../assets/${image}`).default}
          height={134}
          width={124}
          style={{ transform: active ? `scale(1.1) rotate(${rotationPosition}deg)`: `rotate(${rotationPosition}deg)`}}
        />  
    </>
    )
}
