'use strict';

const axios = require('axios');


const REQUEST_DEFAULT_CONFIG = {
    headers: {
        'content-type': 'application/json'
    }
};

     function send(url, params) {

        const { data, method, headers: paramHeaders } = params;
        const headers = { ...REQUEST_DEFAULT_CONFIG.headers, ...paramHeaders };
        const requestOptions = {
            url,
            data,
            method,
            headers
        };
        return  axios(requestOptions)
    }

     function sendPOST(url, params) {
       return   send(url, {
           ...params,
           method: 'POST',
           data:params.data
       }
       );
    }

     function sendDELETE(url, params) {
        return  send(url, {
            ...params,
            method: 'DELETE',
            data:params.data
        });
    }

     function sendGET(url, params) {
       return   send( {url, ...params, method: 'GET' });
    }

module.exports = {
    sendGET,
    sendPOST,
    sendDELETE
};