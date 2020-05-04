import React from "react";
import { Dashboard } from "../Dashboard";
import { shallow } from "enzyme";
import LinkedTransactions from "../Dashboard";

test("Dashboard renders correctly", () => {
  const wrapper = shallow(<Dashboard LinkedAccount={false} blocks={[]} />);

  expect(wrapper.exists()).toBe(true);
});
