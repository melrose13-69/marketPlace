export const requiredField = value => {
    if ( value ) return undefined;

    return 'Field is required';
};
export const isValidHttpUrl = value => {
    let url;

    try {
        url = new URL( value );
    } catch ( _ ) {
        return 'This is not URL';
    }

    if ( url.protocol === 'http:' || url.protocol === 'https:' ) return undefined;

    return 'This is not URL';
};

export const isNumber = (...value) => {
    if(value[0].match(/^\d+/)) return undefined;
    const fieldObject = Object.keys(value[1])[0];
    const fieldName = fieldObject.substring(7, fieldObject.length).toLowerCase();

    return `Product ${fieldName} must be a number`
}
export const maxLengthCreator = maxLength => value => {
    if ( value.length > maxLength ) return `Max length message is ${ maxLength } symbols`;
    return undefined;
};
