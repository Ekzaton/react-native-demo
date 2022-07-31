import { useReducer} from 'react';

import { CHANGE_PAGE } from '../../../constants/actions';

import { PagesContext } from '../pagesContext';
import { pagesReducer } from '../pagesReducer';

import { PagesStateProps } from './PagesState.props';

export const initialState = null as string | null;

export default function PagesState(props: PagesStateProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(pagesReducer, initialState);

  const changePage = (id: string | null) => dispatch({ type: CHANGE_PAGE, payload: id });

  const value = {
    todoID: state,
    changePage
  };

  return <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
}

export type PagesState = typeof initialState;
