import { getData } from "@/actions/todoAction";
import { getAllUsers, getUser } from "@/actions/userAction";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

export default async function Home() {
  //const users = await getAllUsers();
 // console.log("users", users); 
  // const data = await getData(users[0].id);
  // const user = await getUser(users[0].id);
  // console.log("user", user);
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Todos todos={data} user={users[0]} /> */}
      </main>
    </div>
  );
}
