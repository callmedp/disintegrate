import { getCookie } from '../utils/cookie'
import { Route } from 'react-router-dom'
import store from '../utils/store'
import { decrypt } from '../utils/utilities'
import * as Constants from '../constants/appConstants'


const Middleware = (props) => {

    const { routes } = props;
    const cookieToken = getCookie('token')
    const cookieLoginData = getCookie('loginData')
    let loginData = ''

    if((cookieToken === null || cookieToken === '' || cookieToken === undefined) && store.isAuthenticated) {

        //functionality to logout
        store.clear()
    }
    
    if(cookieToken && cookieLoginData) {
        //api call to save user data into store
        loginData = JSON.parse(decrypt(cookieLoginData, Constants.DISINTEGRATE_PASS))
        console.log("login response", loginData)
        store.set({name: decrypt(cookieToken, Constants.DISINTEGRATE_PASS)})
    }
    
    
    return (
        routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} render={(props) => <route.component {...props} />} />)
    )
}

export default Middleware;