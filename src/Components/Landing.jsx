import {Link} from 'react-router-dom'
import '../styles/Landing.css'
const Landing = () => {
    return ( 
        <div className="page">
            <Link to='/adminlogin'>
                <h1>Admin</h1>
                <img src="https://www.minds.com/icon/315595890549067776/master/1400619923/1610716997/1660028401" alt="" />
            </Link>
            <Link to='/userlogin'>
                <h1>User</h1>
                <img src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="" />
            </Link>
        </div>
     );
}
export default Landing;