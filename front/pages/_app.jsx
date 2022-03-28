import React from "react";
import { PropTypes } from "prop-types";
import Head from "next/head";

import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

// pages의 공통적으로 적용되는 부분, index.js의 부모라고 생각
const NodeBird = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>인성_노드버드</title>
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
