export function getMessageForErrorCodes(message: string, error_code: string) {
    switch (error_code) {
        case 'code':
            return `code`
        default:
            return error_code
    }
}