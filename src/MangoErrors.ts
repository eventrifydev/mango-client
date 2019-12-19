import { MangoResponse } from "./models/MangoResponse";

class MangoErrors {

    check(result: MangoResponse) {
        if (result.ResultCode) {
            switch (result.ResultCode) {
                case MangoErrorCodes.OK.code:
                    break;
                case MangoErrorCodes.THREE_D_NOT_AVAILABLE.code:
                    throw new Error(MangoErrorCodes.THREE_D_NOT_AVAILABLE.message);
                case MangoErrorCodes.THREE_D_SESSION_EXPIRED.code:
                    throw new Error(MangoErrorCodes.THREE_D_SESSION_EXPIRED.message);
                case MangoErrorCodes.THREE_D_CARD_NOT_COMPATIBLE.code:
                    throw new Error(MangoErrorCodes.THREE_D_CARD_NOT_COMPATIBLE.message);
                case MangoErrorCodes.THREE_D_CARD_NOT_ENROLLED.code:
                    throw new Error(MangoErrorCodes.THREE_D_CARD_NOT_ENROLLED.message);
                case MangoErrorCodes.THREE_D_AUTH_FAILED.code:
                    throw new Error(MangoErrorCodes.THREE_D_AUTH_FAILED.message);

                // Operation failed
                case MangoErrorCodes.OPERATION_GENERIC_ERROR.code:
                    throw new Error(MangoErrorCodes.OPERATION_GENERIC_ERROR.message);
                case MangoErrorCodes.OPERATION_WALLET_BALANCE.code:
                    throw new Error(MangoErrorCodes.OPERATION_WALLET_BALANCE.message);
                case MangoErrorCodes.OPERATION_AUTHOR_NOT_OWNER.code:
                    throw new Error(MangoErrorCodes.OPERATION_AUTHOR_NOT_OWNER.message);
                case MangoErrorCodes.OPERATION_MAX_PERMITTED_AMOUNT.code:
                    throw new Error(MangoErrorCodes.OPERATION_MAX_PERMITTED_AMOUNT.message);
                case MangoErrorCodes.OPERATION_MIN_PERMITTED_AMOUNT.code:
                    throw new Error(MangoErrorCodes.OPERATION_MIN_PERMITTED_AMOUNT.message);
                case MangoErrorCodes.OPERATION_INVALID_AMOUNT.code:
                    throw new Error(MangoErrorCodes.OPERATION_INVALID_AMOUNT.message);
                case MangoErrorCodes.OPERATION_CREDITED_FUNDS_ZERO.code:
                    throw new Error(MangoErrorCodes.OPERATION_CREDITED_FUNDS_ZERO.message);

                // Card input errors
                case MangoErrorCodes.CARD_INVALID_NUMBER.code:
                    throw new Error(MangoErrorCodes.CARD_INVALID_NUMBER.message);
                case MangoErrorCodes.CARD_INVALID_CARDHOLDER.code:
                    throw new Error(MangoErrorCodes.CARD_INVALID_CARDHOLDER.message);
                case MangoErrorCodes.CARD_INVALID_PIN_CODE.code:
                    throw new Error(MangoErrorCodes.CARD_INVALID_PIN_CODE.message);
                case MangoErrorCodes.CARD_INVALID_PIN_FORMAT.code:
                    throw new Error(MangoErrorCodes.CARD_INVALID_PIN_FORMAT.message);

                // Transaction Refused
                case MangoErrorCodes.TRANSACTION_REFUSED_BANK.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_REFUSED_BANK.message);
                case MangoErrorCodes.TRANSACTION_REFUSED_AMOUNT.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_REFUSED_AMOUNT.message);
                case MangoErrorCodes.TRANSACTION_REFUSED_TERMINAL.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_REFUSED_TERMINAL.message);
                case MangoErrorCodes.TRANSACTION_REFUSED_LIMIT.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_REFUSED_LIMIT.message);
                case MangoErrorCodes.TRANSACTION_EXPIRED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_EXPIRED.message);
                case MangoErrorCodes.TRANSACTION_CARD_INACTIVE.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_CARD_INACTIVE.message);
                case MangoErrorCodes.TRANSACTION_REFUSED_DEFFERENT_FUNDS.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_REFUSED_DEFFERENT_FUNDS.message);
                case MangoErrorCodes.TRANSACTION_PAYMENT_PERIOD_EXPIRED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_PAYMENT_PERIOD_EXPIRED.message);
                case MangoErrorCodes.TRANSACTION_PAYMENT_REFUSED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_PAYMENT_REFUSED.message);
                case MangoErrorCodes.TRANSACTION_CARD_NOT_ACTIVE.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_CARD_NOT_ACTIVE.message);
                case MangoErrorCodes.TRANSACTION_MAX_ATTEMPTS.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_MAX_ATTEMPTS.message);
                case MangoErrorCodes.TRANSACTION_MAX_AMOUNT_EXCEEDED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_MAX_AMOUNT_EXCEEDED.message);
                case MangoErrorCodes.TRANSACTION_MAX_USES_EXCEEDED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_MAX_USES_EXCEEDED.message);
                case MangoErrorCodes.TRANSACTION_DEBIT_LIMIT_EXCEEDED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_DEBIT_LIMIT_EXCEEDED.message);
                case MangoErrorCodes.TRANSACTION_AMOUNT_LIMIT.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_AMOUNT_LIMIT.message);
                case MangoErrorCodes.TRANSACTION_PENDING.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_PENDING.message);
                case MangoErrorCodes.TRANSACTION_REFUSED.code:
                    throw new Error(MangoErrorCodes.TRANSACTION_REFUSED.message);

                // Tokenization / Card registration errors
                case MangoErrorCodes.CARD_REG_TOKEN_PROCESSING.code:
                    throw new Error(MangoErrorCodes.CARD_REG_TOKEN_PROCESSING.message);
                case MangoErrorCodes.CARD_REG_TOKEN_INPUT.code:
                    throw new Error(MangoErrorCodes.CARD_REG_TOKEN_INPUT.message);
                case MangoErrorCodes.CARD_REG_INVALID_CARD_FORMAT.code:
                    throw new Error(MangoErrorCodes.CARD_REG_INVALID_CARD_FORMAT.message);
                case MangoErrorCodes.CARD_REG_CARD_EXPIRY_MISSING.code:
                    throw new Error(MangoErrorCodes.CARD_REG_CARD_EXPIRY_MISSING.message);
                case MangoErrorCodes.CARD_REG_CARD_CVV_MISSING.code:
                    throw new Error(MangoErrorCodes.CARD_REG_CARD_CVV_MISSING.message);
                case MangoErrorCodes.CARD_REG_CALLBACK.code:
                    throw new Error(MangoErrorCodes.CARD_REG_CALLBACK.message);
                case MangoErrorCodes.CARD_REG_INVALID_DATA.code:
                    throw new Error(MangoErrorCodes.CARD_REG_INVALID_DATA.message);

                // Transaction fraud issue
                case MangoErrorCodes.FRAUD_POLICY.code:
                    throw new Error(MangoErrorCodes.FRAUD_POLICY.message);
                case MangoErrorCodes.FRAUD_COUNTERFEIT.code:
                    throw new Error(MangoErrorCodes.FRAUD_COUNTERFEIT.message);
                case MangoErrorCodes.FRAUD_LOST_CARD.code:
                    throw new Error(MangoErrorCodes.FRAUD_LOST_CARD.message);
                case MangoErrorCodes.FRAUD_STOLEN_CARD.code:
                    throw new Error(MangoErrorCodes.FRAUD_STOLEN_CARD.message);
                case MangoErrorCodes.FRAUD_CARD_BIN_NOT_AUTH.code:
                    throw new Error(MangoErrorCodes.FRAUD_CARD_BIN_NOT_AUTH.message);
                case MangoErrorCodes.FRAUD_SECURITY_VIOLATION.code:
                    throw new Error(MangoErrorCodes.FRAUD_SECURITY_VIOLATION.message);
                case MangoErrorCodes.FRAUD_BANK_SUSPECT.code:
                    throw new Error(MangoErrorCodes.FRAUD_BANK_SUSPECT.message);
                case MangoErrorCodes.FRAUD_BANK_OPPOSITION.code:
                    throw new Error(MangoErrorCodes.FRAUD_BANK_OPPOSITION.message);
                case MangoErrorCodes.FRAUD_TRANSACTION_BLOCKED.code:
                    throw new Error(MangoErrorCodes.FRAUD_TRANSACTION_BLOCKED.message);
                case MangoErrorCodes.FRAUD_VELOCITY_LIMIT_EXCEEDED.code:
                    throw new Error(MangoErrorCodes.FRAUD_VELOCITY_LIMIT_EXCEEDED.message);
                case MangoErrorCodes.FRAUD_UNAUTH_IP_COUNTRY.code:
                    throw new Error(MangoErrorCodes.FRAUD_UNAUTH_IP_COUNTRY.message);
                case MangoErrorCodes.FRAUD_CUMULATIVE_EXCEEDED.code:
                    throw new Error(MangoErrorCodes.FRAUD_CUMULATIVE_EXCEEDED.message);
                case MangoErrorCodes.FRAUD_BANK_CARDS_LIMIT.code:
                    throw new Error(MangoErrorCodes.FRAUD_BANK_CARDS_LIMIT.message);
                case MangoErrorCodes.FRAUD_CLIENTS_LIMIT.code:
                    throw new Error(MangoErrorCodes.FRAUD_CLIENTS_LIMIT.message);
                case MangoErrorCodes.FRAUD_3DS_AUTH_FAILED.code:
                    throw new Error(MangoErrorCodes.FRAUD_3DS_AUTH_FAILED.message);
                case MangoErrorCodes.FRAUD_DIFFERENT_IP_LOCATION.code:
                    throw new Error(MangoErrorCodes.FRAUD_DIFFERENT_IP_LOCATION.message);
                case MangoErrorCodes.FRAUD_FINGERPRINTS_LIMIT.code:
                    throw new Error(MangoErrorCodes.FRAUD_FINGERPRINTS_LIMIT.message);
                case MangoErrorCodes.FRAUD_AUTH_NOT_AVAILABLE.code:
                    throw new Error(MangoErrorCodes.FRAUD_AUTH_NOT_AVAILABLE.message);
                case MangoErrorCodes.FRAUD_UNAUTH_CARD_BIN.code:
                    throw new Error(MangoErrorCodes.FRAUD_UNAUTH_CARD_BIN.message);
                case MangoErrorCodes.FRAUD_WALLET_BLOCKED.code:
                    throw new Error(MangoErrorCodes.FRAUD_WALLET_BLOCKED.message);
                case MangoErrorCodes.FRAUD_USER_BLOCKED.code:
                    throw new Error(MangoErrorCodes.FRAUD_USER_BLOCKED.message);

                // Technical errors
                case MangoErrorCodes.TECHNICAL_PSP_CONFIG.code:
                    throw new Error(MangoErrorCodes.TECHNICAL_PSP_CONFIG.message);
                case MangoErrorCodes.TECHNICAL_PSP_TECH.code:
                    throw new Error(MangoErrorCodes.TECHNICAL_PSP_TECH.message);
                case MangoErrorCodes.TECHNICAL_BANK.code:
                    throw new Error(MangoErrorCodes.TECHNICAL_BANK.message);
                case MangoErrorCodes.TECHNICAL_ERROR.code:
                    throw new Error(MangoErrorCodes.TECHNICAL_ERROR.message);
                case MangoErrorCodes.TECHNICAL_PSP_TIMEOUT.code:
                    throw new Error(MangoErrorCodes.TECHNICAL_PSP_TIMEOUT.message);
                default:
                    throw new Error("We had error with processing your payment");
            }
        }
        if (result.errors || result.Errors) {
            let message = ""
            if (result.errors) {
                message += JSON.stringify(result.errors)
            }
            if (result.Errors) {
                message += JSON.stringify(result.Errors)
            }
            if (result) {
                message += "; {" + JSON.stringify(result) + "}"
            }
            throw new Error("Something went wrong with your payment: " + message);
        }
        if (result.Message) {
            throw new Error(result.Message);
        }
    }
}

