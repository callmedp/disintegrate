
const store = {
    set isAuthenticated(flag) {
        localStorage.setItem('authenticated', flag)
    },
    get isAuthenticated() {
        try {
            return JSON.parse(localStorage.getItem('authenticated'))
        }
        catch {
            return false
        }
    },
    clear() {
        this.isAuthenticated = false
        localStorage.clear()
        console.log("localstore", localStorage.getItem('userDetail'))
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
        catch(e){
            console.log("user get name")
        }

        return user;
    }
}

export default store;