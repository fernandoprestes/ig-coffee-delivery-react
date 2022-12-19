import styled from 'styled-components';
import { RegularText, TitleText } from '~/styles/Typography';

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 1.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const CoffeeCardTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.125rem;
  flex-wrap: wrap;
`;

export const Chips = styled.span`
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  font-size: ${({ theme }) => theme.textSizes['components-tag']};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 700;
`;

export const CoffeeCardTitle = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: '700',
})`
  margin-bottom: 0.5rem;
`;

export const CoffeeCardDescription = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
  text-align: center;
`;

export const CoffeeCardFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AddCartContainer = styled.div`
  width: 7.5rem;
`;

export const AddCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['brand-purple-dark']};
  color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  margin-left: 0.3rem;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors['brand-purple']};
  }
`;
