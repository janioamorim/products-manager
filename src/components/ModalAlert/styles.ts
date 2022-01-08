import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;  
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 135px;
    transition: all .3s;

    animation: ${animate} .7s ease; 
`;

export const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
    text-align: center;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const ImgLeft = styled.div`
  display: flex;
  width: 100%;
  background-color: #141414;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  svg{
      width: 70px;
      height: 70px;
      fill: #ed1111;
  }
`;