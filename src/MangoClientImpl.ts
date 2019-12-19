import { MangoClient } from "./MangoClient"
import { User, Wallet, CardRegistration, PayIn, MangoTransaction } from "./models"
import http from "./Http"
import { Config } from "./Config"

export class MangoClientImpl implements MangoClient {

    private baseUrl = "https://api.sandbox.mangopay.com"
    private apiVersion = "v2.01"

    constructor(config: Config) {
        this.baseUrl = config.baseUrl || this.baseUrl
        this.baseUrl = `${this.baseUrl}/${config.apiVersion || this.apiVersion}/${config.clientId}`
        http.headers = ({
            "Authorization": this.getBasicAuthHash(config.clientId, config.clientPassword),
            "Content-Type": "application/json",
            "crossDomain": "true"
        })
    }

    private getBasicAuthHash(username: string, apiKey: string): string {
        return "Basic " + Buffer.from(username + ":" + apiKey).toString("base64");
    }

    async createUser(user: User): Promise<User> {
        return await http.post(`${this.baseUrl}/users/natural`, user) as User
    }

    async createWallet(wallet: Wallet): Promise<Wallet> {
        return await http.post(`${this.baseUrl}/wallets`, wallet) as Wallet
    }

    async createCardRegistration(cardRegistration: CardRegistration): Promise<CardRegistration> {
        return await http.post(`${this.baseUrl}/cardregistrations`, cardRegistration) as CardRegistration
    }

    async updateCardRegistration(cardRegistrationId: string, cardRegistration: CardRegistration): Promise<CardRegistration> {
        return await http.put(`${this.baseUrl}/CardRegistrations/${cardRegistrationId}`, cardRegistration) as CardRegistration
    }

    async createPayIn(payIn: PayIn): Promise<PayIn> {
        return await http.post(`${this.baseUrl}/payins/card/direct`, payIn) as PayIn
    }

    async getPayInById(id: string): Promise<PayIn> {
        return await http.get(`${this.baseUrl}/payins/${id}`) as PayIn
    }

    async transactionsByUserId(id: string): Promise<MangoTransaction> {
        return await http.get(`${this.baseUrl}/users/${id}/transactions`) as MangoTransaction
    }
}