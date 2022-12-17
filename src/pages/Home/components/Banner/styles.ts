import styled from 'styled-components';
import { rgba } from 'polished';

import bannerBackgroundImg from '~/assets/images/banner-background.png';
import { TitleText } from '~/styles/Typography';

export const BannerContainer = styled.section`
  height: 34rem;
  background: ${({ theme }) => `url(${bannerBackgroundImg}) no-repeat center, linear-gradient(
    0deg,
    ${theme.colors['base-background']} 0%,
    ${rgba(theme.colors['base-white'], 0.2)} 50%,
    ${theme.colors['base-background']} 70%
  )`};
  background-size: cover;
`;

export const BannerContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const BannerTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
