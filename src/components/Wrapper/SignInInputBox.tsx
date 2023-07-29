import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BoxProps {
    children: ReactNode;
}

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const SignInInputBox = ({ children }: BoxProps) => {
    return <InputBox>{children}</InputBox>;
};

export default SignInInputBox;
