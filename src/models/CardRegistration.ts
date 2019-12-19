import { MangoResponse } from "./MangoResponse";

export interface CardRegistration extends MangoResponse {
    UserId: string
    CardType: string
    Currency: string
    CardId?: string
    PreregistrationData?: string
    AccessKey?: string
    CardRegistrationURL?: string
    RegistrationData?: string
    ResultCode?: string
    ResultMessage?: string
    Status?: string
}