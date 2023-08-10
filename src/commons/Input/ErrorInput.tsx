import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Error from '../../assets/ErrorIcon.svg';

interface InputProps {
    placeholder: string;
    width?: string;
    value?: string;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface InputWrapperProps {
    width?: string;
}

const InputWrapper = styled.div<InputWrapperProps>`
    position: relative;
    width: ${(props) => props.width};
    height: 48px;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 12px 12px 12px 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 6px;
    border: 1px solid #ff4500;
    box-sizing: border-box;

    ::placeholder {
        color: #9ba4ba;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    &:hover {
        border: 1px solid #49526a;

        &::placeholder {
            color: #050505;
        }
    }

    &:focus {
        outline: none;
        border: 1px solid #8644ff;
    }
`;

const ClearImg = styled.img<{ $visible: boolean }>`
    position: absolute;
    top: 25%;
    right: 10px;
    width: 24px;
    height: 24px;
    visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
    cursor: pointer;
`;

const ErrorInput = ({ placeholder, width, value, onChange, type }: InputProps) => {
    const handleClear = () => {
        if (onChange) {
            onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        }
    };

    return (
        <InputWrapper width={width}>
            <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} />
            <ClearImg $visible={value !== ''} onClick={handleClear} src={Error} />
        </InputWrapper>
    );
};

export default ErrorInput;
