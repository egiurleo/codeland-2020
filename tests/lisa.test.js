import React from "react";
import { mount } from "enzyme";
import Lisa from "../pages/participants/lisa.js";

describe("Lisa's page", () => {
  it("displays Lisa's name", () => {
    const wrapper = mount(<Lisa />)
    expect(wrapper.text().includes('Lisa Hostetler')).toBe(true)
  })
})
