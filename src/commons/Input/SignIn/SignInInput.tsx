import { styled } from 'styled-components';

interface InputProps {
    placeholder: string;
}

const Input = styled.input`
    width: 328px;
    height: 48px;
    display: flex;
    padding: 12px 12px 12px 16px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 6px;
    border: 1px solid #626e8e;
    box-sizing: border-box;
    ::placeholder {
        color: #9ba4ba;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
`;

const SignInInput = ({ placeholder }: InputProps) => {
    return <Input placeholder={placeholder} />;
};

export default SignInInput;
