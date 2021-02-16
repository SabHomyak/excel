const url = 'http://localhost:8080/'

export default {
    async auth(authorization) {
        let data = new FormData();
        data.set('username','adminkasfasdfasdf')
        data.set('password','admin')
        let res = await fetch(url + 'sign', {
            method: 'POST',
            body: data,
            // mode:"no-cors",
            // credentials:"same-origin"
            // headers: {
            // 'authorization': 'Basic ' + authorization
            // }
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })
        debugger
        // let json =  res.status
        // debugger
        // let json = await res.body
        // debugger
        return 'json'
    }
}