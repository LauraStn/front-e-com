export type RegisterProps = {
    email: string;
    firstName: string;
    lastName: string;
    pseudo: string;
    password: string;
}

export type LoginProps = {
    email?: string
    pseudo?: string
    password: string
}