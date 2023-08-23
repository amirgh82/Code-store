const testEmail = (value) => {
    const emailpatern = /^[a - z0 - 9] + @[a - z] +\.[a-z]{ 2, 3 }$/g

    return emailpatern.test(value)
}
const testCodeMeli = (value) => { }
const testPhoneNumber = (value) => { }

export default {
    testEmail,
    testCodeMeli,
    testPhoneNumber
}