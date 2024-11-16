
export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+(in|com)$/;
    return emailRegex.test(email)
}

export function isValidUrl(str: string) {
    const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );
    return pattern.test(str);
}

export function validateDecimalWith2Places(value: string) {
    if (!value)
        return true
    return Number.isInteger((parseFloat(value) * 1000) / 10)
}