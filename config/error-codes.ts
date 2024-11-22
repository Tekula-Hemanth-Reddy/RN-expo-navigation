export const error_code = {
    1001: 1001,
    1002: 1002,
    404: 404
}

export function getMessageForErrorCodes(message: string, errorCode: string) {
    switch (errorCode) {
        case 'code':
            return `code`
        default:
            return errorCode
    }
}