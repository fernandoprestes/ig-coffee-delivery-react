import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-width: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
    svg {
      color: ${theme.colors[`brand-${variant}`]};
    }
  `}
`;

export const HeaderButtonCountCartItem = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
  background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  color: ${({ theme }) => theme.colors['brand-yellow-light']};
`;
