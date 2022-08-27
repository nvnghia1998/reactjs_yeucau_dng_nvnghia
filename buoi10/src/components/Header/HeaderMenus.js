import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { actLogout } from '../../store/auth/actions';
import MainMenu from "./MainMenu";


function HeaderMenus() {
  const curentUser = useSelector(state => state.Auth.currentUser);
  const dispatch = useDispatch()
  const listMenu = useSelector(state => state.Menu.listMenu);
  function handleLogout() {
    dispatch(actLogout())
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <MainMenu/>
      </div>
    </div>
  )
}

export default HeaderMenus