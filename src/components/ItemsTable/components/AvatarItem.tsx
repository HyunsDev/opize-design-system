import { styled } from 'styled-components';
import { cv } from '../../..';

export interface AvatarItemProps {
    flex?: number;
    width?: string;

    icon: React.ReactNode;
    name?: React.ReactNode;
    label?: React.ReactNode;
}

export const AvatarDiv = styled.div<{ $flex?: number; $width?: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    ${(props) => props.$flex && !props.$width && `flex: ${props.$flex};`}
    ${(props) => props.$width && `width: ${props.$width};`}
`;

const AvatarIcon = styled.img`
    border-radius: 999px;
    background-color: ${cv.background};

    width: 36px;
    height: 36px;
`;

const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const AvatarName = styled.div`
    color: ${cv.foreground};
    font-size: 14px;
`;

const AvatarLabel = styled.div`
    font-size: 14px;
    color: ${cv.gray700};
`;

export function AvatarItem({ flex = 1, width, icon, name, label }: AvatarItemProps) {
    return (
        <AvatarDiv
            $flex={flex}
            $width={width}
        >
            {typeof icon === 'string' ? (
                <AvatarIcon
                    src={icon}
                    alt=""
                />
            ) : (
                icon
            )}
            <AvatarInfo>
                {name && <AvatarName>{name}</AvatarName>}
                {label && <AvatarLabel>{label}</AvatarLabel>}
            </AvatarInfo>
        </AvatarDiv>
    );
}

AvatarItem.displayName = 'ItemsTable.Row.Avatar';
