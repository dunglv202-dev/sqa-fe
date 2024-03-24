import { useContext, useState } from "react";
import Page from "../../components/Page";
import Button from "../../components/form/Button";
import Field from "../../components/form/Field";
import Input from "../../components/form/Input";
import styles from "./Login.module.css";
import { AuthContext } from "../../contexts/auth-context";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const authContext = useContext(AuthContext);

  return (
    <Page title="Đăng nhập">
      <form className={styles["login-form"]}>
        <Field label="Tên đăng nhập">
          <Input />
        </Field>
        <Field label="Mật khẩu">
          <Input />
        </Field>
        <Button label="Đăng nhập" onClick={() => {}} />
      </form>
    </Page>
  );
}

export default Login;
