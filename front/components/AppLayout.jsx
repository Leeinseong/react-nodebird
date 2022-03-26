import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/Link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import { useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

// 인라인 스타일은 최소로, Virtual Dom이 style이 있으면 새로운 것인줄 알고 다시 리렌더링 하게 됨
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// 공통으로 사용하는 Layout
const AppLayout = ({ children }) => {
  // 구조분해 할당
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode={"horizontal"}>
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signUp">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
