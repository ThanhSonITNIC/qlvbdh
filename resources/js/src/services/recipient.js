const resource = '/api/document-organizes';

export default {
    all(params = null) {
        return axios.get(`${resource}`, { params })
    },
    get(id, params = null) {
        return axios.get(`${resource}/${id}`, { params })
    },
    create(data) {
        return axios.post(`${resource}`, data)
    },
    update(data, id) {
        return axios.put(`${resource}/${id}`, data)
    },
    delete(id) {
        return axios.delete(`${resource}/${id}`)
    },
    deletes(params = null) {
        return axios.delete(`${resource}-m`, { params })
    },
}
