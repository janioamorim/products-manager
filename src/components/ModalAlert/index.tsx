
import React from 'react';

import { 
    Background, 
    ModalWrapper,
    ModalContent,
    CloseModalButton,
    ImgLeft
}  from './styles';

import {
    FaTrashAlt
} from 'react-icons/fa';

interface IModal{
    setShowModal: any;
    deleteProduct: Function;
}

export const ModalAlert:React.FC<IModal> = ({setShowModal, deleteProduct}) => {


    return (
      <>       
          <Background>
            <div>
                
              <ModalWrapper>
                  <ImgLeft>
                    <FaTrashAlt/>
                  </ImgLeft>
                <ModalContent>
                  <h1>Alerta!</h1>
                  <p>Você confirma que vai excluir este registro?</p>
                  <button onClick={()=>deleteProduct()}>Sim</button>
                </ModalContent>
                <CloseModalButton                 
                  onClick={() => {setShowModal(false)}}
                />
              </ModalWrapper>
            </div>
          </Background>
       
      </>
    );
  };
  