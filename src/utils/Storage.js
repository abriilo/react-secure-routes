/**
 *    © 2022 REACT SECURE ROUTES
 *    Author: Abraham Mitiku
 *
 *
 */

//-------------------------------------------------------------------

// setting localStorage data's
export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  // getting localStorage data's
  export const getLocalStorage = (key) => {
    const value = window.localStorage.getItem(key);
  
    if (value) {
      return JSON.parse(value);
    }
  };
  