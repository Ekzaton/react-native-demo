import { useReducer} from 'react';

import { Todo } from '../../../types/common';

import { TodosContext } from '../todosContext';
import { todosReducer } from '../todosReducer';

import { TodosStateProps } from './TodosState.props';

const initialState = {
  todos: [] as Todo[]
}

export default function TodosState(props: TodosStateProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
      <TodosContext.Provider
          value={{
            todos: state.todos
          }}
      >
        {children}
      </TodosContext.Provider>
  );
}
