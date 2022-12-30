export default {
  save: (key, value) => {
    localStorage.setItem(key, value);
  },
  fetch: (key) => localStorage.getItem(key),
  clear: () => {
    localStorage.clear();
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
