import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Todos } from "../components/Todos";

export default function Home() {
  return (
    <>
      <Head>
        <title> TODO APP</title>
        <meta name="keywords" content="todo-app" />
      </Head>
      <Nav />
      <Todos />
    </>
  );
}
