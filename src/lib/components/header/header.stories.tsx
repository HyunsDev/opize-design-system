import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Header } from '..';
import LogoImg from '../../../assets/opize.png';
import { ActionMenu } from '../actionMenu';

const meta: Meta<typeof Header> = {
    title: 'Opize Component/Header',
    component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

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

export const Primary: Story = {
    render: (args) => (
        <Header {...args}>
            <Header.Notice>공지</Header.Notice>
            <Header.Nav>
                <Header.Nav.Left>
                    <Logo
                        src={LogoImg}
                        alt=""
                    />
                </Header.Nav.Left>

                <Header.Nav.Right>
                    <Header.Nav.Button onClick={() => null}>Button2</Header.Nav.Button>
                    <Header.Nav.Button onClick={() => null}>Button</Header.Nav.Button>
                    <ActionMenu
                        icon={
                            <ProfileImg
                                src={LogoImg}
                                alt=""
                            />
                        }
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
    ),
};
