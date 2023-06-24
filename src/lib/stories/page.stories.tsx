import React from 'react';

import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import styled from 'styled-components';

import {
    PageLayout,
    Header,
    Footer,
    ActionMenu,
    PageHead,
    Button,
    Box,
    Flex,
    Link,
    ActionList,
    Text,
    TextField,
    Checkbox,
    TextArea,
    Select,
    Switch,
    Datetime,
    RadioGroup,
    Radio,
    Autocomplete,
    H3,
    Callout,
    ToolTip,
} from '..';
import LogoImg from '../../assets/opize.png';

export default {
    title: 'Stories/page1',
    argTypes: {},
};

const Logo = styled.img`
    height: 32px;
`;

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`;

function THeader() {
    return (
        <Header>
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
                                {
                                    label: 'label',
                                    onClick: () => null,
                                },
                                {
                                    label: 'label',
                                    onClick: () => null,
                                },
                            ],
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
        </Header>
    );
}

const TPageHead = () => {
    return (
        <PageHead title="Title">
            <Button variant="outlined" size="large" onClick={() => null}>
                Button
            </Button>
            <Button variant="contained" size="large" onClick={() => null}>
                Button
            </Button>
        </PageHead>
    );
};

const TBox = () => {
    return (
        <Box
            title="Box Title"
            footer={
                <>
                    <Text>Box Footer</Text>
                    <Button variant="contained">Button</Button>
                </>
            }
        >
            <TextField label="TextField" />
        </Box>
    );
};

const TPage = () => {
    return (
        <PageLayout panPosition="start" marginTop="20px">
            <PageLayout.Pane>
                <ActionList isSticky>
                    <ActionList.Item selected>리스트 1</ActionList.Item>
                    <ActionList.Item>리스트 2</ActionList.Item>
                    <ActionList.Item>리스트 3</ActionList.Item>
                    <ActionList.Item>리스트 4</ActionList.Item>
                </ActionList>
            </PageLayout.Pane>
            <PageLayout.Content>
                <Flex.Column gap="16px">
                    <H3>Head H3</H3>
                    <Callout icon="🔥" color="red">
                        콜 아웃
                    </Callout>
                    <TBox />
                    <TBox />
                </Flex.Column>
            </PageLayout.Content>
            <ToolTip text="툴팁">툴팁</ToolTip>
            <PageLayout.Footer>Footer</PageLayout.Footer>
        </PageLayout>
    );
};

const TFooter = () => {
    return (
        <Footer>
            <Footer.Navigation>
                <Footer.Navigation.Item>
                    <Footer.Navigation.Item.Title>소개</Footer.Navigation.Item.Title>
                    <Footer.Navigation.Item.Link to="/">소개</Footer.Navigation.Item.Link>
                    <Footer.Navigation.Item.Link to="/">도움말</Footer.Navigation.Item.Link>
                </Footer.Navigation.Item>
                <Footer.Navigation.Item>
                    <Footer.Navigation.Item.TitleLink to="">블로그</Footer.Navigation.Item.TitleLink>
                    <Footer.Navigation.Item.Link to="/">소개</Footer.Navigation.Item.Link>
                    <Footer.Navigation.Item.Link to="/">도움말</Footer.Navigation.Item.Link>
                </Footer.Navigation.Item>
                <Footer.Navigation.Item>
                    <Footer.Navigation.Item.Title>이용 및 약관</Footer.Navigation.Item.Title>
                    <Footer.Navigation.Item.Link to="/">소개</Footer.Navigation.Item.Link>
                    <Footer.Navigation.Item.Link to="/">도움말</Footer.Navigation.Item.Link>
                </Footer.Navigation.Item>
                <Footer.Navigation.Item>
                    <Footer.Navigation.Item.Title>개발자</Footer.Navigation.Item.Title>
                    <Footer.Navigation.Item.Link to="/">소개</Footer.Navigation.Item.Link>
                    <Footer.Navigation.Item.Link to="/">도움말</Footer.Navigation.Item.Link>
                </Footer.Navigation.Item>
            </Footer.Navigation>
            <Footer.Menu>
                <Footer.Menu.Item>
                    <Logo src={LogoImg} />
                </Footer.Menu.Item>
                <Footer.Menu.Item> </Footer.Menu.Item>
                <Footer.Menu.Item>
                    <Link href="/" showUnderline={false}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Facebook</title>
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </Link>
                    <Link href="/" showUnderline={false}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </Link>
                    <Link href="/" showUnderline={false}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>YouTube</title>
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </Link>
                    <Link href="/" showUnderline={false}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Discord</title>
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                        </svg>
                    </Link>
                </Footer.Menu.Item>

                <Footer.Menu.Item>
                    © 2022 Opize Corp. <br />
                    오피즈 | 박현우
                </Footer.Menu.Item>
            </Footer.Menu>
        </Footer>
    );
};

const Template = () => {
    return (
        <>
            <THeader />
            <TPageHead />
            <TPage />
            <TFooter />
        </>
    );
};

export const Primary: Story = Template.bind({});
Primary.args = {};
Primary.parameters = {
    layout: 'fullscreen',
};
