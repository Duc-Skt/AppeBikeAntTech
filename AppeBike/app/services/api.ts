export const request = async function (method: string, data: any) {

  const HOST= 'localhost'
  const POST= 4000
  const APP_ID= '1331bf42-9cc6-4eb8-ba0a-a9bd5a9dedc7'
  const SECRET_KEY= '32f631a9-c348-4c2d-b438-0a5539590851'
  
  let url = `${HOST}:${POST}`;

  let params = {
      url: url,
      method: method,
      headers: {},
      body: ''
  };


  if (method == 'GET') {
      params.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
  } else if (method == 'POST') {

      params.headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      };


      params.body = JSON.stringify(data);
  }
  else if (method == 'PUT') {

    params.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };


    params.body = JSON.stringify(data);
}

  // let idToken = await AsyncStorage.getItem(Constants.AuthorizationKey);

  // if (idToken !== null && idToken !== undefined && idToken !== '') {
  //   params.headers = { ...params.headers, 'Authorization': 'Bearer ' + idToken}
  // }

  return await fetch(params.url, params);
};
