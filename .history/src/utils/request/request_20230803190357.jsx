import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";
import onResponse from "../onResponse/onResponse";

function request({ path, query }) {
const url=new URL(`${OPEN_WEATHER_MAP_BASE_URL}${path}?units=metric`)
const urlParams=new URLSearchParams({
    ...query,
    ...Object.fromEntries(url.searchParams.entries),
})
   return fetch(`${url.origin}${url.pathname}?${urlParams}`).then(onResponse)
}
export default request;
