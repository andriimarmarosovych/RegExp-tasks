function VCC(CCN) {
    const regex = /^(?:\d{4}-){3}\d{4}$/;
    return regex.test(CCN);
}