import React from 'react';
import styled from 'styled-components';
import { TrashSimple } from 'phosphor-react';
import { Button } from '../../components';
import { OpizeContextProvider } from '../../context';
import { useDialog } from '.';
import { cv } from '../../style';

export default {
    title: 'Hook/useDialog',
    argTypes: {},
};

const Divver = styled.div``;

function Template() {
    const dialog = useDialog();

    return (
        <Divver>
            <Button
                onClick={() => {
                    dialog({
                        title: 'title',
                        content: 'content',
                    });
                }}
                variant="outlined"
            >
                Open Dialog
            </Button>
            <br />
            <Button
                onClick={() => {
                    dialog({
                        title: '정말로 삭제하실 건가요?',
                        content: '삭제한 글은 다시 살릴 수 없어요.',
                        icon: <TrashSimple color={cv.red1} />,
                        buttons: [
                            {
                                children: '돌아가기',
                                onClick: () => null,
                            },
                            {
                                children: '삭제',
                                onClick: () => null,
                                color: 'red',
                            },
                        ],
                    });
                }}
                variant="outlined"
            >
                Open Warning Dialog
            </Button>
            <br />
            <Button
                onClick={() => {
                    dialog({
                        title: 'notAutoClose',
                        content: 'notAutoClose 속성을 통해 자동을 닫치지 않게 할 수 있어요.',
                        buttons: [
                            {
                                children: 'not close',
                                onClick: () => null,
                            },
                            {
                                children: 'close',
                                onClick: () => null,
                                closeModal: true,
                                variant: 'contained',
                            },
                        ],
                        notAutoClose: true,
                    });
                }}
                variant="outlined"
            >
                notAutoClose Button Dialog
            </Button>
        </Divver>
    );
}

function TemplateWrapper() {
    return (
        <OpizeContextProvider>
            <Template />
        </OpizeContextProvider>
    );
}

export const Primary = TemplateWrapper.bind({});
