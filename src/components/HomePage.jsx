import './HomePage.css'
import { getCookie } from '../utils/cookie'
import store from '../utils/store'
import { dynamicSite } from '../utils/urls'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userInfoThunk } from '../store/homepage/thunk';

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
                
            store.set({name: 'Divyanshu'})
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
    
    return (
        <div className="container">
      
            <p>
                Welcome To HomePage
            </p>
            <div className="l-btn">
           { store.isAuthenticated ? 
            <h2>Hello {store.username}</h2> :
          
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