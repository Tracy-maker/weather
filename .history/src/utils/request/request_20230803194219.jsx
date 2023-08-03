User
import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";
import onResponse from "../onResponse/onResponse";

function request({ path, query }) {

const url=new URL(`${OPEN_WEATHER_MAP_BASE_URL}${path}?units=metric&appid=${APP_ID}`)
const urlParams=new URLSearchParams({
    ...query,
    ...Object.fromEntries(url.searchParams),
})
   return fetch(`${url.origin}${url.pathname}?${urlParams}`).then((response)=>{
    if (!response.ok) {
        throw response;
      }
      return response.json()
   })
}


export default request;
