import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const [myBtn, setMyBtn] = useState(false);

  function myBtnClicked() {
    console.log("clicked");
  }
  return (
    <>
      <div class="flex gap-2 w-1/3 items-center">
        <p class="flex-grow-1 font-light text-6xl">{count}</p>
        <Button class="gerbau" onClick={() => setCount(count - 1)} text="-1">
        </Button>
        <Button onClick={() => setCount(count + 1)} text="+1"></Button>
      </div>
      <div>
        <button
          onClick={myBtnClicked}
          class="p-2 focus:bg-red-500 focus:text-white text-lg border-gray-300 border rounded-md bg-green-200"
        >
          MyButton
        </button>
      </div>
    </>
  );
}
