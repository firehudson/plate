import React from 'react';
import { PlateRenderLeafProps } from '../types/PlateRenderLeafProps';

export const DefaultLeaf = ({
  attributes,
  children,
  text,
  leaf,
  editor,
  plugins,
  nodeProps,
  ...props
}: PlateRenderLeafProps) => (
  <span {...attributes} {...props}>
    {children}
  </span>
);
