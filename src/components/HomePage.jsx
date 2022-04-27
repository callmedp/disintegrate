import './HomePage.css'
import { getCookie, deleteCookie } from '../utils/cookie'
import store from '../utils/store'
import { dynamicSite } from '../utils/urls'
import { useState } from 'react';


const HomePage = () => {
    console.log("HomeContainer")

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     userInfoThunk(dispatch)
    // })

    const cookieStoreHandler = query => {
        const cookieToken = getCookie('token')

        if(cookieToken === null || cookieToken === '' || cookieToken === undefined) {

            if(store.isAutheticated) {
                //functionality to logout
                store.clear();
            }

            return;
            // return window.location.href = `${dynamicSite}/?open_modal=${query}`;
        }

        if(!store.isAutheticated) {
                
            store.set({name: cookieToken})
            return;
        }
    }
    
    
    const handleLogin = () => {
        setShowLogin(true);
        cookieStoreHandler('login')
       
    }

    const handleSignup = () => {
        setShowSignup(true);
        cookieStoreHandler('signup')
    }

    const handleLogout = () => {
        console.log("logout clicked")
        store.clear();
        deleteCookie('token');
        deleteCookie('loginData');
        deleteCookie('isSession');
        window.location.reload();
    }
    
    return (
        <div className="container">
      
            <p>
                Welcome To HomePage
            </p>
            <div className="l-btn">
           { store.isAuthenticated ? 
            <><h2>Hello {store.username}</h2> 
            <button className="btnx" onClick={handleLogout}>Logout</button></>:
          
            showLogin ? '' : showSignup ? '' : <><button className="btnx" onClick={handleLogin}>
                Login   
            </button >
            <button className="btnx" onClick={handleSignup}>
                Signup
            </button></>

            }
            </div>
            {
                showLogin ? <iframe className="if" src={`${dynamicSite}/login`} title="Dynamic Pages"></iframe> : ''
            }
            {
                showSignup ? <iframe className="if" src={`${dynamicSite}/signup`} title="Dynamic Pages"></iframe> : ''
            }
        </div>
    )
}

export default HomePage;