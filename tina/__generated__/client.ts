import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: 'C:/Users/user/Projects/taiga-iot-docs/tina/__generated__/.cache/1787806041763', url: 'http://localhost:4001/graphql', token: 'null', queries,  });
export default client;
  