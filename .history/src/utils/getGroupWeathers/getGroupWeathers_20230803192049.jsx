import request from "../request/request";

function getGroupWeathers({ cityIds }) {
  return request({
    path: "/group",
    query: { id: cityIds.join() },
  });
}

export default getGroupWeathers;
