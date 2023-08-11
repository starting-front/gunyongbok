import styled from 'styled-components';

const RadioBtn = styled.button<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.selected ? 'rgba(134, 68, 255, 0.15)' : 'transparent')};
  border: none;
  position: relative;
  border-radius: 45px;
  &:hover {
    background: ${(props) => (props.selected ? 'rgba(134, 68, 255, 0.15)' : 'rgba(134, 68, 255, 0.05)')};
  }
  &:focus {
    background: ${(props) => (props.selected ? 'rgba(134, 68, 255, 0.15)' : 'transparent')};
  }
`;

export default RadioBtn;
