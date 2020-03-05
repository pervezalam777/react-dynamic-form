import React from 'react';
import classes from './radio.module.css';

const RadioGroup = (props) => {
    return  (<>{props.group.map(element => (
        <label key={element.elementConfig.value} 
            className={classes.Container}>
            {element.label} 
            <input
                data-id={props.elementId}
                className={classes.Radio}
                {...element.elementConfig}
                onChange={props.changed}/>
                <span className={classes.Checkmark}></span>    
        </label>
    ))}</>);
}

export default RadioGroup