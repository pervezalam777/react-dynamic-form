import React, {Component} from "react"

import Input from "./component/ui/input/Input"
import Button from "./component/ui/button/Button"

export class FormBuilder extends Component {
   
    elementChangedHandler = (event) => {
        this.props.onChanged(event, 
            event.target.attributes["data-id"].value);
    }

    mapFormDataWithIdAndConfig = (data) => {
        const formElementsArray = [];
        for (let key in data.form) {
            formElementsArray.push({
                id: key,
                config: data.form[key]
            });
        }
        return formElementsArray
    }

    render(){
        let {data, onSubmitted} = this.props
        const formElementsArray = this.mapFormDataWithIdAndConfig(data);
        return (
            <form onSubmit={onSubmitted}>
                {formElementsArray.map(element => (
                    <Input 
                        key={element.id}
                        label={element.config.label}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        invalid={!element.config.valid}
                        shouldValidate={element.config.validation}
                        touched={element.config.touched}
                        elementId={element.id}
                        group={element.config.group}
                        changed={this.elementChangedHandler} />
                ))}
                <Button btnType="Success" disabled={!data.formIsValid}>Submit</Button>
            </form>
        )
    }
}

export const getUpdateFormState = (updatedForm, event, inputIdentifier) => {
    const updatedFormElement = { 
        ...updatedForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
        formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    return {form: updatedForm, formIsValid: formIsValid}
}

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^(([1-9]*)|(([1-9]*)\.([0-9]*)))$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}
