import { apiOptions } from "./options.js";


class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers

    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getUserInfo(name) {
        return fetch(`${this.baseUrl}/${name}`, {
            headers: this.headers
        })
            .then(this._getResponseData)
    }
}

export const api = new Api(apiOptions);