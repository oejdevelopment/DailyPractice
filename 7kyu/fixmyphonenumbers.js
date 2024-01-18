function isItANum(str) {
    let nustring = str.replace(/[^0-9]/g, '');
    return nustring.length === 11 && nustring.charAt(0) === '0' ? nustring : "Not a phone number";
}