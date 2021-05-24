const TokenKey = 'Admin-Token'
const UserType = 'Admin-User-Type'

export function getLocal(data) {
  return localStorage.getItem(data)
}
export function setLocal(key, data) {
  return localStorage.setItem(key, data)
}
export function removeLocal(key, data) {
  return localStorage.removeItem(key, data)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserType() {
  return Cookies.get(UserType)
}

export function setUserType(type) {
  return Cookies.set(UserType, type)
}

export function removeUserType() {
  return Cookies.remove(UserType)
}
