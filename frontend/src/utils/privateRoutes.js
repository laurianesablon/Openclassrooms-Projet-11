import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function PrivateRoutes(){
  const AUTH = useSelector(
    (state) => state.token.authenticated);
return (
    AUTH ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes