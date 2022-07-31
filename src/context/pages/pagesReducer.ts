import { CHANGE_PAGE } from '../../constants/actions';

import { PagesState } from './PagesState/PagesState';

export const pagesReducer = (state: PagesState, action: any) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload;
    default:
      return state;
  }
}
