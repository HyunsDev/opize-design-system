import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { SimpleHeader, Spacer, Flex, Button } from '..';
import OpizeLogo from '../../../assets/opize_logoText.png';

const meta: Meta<typeof SimpleHeader> = {
    title: 'Opize Component/Simple Header',
    component: SimpleHeader,
};
export default meta;

type Story = StoryObj<typeof SimpleHeader>;

const Img = styled.img`
    height: 32px;
`;

export const Primary: Story = {
    render: (args) => (
        <>
            <SimpleHeader {...args} />
            <Spacer height={1500} />
        </>
    ),
    args: {
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
        notice: '공지',
    },
};
