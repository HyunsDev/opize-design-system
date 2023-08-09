import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Atom, Moon, Sun } from 'phosphor-react';
import styled from 'styled-components';

import { ActionMenu, Text, Code } from '../..';
import { cv } from '../../style';

import { useColorTheme } from '.';

const meta: Meta = {
    title: 'Hook/useColorTheme',
    argTypes: {},
};
export default meta;

type Story = StoryObj;

const Divver = styled.div`
    padding: 16px 16px;
    padding-bottom: 200px;
    background-color: ${cv.bg_page2};
`;

function Template() {
    const { colorTheme, nowColorTheme, setColorTheme } = useColorTheme();

    return (
        <Divver>
            <Text>
                colorTheme (dark | light | system) <Code>{colorTheme}</Code>
            </Text>
            <Text>
                nowColorTheme (dark | light) <Code>{nowColorTheme}</Code>
            </Text>
            <div>
                <ActionMenu
                    actions={[
                        [
                            {
                                label: 'Light',
                                onClick: () => setColorTheme('light'),
                                icon: <Sun />,
                            },
                            {
                                label: 'Dark',
                                onClick: () => setColorTheme('dark'),
                                icon: <Moon />,
                            },
                            {
                                label: 'System',
                                onClick: () => setColorTheme('system'),
                                icon: <Atom />,
                            },
                        ],
                    ]}
                    icon={nowColorTheme === 'light' ? <Sun /> : <Moon />}
                >
                    색상 변경
                </ActionMenu>
            </div>
        </Divver>
    );
}

export const Primary: Story = {
    render: Template,
    parameters: {
        layout: 'fullscreen',
    },
};
