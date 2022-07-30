import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../'
import styled from 'styled-components';
import { useModal } from '../../hooks/useModal';
import { ODSContextWrapper } from '../../context';

export default {
  title: 'Library/Modal',
  argTypes: {

  }
};

const Divver = styled.div`
    
`



const Template = () => {
    const modal = useModal()

    return (
        <Divver>
            <Button label='모달 열기' onClick={() => {
                modal.open(<>123123123</>)
            }} />
        </Divver>
    )
}

const TemplateWrapper = () => {
    return (
        <>
            <ODSContextWrapper>
                <Template />
            </ODSContextWrapper>
        </>
    )
}

export const Primary = TemplateWrapper.bind({});