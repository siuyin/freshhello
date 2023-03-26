// routes/api/random-uuid.ts

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const uuid = crypto.randomUUID();
    //return new Response(JSON.stringify(uuid), { // application/json
    return new Response(uuid, { // text/plain
      headers: { "Content-Type": "text/plain" },
    });
  },
};
