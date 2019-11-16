import React from 'react';

import classes from './Input.module.css';

const RadioGroup = (props) => {
    return  props.group.map(element => (
        <label key={element.elementConfig.value} 
            className={classes.RadioContainer}>
            {element.label} 
            <input
                data-id={props.elementId}
                className={classes.Radio}
                {...element.elementConfig}
                onChange={props.changed} />
                <span className={classes.Checkmark}></span>    
        </label>
    ));
}

const input = ( props ) => {
    let inputElement = null;
    let containerClasses = [classes.Input];
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                data-id={props.elementId}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                data-id={props.elementId}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    data-id={props.elementId}
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ('inputRadio'):
            containerClasses.push(classes.Radio)
            inputElement = <RadioGroup {...props} />
            break;
        default:
            inputElement = <input
                data-id={props.elementId}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
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

export default input;