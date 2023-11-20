const apiKey = import.meta.env.VITE_API_KEY;
export const API_ENDPOINT = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=${apiKey}`;

export const API_DELAYTIME = 1500;
