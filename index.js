const request = require('snekfetch');

const API = 'https://api.what3words.com/v2';


const clips = {
  radius: (lat, long, km) => `radius(${lat},${long},${km})`,
  focus: (km) => `focus(${km})`,
  boundingBox: (nelat, nelng, swlat, swlng) => `bbox(${nelat},${nelng},${swlat},${swlng})`,
};

function what3words(key) {
  function req(path, options = {}) {
    return request.get(`${API}${path}`)
      .query(Object.assign({
        key,
        format: 'json',
        lang: 'en',
        display: 'terse',
      }, options))
      .then((r) => r.body);
  }

  return {
    clip: clips,
    forward(addr) {
      return req('/forward', { addr });
    },
    reverse(lat, long) {
      return req('/reverse', { coords: `${lat},${long}` });
    },
    autoSuggest(addr, { clip, count, ml }) {
      return req(`/autosuggest${ml ? '-ml' : ''}`, { addr, clip, count });
    },
    standardBlend(addr, { lang, focus, ml }) {
      return req(`/standardblend${ml ? '-ml' : ''}`, {
        addr, lang,
        focus: focus ? `${focus[0]},${focus[1]}` : undefined,
      });
    },
    grid(...args) {
      return req('/grid', { bbox: clips.bbox(...args) });
    },
    languages() {
      return req('/languages');
    },
  };
}

module.exports = what3words;

