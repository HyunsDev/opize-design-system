import { DotsThreeVertical, IconContext } from "phosphor-react"
import styled from "styled-components"
import { ActionMenu } from "../actionMenu"
import { StatusBadge } from ".."
import { css } from "../../style"

const ItemButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 120ms;
    opacity: 0;
`

const ItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media ( max-width: 767px ) {
        position: absolute;
        top: 16px;
        right: 16px;
    }
`

const ItemDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 8px;
    border-right: solid 1px ${css.border3};
    border-left: solid 1px ${css.border3};
    border-top: solid 1px ${css.border3};

    @media ( max-width: 767px ) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 16px;
        gap: 8px;
    }


    &:first-child {
        border-top: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`

const ItemsDiv = styled.div`
    margin-top: 8px;
    border-top: solid 1px ${css.border3};
    border-bottom: solid 1px ${css.border3};
    border-radius: 8px;

    ${ItemDiv}:hover ${ItemButton} {
        opacity: 1;
    }
`

const AvatarDiv = styled.div<{flex?: number}>`
    display: flex;
    align-items: center;
    gap: 8px;
    flex: ${props => props.flex || 1};
    width: 100%;
`

const AvatarIcon = styled.img`
    border-radius: 999px;
    background-color: ${css.bg_element2};

    width: 36px;
    height: 36px;
`

const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const AvatarName = styled.div`
    color: ${css.text2};
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
`

const AvatarLabel = styled.div`
    font-size: 14px;
    color: ${css.text2};
`

const StateDiv = styled.div<{flex?: number}>`
    width: 120px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: ${props => props.flex || 1};
    width: 100%;

    @media ( max-width: 767px ) {
        margin-top: 4px;
        width: 100%;
        flex-direction: row;
        gap: 4px;
    }
`

const TypeDiv = styled.div<{flex?: number}>`
    color:  ${css.text2};
    font-size: 14px;
    margin-left: 8px;
    flex: ${props => props.flex || 1};
    width: 100%;
`

const TextsDiv = styled.div<{flex?: number}>`
    flex: ${props => props.flex || 3};
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`

const TextDiv = styled.div`
    font-weight: 600;
    color: ${css.text2};  
    font-size: 14px;
`

const SubTextDiv = styled.div`
    color: ${css.text2};  
    font-size: 14px;  
`

interface Avatar {
    type: 'avatar'
    flex?: number
    icon: string | React.ReactElement
    name: string
    label: string
}

interface Status {
    type: 'status'
    flex?: number
    status: 'stateless' | 'error' | 'warning' | 'done' | 'good'
    label?: string
}

interface Text {
    type?: 'text'
    flex?: number
    text?: string
    subText?: string
}

interface Buttons {
    type: 'buttons'
    flex?: number
    button: {
        label: string
        onClick: Function
        icon: React.ReactElement,
        color?: 'normal' | 'red'
    }[][]
}

type Item = (Avatar | Status | Text | Buttons)[]

interface Props {
    data: Item[]
}

const colorMap:((text: string) => 'red' | 'yellow' | 'green' | 'blue' | 'gray') = (text:string) => {
    const map:any= {
        stateless: 'gray',
        error: 'red',
        warning: 'yellow',
        done: 'blue',
        good: 'green'
    }
    return map[text] || 'gray'
}

function capitalize(str:string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const A = styled.a`
    text-decoration: none;
    color: ${css.text3};
    transition: 125ms;

    &:hover {
        color: ${css.text2};
    }
`


export function ItemsTable(props: Props) {
    return (
        <ItemsDiv>
            <IconContext.Provider
                value={{
                    size: 36,
                    weight: 'regular',
                    color: css.border1
                }}    
            >
            {
                props.data.map((item, i) => (
                    <ItemDiv key={i}>
                        {
                            item.map((menu, ii) => {
                                if (menu.type === 'avatar') {
                                    return (
                                        <AvatarDiv key={ii}>
                                            <>
                                                {
                                                    typeof menu.icon === 'string' 
                                                    ? <AvatarIcon src={menu.icon} alt="" />
                                                    : menu.icon
                                                }
                                            </>
                                            <AvatarInfo>
                                                <AvatarName>{menu.name}</AvatarName>
                                                <AvatarLabel>{menu.label}</AvatarLabel>
                                            </AvatarInfo>
                                        </AvatarDiv>
                                    )
                                } else if (menu.type === 'buttons') {
                                    return (
                                        <ItemButtons key={ii}>
                                            <IconContext.Provider
                                                value={{
                                                    size: 18,
                                                    weight: 'bold',
                                                }}    
                                            >
                                                <ActionMenu icon={<DotsThreeVertical />} actions={menu.button} />
                                            </IconContext.Provider>
                                        </ItemButtons>
                                        
                                    )
                                } else if (menu.type === 'status') {
                                    return (
                                        <StateDiv key={ii}>
                                            <StatusBadge color={colorMap(menu.status.toLowerCase())} text={capitalize(menu.status)} />
                                            {menu.label && <TypeDiv>{menu.label}</TypeDiv>}
                                        </StateDiv>
                                    )
                                } else {
                                    return (
                                        <TextsDiv key={ii}>
                                            {menu.text && (menu.text.startsWith('https')
                                                ? <TextDiv><A href={menu.text} target={'_blank'} rel="noreferrer">{`${menu.text.substring(0, 50)}${menu.text.length > 50 ? '...' : ''}`}</A></TextDiv>
                                                : <TextDiv>{`${menu.text.substring(0, 50)}${menu.text.length > 50 ? '...' : ''}`}</TextDiv>)}
                                            {menu.subText && <SubTextDiv>{`${menu.subText.substring(0, 50)}${menu.subText.length > 50 ? '...'  : ''}`}</SubTextDiv>}
                                        </TextsDiv>
                                    )
                                }

                            })
                        }
                    </ItemDiv>
                ))
            }
            </IconContext.Provider>
        </ItemsDiv>
    )
}

export type ItemsType = Item[]
export type ItemType = Item