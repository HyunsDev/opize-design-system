import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { TextField, Checkbox, TextArea, Select, Switch, Datetime } from '.';
import { Button, CodeBlock } from '..'
import styled from 'styled-components';


export default {
  title: 'Component/Form/Form',
  argTypes: {

  },
};


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

type FormData = {
    text: string
    text2: string
    select: string
    check: boolean
    switch: string
    date: string
    datetime: string
}

const Template = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [ result, setResult ] = useState('')
    const onSubmit = (data:any) => {
        setResult(JSON.stringify(data, null, 2))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Width500>
            <TextField {...register('text')} placeholder='text' label='TextField' />
            <TextArea {...register('text2')} placeholder='text2' label='TextArea' />
            <Select {...register('select')} name='select' label='Select'>
                <Select.Option value='option1'>Option 1</Select.Option>
                <Select.Option value='option2'>Option 2</Select.Option>
                <Select.Option value='option3'>Option 3</Select.Option>
            </Select>
            <Checkbox {...register('check')} label='CheckBox' />
            <Switch {...register('switch')} label='switch' />
            <Datetime type='date' {...register('date')} label='date' />
            <Datetime type='datetime-local' {...register('datetime')} label='datetime' />

            <Button type='submit' label='Submit' variant='contained' width='100%' />

            <CodeBlock>{ result }</CodeBlock>
            </Width500>
        </form>
    )
};

export const Primary = Template.bind({});