import { styled } from 'styled-components';

// Header
import Header from '../../components/Header/Header';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Portfolio = () => {
  return (
    <TopContainer>
      <Header />
    </TopContainer>
  );
};

export default Portfolio;
