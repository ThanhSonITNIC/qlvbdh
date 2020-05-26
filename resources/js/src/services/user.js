const resource = '/api/users';

export default {
    all(query){
        return axios.get(`${resource}?${query}`)
    },
    get(id, query){
        return axios.get(`${resource}/${id}?${query}`)
    },
    create(data){
        return axios.post(`${resource}`, data)
    },
    update(data, id){
        return axios.put(`${resource}/${id}`, data)
    },
    delete(id){
        return axios.delete(`${resource}/${id}`)
    },
    giveRole(role, id){
        return axios.post(`${resource}/${id}/roles/${role}`)
    },
    revokeRole(role, id){
        return axios.delete(`${resource}/${id}/roles/${role}`)
    },
    givePermission(permission, id){
        return axios.post(`${resource}/${id}/permissions/${permission}`)
    },
    revokePermission(permission, id){
        return axios.delete(`${resource}/${id}/permissions/${permission}`)
    },
}
