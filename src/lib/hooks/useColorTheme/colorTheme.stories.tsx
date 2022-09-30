import React, { useState } from 'react';
import styled from 'styled-components';
import { Atom, Moon, Sun, TrashSimple } from 'phosphor-react';
import { Story } from '@storybook/react';
import { ActionMenu, Text, Code } from '../..';
import { OpizeContextProvider } from '../../context';
import { cv } from '../../style';
import { useColorTheme } from '.';

export default {
    title: 'Hook/useColorTheme',
    argTypes: {},
};

const Divver = styled.div`
    padding: 100px 16px;
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
                <br />
                <Text color={cv.text3}>이 페이지의 색상 변경은 스토리북의 다크모드 전환과 별개로 동작합니다.</Text>
            </div>
        </Divver>
    );
}

function TemplateWrapper() {
    return <Template />;
}

export const Primary: Story = TemplateWrapper.bind({});
Primary.parameters = {
    layout: 'fullscreen',
};
