
export const updateState = ({formData, value, checked, id, validator}) => {

    formData[id] = updateFormItem(formData[id], value, checked, 
                        validator(value, formData[id].validation, checked));
    
    let formIsValid = true;
    for (let id in formData) {
        formIsValid = formData[id].valid && formIsValid;
    }

    return {form: formData, formIsValid: formIsValid}
}

const updateFormItem = (formItem, value, checked, isValid) => {
    let item = {...formItem }
    item.value = value;
    item.valid = isValid;
    item.touched = true;
    if(item.elementType === "inputCheckbox"){
        item.elementConfig.checked = checked
    }
    return item
}

