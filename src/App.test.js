import React from 'react';
import App from './App';
import {UserFrom} from "./forms/user"
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";


configure({adapter: new Adapter()});

describe("App component", ()=>{
  it("Should render UserForm", ()=>{
    const wrapper = shallow(<App />)
    expect(wrapper.find(UserFrom)).toHaveLength(1);
  })
})


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
