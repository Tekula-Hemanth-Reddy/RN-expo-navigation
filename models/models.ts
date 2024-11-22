
export interface ResponseJson<T> {
    data: T;
    success: boolean;
    message: string;
}

export interface NoImageProps {
    noImageData?: boolean,
}

export interface IUser extends Document {
    userName: string,
    email: string
}