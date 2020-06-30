import React from "react";
import { mount } from 'enzyme';
import renderer from "react-test-renderer";
import Staff from '../pages/staff';

describe("The Staff Page", () => {
  it("displays Emily Giurleo's name", () => {
    const wrapper = mount(<Staff />);
    expect(wrapper.text().includes('Emily Giurleo')).toBe(true);
  });
});
