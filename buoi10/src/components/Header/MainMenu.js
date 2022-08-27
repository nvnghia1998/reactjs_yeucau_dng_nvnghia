import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { actLogout } from '../../store/auth/actions';


function MainMenu() {
    const listMenu = useSelector(state => state.Menu.listMenu);
    const childMenu = item => {
        return (
            <li key={item.id} className="menu-item">
                <Link to={item.url}>{item.title}</Link>
                {
                    item.childItems.length > 0 &&
                    <ul>
                        {
                            item.childItems.map(childMenu)
                        }
                    </ul>
                }
            </li>
        );

    }
    return (
        <ul className="header-nav__lists">
            {
                listMenu.map(childMenu)
            }
        </ul>
    )
}

export default MainMenu