export function setItem(name, item) {
  return window.localStorage.setItem(name, JSON.stringify(item));
}

export function getItem(name) {
  return JSON.parse(window.localStorage.getItem(name));
}
