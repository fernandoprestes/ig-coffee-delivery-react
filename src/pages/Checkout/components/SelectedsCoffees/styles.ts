import styled from 'styled-components';
import { WrapperSection } from '../../styles';

export const SelectedsCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(WrapperSection)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`;

export const SummationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
