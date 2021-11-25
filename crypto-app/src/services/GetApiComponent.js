import http from "./HttpService"

export function getApi() {
    return http.get("/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
}