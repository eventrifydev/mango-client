import { MangoFee } from "./PayIn"
import { MangoResponse } from "./MangoResponse";

export interface MangoTransaction extends MangoResponse {
    DebitedFunds: MangoFee
    CreditedFunds: MangoFee
    Fees: MangoFee
    DebitedWalletId: string
    CreditedWalletId: string
    AuthorId: string
    CreditedUserId: string
    Nature: string
    Status: string
    ExecutionDate: string
    ResultCode: string
    ResultMessage: string
    Type: string
}