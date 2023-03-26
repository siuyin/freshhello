import { useRef } from "preact/hooks";

function Burger({ menu }) {
  const burger = useRef();
  function burgerClicked() {
    if (menu.current.classList.contains("hidden")) {
      menu.current.classList.remove("hidden");
      return;
    }
    menu.current.classList.add("hidden");
  }
  return (
    <div class="flex justify-end">
      <div
        ref={burger}
        onClick={burgerClicked}
        class="mt-2 px-4 cursor-pointer md:hidden"
        id="burger"
      >
        <svg
          class="w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
export default function Menu() {
  const menu = useRef();
  return (
    <nav>
      <div class="flex justify-between">
        <h1 class="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" class="hover:text-gray-700">Food Ninja</a>
        </h1>
        <Burger menu={menu} />
      </div>
      <ul ref={menu} class="mt-6 text-sm hidden md:block" id="menu">
        <li class="text-gray-700 font-bold">
          <a
            href="#"
            class="flex px-4 justify-end py-1 border-r-4 border-primary"
          >
            <span>Home</span>
            <svg
              class="w-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex px-4 justify-end py-1 border-r-4 border-white"
          >
            <span>About</span>
            <svg
              class="w-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex px-4 justify-end py-1 border-r-4 border-white"
          >
            <span>Contact</span>
            <svg
              class="w-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
