import styled from 'styled-components';
import backgroundImage from '../../assets/img/bg7.jpg';

// export const DivContainer = styled.div`
//   flex-grow: 1;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   const { theme } = useUserPreferenceContext();
//   const currentTheme = theme === 'light' ? lightTheme : darkTheme;
// `;

export const DivContainer = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const BackGroundImg = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${backgroundImage});
  background-size: cover;
  background-position: top center;
  height: 100vh;
  padding-bottom: 1000px;
  @media (max-width: 992px) {
    background-size: auto;
    background-repeat: no-repeat;
    padding-bottom: 1300px;
  }
`;
