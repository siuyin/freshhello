import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <form>
          <label for="fname" class="text-blue-500 p-1">First name:</label>
          <input class="p-1 border" type="text" id="fname" />
        </form>
        <div class="flex text-lg justify-centre">
          <div class="float-right text-green-700">
            The <strong>quick</strong> brown fox
          </div>
          <p class="ml-2">A new paragraph here.</p>
        </div>
        <p class="my-6 text-blue-500">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
