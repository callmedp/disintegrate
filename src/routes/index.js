import HomeContainer from '../components/HomePage';
import Middleware from './middleware';

const AppRoutes = () => {
    console.log("router")
   return <Middleware routes = {routes} /> 
}

const routes = [
    {
        path: '/',
        component: HomeContainer,   
        exact: true
    }
]

export default AppRoutes;   