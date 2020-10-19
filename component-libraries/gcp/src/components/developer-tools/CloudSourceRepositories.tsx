import React, { FC, useMemo } from 'react';
import { HasDependences, useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';
import { GCPNode } from '../internal/GCPNode';

export type CloudSourceRepositoriesProps = {
  name: string;
  description?: string;
} & HasDependences;

function resolveImage(): string {
  return resolveAsset('developer-tools/CloudSourceRepositories.png');
}

function useIcon(): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(),
      size: 40,
    };
  }, []);
}

export const CloudSourceRepositories: FC<CloudSourceRepositoriesProps> = ({
  name,
  description,
  children,
  upstream,
  downstream,
}) => {
  useAssertProvider();
  const icon = useIcon();
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return (
    <GCPNode
      service="Cloud Source Repositories"
      name={name}
      description={description}
      icon={icon}
      label={label}
      upstream={upstream}
      downstream={downstream}
    />
  );
};

CloudSourceRepositories.displayName = 'CloudSourceRepositories';
