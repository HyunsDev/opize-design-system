import React from 'react';
import styled from 'styled-components';
import { TrashSimple } from 'phosphor-react';
import { Story } from '@storybook/react';
import { Button, Flex, Header } from '../../components';
import { OpizeContextProvider } from '../../context';
import { useHeaderNotice } from '.';
import { cv } from '../../style';
import Logo from '../../../assets/opize.png';

export default {
    title: 'Hook/useHeaderNotice',
    argTypes: {},
};

function Template() {
    const { open, close, content, isOpen } = useHeaderNotice();

    return (
        <Header>
            <Header.Notice>공지</Header.Notice>
            <Header.Nav>
                <Header.Nav.Left>
                    <Header.Nav.Logo src={Logo} to="/" />
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
            <Flex.Column gap="8px" style={{ padding: '8px' }}>
                <Button label="open HeaderNotice (open(content))" onClick={() => open('Hello, Opize! 👋')} />
                <Button label="close HeaderNotice (open(content))" onClick={() => close()} />
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

export const Primary: Story = TemplateWrapper.bind({});
Primary.parameters = {
    layout: 'fullscreen',
};
