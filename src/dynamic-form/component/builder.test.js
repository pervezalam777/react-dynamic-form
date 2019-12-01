import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Builder} from "./builder"

configure({adapter:new Adapter()})

describe("Builder form", ()=>{

    it("should render form based on provided configuratoin ", ()=>{
        let mockfn = jest.fn();
        let wrapper = shallow(<Builder data={config} onChange={mockfn} />);
        let html = wrapper.html();
        //HTML: ("<form><div class="Input"><label>
        //<span class="Label"></span>
        //<input type="text" data-id="name" class="InputElement" placeholder="Your Name" value=""/>
        //</label></div><button disabled="" class="Button Success">Submit</button></form>")
        expect(html).toBeTruthy();
        expect(html.includes('<form>')).toBeTruthy();
        expect(html.includes('Submit')).toBeTruthy();
        expect(html.includes('</button>')).toBeTruthy();
        expect(html.includes('disabled')).toBeTruthy();
        expect(html.includes('data-id="name"')).toBeTruthy();
        expect(html.includes('placeholder="Your Name"')).toBeTruthy();
    })

    it("should dispatch event on change and notify in parent", ()=>{
        let mockfn = jest.fn();
        let mountWrapper = mount(<Builder data={config} onChanged={mockfn} />)
        let form = mountWrapper.find('form');
        let input = form.props().children[0][0];
        input.props.changed({
            "target": {"attributes":{"data-id":{"value":"some text"}}}
        })
        expect(mockfn).toHaveBeenCalled();
    })
})

const config = {
    form: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    },
    formIsValid: false
}