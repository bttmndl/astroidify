import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframe animation for the spinning circle
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

// Define the styling for the spinning circle
const Spinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-top-color: #000;
  border-radius: 50%;
  animation: ${rotate} 0.8s ease-in-out infinite;
`;



// Defining the loading page component
const LoadingPage: React.FC = () => {
  return (
    <div>
      <Spinner />
      <div><h1>Loading...</h1></div>
    </div>
  );
};

export default LoadingPage;
