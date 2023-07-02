import { rest } from "msw";
import { mockStarshipResponse } from "./mockStarshipResponse";

export const handlers = [
  rest.get("https://swapi.dev/api/starships/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockStarshipResponse));
  }),
];
