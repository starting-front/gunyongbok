import { styled } from 'styled-components';

const Container = styled.div`
    width: 328px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Line = styled.div`
    width: 134px;
    height: 1px;
    background: #b3bacb;
`;

const TextBox = styled.div`
    width: 60px;
    height: 28px;
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #9ba4ba;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
`;

const BreakLine = () => {
    return (
        <Container>
            <Line />
            <TextBox>또는</TextBox>
            <Line />
        </Container>
    );
};

export default BreakLine;
