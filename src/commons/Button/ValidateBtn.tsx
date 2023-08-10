import { styled } from 'styled-components';

interface ButtonProps {
    children: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

    &:focus {
        border: 1px solid #8644ff;
        color: #8644ff;
    }
`;

const ValidateBtn = ({ children, onClick }: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
    };
    return <Button onClick={handleClick}>{children}</Button>;
};

export default ValidateBtn;
