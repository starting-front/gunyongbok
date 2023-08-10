import { styled } from 'styled-components';

interface MessageBoxProps {
  color?: string;
  text: string;
}

const MessageBox = styled.div<MessageBoxProps>`
  width: 328px;
  height: 28px;
  padding: 8px;
  box-sizing: border-box;
  color: ${(props) => props.color || '#FF4500'};
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

const ErrorMessage = ({ color, text }: MessageBoxProps) => {
  return (
    <MessageBox color={color} text={text}>
      {text}
    </MessageBox>
  );
};

export default ErrorMessage;
