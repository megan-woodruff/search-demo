import fetch from "node-fetch";

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
    headers: { "User-Agent": "chrome", "Authorization": '563492ad6f917000010000015d64bab4baa548e6b251192719dab82d' },
  }).then((r) => r.json());

export function getSearchResults({ query }) {
  return get(`https://api.pexels.com/v1/search${serializeParams({ query, per_page: 24 })}`);
}