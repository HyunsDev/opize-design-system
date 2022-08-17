// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
