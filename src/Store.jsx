import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
    deleteTodo: (index) => set((state) => ({ todos: state.todos.filter((item,i) => i !== index) })),
  }));

  export default useTodoStore;