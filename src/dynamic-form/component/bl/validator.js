
export const performValidity = (value, rules, checked) => {
    if (!rules) return true;

    if(rules.required && checked !== undefined && checked === false) return false;
    
    if (rules.required && value.trim() === '') return false;

    if (rules.minLength && value.length < rules.minLength) return false;

    if (rules.maxLength && value.length > rules.maxLength) return false;

    if (rules.isEmail && isValidEmail(value) === false) return false;

    if (rules.isNumeric && isValidNumber(value) === false) return false

    return true;
}

const isValidEmail =(value) => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(value);
}

const isValidNumber = (value) => {
    const pattern = /^\d*(\.\d+)?$/;
    return pattern.test(value)
}