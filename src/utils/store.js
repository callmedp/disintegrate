
const store = {
    isAuthenticated : false,
    clear() {
        localStorage.clear()
    },
    set(data) {
        localStorage.setItem('userDetail', JSON.stringify(data))
        this.isAuthenticated = true
    },
    get username() {
        let user = ''
        try{
            user = JSON.parse(localStorage.getItem('userDetail'))['name']
        }
        catch(e){}

        return user;
    }
}

export default store;