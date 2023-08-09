import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import LogoImg from '../../../assets/opize.png';
import { Button, Flex, Header } from '../../components';
import { OpizeContextProvider } from '../../context';

import { useHeaderNotice } from '.';

const meta: Meta = {
    title: 'Hook/useHeaderNotice',
    argTypes: {},
};
export default meta;

type Story = StoryObj;

const Logo = styled.img`
    height: 32px;
`;

function Template() {
    const { open, close, content, isOpen } = useHeaderNotice();

    return (
        <Header>
            <Header.Notice>공지</Header.Notice>
            <Header.Nav>
                <Header.Nav.Left>
                    <Logo src={LogoImg} />
                </Header.Nav.Left>

                <Header.Nav.Right>
                    <Header.Nav.Button onClick={() => null}>Button2</Header.Nav.Button>
                    <Header.Nav.Button onClick={() => null}>Button</Header.Nav.Button>
                </Header.Nav.Right>
            </Header.Nav>
            <Header.SubMenu
                selected="a"
                menu={{
                    a: {
                        text: 'Tab A',
                        onClick: () => null,
                    },
                    b: {
                        text: 'Tab B',
                        onClick: () => null,
                    },
                }}
            />
            <Flex.Column
                gap="8px"
                style={{ padding: '8px' }}
            >
                <Button onClick={() => open('Hello, Opize! 👋')}>
                    open HeaderNotice (open(content))
                </Button>
                <Button onClick={() => close()}>close HeaderNotice (open(content))</Button>
                <Flex>isOpen: {isOpen ? '⭕' : '❌'}</Flex>
                <Flex>content: {content}</Flex>
            </Flex.Column>
        </Header>
    );
}

function TemplateWrapper() {
    return (
        <OpizeContextProvider>
            <Template />
        </OpizeContextProvider>
    );
}

export const Primary: Story = {
    render: TemplateWrapper,
    parameters: {
        layout: 'fullscreen',
    },
};
