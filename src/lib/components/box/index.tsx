import styled from 'styled-components';
import React from 'react';
import { cv } from '../../style';
import { Button, ButtonProps } from '../button';

const BoxOuter = styled.div`
    border: solid 1px ${cv.border4};
    border-radius: 4px;
    color: ${cv.text1};
`;

const BoxDiv = styled.div`
    padding: 22px 24px;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const BoxTitle = styled.h4`
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: -0.020625rem;
`;

const BoxHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    background-color: ${cv.bg_element2};
    border-bottom: solid 1px ${cv.border4};
    font-size: 0.875rem;
`;

const BoxFooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 24px;
    background-color: ${cv.bg_element2};
    border-top: solid 1px ${cv.border4};
    font-size: 0.875rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;
function BoxFooter(props: { text: React.ReactNode; button: ButtonProps }) {
    return (
        <BoxFooterDiv>
            <div>{props.text}</div>
            <Button {...props.button} />
        </BoxFooterDiv>
    );
}

export interface BoxProps {
    /**
     * 박스 안 내용입니다.
     */
    children?: React.ReactNode;
    /**
     * 박스의 제목입니다. 박스 내부에 표시됩니다.
     */
    title?: React.ReactNode;
    /**
     * 박스 상단 별도 공간에 표시되는 컴포넌트입니다.
     */
    header?: React.ReactNode;
    /**
     * footer를 단축시킨 prop입니다. footer 속성과 같이 사용할 수 없습니다.
     */
    footerTemplate?: {
        text: React.ReactNode;
        button: ButtonProps;
    };
    /**
     * 박스 하단 별도 공간에 표시되는 컴포넌트입니다. footerTemplate 속성과 같이 사용할 수 없습니다.
     */
    footer?: React.ReactNode;
}

/**
 * 디자인을 위한 컴포넌트입니다.
 *
 * 만약 레이아웃만을 위한 태그가 필요하다면 \<Flex\>를 사용해주세요.
 */
export function Box(props: BoxProps) {
    if (props.footer && props.footerTemplate) {
        throw new Error('You can ese either "footer" or "footerNode"');
    }

    return (
        <BoxOuter>
            <>
                {props.header && <BoxHeaderDiv>{props.header}</BoxHeaderDiv>}
                <BoxDiv>
                    {props.title && <BoxTitle>{props.title}</BoxTitle>}
                    {props.children}
                </BoxDiv>
                {props.footerTemplate && <BoxFooter {...props.footerTemplate} />}
                {props.footer && <BoxFooterDiv>{props.footer}</BoxFooterDiv>}
            </>
        </BoxOuter>
    );
}
