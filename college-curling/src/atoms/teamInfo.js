import { atom } from 'recoil';

/**
 * This atom keeps track of the school info for the school detail page
 */
export const teamInfo = atom({
    key: 'teamInfo',
    default: null,
});