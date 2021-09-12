import {BUY_COOKIE} from './cookieTypes';

export const buyCookie = (cookiesCount = 1) => {
  return {
    type: BUY_COOKIE,
    info: 'Cookie redux action',
    payload: cookiesCount
  }
}
