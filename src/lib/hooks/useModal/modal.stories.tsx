import React from 'react';

import { Button } from '../../components'
import styled from 'styled-components';
import { useModal } from '.';
import { OpizeDesignSystemContextProvider } from '../../context';

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
            <Button label='Open Modal' onClick={() => {
                modal.open(<>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime ipsum praesentium molestias unde velit quas, sunt nesciunt animi, alias tempora. Totam ab voluptatum facere esse accusantium aut laboriosam dignissimos?</>)
            }} />
        </Divver>
    )
}

const TemplateWrapper = () => {
    return (
        <>
            <OpizeDesignSystemContextProvider>
                <Template />
            </OpizeDesignSystemContextProvider>
        </>
    )
}

export const Primary = TemplateWrapper.bind({});