import { User } from "./models/User";
import { Wallet } from "./models/Wallet";
import { CardRegistration } from "./models/CardRegistration";
import { PayIn } from "./models/PayIn";
import { MangoTransaction } from "./models/MangoTransaction";

export interface MangoClient {

    createUser(user: User): Promise<User>

    createWallet(wallet: Wallet): Promise<Wallet>

    createCardRegistration(cardRegistration: CardRegistration): Promise<CardRegistration>

    updateCardRegistration(cardRegistrationId: string, cardRegistration: CardRegistration): Promise<CardRegistration>

    createPayIn(payIn: PayIn): Promise<PayIn>

    getPayInById(id: string): Promise<PayIn>

    transactionsByUserId(id: string): Promise<MangoTransaction>
}