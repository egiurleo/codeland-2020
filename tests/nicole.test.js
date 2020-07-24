import React from "react";
import { mount } from 'enzyme';
import Nicole from '../pages/participants/nicole';

describe("Nicole's page", () => {
    it("displays Nicole's name", () => {
        const wrapper = mount(<Nicole />);
        expect(wrapper.text().includes('Nicole Lucien')).toBe(true);
    });
});