const MangoErrorCodes = Object.freeze({
    OK: { code: "000000", message: "Oky Doky" },

    THREE_D_NOT_AVAILABLE: { code: "101399", message: "Secure mode: 3DSecure authentication is not available" },
    THREE_D_SESSION_EXPIRED: { code: "101304", message: "Secure mode: The 3DSecure authentication session has expired" },
    THREE_D_CARD_NOT_COMPATIBLE: { code: "101303", message: "Secure mode: The card is not compatible with 3DSecure" },
    THREE_D_CARD_NOT_ENROLLED: { code: "101302", message: "Secure mode: The card is not enrolled with 3DSecure" },
    THREE_D_AUTH_FAILED: { code: "101301", message: "Secure mode: 3DSecure authentication has failed" },

    // Operation failed
    OPERATION_GENERIC_ERROR: { code: "001999", message: "Generic Operation error" },
    OPERATION_WALLET_BALANCE: { code: "001001", message: "Unsufficient wallet balance" },
    OPERATION_AUTHOR_NOT_OWNER: { code: "001002", message: "Author is not the wallet owner" },
    OPERATION_MAX_PERMITTED_AMOUNT: { code: "001011", message: "Transaction amount is higher than maximum permitted amount" },
    OPERATION_MIN_PERMITTED_AMOUNT: { code: "001012", message: "Transaction amount is lower than minimum permitted amount" },
    OPERATION_INVALID_AMOUNT: { code: "001013", message: "Invalid transaction amount" },
    OPERATION_CREDITED_FUNDS_ZERO: { code: "001014", message: "CreditedFunds must be more than 0 (DebitedFunds can not equal Fees)" },

    // Card input errors
    CARD_INVALID_NUMBER: { code: "105101", message: "Invalid card number" },
    CARD_INVALID_CARDHOLDER: { code: "105102", message: "Invalid cardholder name" },
    CARD_INVALID_PIN_CODE: { code: "105103", message: "Invalid PIN code" },
    CARD_INVALID_PIN_FORMAT: { code: "105104", message: "Invalid PIN format" },

    // Transaction Refused
    TRANSACTION_REFUSED_BANK: { code: "101101", message: "Transaction refused by the bank (Do not honor)" },
    TRANSACTION_REFUSED_AMOUNT: { code: "101102", message: "Transaction refused by the bank (Amount limit)" },
    TRANSACTION_REFUSED_TERMINAL: { code: "101103", message: "Transaction refused by the terminal" },
    TRANSACTION_REFUSED_LIMIT: { code: "101104", message: "Transaction refused by the bank (card limit reached)" },
    TRANSACTION_EXPIRED: { code: "101105", message: "The card has expired" },
    TRANSACTION_CARD_INACTIVE: { code: "101106", message: "The card is inactive" },
    TRANSACTION_REFUSED_DEFFERENT_FUNDS: { code: "101108", message: "Transaction refused: the Debited Wallet and the Credited Wallet must be different" },
    TRANSACTION_PAYMENT_PERIOD_EXPIRED: { code: "101109", message: "The payment period has expired" },
    TRANSACTION_PAYMENT_REFUSED: { code: "101110", message: "The payment has been refused" },
    TRANSACTION_CARD_NOT_ACTIVE: { code: "101410", message: "The card is not active" },
    TRANSACTION_MAX_ATTEMPTS: { code: "101111", message: "Maximum number of attempts reached" },
    TRANSACTION_MAX_AMOUNT_EXCEEDED: { code: "101112", message: "Maximum amount exceeded" },
    TRANSACTION_MAX_USES_EXCEEDED: { code: "101113", message: "Maximum Uses Exceeded" },
    TRANSACTION_DEBIT_LIMIT_EXCEEDED: { code: "101115", message: "Debit limit exceeded" },
    TRANSACTION_AMOUNT_LIMIT: { code: "101116", message: "Amount limit" },
    TRANSACTION_PENDING: { code: "101118", message: "An initial transaction with the same card is still pending" },
    TRANSACTION_REFUSED: { code: "101199", message: "Transaction refused" },

    // Tokenization / Card registration errors
    CARD_REG_TOKEN_PROCESSING: { code: "001599", message: "Token processing error" },
    CARD_REG_TOKEN_INPUT: { code: "105299", message: "Token input Error" },
    CARD_REG_INVALID_CARD_FORMAT: { code: "105202", message: "Card number: invalid format" },
    CARD_REG_CARD_EXPIRY_MISSING: { code: "105203", message: "Expiry date: missing or invalid format" },
    CARD_REG_CARD_CVV_MISSING: { code: "105204", message: "CVV: missing or invalid format" },
    CARD_REG_CALLBACK: { code: "105205", message: "Callback URL: Invalid format" },
    CARD_REG_INVALID_DATA: { code: "105206", message: "Registration data : Invalid format" },

    // Transaction fraud issue
    FRAUD_POLICY: { code: "008999", message: "Fraud policy error" },
    FRAUD_COUNTERFEIT: { code: "008001", message: "Counterfeit Card" },
    FRAUD_LOST_CARD: { code: "008002", message: "Lost Card" },
    FRAUD_STOLEN_CARD: { code: "008003", message: "Stolen Card" },
    FRAUD_CARD_BIN_NOT_AUTH: { code: "008004", message: "Card bin not authorized" },
    FRAUD_SECURITY_VIOLATION: { code: "008005", message: "Security violation" },
    FRAUD_BANK_SUSPECT: { code: "008006", message: "Fraud suspected by the bank" },
    FRAUD_BANK_OPPOSITION: { code: "008007", message: "Opposition on bank account (Temporary)" },
    FRAUD_TRANSACTION_BLOCKED: { code: "008500", message: "Transaction blocked by Fraud Policy" },
    FRAUD_VELOCITY_LIMIT_EXCEEDED: { code: "008505", message: "Number of accepted transactions exceeded the velocity limit set" },
    FRAUD_UNAUTH_IP_COUNTRY: { code: "008506", message: "Unauthorized IP address country" },
    FRAUD_CUMULATIVE_EXCEEDED: { code: "008507", message: "Cumulative value of transactions exceeded" },
    FRAUD_BANK_CARDS_LIMIT: { code: "008509", message: "Number of bank cards allowed is exceeded" },
    FRAUD_CLIENTS_LIMIT: { code: "008510", message: "Number of clients per card is exceeded" },
    FRAUD_3DS_AUTH_FAILED: { code: "008511", message: "The 3DS authentification has failed due to supplementary security checks" },
    FRAUD_DIFFERENT_IP_LOCATION: { code: "008512", message: "IP location different than card issuer country" },
    FRAUD_FINGERPRINTS_LIMIT: { code: "008513", message: "Number of device fingerprints allowed is exceeded" },
    FRAUD_AUTH_NOT_AVAILABLE: { code: "008515", message: "Authentication not available: do not benefit from liability shift" },
    FRAUD_UNAUTH_CARD_BIN: { code: "008514", message: "Unauthorized Card BIN" },
    FRAUD_WALLET_BLOCKED: { code: "008600", message: "Wallet blocked by Fraud policy" },
    FRAUD_USER_BLOCKED: { code: "008700", message: "User blocked by Fraud policy" },

    // Technical errors
    TECHNICAL_PSP_CONFIG: { code: "008700", message: "PSP configuration error" },
    TECHNICAL_PSP_TECH: { code: "009199", message: "The error was caused by one of the following cases:  Card is not supported by Mangopay;   Amount is higher than the maximum amount per transaction;   Operation doesn’t fit to your Mangopay account settings;   Use of a non-3DS test card for a payment which requires 3DS" },
    TECHNICAL_BANK: { code: "009499", message: "Bank technical error" },
    TECHNICAL_ERROR: { code: "009999", message: "Technical error" },
    TECHNICAL_PSP_TIMEOUT: { code: "009101", message: "PSP timeout please try later" },
})

const errors = new MangoErrors()
export default errors