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

  it("", async () => {
    try {
      let q = `query {
  continent (code: "AF") {
    name,
    code,
    countries {
      name,
    }
  }
  
}`;
      let res = await request(endPoint, q);
      let length = res.continent.countries.length
    
      expect(58).to.be.equal(length)
    } catch (error) {
        assert.fail(error)
    } 
  });
});
