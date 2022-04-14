import './HomePage.css'
import { getCookie } from '../utils/cookie'
import store from '../utils/store'
import { dynamicSite } from '../utils/urls'

const HomePage = () => {
    console.log("HomeContainer")

    const cookieStoreHandler = query => {
        const cookieToken = getCookie('token')

        if(cookieToken === null || cookieToken === '' || cookieToken === undefined) {

            if(store.isAutheticated) {
                //functionality to logout
                store.clear();
            }

            return window.location.href = `${dynamicSite}/?open_modal=${query}`;
        }

        if(!store.isAutheticated) {
                
            store.set({name: 'Divyanshu'})
            return;
        }
    }
    
    
    const handleLogin = () => {
        cookieStoreHandler('login')
    }

    const handleSignup = () => {
        cookieStoreHandler('signup')
    }

    return (
        <div className="container">
            <p>
                Welcome To HomePage
            </p>
            <div className="l-btn">
           { store.isAuthenticated ? 
            <h2>Hello {store.username}</h2> :
           <><button className="btnx" onClick={handleLogin}>
                Login   
            </button >
            <button className="btnx" onClick={handleSignup}>
                Signup
            </button></>
            }
            </div>
            
        </div>
    )
}

export default HomePage;