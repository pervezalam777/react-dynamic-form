import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {UserFrom} from "./index"

configure({adapter:new Adapter()})

describe("UserForm", ()=>{
    let wrapper
    let instance
    beforeEach(() => {
        wrapper = shallow(<UserFrom />);
        instance = wrapper.instance();
    })

    it("should render form with heading 'Contact Data'", ()=>{
        let heading = wrapper.find('h4');
        expect(heading).toBeTruthy();
    })

    it("should update the form state on calling 'elementChangedHandler'", ()=>{
        expect(instance.state.form.name.value).toEqual("");
        instance.elementChangedHandler({target:{value:"pervez"}}, "name");
        expect(instance.state.form.name.value).toEqual("pervez");
    })

    it("should print form data on console on calling 'submitHandler'", ()=>{
        let mockfn = jest.fn();
        instance.submitHandler({preventDefault:mockfn});
        expect(mockfn).toHaveBeenCalled();
    })

})