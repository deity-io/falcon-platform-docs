import React, { FC } from 'react';

const Highlight = ({ text, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem 0.5rem',
      textTransform: 'uppercase'
    }}
  >
    {text}
  </span>
);

const colors = {
  server: '#a7345c',
  client: '#596690',
  payment: '#483958'
};

type HighlightFlagType = {
  type: string;
  text: string;
};

const HighlightFlag: FC<HighlightFlagType> = ({ type, text }) => {
  const data = {
    color: colors.payment,
    text
  };
  switch (type) {
    case 'server':
      data.color = colors.server;
      data.text = text || 'Falcon Server';
      break;
    case 'client':
      data.color = colors.client;
      data.text = text || 'Falcon Client';
      break;
    default:
      break;
  }
  if (data.text) {
    return <Highlight {...data} />;
  }

  return null;
};

export default HighlightFlag;
