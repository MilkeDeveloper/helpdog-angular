 export interface User {
    id?: number,
    name: string,
    email: string,
    value: any,
    created_at?: string,

}

export interface LoginData {
    user: string,
    password: string,
}