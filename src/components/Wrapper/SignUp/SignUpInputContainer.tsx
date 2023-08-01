import { FormEvent, ReactNode } from 'react';
import { styled } from 'styled-components';

interface InputContainerProps {
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const InputContainer = styled.form`
    width: 360px;
    height: 516px;
    padding: 0px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SignUpInputContainer = ({ children, onSubmit }: InputContainerProps) => {
    return <InputContainer onSubmit={onSubmit}>{children}</InputContainer>;
};

export default SignUpInputContainer;
