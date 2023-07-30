import { styled } from 'styled-components';

interface TextProps {
    children: string;
}

const Text = styled.div`
    width: 102px;
    height: 30px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #303646;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`;

const TextBox = ({ children }: TextProps) => {
    return <Text>{children}</Text>;
};

export default TextBox;
