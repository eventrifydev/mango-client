import { MangoResponse } from "./MangoResponse";

export interface Wallet extends MangoResponse {
    Owners: string[]
    Description: string
    Currency: string
    Tag: string
}