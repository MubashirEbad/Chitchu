import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loader from "react-loader-spinner";

const Wrappper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
// const Loader = styled(CircularProgress)``;

const LoadingState = () => {
  return (
    <Wrappper>
      {/* <Loader /> */}
      <Loader type="ThreeDots" color="#309b42" height={60} width={60} />
    </Wrappper>
  );
};

export default LoadingState;
