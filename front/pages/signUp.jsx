import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import { SIGN_UP_REQUEST } from "../reducers/user";

const ErrorMessage = styled.div`
  color: red;
`;

const TextInput = ({ value }) => <div>{value}</div>;

TextInput.propTypes = {
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  // Hooks들로 중복을 제거
  const [email, onEmail] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, passwordCheck },
    });
    return null;
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">이메일</label>
          <br />
          <Input name="user-id" value={email} required onChange={onEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            개인약관에 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default SignUp;
