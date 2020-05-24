export default {
    login({email, password}){
        return this.csrf().then((response) => {
            return axios.post('/login', {
                email: email,
                password: password
            }).then(response => {
                return this.me()
            })
        })
    },

    csrf(){
        return axios.get('/sanctum/csrf-cookie')
    },

    me(){
        return axios.get('/api/me')
    },

    logout(){
        return axios.post('/logout')
    }
}