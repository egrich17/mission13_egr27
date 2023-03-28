import React from 'react';
interface Props {
  title?: string;
  children: React.ReactNode;
}
export const Page = ({ title, children }: Props) => <div>{children}</div>;
