import React from "react";
import { Balance } from "../Balance_Components/Balance";
import { shallow } from "enzyme";

test("Balance renders correctly", () => {
  const wrapper = shallow(
    <Balance LinkedAccount={false} balance={{ accounts: [] }} />
  );

  expect(wrapper).toMatchSnapshot();
});

// No props are being passed into this test
test("Balance renders Link account component when Linked Account is false", () => {
  const wrapper = shallow(<Balance LinkedAccount={false} />);

  console.log(wrapper.props().className);
  expect(wrapper.props().className).toBe("makeStyles-NoBalance-1");
});


test('Balance renders correctly',()=>{
  const wrapper = shallow(<Balance />)
      
  expect(wrapper.exists()).toBe(true)
});