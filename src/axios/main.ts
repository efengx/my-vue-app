import request from './request';

// (C)reate
export function create(source: string, params: any) {
    return request.post(source, params)
}

// (R)ead
export function get(source: string, params: any) {
    return new Promise((resolve, reject) => {
        request.get(source)
            .then((res: any) => {
                resolve(res ? res._embedded[source] : res)
            }).catch((err: any) => {
                reject(err)
            })
    })
}

// (U)pdate
export function update(source: string, params: any) {
    return request.put(`${source}\${params.id}`, params)
}

// (D)elete
export function remove(source: string, id: number) {
    return request.delete(`${source}\${number}`)
}
