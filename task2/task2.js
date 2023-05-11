function emailCheck(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const yourEmail = prompt('Enter your email');
const mailResult = emailCheck(yourEmail);
console.log(mailResult);