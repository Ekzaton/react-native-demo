import PagesState from './src/context/pages/PagesState/PagesState';
import TodosState from './src/context/todos/TodosState/TodosState';
import useAssetsLoading from './src/hooks/useAssetsLoading';
import MainLayout from './src/layout/MainLayout/MainLayout';

export default function App() {
  const isLoadingComplete = useAssetsLoading();

  if (!isLoadingComplete) return null

  return (
      <PagesState>
        <TodosState>
          <MainLayout />
        </TodosState>
      </PagesState>
  );
}
