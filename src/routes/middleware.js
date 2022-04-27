import { deleteCookie, getCookie } from '../utils/cookie'
import { Route } from 'react-router-dom'
import store from '../utils/store'
import { decrypt } from '../utils/utilities'
import * as Constants from '../constants/appConstants'


const Middleware = (props) => {

    const { routes } = props;
    const cookieToken = getCookie('token')
    const cookieLoginData = getCookie('loginData')
    const isSession = getCookie('isSession')
    
    let loginData = ''

    
    if(isSession === 'true') {
        //api call to save user data into store
        try {
            loginData = JSON.parse(decrypt(cookieLoginData, Constants.DISINTEGRATE_PASS))
            console.log("login response", loginData)
            store.set({name: decrypt(cookieToken, Constants.DISINTEGRATE_PASS)})
        }
        catch {
            store.clear()
            deleteCookie('token')
            deleteCookie('loginData')
            deleteCookie('isSession')
        }
    }
    else {
         //functionality to logout
         store.clear()
         deleteCookie('token')
         deleteCookie('loginData')
         deleteCookie('isSession')
    }
    
    
    return (
        routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} render={(props) => <route.component {...props} />} />)
    )
}

export default Middleware;