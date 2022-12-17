import { ReactNode } from 'react';
import { IconContainer, IconContent } from './styles';

interface InfoWithIconProps {
  icon: ReactNode;
  text: ReactNode | string;
  iconColor: string;
}

export function InfoWithIcon({ icon, iconColor, text }: InfoWithIconProps) {
  return (
    <IconContainer>
      <IconContent iconColor={iconColor}>{icon}</IconContent>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </IconContainer>
  );
}
