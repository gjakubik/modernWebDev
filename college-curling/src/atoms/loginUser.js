import { atom, selector } from 'recoil';

/**
 * Atom that allows us to easily share state
 * Now any component can easily tell if the user is logged in
 * This stores the current parse user oject
 */
export const loginUser = atom({
    key: 'loginUser',
    default: null,
});

/**
 * This selector allows us to get a boolean value back
 * about wether the user is logged in or not
 */
export const isLoggedIn = selector({
    key: 'isLoggedIn',
    get: ({ get }) => (get(loginUser) === null ? false : true)
})