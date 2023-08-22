import rules from "./rules";
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
            value.trim().includes('@') && validationResults.push(false)
        }
    }

    if (validationResults.length) {
        return false
    } else {
        return true
    }
}

export default validator;