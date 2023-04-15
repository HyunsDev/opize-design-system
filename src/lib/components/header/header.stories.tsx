import React from 'react';
import { ComponentStory, Story, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { Header } from '..';

import { ActionMenu } from '../actionMenu';
import LogoImg from '../../../assets/opize.png';

export default {
    title: 'Opize Component/Header',
    component: Header,
    subcomponents: {
        'Header.Notice': Header.Notice,
        'Header.Nav': Header.Nav,
        'Header.Nav.Left': Header.Nav.Left,
        'Header.Nav.Right': Header.Nav.Right,
        'Header.Nav.Button': Header.Nav.Button,
        'Header.SubMenu': Header.SubMenu,
    },
    argTypes: {},
} as ComponentMeta<typeof Header>;

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`;

const Void = styled.div`
    height: 100vh;
    width: 100%;
`;

const Logo = styled.img`
    height: 32px;
`;

function Template(args: ComponentStory<typeof Header>) {
    return (
        <Header {...args}>
            <Header.Notice>공지</Header.Notice>
            <Header.Nav>
                <Header.Nav.Left>
                    <Logo src={LogoImg} alt="" />
                </Header.Nav.Left>

                <Header.Nav.Right>
                    <Header.Nav.Button onClick={() => null}>Button2</Header.Nav.Button>
                    <Header.Nav.Button onClick={() => null}>Button</Header.Nav.Button>
                    <ActionMenu
                        icon={<ProfileImg src={LogoImg} alt="" />}
                        variant="text"
                        borderRadius={999}
                        actions={[
                            [
                                {
                                    label: 'label',
                                    onClick: () => null,
                                },
                            ],
                        ]}
                    />
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
            <Void />
        </Header>
    );
}

export const Primary = Template.bind({});
