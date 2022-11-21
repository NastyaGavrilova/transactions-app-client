import styled from '@emotion/styled';
import Select from '@mui/material/Select';

export const SelectStyled = styled(Select)`
  min-width: 155px;
  cursor: pointer;
  font-size: 14px;
  line-height: 17px;
  color: #1a1a1a;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  & svg {
    fill: #3a80ba;
  }
  @media (max-width: 750px) {
    min-width: 90px;
  }
`;
