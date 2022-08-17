import React from 'react';
import { Story } from '@storybook/react';

import styled from 'styled-components';
import { Header } from '..';

import { ActionMenu } from '../actionMenu';
import Logo from '../../../assets/opize.png';

export default {
    title: 'Component/Header',
    argTypes: {},
};

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`;

const Void = styled.div`
    height: 2000px;
    width: 100%;
`;

function Template() {
    return (
        <Header>
            <Header.Nav>
                <Header.Nav.Left>
                    <Header.Nav.Logo src={Logo} to="/" />
                </Header.Nav.Left>

                <Header.Nav.Right>
                    <Header.Nav.Button onClick={() => null}>Button2</Header.Nav.Button>
                    <Header.Nav.Button onClick={() => null}>Button</Header.Nav.Button>
                    <ActionMenu
                        icon={<ProfileImg src={Logo} alt="" />}
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

export const Primary: Story = Template.bind({});
Primary.parameters = {
    layout: 'fullscreen',
};
