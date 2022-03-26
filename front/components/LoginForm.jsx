import React, { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/Link";
import styled from "styled-components";

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const LoginForm = ({ setIsLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const rightMarginStyle = useMemo(() => ({ marginRight: 10 }));

  const onSubmiitForm = useCallback(
    (e) => {
      console.log(id, password);
      setIsLogin(true);
    },
    [id, password]
  );

  return (
    <FormWrapper onFinish={onSubmiitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button
          type="primary"
          htmlType="submit"
          loading={false}
          style={rightMarginStyle}
        >
          {" "}
          로그인
        </Button>
        <Link href="/signUp">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
