import React from "react";
import { mount } from 'enzyme';
import Emily from '../pages/participants/emily';

describe("Emily's page", () => {
  it("displays Emily's name", () => {
    const wrapper = mount(<Emily />);
    expect(wrapper.text().includes('Emily Giurleo')).toBe(true);
  });
});
