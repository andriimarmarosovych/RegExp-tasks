function UpperCase(str) {
    if (/^[A-Z]/.test(str)){
        return "String's starts with uppercase character";
    } else{
        return "String do not starts with uppercase character";
    }
}

const UpString = prompt('Enter String');
const result = UpperCase(UpString);
console.log(result);