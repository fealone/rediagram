import React, { FC, useMemo } from 'react';
import { IconNode, useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';
import { AWSDependences } from '../../types';

export type WavelengthProps = {
  name: string;
} & AWSDependences;

function resolveImage(): string {
  return resolveAsset('compute/Wavelength.png');
}

function useIcon(): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(),
      size: 56,
    };
  }, []);
}

export const Wavelength: FC<WavelengthProps> = ({ name, children, upstream, downstream, dependencesOption }) => {
  useAssertProvider();
  const icon = useIcon();
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return (
    <IconNode
      name={name}
      icon={icon}
      label={label}
      upstream={upstream}
      downstream={downstream}
      dependencesOption={dependencesOption}
    />
  );
};

Wavelength.displayName = 'Wavelength';
