import React, {Component} from "react"
import {USER_FORM_DATA} from "./config"
import {FormBuilder, getUpdateFormState, checkValidity} from "../../dynamic-form"

import classes from './user.module.css';

export class UserFrom extends Component {
    state = JSON.parse(JSON.stringify(USER_FORM_DATA));

    submitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
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
        //const newState = getUpdateFormState(shallowClone, event, 
        //                            inputIdentifier, checkValidity);
        const newState = getUpdateFormState({
            formData:shallowClone, 
            value:event.target.value, 
            id:inputIdentifier, 
            validator:checkValidity
        });                            
        this.setState(newState);
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