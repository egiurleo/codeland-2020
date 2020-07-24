import React from 'react';
import { mount } from 'enzyme';
import San from '../pages/participants/san';

describe("San's page", () => {
  it("displays San's name", () => {
    const wrapper = mount(<San />);
    expect(wrapper.text().includes('Santhosh Appan')).toBe(true);
  });
});
