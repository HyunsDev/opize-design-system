import { Meta, StoryObj } from '@storybook/react';
import { Atom, Moon, Sun } from 'phosphor-react';

import { Menu, Text, Code, useColorTheme, Flex } from '../..';

const meta: Meta = {
    title: 'Hooks/useColorTheme',
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
};
export default meta;

type Story = StoryObj;

function Template() {
    const { colorTheme, nowColorTheme, setColorTheme } = useColorTheme();

    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            gap="8px"
        >
            <Text>
                colorTheme (dark | light | system) <Code>{colorTheme}</Code>
            </Text>
            <Text>
                nowColorTheme (dark | light) <Code>{nowColorTheme}</Code>
            </Text>
            <div>
                <Menu>
                    <Menu.Trigger
                        variant="secondary"
                        suffix={nowColorTheme === 'dark' ? <Moon /> : <Sun />}
                    >
                        색상 변경
                    </Menu.Trigger>
                    <Menu.Content>
                        <Menu.Option
                            onClick={() => setColorTheme('light')}
                            suffix={<Sun />}
                        >
                            Light
                        </Menu.Option>
                        <Menu.Option
                            onClick={() => setColorTheme('dark')}
                            suffix={<Moon />}
                        >
                            Dark
                        </Menu.Option>
                        <Menu.Option
                            onClick={() => setColorTheme('system')}
                            suffix={<Atom />}
                        >
                            System
                        </Menu.Option>
                    </Menu.Content>
                </Menu>
            </div>
        </Flex>
    );
}

export const Primary: Story = {
    render: Template,
};
