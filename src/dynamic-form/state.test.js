import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {updateState} from "./state"

configure({adapter: new Adapter()});

describe("State ", ()=> {
    let formItems;
    const mockValidator = jest.fn();
    beforeEach(()=>{
        formItems = JSON.parse(JSON.stringify(formData));
    })

    it("should update form item and make it a valid form ", ()=> {
        mockValidator.mockReturnValue(true);
        let newFormItems = updateState({
            formData:formItems.form, 
            value:'Pervez', 
            id:'name', 
            validator:mockValidator})
        expect(newFormItems.formIsValid).toBeTruthy();
        expect(newFormItems.form.name.value).toBe('Pervez');
        expect(newFormItems.form.name.touched).toBeTruthy();
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledWith('Pervez', {})
    })

    it('should update form item and make it a invalid form', () => {
        mockValidator.mockReturnValue(false);
        let newFormItems = updateState({
            formData:formItems.form, 
            value:'', 
            id:'name', 
            validator:mockValidator})
        expect(newFormItems.formIsValid).toBeFalsy();
        expect(newFormItems.form.name.value).toBe('');
        expect(newFormItems.form.name.touched).toBeTruthy();
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledWith('', {})
    })
})

const formData = {
    form: {
        name: {
            value: '',
            validation: {},
            valid: false,
            touched: false
        },
        email: {
            value: 'pervezalam777@gmail.com',
            validation: {},
            valid: true,
            touched: true
        }
    },
    formIsValid: false
}