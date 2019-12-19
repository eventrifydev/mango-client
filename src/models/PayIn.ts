import { MangoResponse } from "./MangoResponse";

export interface PayIn extends MangoResponse {
    AuthorId: string
    CreditedUserId: string
    CreditedWalletId: string
    DebitedFunds: MangoFee
    Fees: MangoFee
    SecureModeReturnURL: string
    CardId: string
    SecureMode: string
    StatementDescriptor: string
    Culture: string
}

export interface MangoFee {
    Currency: string
    Amount: number
}