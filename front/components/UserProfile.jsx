import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction);
  }, []);

  return (
    <Card
      actions={[
        <div key="type1">type1</div>,
        <div key="type2">type2</div>,
        <div key="type3">type3</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>InSeong</Avatar>} title={"InSeong"} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
