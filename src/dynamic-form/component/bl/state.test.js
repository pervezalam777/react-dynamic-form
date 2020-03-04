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
            undefined,
            id:'name', 
            validator:mockValidator})
        expect(newFormItems.formIsValid).toBeTruthy();
        expect(newFormItems.form.name.value).toBe('Pervez');
        expect(newFormItems.form.name.touched).toBeTruthy();
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledWith('Pervez', {}, undefined)
    })

    it('should update form item and make it a invalid form', () => {
        mockValidator.mockReturnValue(false);
        let newFormItems = updateState({
            formData:formItems.form, 
            value:'', 
            undefined,
            id:'name', 
            validator:mockValidator})
        expect(newFormItems.formIsValid).toBeFalsy();
        expect(newFormItems.form.name.value).toBe('');
        expect(newFormItems.form.name.touched).toBeTruthy();
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledWith('', {}, undefined)
    })

    it('should update update checked value of form data when element type is "inputCheckbox"', ()=> {
        formItems = JSON.parse(JSON.stringify(formDataWithCheckbox));
        mockValidator.mockReturnValue(true);
        let newFormItems = updateState({
            formData:formItems.form, 
            value:'agreed',
            checked:true,
            id:'agree', 
            validator:mockValidator})
        expect(newFormItems.formIsValid).toBeTruthy();
        expect(newFormItems.form.agree.value).toBe('agreed');
        expect(newFormItems.form.agree.touched).toBeTruthy();
        expect(newFormItems.form.agree.elementConfig.checked).toBeTruthy();
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledWith('agreed', {}, true)
    
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

const formDataWithCheckbox = {
    form: {
        agree: {
            value: '',
            elementType: "inputCheckbox",
            elementConfig:{
                checked: false
            },
            validation: {},
            valid: false,
            touched: false
        }
    },
    formIsValid: false
}