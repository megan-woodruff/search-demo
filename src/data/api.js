import fetch from "node-fetch";

const API_KEY = '563492ad6f917000010000017d2c1cb70dc64ff285a6a96d699261c9'

const serializeParams = (params) => {
  const serializedParams = Object.keys(params).map(key => {
		let val = params[key]
		if (val) return key + '=' + encodeURIComponent(val)
		return ''
	}).filter(x => x !== '').join('&')
  return `?${serializedParams}`
}

const get = (path) =>
  fetch(path, {
    headers: { "User-Agent": "chrome", "Authorization": API_KEY },
  }).then((r) => r.json());

export function getSearchResults({ query }) {
  return get(`https://api.pexels.com/v1/search${serializeParams({ query, per_page: 24 })}`);
}