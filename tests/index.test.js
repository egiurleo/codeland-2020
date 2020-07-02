import React from "react";
import { mount } from "enzyme";
import Home from "../pages/index";

describe("The Home Page", () => {
  it("welcomes the visiter", () => {
    const wrapper = mount(<Home staffList={[]} />);
    expect(
      wrapper
        .text()
        .includes('Welcome to "Your First Open Source Contribution"')
    ).toBe(true);
  });
});
