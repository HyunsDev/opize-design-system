import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components'
import styled from 'styled-components';
import { useModal } from '../useModal';
import { OpizeContextProvider } from '../../context';
import { useDialog } from '.';

export default {
  title: 'Library/Dialog',
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
                dialog('title', [
                    {
                        label: 'label',
                        onClick: () => {}
                    }
                ], 'content')
            }} variant="outlined" />
            <br />
            <Button label='Open Warning Dialog' onClick={() => {
                dialog('title', [
                    {
                        label: 'cancel',
                        onClick: () => {}
                    }, {
                        label: 'Delete',
                        onClick: () => null,
                        color: 'red',
                        variant: 'contained'
                    }
                ], 'content')
            }} variant="outlined" />
            <br />
            <Button label='notAutoClose Button Dialog' onClick={() => {
                dialog('title', [
                    {
                        label: 'not close',
                        onClick: () => null
                    }, {
                        label: 'close',
                        onClick: () => null,
                        closeModal: true
                    }
                ], 'content', true)
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