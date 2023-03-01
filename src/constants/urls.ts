const baseURL = process.env.REACT_APP_API || 'https://api.github.com';

const urls = {
    search: '/search',
    searchRepositories: '/search/repositories',
}

export {
    urls,
    baseURL
};
