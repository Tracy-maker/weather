import request from "../request/request";

function getGroupWeathers({cityIds}) {

  request('/group',{id:cityIds.join(),})
}

export default getGroupWeathers;