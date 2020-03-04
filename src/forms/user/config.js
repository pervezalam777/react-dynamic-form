export const USER_FORM_DATA = {
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
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        gender: {
            elementType: 'inputRadio',
            group: [
                {
                    elementConfig: {
                        type: 'radio',
                        name: 'gender',
                        value: 'male'
                    },
                    label: 'Male'
                },
                {
                    elementConfig: {
                        type: 'radio',
                        name: 'gender',
                        value: 'female'
                    },
                    label: 'Female'
                }
            ],
            value: 'male',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        house: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'House No'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        locality: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'locality'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 6,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'india', displayValue: 'India'},
                    {value: 'australia', displayValue: 'Australia'},
                    {value: 'newzealand', displayValue: 'New Zealand'},
                    {value: 'america', displayValue:'United States'},
                    {value: 'england', displayValue:'United Kingdom'}
                ]
            },
            value: 'india',
            validation: {},
            valid: true
        },
        agree: {
            elementType: 'inputCheckbox',
            elementConfig: {
                type: 'checkbox',
                name:"agree",
                value:"agreed",
                checked:false
            },
            checkBoxLabel:"Agree",
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        
    },
    formIsValid: false
}