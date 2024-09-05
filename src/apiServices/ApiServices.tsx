// const API_URL = 'http://localhost:3000/api/'


// export async function post(path: String, bodyObject: any, headerObject: any) {
//     let apiURL = API_URL + path;

//     try {
//         const requestOptions = {
//             method: 'POST',
//             headers: { ...headerObject, 'Content-Type': 'application/json' },
//             body: JSON.stringify(bodyObject)
//         };

//         const response = await fetch(apiURL, requestOptions);
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         return { "status": 500, "error": e };
//     }
// }


// export async function put(path: String, bodyObject: any, headerObject: any) {
//     let apiURL = API_URL + path;

//     try {
//         const requestOptions = {
//             method: 'PUT',
//             headers: {
//                 ...headerObject,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(bodyObject)
//         };

//         const response = await fetch(apiURL, requestOptions);
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         return { "status": 500, "error": e };
//     }
// }


// export async function postWithFormData(path: String, formData: any, headerObject: any) {
//     let apiURL = API_URL + path;


//     var formdata = new FormData();

//     Object.keys(formData).forEach(function (key) {
//         formdata.append(key, formData[key]);
//     });
//     try {
//         const requestOptions = {
//             method: 'POST',
//             headers: { ...headerObject, 'Content-Type': 'multipart/form-data' },
//             body: formData
//         };

//         const response = await fetch(apiURL, requestOptions);
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         return { "status": 500, "error": e };
//     }
// }



// export async function get(path: String, paramObject: any, headerObject: any) {
//     let apiURL = API_URL + path;
//     var params = "";
//     Object.keys(paramObject).forEach(function (key) {
//         if (params == "") {
//             params += "?" + key + "=" + paramObject[key];
//         } else {
//             params += "&" + key + "=" + paramObject[key];
//         }
//     });

//     try {
//         const response = await fetch(apiURL + params, {
//             method: 'GET',
//             headers: { ...headerObject, 'Content-Type': 'application/json' }
//         })
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         return { "status": 500, "error": e };
//     }
// }



// export async function deleteApi(path: string, bodyObject: any, headerObject: any) {
//     let apiURL = API_URL + path;

//     try {
//         const requestOptions = {
//             method: 'DELETE',
//             headers: { ...headerObject, 'Content-Type': 'application/json' },
//             body: JSON.stringify(bodyObject)
//         };

//         const response = await fetch(apiURL, requestOptions);
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         const description: any = {
//             method: 'DELETE',
//             path: path,
//             body: bodyObject,
//             header: headerObject,
//             error: e
//         }
//         return { "status": 500, "error": e };
//     }
// }

