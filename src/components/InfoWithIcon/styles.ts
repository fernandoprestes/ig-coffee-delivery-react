import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContentProps {
  iconColor: string;
}
export const IconContent = styled.div<IconContentProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconColor }) => iconColor};
  color: ${({ theme }) => theme.colors['base-white']};

  display: flex;
  align-items: center;
  justify-content: center;
`;
