import { getCookie } from '../utils/cookie'
import { Route } from 'react-router-dom'
import store from '../utils/store'

const Middleware = (props) => {

    const { routes } = props;
    const cookieToken = getCookie('token')
   console.log("cookie Toek", store.isAuthenticated)

    if((cookieToken === null || cookieToken === '' || cookieToken === undefined) && store.isAuthenticated) {

        //functionality to logout
        store.clear()
    }
    
    if(!store.isAuthenticated && cookieToken) {
        //api call to save user data into store
        console.log("setting")
        store.set({name: 'Divyanshu'})
        console.log("store valiue", store)
    }
    
    return (
        routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} render={(props) => <route.component {...props} />} />)
    )
}

export default Middleware;