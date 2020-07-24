import React from "react";
import { mount } from 'enzyme';
import Tarik from '../pages/participants/tarik';

describe("Tarik's page", () => {
  it("displays Tarik's name", () => {
    const wrapper = mount(<Tarik />);
    expect(wrapper.text().includes('Tarik IRHBOULA')).toBe(true);
  });
});
