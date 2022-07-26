import Button from '../../shared/Button';
import Input from '../../shared/Input';
import './login.css';
function LoginPage() {
  return (
    <>
      <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
              <h1 className="form-title text-center">Login</h1>
              <div className="form-login-register">
                <form action>
                  <Input type="default" typeHtml="text" placeholder="Enter Username ..." labelName="Username"/>
                  <Input type="default" typeHtml="password" placeholder="Enter Password ..." labelName="Password" icon="toggle-password ion-eye" />
                  <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button type="primary" size="large">Submit</Button>
                    <Button as="a" href="register.html">Regiter</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing" />
      </main>
    </>
  );
}

export default LoginPage;