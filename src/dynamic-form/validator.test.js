import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {performValidity as checkValidity} from "./validator"

configure({adapter: new Adapter()});

describe("Form validator", () => {
    const requiredRule = {required:true};
    const minLengthRule = {...requiredRule, minLength:3};
    const maxLengthRule = {...requiredRule, maxLength:6};
    const emailRule = {...requiredRule, isEmail:true};
    const numericRule = {...requiredRule, isNumeric:true};


    it("should return true if there is not rules", ()=>{
        let isValid = checkValidity('');
        expect(isValid).toBeTruthy();
    })

    it("should retrun false when rules.required", () => {
        let isValid = checkValidity('', requiredRule);
        expect(isValid).toBeFalsy();
    })

    it("should return true when value is 'test' and rules.required", () =>{
        let isValid = checkValidity('test', {required:true})
        expect(isValid).toBeTruthy();
    })

    it("should return false if value is less than defined minimum length", ()=>{     
        let isValid = checkValidity('ab', minLengthRule)
        expect(isValid).toBeFalsy()
    })

    it("should return true if value is greater than or equal to defined minimum length", ()=>{
        let isValid = checkValidity('abcd', minLengthRule)
        expect(isValid).toBeTruthy()

        isValid = checkValidity('abc', minLengthRule)
        expect(isValid).toBeTruthy() 
    })

    it("should return false if value is greater than maximum length", () =>{
        let isValid = checkValidity("1100624", maxLengthRule)
        expect(isValid).toBeFalsy();
    })

    it('should return ture if the email is valid', ()=>{
        let isValid = checkValidity("pervezalam777@gmail.com", emailRule);
        expect(isValid).toBeTruthy();
    })

    it('should return false if the email is not valid', ()=> {
        let invalidEmails = ['pervezalam777', 
                            "pervezalam777@", 
                            "pervezalam777@.com",
                            "pervezalam@gmail",
                            "@gmail.com",
                            "pervezalam.gmail.com",
                            "@.com"
                        ];
        let isValid = false;
        invalidEmails.forEach(item => {
            isValid = checkValidity(item, emailRule);
            expect(isValid).toBeFalsy();
        })
    })

    it('should return true if the input value is a number', ()=>{
        let validNumbers = ['12345', '234.5', '1.00001', '110062'];
        let isValid = true
        validNumbers.forEach(num => {
            isValid = checkValidity(num, numericRule);
            expect(isValid).toBeTruthy();
        })
    })

    it('should return false if the input value is not a number', ()=>{
        // null and undefinde is out of scope 
        // value should be a valid string
        let invalidNumbers = ['abc', 'abc123', '123abc', '.@$%5'];
        let isValid = false
        invalidNumbers.forEach(notANumber => {
            isValid = checkValidity(notANumber, numericRule);
            expect(isValid).toBeFalsy(); 
        })
    })
})