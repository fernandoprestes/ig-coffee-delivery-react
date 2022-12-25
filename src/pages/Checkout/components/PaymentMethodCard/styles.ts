import styled, { css } from 'styled-components';

export const PaymentMethodCardContainer = styled.div`
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + label div {
      ${({ theme }) => css`
        background: ${theme.colors['brand-purple-light']};
        color: ${theme.colors['brand-purple']};
        border: 1px solid ${theme.colors['brand-purple']};

        &:hover {
          background: ${theme.colors['brand-purple-light']};
        }
      `}
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  user-select: none;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`;
