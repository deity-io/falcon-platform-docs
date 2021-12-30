import React, { FC } from 'react';
import { Backdrop, Portal } from '@deity/falcon-ui';
import CloseIcon from '@site/static/icons/close.svg';
import styles from './styles.module.scss';

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Modal: FC<Props> = ({ open, children, setOpen }) => (
  <>
    {open && (
      <Portal>
        <div className={styles.container}>
          <div className={styles.modal}>
            <div tabIndex={0} role="button" className={styles.close} onClick={() => setOpen(false)}>
              <CloseIcon />
            </div>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </Portal>
    )}
    <Backdrop transitionDuration="short" as={Portal} visible={open} />
  </>
);

export default Modal;
