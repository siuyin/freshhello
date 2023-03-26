import { Head } from "$fresh/runtime.ts";
import Menu from "../islands/Menu.tsx";

export function Card({ image, imagealt, descr, credit, cooktime }) {
  return (
    <div class="bg-white rounded overflow-hidden hover:shadow-lg shadow-md relative">
      <img
        src={image}
        alt={imagealt}
        class="w-full h-32 sm:h-48 object-cover"
      />
      <div class="m-4">
        <span class="font-bold">{descr}</span>
        <span class="block text-gray-500 text-sm">{credit}</span>
      </div>
      <div class="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-2 left-2">
        <svg
          class="w-5 inline-block"
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
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span>{cooktime}</span>
      </div>
    </div>
  );
}

function PriBtn({ txt }) {
  return (
    <a
      href="#"
      class="hover:bg-primary hover:text-white border-primary md:border-2 ml-2 text-primary rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider transition ease-out duration-500"
    >
      <span>{txt}</span>
    </a>
  );
}
function Nav() {
  return <Menu />;
}
function LoadMore() {
  return (
    <div class="mt-4 flex justify-center">
      <div class="bg-secondary-100 text-secondary-200 border-secondary md:border-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
        Load more
      </div>
    </div>
  );
}

function MostPopular() {
  return (
    <>
      <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
        Most Popular
      </h4>
      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* cards go here */}
        <Card
          image="/img/stew.jpg"
          imagealt="stew"
          descr="5 Bean Chilli Stew"
          credit="Recipe by Mario"
          cooktime="25 mins"
        />
        <Card
          image="/img/noodles.jpg"
          imagealt="noodles"
          descr="Veg Noodles"
          credit="Recipe by Mario"
          cooktime="25 mins"
        />
        <Card
          image="/img/curry.jpg"
          imagealt="curry"
          descr="Tofu Curry"
          credit="Recipe by Mario"
          cooktime="25 mins"
        />
      </div>
    </>
  );
}

function Latest() {
  return (
    <>
      <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest</h4>
      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* cards go here */}
        <Card
          image="/img/stew.jpg"
          imagealt="stew"
          descr="5 Bean Chilli Stew"
          credit="Recipe by Mario"
          cooktime="25 mins"
        />
        <Card
          image="/img/noodles.jpg"
          imagealt="noodles"
          descr="Veg Noodles"
          credit="Recipe by Mario"
          cooktime="25 mins"
        />
        <Card
          image="/img/curry.jpg"
          imagealt="curry"
          descr="Tofu Curry"
          credit="Recipe by Mario"
          cooktime="25 mins"
        />
      </div>
    </>
  );
}

export default function TailwindTry() {
  return (
    <div class="text-gray-600 font-body grid md:grid-cols-5">
      <div class="md:col-span-1 md:flex md:justify-end">
        <Nav />
      </div>

      <main class="px-16 py-6 bg-gray-100 md:col-span-4">
        <div class="flex justify-center md:justify-end">
          <PriBtn txt="Log in" />
          <PriBtn txt="Sign up" />
        </div>

        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-2xl font-semibold">for ninjas</h3>
        </header>
        <div>
          <Latest />
          <MostPopular />
        </div>

        <LoadMore />
      </main>
    </div>
  );
}
