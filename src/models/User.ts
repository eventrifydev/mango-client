import { MangoResponse } from "./MangoResponse";

export interface User extends MangoResponse {
    FirstName: string
    LastName: string
    Email: string
    Birthday: number
    Nationality: string
    CountryOfResidence: string
}