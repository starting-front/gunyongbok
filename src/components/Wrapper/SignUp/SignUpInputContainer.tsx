import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface InputContainerProps {
    children: ReactNode;
}

const InputContainer = styled.form`
    width: 360px;
    height: 572px;
    padding: 0px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SignUpInputContainer = ({ children }: InputContainerProps) => {
    return <InputContainer>{children}</InputContainer>;
};

export default SignUpInputContainer;
