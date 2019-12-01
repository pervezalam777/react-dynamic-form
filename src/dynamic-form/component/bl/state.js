
export const updateState = ({formData, value, id, validator}) => {

    formData[id] = updateFormItem(formData[id], value, 
                        validator(value, formData[id].validation));
    
    let formIsValid = true;
    for (let id in formData) {
        formIsValid = formData[id].valid && formIsValid;
    }

    return {form: formData, formIsValid: formIsValid}
}

const updateFormItem = (formItem, value, isValid) => {
    let item = {...formItem }
    item.value = value;
    item.valid = isValid;
    item.touched = true;
    return item
}

