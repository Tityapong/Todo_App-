

// "use client";
// import { FC, useState } from "react";
// import { todoType } from "@/types/todoType";
// import Todo from "./todo";
// import AddTodo from "./AddTodo";
// import {
//   addTodo,
//   deleteTodo,
//   editTodo,
//   toggleTodo,
// } from "@/actions/todoAction";



// interface Props {
//   todos: todoType[];
//   user: any;
// }

// const Todos: FC<Props> = ({ todos, user }) => {
//   const [todoItems, setTodoItems] = useState<todoType[]>(todos);

//   const createTodo = async (text: string) => {
//     //addUser();
    
//     const id = (todoItems.at(-1)?.id || 0) + 1;
//     try {
//       await addTodo(id, text, user?.id);
//       setTodoItems((prev) => [...prev, { id, text, done: false , userId:user?.id}]);
//     } catch (error) {
//       console.error("Failed to create todo:", error);
//     }
//   };

//   const changeTodoText = async (id: number, text: string) => {
//     try {
//       await editTodo(id, text);
//       setTodoItems((prev) =>
//         prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
//       );
//     } catch (error) {
//       console.error("Failed to edit todo:", error);
//     }
//   };

//   const toggleIsTodoDone = async (id: number) => {
//     try {
//       await toggleTodo(id);
//       setTodoItems((prev) =>
//         prev.map((todo) =>
//           todo.id === id ? { ...todo, done: !todo.done } : todo
//         )
//       );
//     } catch (error) {
//       console.error("Failed to toggle todo status:", error);
//     }
//   };

//   const deleteTodoItem = async (id: number) => {
//     try {
//       await deleteTodo(id);
//       setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
//     } catch (error) {
//       console.error("Failed to delete todo:", error);
//     }
//   };

//   return (
//     <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
//       <div className="text-5xl font-medium">To-do app</div>
//       <div className="w-full flex flex-col mt-8 gap-2">
//         {todoItems.map((todo) => (
//           <Todo
//             key={todo.id}
//             todo={todo}
//             changeTodoText={changeTodoText}
//             toggleIsTodoDone={toggleIsTodoDone}
//             deleteTodoItem={deleteTodoItem}
//           />
//         ))}
//       </div>
//       <AddTodo createTodo={createTodo} />
//     </main>
//   );
// };

// export default Todos;
"use client";

import { FC, useState } from "react";
import { todoType } from "@/types/todoType";
import Todo from "./Todo1";
import AddTodo from "./AddTodo";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "@/actions/todoAction";

interface User {
  id: number;
  // Add other user properties as needed
}

interface Props {
  todos: todoType[];
  user: User;
}

const Todos: FC<Props> = ({ todos, user }) => {
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  const createTodo = async (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1;
    try {
      await addTodo(id, text, user.id);
      setTodoItems((prev) => [...prev, { id, text, done: false, userId: user.id }]);
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
  };

  const changeTodoText = async (id: number, text: string) => {
    try {
      await editTodo(id, text);
      setTodoItems((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
      );
    } catch (error) {
      console.error("Failed to edit todo:", error);
    }
  };

  const toggleIsTodoDone = async (id: number) => {
    try {
      await toggleTodo(id);
      setTodoItems((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    } catch (error) {
      console.error("Failed to toggle todo status:", error);
    }
  };

  const deleteTodoItem = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <h1 className="text-5xl font-medium">To-do app</h1>
      <div className="w-full flex flex-col mt-8 gap-2">
        {todoItems.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
      <AddTodo createTodo={createTodo} />
    </main>
  );
};

export default Todos;

