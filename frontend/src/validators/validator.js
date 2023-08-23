import rules from "./rules";
import regex from "./regex";
const validator = (value, validations) => {
    console.log('validator', value, validations);

    let validationResults = []

    for (const validator of validations) {
        if (validator.value === rules.requiredValidator) {
            value.trim().length === 0 && validationResults.push(false)
        }
        if (validator.value === rules.minValidator) {
            value.trim().length < validator.min && validationResults.push(false)
        }
        if (validator.value === rules.maxValidator) {
            value.trim().length > validator.max && validationResults.push(false)
        }
        if (validator.value === rules.emailValidator) {
            regex.testEmail(value) && validationResults.push(false)
        }
    }

    if (validationResults.length) {
        return false
    } else {
        return true
    }
}

export default validator;