import React from "react";
import PropTypes from "prop-types";
import Link from "next/Link";
import { Menu } from "antd";

// 공통으로 사용하는 Layout
const AppLayout = ({ children }) => {
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
          <Link href="/signUp">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
