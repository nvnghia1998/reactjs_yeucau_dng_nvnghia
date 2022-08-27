import './login.css'
import { Link } from "react-router-dom"
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actLoginPageAsync } from '../../store/auth/actions';
import { Redirect, Route } from "react-router";

function LoginPage() {
  const dispatch = useDispatch();
  let [userName, setUserName] = useState('User name không được rỗng');
  let [passWord, setPassWord] = useState('');
  let [styleBorder, setstyleBorder] = useState('');
  let [erroMessageUserName, setErrorMessageUserName] = useState('')
  let [erroMessagePass, setErroMessagePass] = useState('')
  let [loading, setLoading] = useState(false)
  let [responErr, setResponErr] = useState('');
  let [validBegin, setValidBegin] = useState(false);
  
  function handleInputUseName(e) {
    setUserName(e.target.value)
    if (e.target.value) {
      setErrorMessageUserName('')
      setstyleBorder('');
    } else {
      setstyleBorder('border-warning');
      setErrorMessageUserName('User name không được rỗng')
    }
  }

  function handleInputPass(e) {
    let value = e.target.value
    setPassWord(value)
    if (value.trim().length < 6 || value.trim().length === 0) {
      setstyleBorder('border-warning');
      setErroMessagePass('Password phải lớn hơn 6 ký tự')
    } else {
      setstyleBorder('');
      setErroMessagePass('')
    }
  }

  function validate() {
    if (erroMessageUserName || erroMessagePass || !userName || !passWord) {
      setUserName('');
      return false;
    }
    return true;
  }
  
  function handleLogin(e) {
    e.preventDefault()
    const valid = validate();
    if (valid) {
      setLoading(true);
      setResponErr('')
      dispatch(actLoginPageAsync(userName, passWord)).then((r) => {
        if (r.error) {
          setResponErr(r.error);
        } else {
          setLoading(false);
          return <Redirect to="./homePage" />
        }
        
      })
    }

  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleLogin}>
                <div className="color-red"><span dangerouslySetInnerHTML={{ __html: responErr }} /></div>
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={userName}
                  erroMessage={erroMessageUserName}
                  onChange={e => handleInputUseName(e)}
                  className={styleBorder}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={passWord}
                  erroMessage={erroMessagePass}
                  onChange={e => handleInputPass(e)}
                  className={styleBorder}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" loading={loading} loadingPos='left' size="large">Đăng nhập</Button>
                  <Link to="/register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default LoginPage