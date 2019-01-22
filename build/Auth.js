'use strict';

const {sendPOST, sendGET, sendDELETE} = require('./Request');

const baseUrl = 'http://localhost';
class Auth {
    constructor(port){
        this.url = `${baseUrl}:${port}/users`;
    }

     register({email, password, id_token, provider, payload}) {
          return sendPOST(`${this.url}/register`,{
              data: {
                  email,
                  password,
                  provider,
                  payload
              }
          });
    }

     login({email, password, payload, expIn}){
        return  sendPOST(`${this.url}/login`, {
            data:{
                email,
                password,
                payload,
                expIn
            }
        });
    }

     logout(token){
        return  sendPOST(`${this.url}/logout`,{
            headers:{
                Authorization: 'Bearer ' + token
            }
        });
     }

     authenticate(token){
         return  sendPOST(`${this.url}/authenticate`, {
             headers:{
                 Authorization: 'Bearer ' + token
             }
         });
    }

     deleteUser(userId, token){
        return  sendDELETE(`${this.url}/${userId}`,{
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
    }
}



module.exports = Auth;