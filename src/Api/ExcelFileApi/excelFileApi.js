const url = 'http://localhost:8080/api/excel/'

export default {
    async updateFile(id,file) {
        await fetch(url + 'files/update/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(file),
        })
    },
    async getAllFiles() {
        let response = await fetch(url + 'files')
        return await response.json()
    },
    async getFile(id) {
        let response = await fetch(url + 'files/' + id)
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
            method: 'DELETE'
        })
    },
    async createFile(filename) {
        return await fetch(url + 'files/create/' + filename, {
            method: 'PUT'
        })
    }
}