import {performValidity} from "./validator"
import {updateState} from "./state"
import {Builder} from "./builder"

export const FormBuilder = Builder;
export const getUpdateFormState = updateState
export const checkValidity = performValidity

export default {
    FormBuilder,
    getUpdateFormState,
    checkValidity
}