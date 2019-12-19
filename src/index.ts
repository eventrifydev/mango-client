import { MangoClient } from "./MangoClient"
import { MangoClientImpl } from "./MangoClientImpl"
import { Config } from "./Config"

export function mangoClient(config: Config): MangoClient {
    return new MangoClientImpl(config)
}
