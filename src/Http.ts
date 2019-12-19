import { IncomingMessage, OutgoingHttpHeaders } from "http"

import https from "https"
import request from "request"
import errors from "./MangoErrors"

export class Http {

    private _headers: OutgoingHttpHeaders

    set headers(headers: OutgoingHttpHeaders) {
        this._headers = headers
    }

    get(url: string) {
        return new Promise((resolve, reject) => {
            https.get(`${url}`, (resp: IncomingMessage) => {
                let data = ""
                resp.on("data", (chunk) => {
                    data += chunk
                })
                resp.on("end", () => {
                    const response = JSON.parse(data)
                    errors.check(response)
                    resolve(response)
                })
            }).on("error", (error: Error) => {
                reject(error)
            })
        })
    }

    post(url: string, body: any, headers?: OutgoingHttpHeaders) {
        return this.promisfyRequest(HttpMethod.POST, url, body, headers)
    }

    put(url: string, body: any, headers?: OutgoingHttpHeaders) {
        return this.promisfyRequest(HttpMethod.PUT, url, body, headers)
    }

    private promisfyRequest(method: HttpMethod, url: string, body: string, headers?: OutgoingHttpHeaders) {
        return new Promise((resolve, reject) => {
            const req = https.request(url, {
                method,
                headers: headers || this._headers
            }, (res: IncomingMessage) => {
                let data = ""

                res.on('data', (chunk: any) => {
                    data += chunk
                })

                res.on("end", () => {
                    let response = {}
                    try {
                        response = JSON.parse(data)
                    } catch (error) {
                        response = data
                    }
                    errors.check(response)
                    resolve(response)
                })
            })

            req.on('error', (error: Error) => {
                reject(error)
            })

            req.write(JSON.stringify(body))
            req.end()
        })
    }

    postFormData(url: string, body: any, headers: OutgoingHttpHeaders) {
        return new Promise((resolve, reject) => {
            try {
                const options = {
                    url: url,
                    form: body,
                    headers
                }
                request.post(options, (err: Error, res: IncomingMessage, body: any) => {
                    if (err) {
                        return reject(err)
                    }
                    let response = ""
                    try {
                        response = JSON.parse(body)
                    } catch (error) {
                        response = body
                    }
                    resolve(response)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT"
}

const http = new Http()
export default http
