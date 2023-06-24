import React from 'react';

import styled from 'styled-components';

const StyledAvatar = styled.img<{ size: number }>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    object-fit: cover;
    user-select: none;
`;

/**
 * 이미지(주로 아바타)를 표시하기 위한 컴포넌트입니다. \<img\>를 사용합니다.
 */
export function Avatar({ src, alt = '', size = 32 }: { src: string; alt?: string; size?: number }) {
    return <StyledAvatar size={size} src={src} alt={alt} />;
}
