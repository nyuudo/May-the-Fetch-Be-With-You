// updated syntax for MSW 2.0
import { http, HttpResponse } from "msw";
import { mockStarshipResponse } from "./mockStarshipResponse";

export const handlers = [
  http.get("https://swapi.dev/api/starships/", () => {
    return HttpResponse.json(mockStarshipResponse);
  }),
];
