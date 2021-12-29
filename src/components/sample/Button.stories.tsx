import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import {action} from "@storybook/addon-actions"

import Button from "./Button";
import styled from "@emotion/styled";

export default {
    component: Button,
    title: "Velog/Button",
    argTypes: {
        
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>;

export const Primary = Template.bind({});
Primary.args = {
    children: "Primary",
    onClick: action("click"),
    type: "primary",
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary",
    onClick: action("click"),
    type: "secondary",
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    children: "Tertiary",
    onClick: action("click"),
    type:"tertiary",
}

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 12px;

    & div{
        margin-right: 24px;
    }

    & p {
        text-align: center;
        margin-bottom : 12px;
    }
`;

const sizes: ("small" | "medium" | "big")[] = ["small" , "medium" , "big"];

export const Size: ComponentStory<typeof Button> = ({children, size, ...args}) => {
    return (
        <>
        <Wrapper>
            {sizes.map((each) => <div><p>{each[0].toUpperCase() + each.slice(1)}</p><Button {...args} size={each}>{children ?? each}</Button></div>)}
        </Wrapper>
        </>
    )
} 
Size.args = {
    ...Primary.args,
    children: "Button",
}

const types: ("primary" | "secondary" | "tertiary")[] = ["primary","secondary","tertiary" ]

export const Disabled: ComponentStory<typeof Button> = ({children, size="medium",...args})=> {
    return (
        <>
        <Wrapper>
            {types.map((each) => <div><Button {...args} type={each} size={size}>{each[0].toUpperCase() + each.slice(1)}</Button></div>)}
        </Wrapper>
        </>
    )
}
Disabled.args = {
    ...Primary.args,
    disabled:true,
}

export const CustomSized = Template.bind({});
CustomSized.args = {
    ...Primary.args,
    width: "50%",
}


