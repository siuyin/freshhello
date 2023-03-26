// routes/api/nuid.ts

import { next } from "nuid";

export const handler: Handlers = {
  GET(req) {
    const id = next();
    return new Response(id, {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
