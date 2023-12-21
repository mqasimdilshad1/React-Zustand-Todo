import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, { text: newTodo, isFavorite: false }],
    })),
  deleteTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((items, i) => i !== index) })),
  toggleFavorite: (index) =>
    set((state) => {
      const updatedTodos = [...state.todos];
      updatedTodos[index].isFavorite = !updatedTodos[index].isFavorite;
      return { todos: updatedTodos };
    }),
}));

export default useTodoStore;
