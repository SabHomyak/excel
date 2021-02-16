const url = 'http://localhost:8080/api/excel/'
const auth = 'Basic YWRtaW46YWRtaW4='
// const auth = 'Basic dXNlcjp1c2Vy'

export default {
    async updateFile(id, file) {
        await fetch(url + 'files/update/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': auth
            },
            body: JSON.stringify(file),
        })
    },
    async getAllFiles() {
        let response = await fetch(url + 'files', {
            headers: {
                'authorization': auth
            }
        })
        let json = await response.json()
        return json
    },
    async getFile(id) {
        let response = await fetch(url + 'files/' + id, {
            headers: {
                'authorization': auth
            }
        })
        let obj = await response.json()
        let data = JSON.parse(obj.jsonData)
        let file
        if (data) {
            file = {
                id: obj.id,
                title: obj.excelFileName,
                colState: data.colState,
                rowState: data.rowState,
                dataState: data.dataState
            }
        } else {
            file = {
                id: obj.id,
                title: obj.excelFileName
            }
        }
        return file
    },
    async deleteFile(id) {
        let response = await fetch(url + 'files/' + id, {
            method: 'DELETE',
            headers: {
                'authorization': auth
            }
        })
    },
    async createFile(filename) {
        let res = await fetch(url + 'files/create/' + filename, {
            headers: {
                'authorization': auth
            },
            method: 'PUT'
        })
        return checkResponse(res)
    }
}
const checkResponse = (response) => {
    if (response.status !== 200) {
        throw new Error(response.status)
    }
    return response
}