import { useContext, useReducer } from 'react';
import { Alert } from 'react-native';

import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../../../constants/actions';
import { Pages } from '../../../types/context';

import { PagesContext } from '../../pages/pagesContext';

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

  const { changePage } = useContext<Pages>(PagesContext);

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodo = (title: string) => dispatch({ type: ADD_TODO, title });

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

  const value = {
    todos: state.todos,
    addTodo,
    removeTodo,
    updateTodo,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export type TodosState = typeof initialState;
