import styled from 'styled-components';
import backgroundImage from '../../assets/img/bg7.jpg';

// export const DivContainer = styled.div`
//   flex-grow: 1;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// `;

export const DivContainer = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const BackGroundImg = styled.div`
  border: 1px solid #000;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: top center;
  height: 100vh;
`;
