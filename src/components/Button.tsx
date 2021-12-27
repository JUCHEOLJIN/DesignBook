import React from 'react';
import styled from "@emotion/styled"

interface ButtonProps {
    /**
     * 버튼의 타입은 무엇인가요? 
     */
    type? : "default" | "cancel" | "secondary" ;
    /**
     * 크기는 어떤가요?
     */
    size?: "small" | "medium" | "large";
    /**
     * 버튼 내용은 무엇인가요?
     */
    label: string;
    /**
     *  클릭 시에 어떤 동작을 하나요?
     */
    onClick? : () => void;
}

interface ButtonKeyProps {
    backgroundColor : "shoplBlue" | "shoplBlack" | "shoplRed";
    hover: string;
}

interface ButtonStyledProps {
    size: string;
    buttonStyle: ButtonKeyProps
    
}


const Root = styled.button<ButtonStyledProps>`
    display:flex;
    justify-content: center;
    align-items:center;
    width: ${({size})=> size};
    padding: 0.5rem 2.563rem;
    border-radius: 4px;
    background-color: ${({theme,buttonStyle})=> theme.colors[buttonStyle.backgroundColor]};
    color: #fff;
`;

/**
 *  여기서 인터랙션을 실험해보세요.
 */

const Button = ({
    type = "default",
    size = "medium",
    label,
    onClick,
    ...props
}: ButtonProps) => {
    const handleSize = (size :string) => {
        switch (size) {
            case "medium":
                return "7.625rem";
            case "large":
                return "11.25rem";
            default :
            return  "7rem";
        }
    }

    const handleBackColor = (type:string) : ButtonKeyProps => {
        switch(type){

            case "cancel" :
            return {
                backgroundColor : "shoplRed",
                hover : "#ffe6e6",
            };

            case "secondary":
            return {
                backgroundColor: "shoplBlack",
                hover: "#555"
            };

            default: 
            return {
                backgroundColor: "shoplBlue",
                hover : "#2d89e4"
            }
        }
    } 

    return <Root size={handleSize(size)} buttonStyle={handleBackColor(type)} onClick={onClick}>{label}</Root>
};

export default Button;