import React from 'react';
import RadioGroup from "../radio/RadioGroup"
import CheckBox from "../checkbox/CheckBox"
import classes from './Input.module.css';


const TextArea = (props) => {
    return (<textarea
        data-id={props.elementId}
        className={props.inputClasses}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />);
}

const DropDown = (props) => {
    return (<select
        data-id={props.elementId}
        className={props.inputClasses}
        value={props.value}
        onChange={props.changed}>
        {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
                {option.displayValue}
            </option>
        ))}
    </select>);
}

const InputText = (props) => {
    return (<input
        data-id={props.elementId}
        className={props.inputClasses}
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value} />);
}

const Input = ( props ) => {
    let inputElement = null;
    let containerClasses = [classes.Input];
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <InputText {...props} 
                    inputClasses={inputClasses.join(' ')} />;
            break;
        case ( 'textarea' ):
            inputElement = <TextArea {...props} 
                    inputClasses={inputClasses.join(' ')} />;
            break;
        case ( 'select' ):
            inputElement = <DropDown {...props} 
                    inputClasses={inputClasses.join(' ')} />;
            break;
        case ('inputRadio'):
            containerClasses.push(classes.textAlignleft)
            inputElement = <RadioGroup {...props} />;
            break;
        case ('inputCheckbox'):
            containerClasses.push(classes.textAlignleft)
            inputElement = <CheckBox {...props} />;
            break;
        default:
            inputElement = <InputText {...props} 
            inputClasses={inputClasses.join(' ')} />;
    }

    return (
        <div className={containerClasses.join(' ')}>
            <label >
                <span className={classes.Label}>{props.label}</span>
                {inputElement}
            </label>
        </div>
    );

};

export default Input;