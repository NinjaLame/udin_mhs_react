

fetch("http://localhost:8808/api/auth/token?db=sia_siadin&login=0686.11.2011.406&password=a", {
mode : 'cors',
header: {
    'Access-Control-Allow-Credentials': '*' ,
    'Access-Control-Allow-Methods': "*",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': {'Access-Control-Allow-Methods': "*"},
  }
}).then(response => response.json()).then(data=>console.log(data))
