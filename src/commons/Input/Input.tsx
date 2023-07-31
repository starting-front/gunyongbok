import { useState } from 'react';
import styled from 'styled-components';
import DeleteImg from '../../assets/deleteImg.svg';

interface InputProps {
    placeholder: string;
    width?: string;
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
    border: 1px solid #626e8e;
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

const Input = ({ placeholder, width }: InputProps) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <InputWrapper width={width}>
            <StyledInput type="text" value={value} onChange={handleChange} placeholder={placeholder} />
            <ClearImg $visible={value !== ''} onClick={handleClear} src={DeleteImg} />
        </InputWrapper>
    );
};

export default Input;
