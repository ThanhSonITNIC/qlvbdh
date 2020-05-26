const resource = '/api/permissions';

export default {
    all(query){
        return axios.get(`${resource}?${query}`)
    },
    get(id, query){
        return axios.get(`${resource}/${id}?${query}`)
    },
    create(data){
        return axios.post(`${resource}?${data}`)
    },
    update(data, id){
        return axios.put(`${resource}/${id}`, data)
    },
    delete(id){
        return axios.delete(`${resource}/${id}`)
    }
}
