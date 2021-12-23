import React, { FC, useState } from 'react';
import Badge from '../Badge';
import Typography from '../Typography';
import LinkIcon from '../../../static/icons/link.svg';
import Tooltip from '../Tooltip';
import styles from './styles.module.scss';

type Props = {
  idx: number;
  id: string;
};

const ChangelogTitle: FC<Props> = ({ children, idx, id }) => {
  const [isCopyUrlClicked, setCopyUrlClicked] = useState(false);
  const handleCopyUrl = (idEl: string) => {
    setCopyUrlClicked(true);
    navigator.clipboard.writeText(`${window.location.href}#${idEl}`);
  };

  return (
    <div className={styles.title} onMouseLeave={() => setCopyUrlClicked(false)}>
      <div role="presentation" className={styles.copyIconContainer} onClick={() => handleCopyUrl(id)}>
        <Typography variant="title2" gutterBottom={false}>
          {children}
        </Typography>
        <div className={styles.copyIcon}>
          {isCopyUrlClicked ? (
            <Tooltip open position="right" content="Copied to clipboard">
              <div className={styles.linkIcon} title="Copy link">
                <LinkIcon />
              </div>
            </Tooltip>
          ) : (
            <div className={styles.linkIcon} title="Copy link">
              <LinkIcon />
            </div>
          )}
        </div>
      </div>
      {idx === 0 && <Badge variant="success">latest</Badge>}
    </div>
  );
};

export default ChangelogTitle;
