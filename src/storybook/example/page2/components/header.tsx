import { styled } from 'styled-components';
import { Avatar, Flex, Header, Input, Menu, Text } from '../../../..';
import ODSLogo from '../../assets/opize-design-system-logo.png';
import OpizeLogo from '../../assets/opize-logo.png';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';

const HeaderIconImg = styled.img`
    height: 32px;
`;

const MenuProfileContainer = styled.div`
    width: 230px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    margin-bottom: 8px;
`;

const MenuProfile = () => {
    return (
        <MenuProfileContainer>
            <Avatar
                src={OpizeLogo}
                size="32px"
            />
            <Flex.Column>
                <Text>Opize</Text>
                <Text size="14px">hello@opize.me</Text>
            </Flex.Column>
        </MenuProfileContainer>
    );
};

export const PageHeader = () => {
    const [isInputActive, setIsInputActive] = useState(false);

    return (
        <Header>
            <Header.Nav>
                <Header.Nav.Left>
                    <HeaderIconImg
                        src={ODSLogo}
                        alt="Opize Design System Logo"
                    />
                </Header.Nav.Left>
                <Header.Nav.Right>
                    <Input
                        prefix={<MagnifyingGlass />}
                        placeholder="검색"
                        size="small"
                        width={isInputActive ? '200px' : '70px'}
                        onFocus={() => setIsInputActive(true)}
                        onBlur={() => setIsInputActive(false)}
                    />
                    <Menu>
                        <Menu.Trigger
                            iconOnly
                            variant="tertiary"
                            shape="round"
                        >
                            <Avatar
                                src={OpizeLogo}
                                size="32px"
                            />
                        </Menu.Trigger>
                        <Menu.Content>
                            <MenuProfile />
                            <Menu.Option>설정</Menu.Option>
                            <Menu.Option>로그아웃</Menu.Option>
                        </Menu.Content>
                    </Menu>
                </Header.Nav.Right>
            </Header.Nav>
            <Header.Menu
                selected="tab1"
                tabs={[
                    {
                        title: 'tab1',
                        value: 'tab1',
                    },
                    {
                        title: 'tab2',
                        value: 'tab2',
                    },
                    {
                        title: 'tab3',
                        value: 'tab3',
                    },
                ]}
            />
        </Header>
    );
};
