import { assert, expect } from "chai";

import { request } from "graphql-request";

let endPoint = "https://countries.trevorblades.com/";

let query = `query {
  continents {
    name
  }
  
}`;

describe("Test GraphQL", () => {
  it("", async () => {
    try {
      let res = await request(endPoint, query);
      console.log(res);
    } catch (error) {
      assert.fail(error.message);
    }
  });
});
