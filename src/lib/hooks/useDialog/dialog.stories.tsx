import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components'
import styled from 'styled-components';
import { useModal } from '../useModal';
import { OpizeContextProvider } from '../../context';
import { useDialog } from '.';
import { Trash, TrashSimple } from 'phosphor-react';
import { cv } from '../../style';

export default {
  title: 'Hook/useDialog',
  argTypes: {

  }
};

const Divver = styled.div`
    
`

const Template = () => {
    const dialog = useDialog()

    return (
        <Divver>
            <Button label='Open Dialog' onClick={() => {
                dialog({
                    title: 'title',
                    buttons: [
                        {
                            label: 'label',
                            onClick: () => {},
                            variant: 'contained'
                        }
                    ],
                    content: 'content'
                })
            }} variant="outlined" />
            <br />
            <Button label='Open Warning Dialog' onClick={() => {
                dialog({
                    title: '정말로 삭제하실 건가요?',
                    content: '삭제한 글은 다시 살릴 수 없어요.',
                    icon: <TrashSimple color={cv.red1} />,
                    buttons: [
                        {
                            label: '돌아가기',
                            onClick: () => {},
                            variant: 'text'
                        }, {
                            label: '삭제',
                            onClick: () => null,
                            color: 'red',
                            variant: 'contained'
                        }
                    ]
                })
            }} variant="outlined" />
            <br />
            <Button label='notAutoClose Button Dialog' onClick={() => {
                dialog({
                    title: 'notAutoClose',
                    content: 'notAutoClose 속성을 통해 자동을 닫치지 않게 할 수 있어요.',
                    buttons: [
                        {
                            label: 'not close',
                            onClick: () => null,
                            variant: 'text',
                        }, {
                            label: 'close',
                            onClick: () => null,
                            closeModal: true,
                            variant: 'contained'
                        }
                    ],
                    notAutoClose: true
                })
            }} variant="outlined" />
        </Divver>
    )
}

const TemplateWrapper = () => {
    return (
        <>
            <OpizeContextProvider>
                <Template />
            </OpizeContextProvider>
        </>
    )
}

export const Primary = TemplateWrapper.bind({});