import { GITHUB_TOKEN } from "./Token";

export const apiOptions = {
    baseUrl: 'https://api.github.com/users',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${GITHUB_TOKEN}`
    }
};