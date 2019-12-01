import {performValidity} from "./component/bl/validator"
import {updateState} from "./component/bl/state"
import {Builder} from "./component/builder"

export const FormBuilder = Builder;
export const getUpdateFormState = updateState
export const checkValidity = performValidity

export default {
    FormBuilder,
    getUpdateFormState,
    checkValidity
}