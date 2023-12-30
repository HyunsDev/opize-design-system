import { cv } from '..';

export const typos = {
    h1: `
        size: 2.25rem;
        weight: 800;
        line-height: 2.5rem;
    `,
    h2: `
        size: 1.875rem;
        weight: 600;
        line-height: 2.25rem;
    `,
    h3: `
        size: 1.5rem;
        weight: 600;
        line-height: 2rem;
    `,
    h4: `
        size: 1.25rem;
        weight: 600;
        line-height: 1.75rem;
    `,
    p: `
        size: 1rem;
        weight: 400;
        line-height: 1.75rem;
    `,
    sm: `
        size: 0.875rem;
        weight: 400;
        line-height: 1.25rem;
    `,
    mono: `
        size: 1rem;
        weight: 400;
        line-height: 1.75rem;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    `,
    link: `
        color: ${cv.link};
        text-decoration: none;
        $:hover {
            text-decoration: underline;
        }
    `,
    input: `
        font-size: 0.875rem;
        line-height: 0.875rem;
        font-weight: 500;
    `,
    label: `
        color: ${cv.label};
        font-size: 0.875rem;
        line-height: 0.875rem;
        font-weight: 400;
    `,
    placeholder: `
        color: ${cv.placeholder};
        font-size: 0.875rem;
        line-height: 0.875rem;
        font-weight: 500;
    `,
};
