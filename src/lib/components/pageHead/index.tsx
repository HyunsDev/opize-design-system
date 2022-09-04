import styled from 'styled-components';
import React from 'react';
import { cv } from '../../style';
import { Flex } from '../layout';

const Outer = styled.div`
    position: relative;
    border-bottom: solid 1px ${cv.border3};
    width: 100%;
    height: 128px;
    display: flex;
    align-items: center;
`;

const Inner = styled.div`
    width: ${cv.pageWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 500;
`;

export interface PageHeadProps {
    /**
     * 우측에 추가되는 컴포넌트입니다. 주로 버튼을 추가합니다.
     */
    children?: React.ReactNode;
    /**
     * 좌측에 표시되는 제목입니다.
     */
    title?: React.ReactNode;
}
export function PageHead({ children, title }: PageHeadProps) {
    return (
        <Outer>
            <Inner>
                <Title>{title}</Title>
                <Flex.Row gap="12px">{children}</Flex.Row>
            </Inner>
        </Outer>
    );
}
