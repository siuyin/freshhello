import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  function clicked() {
    console.log(props);
  }
  return (
    <button //{...props}
     //disabled={!IS_BROWSER || props.disabled}
    class="px-2 py-1  text-xl onClick={clicked}">
      {props.text}
    </button>
  );
}
