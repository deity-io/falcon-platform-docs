import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Badge = ({ children }: Props) => <span className="badge badge--secondary mb20">{children}</span>;

export default Badge;
