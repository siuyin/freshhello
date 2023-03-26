# My experiments with Deno and the fresh framework

## Deno and Fresh
Deno is a javascript and typescript runtime with support for webassembly.

Fresh is a frontend framework with built-in support for Tailwind CSS.
Components in Fresh are defined with JSX with the help of the preact library.

The framework's entry point is dev.ts / main.ts.
The framework then sets up fresh.gen.ts by scanning the filesystem, especially the routes and islands folders.

Routes are where you define your routes. index.ts lives in the routes folder.

Islands are islands of interactivity. This interactivity is highly dependent on the preact library.
I suggest the preact tutorial here: https://preactjs.com/tutorial/ 

## Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
