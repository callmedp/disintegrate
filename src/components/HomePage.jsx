import './HomePage.css'
import { getCookie } from '../utils/cookie'
import store from '../utils/store'

const HomePage = () => {
    console.log("HomeContainer")
    const DYNAMIC_SITE = 'http://localhost:3001'
    
    const handleLogin = () => {
        
        const cookieToken = getCookie('token')

        if(cookieToken === null || cookieToken === '' || cookieToken === undefined) {

            if(store.isAutheticated) {
                //functionality to logout
                store.clear();
                return;
            }

            return window.location.href = `${DYNAMIC_SITE}/?redirect=static_site`;
        }

        if(!store.isAutheticated) {
                
            store.set({name: 'Divyanshu'})
            return;
        }
    }

    const handleSignup = () => {

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