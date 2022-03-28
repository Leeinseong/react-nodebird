import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoadingOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          게시글
          <br />
          {me.Posts.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me?.nickname[0]}</Avatar>}
        title={me?.nickname}
      />
      <Button onClick={onLogOut} loading={isLoadingOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
