import { useReducer} from 'react';

import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../../../constants/actions';

import { TodosContext } from '../todosContext';
import { todosReducer } from '../todosReducer';

import { TodosStateProps } from './TodosState.props';

export const initialState = {
  todos: [
    { id: '1', title: 'test1' },
    { id: '2', title: 'test2' },
    { id: '3', title: 'test3' },
    { id: '4', title: 'test4' },
    { id: '5', title: 'test5' }
  ]
}

export default function TodosState(props: TodosStateProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodo = (title: string) => dispatch({ type: ADD_TODO, title });

  const removeTodo = (id: string) => dispatch({ type: REMOVE_TODO, id });

  const updateTodo = (id: string, title: string) => dispatch({ type: UPDATE_TODO, id, title });

  const value = {
    todos: state.todos,
    addTodo,
    removeTodo,
    updateTodo,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export type TodosState = typeof initialState;
