import React, {Component} from "react";
import {USER_FORM_DATA} from "./config";
import {
    FormBuilder, 
    getUpdateFormState, 
    checkValidity
} from "../../dynamic-form";

import classes from './user.module.css';

export class UserFrom extends Component {
    state = JSON.parse(JSON.stringify(USER_FORM_DATA));

    submitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let element in this.state.form) {
            formData[element] = this.state.form[element].value;
        }
        console.log(formData);
    }

    getForm = () => (
        <FormBuilder 
            data={this.state} 
            onChanged={this.elementChangedHandler}
            onSubmitted={this.submitHandler}
        />
    )

    elementChangedHandler = (event, inputIdentifier) => {
        const shallowClone = {
            ...this.state.form
        };
        const newState = getUpdateFormState({
            formData:shallowClone, 
            value:event.target.value,
            checked:this.getCheckValue(event),
            id:inputIdentifier, 
            validator:checkValidity
        });                            
        this.setState(newState);
    }

    getCheckValue = ({target:{type, checked}}) => {
        return type === "checkbox" ? checked : undefined;
    }

    render(){
        let form = this.getForm();
        return (
            <div className={classes.Contact}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}