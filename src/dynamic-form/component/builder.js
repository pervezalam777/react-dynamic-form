import React, {Component} from "react"

import Input from "./component/ui/input/Input"
import Button from "./component/ui/button/Button"

export class Builder extends Component {
   
    elementChangedHandler = (event) => {
        this.props.onChanged(event, 
            event.target.attributes["data-id"].value);
    }

    mapFormDataWithIdAndConfig = (data) => {
        const formElementsArray = [];
        for (let key in data.form) {
            formElementsArray.push({
                id: key,
                config: data.form[key]
            });
        }
        return formElementsArray
    }

    render(){
        let {data, onSubmitted} = this.props
        const formElementsArray = this.mapFormDataWithIdAndConfig(data);
        return (
            <form onSubmit={onSubmitted}>
                {formElementsArray.map(element => (
                    <Input 
                        key={element.id}
                        label={element.config.label}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        invalid={!element.config.valid}
                        shouldValidate={element.config.validation}
                        touched={element.config.touched}
                        elementId={element.id}
                        group={element.config.group}
                        changed={this.elementChangedHandler} />
                ))}
                <Button btnType="Success" disabled={!data.formIsValid}>Submit</Button>
            </form>
        )
    }
}