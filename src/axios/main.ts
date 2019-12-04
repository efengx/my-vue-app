import request from './request';

import traverson from 'traverson'
const JsonHalAdapter = require('traverson-hal');

// (C)reate
export const create = (source: string, params: any) => {
    return request.post(source, params)
}

// (R)ead
export const get = (source: string, params: any) => {
    return new Promise((resolve: any, reject: any) => {
        request.get(source)
            .then((res: any) => {
                resolve(res ? res._embedded[source] : res)
            }).catch((err: any) => {
                reject(err)
            })
    })
}

export const find = (url: string, source: string) => {
    return new Promise((resolve: any, reject: any) => {
        traverson.from(`${url}`)
            .jsonHal()
            .follow(source)
            .getResource((err, document) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    console.log(JSON.stringify(document))
                    resolve(JSON.stringify(document))
                }
            })
    })
}

// (U)pdate
export const update = (source: string, params: any) => {
    return request.put(`${source}\${params.id}`, params)
}

// (D)elete
export const remove = (source: string, id: number) => {
    return request.delete(`${source}\${number}`)
}
