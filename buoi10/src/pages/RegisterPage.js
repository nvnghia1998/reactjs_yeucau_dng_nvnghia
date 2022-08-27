import './LoginPage/login.css'
import { Link, useHistory} from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validateFormRegister } from '../helpers'
import { actRegisterAsync } from '../store/auth/actions'

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: {
      value: '',
      error: ''
    },
    username: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },

  });

  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();

    const error = validateFormRegister({ value, name });

    setFormData({
      ...formData,
      [name]: {
        value,
        error
      }
    });
    // setIsFormDirty(false);
  }



  function checkFormIsValid() {
    const newFormData = {}
    Object.keys(formData).forEach(key => {
      newFormData[key] = {
        value: '',
        error: validateFormRegister({ value: formData.value, name: key })
      }
    })

    setFormData(newFormData);
    if (formData.username.error || formData.password.error || formData.email.error || formData.nickname.error) return false;

    return true;
  }

  function handleRegister(evt) {
    evt.preventDefault();

    const isValid = checkFormIsValid();

    console.log(isValid);

    if (!isValid) {
      console.log('form error');
      return;
    }

    const { nickname, username, password, email} = formData;
console.log(formData);
    if (loading) return;

    setLoading(true);
    setFormError('');

    dispatch(actRegisterAsync(formData)).
      then(res => {
        console.log(res);
        if (res.ok) {
          history.push('/');
        } else {
          setFormError(res.error);
          setLoading(false);
        }
      })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
            {formError && <p className="form-login__error">{formError}</p>}
              <form autoComplete="off" onSubmit={handleRegister}>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  value={formData.nickname.value}
                  error={formData.nickname.error}
                  name="nickname"
                  onChange={handleOnChange}
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.username.value}
                  error={formData.username.error}
                  name="username"
                  onChange={handleOnChange}
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                  value={formData.email.value}
                  error={formData.email.error}
                  name="email"
                  onChange={handleOnChange}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={formData.password.value}
                  error={formData.password.error}
                  name="password"
                  onChange={handleOnChange}
                />


                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
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

export default RegisterPage