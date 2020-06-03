export const isLoggedIn = () => {
    let session = getSession();
    return session;
};
  
export const getSession = () => {
    return getObjectFromLocal("session");
};
  
export function setObjectToLocal(key, value) {
    if (window && window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
}
  
export function getObjectFromLocal(key) {
    if (typeof window === "undefined") {
      return null;
    }
  
    if (window && window.localStorage) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
}
  
export function removeItem(key) {
    if (window && window.localStorage) {
      localStorage.removeItem(key);
    }
}