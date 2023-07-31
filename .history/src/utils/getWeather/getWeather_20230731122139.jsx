function getWeather (onSuccess) {
    const xhttp=new XMLHttpRequest()

    xhttp.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            const data =JSON.parse(this.responseText)

            onSuccess(data)
        }
    }

    const cityId = 2158177;
    const appId = "1bf06f9e357bb376f67992e64e38314c";

 
      xhttp.open(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`
      );
      xhttp.send();

  };

export default getWeather;