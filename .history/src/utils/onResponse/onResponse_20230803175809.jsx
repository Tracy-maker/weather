function onResponse({response}){
 if (!response.ok) {
    throw response;
  }
  return response.json();
}

export default onResponse;