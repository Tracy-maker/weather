import request from "../request/request";

function getWeather({ cityId }) {
  return request({
    path: "/weather",
    query: { id: cityId },
  });
}

export default getWeather;
Now, the getWeather function properly calls the request function with the appropriate arguments and returns the Promise returned by the request function, allowing you to use .then() or async/await to handle the weather data response or any potential errors.





