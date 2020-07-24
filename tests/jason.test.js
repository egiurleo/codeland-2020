import React from "react";
import { mount } from 'enzyme';
import Jason from '../pages/participants/jason';

describe("Jason's page", () => {
  it("displays Jason's name", () => {
    const wrapper = mount(<Jason />);
    expect(wrapper.text().includes('Jason Robinson')).toBe(true);
  });
});
