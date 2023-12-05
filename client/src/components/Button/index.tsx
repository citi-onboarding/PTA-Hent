import React from "react";
import { ButtonInterface } from "./interface";
import { StyledButton } from "./style";


export const Button = ({
    text,
    width, 
    height,
    color,
    backgroundColor,
    fontWeight,
    onClick
}:ButtonInterface) => {
    const onclick = () => console.log("cliquei")
    
    return (
        <> 
        <StyledButton 
        onClick={onClick}
        styles={{
             width, 
             height,
             color,
             backgroundColor,
             fontWeight,
        }}>{text}</StyledButton>
        </>
    )
}