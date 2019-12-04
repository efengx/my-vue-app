import traverson from 'traverson'
const JsonHalAdapter = require('traverson-hal');

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

export const traversonDemo = () => {
    // traverson.from(`${process.env.VUE_APP_URL}`)
    //     .jsonHal()
    //     .follow('projects')
    //     .getResource((err, document) => {
    //         if (err) {
    //             console.log(err)
    //             console.log('No luck :-)')
    //         } else {
    //             console.log(JSON.stringify(document))
    //         }
    //     })

    /* 
     * 自动从 from 结果集中查找 _links 中的 testplans 对应的资源 
     */ 
    traverson.from(`${process.env.VUE_APP_URL}/projects/2`)
        .jsonHal()
        .follow('testplans')
        .getResource((err, document) => {
            if (err) {
                console.log(err)
                console.log('No luck :-)')
            } else {
                console.log(JSON.stringify(document))
            }
        })
}
