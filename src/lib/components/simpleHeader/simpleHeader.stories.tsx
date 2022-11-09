import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { SimpleHeader, Spacer, Avatar, Flex, Button } from '..';
import OpizeLogo from '../../../assets/opize_logoText.png';

export default {
    title: 'Opize Component/Simple Header',
    component: SimpleHeader,
    argTypes: {},
} as ComponentMeta<typeof SimpleHeader>;

const Template: ComponentStory<typeof SimpleHeader> = (args) => (
    <>
        <SimpleHeader {...args} />
        <Spacer height={1500} />
    </>
);

const Img = styled.img`
    height: 32px;
`;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <>
            <Img src={OpizeLogo} />
            <SimpleHeader.Nav>
                <SimpleHeader.Nav.Link href="/">개발자 소개</SimpleHeader.Nav.Link>
                <SimpleHeader.Nav.Link href="/">프로젝트</SimpleHeader.Nav.Link>
                <SimpleHeader.Nav.Link href="/">함께하기</SimpleHeader.Nav.Link>
            </SimpleHeader.Nav>
            <Flex.Row gap="4px">
                <Button variant="text">Hello</Button>
                <Button variant="contained">Hello</Button>
            </Flex.Row>
        </>
    ),
};
