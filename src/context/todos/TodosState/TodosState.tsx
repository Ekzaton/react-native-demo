import { useContext, useReducer } from 'react';
import { Alert } from 'react-native';

import {
  ADD_TODO,
  CLEAR_ERROR,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO
} from '../../../constants/actions';
import { BASE_URL } from '../../../constants/api';
import { Todo } from '../../../types/common';
import { Pages } from '../../../types/context';

import { PagesContext } from '../../pages/pagesContext';

import { TodosContext } from '../todosContext';
import { todosReducer } from '../todosReducer';

import { TodosStateProps } from './TodosState.props';

export const initialState = {
  todos: [] as Todo[],
  loading: false,
  error: null as Error | null
}

export default function TodosState(props: TodosStateProps) {
  const { children } = props;

  const { changePage } = useContext<Pages>(PagesContext);

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodo = async (title: string) => {
    const response = await fetch(`${BASE_URL}/todos.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    const data = await response.json();
    console.log(data);
    dispatch({ type: ADD_TODO, id: data.name, title });
  };

  const removeTodo = (id: string) => {
    const todo = state.todos.find((todo) => todo.id === id);
    Alert.alert(
        'Удаление',
        `Вы уверены что хотите удалить "${todo!.title}"?`,
        [
          {
            text: 'Отмена',
            style: "cancel",
          },
          {
            text: 'Удалить',
            style: 'destructive',
            onPress: () => {
              changePage(null);
              dispatch({ type: REMOVE_TODO, id });
            }
          }
        ]
    );
  };

  const updateTodo = (id: string, title: string) => dispatch({ type: UPDATE_TODO, id, title });

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoader = () => dispatch({ type: HIDE_LOADER })

  const showError = (error: string) => dispatch({ type: SHOW_ERROR, error })

  const clearError = () => dispatch({ type: CLEAR_ERROR })

  const value = {
    todos: state.todos,
    addTodo,
    removeTodo,
    updateTodo,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export type TodosState = typeof initialState;
