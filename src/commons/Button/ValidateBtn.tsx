import { styled } from 'styled-components';

interface ButtonProps {
    children: string;
}

const Button = styled.button`
    width: 83px;
    height: 48px;
    padding: 13px 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #ccd0dc;
    background: #fafafa;
    color: #626e8e;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

const ValidateBtn = ({ children }: ButtonProps) => {
    return <Button>{children}</Button>;
};

export default ValidateBtn;
