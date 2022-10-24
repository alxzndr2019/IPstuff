var axios = require('axios');

async function getDetails(name) {
  try {
    const response = await axios({
      url: "https://ipapi.co/json/",
      method: "get",
    });
    console.log(`Hey ${name} your IP address is ${response.data.ip}, you are located in ${response.data.country_name} your approximate location is Latitude :${response.data.latitude} and Longitude ${response.data.longitude}`)
  } catch (err) {
    console.log(err)
  }
}

getDetails("Alex Omiunu");