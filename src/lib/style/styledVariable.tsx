import { css } from "styled-components"
import { cv } from "./cv"

const text = {
    body1: css`
        font-family: ${cv.fontFamily};
        font-weight: ${cv.fontWeightRegular};
        font-size: ${cv.fontSizeNormal};
        line-height: ${cv.lineHeightNormal};
    `,
    caption1: css`
        font-family: ${cv.fontFamily};
        font-weight: ${cv.fontWeightRegular};
        font-size: ${cv.fontSize300};
        line-height: ${cv.lineHeight200};
    `
}




export const sv = {
    text
}