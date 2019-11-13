export const updateState = (updatedForm, event, 
                            inputIdentifier, checkValidity) => {
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