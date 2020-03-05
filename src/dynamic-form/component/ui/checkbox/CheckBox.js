import React from 'react';
import classes from './checkbox.module.css';

const CheckBox = (props) => {
    return (
        <label htmlFor={props.elementId} 
            className={classes.Container}>
            {props.checkBoxLabel}
            <input
                id={props.elementId}
                data-id={props.elementId}
                className={classes.Radio}
                {...props.elementConfig}
                onChange={props.changed}/>
                <span className={classes.Checkmark}></span>    
        </label>
    );
}

export default CheckBox;