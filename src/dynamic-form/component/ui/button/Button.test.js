import React from "react"
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";

configure({adapter: new Adapter()});

describe('Button component', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Button/>);
    })

    it('Should render with disabled mode', ()=>{
        wrapper.setProps({disabled:true})
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.props().disabled).toBeTruthy();
    });

    it('Should render with enabled mode', ()=>{
        wrapper.setProps({disabled:false})
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.props().disabled).toBeFalsy();
    })

    it('Should have class name "Button Success" if prop type btnType pass with class name "Success"', () => {
        wrapper.setProps({btnType:"Success"})
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.props().className).toBe("Button Success");
    })

    it('Should call clicked method on clicking on button', () => {
        const mockFn = jest.fn();
        wrapper.setProps({clicked:mockFn});
        const button = wrapper.find('button').at(0);
        button.simulate("click");
        expect(mockFn).toHaveBeenCalled();
    })
})