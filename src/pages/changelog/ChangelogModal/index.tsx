import React, { FC, useState } from 'react';
import MinusIcon from '@site/static/icons/check-minus.svg';
import MailIcon from '@site/static/icons/email.svg';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import styles from './styles.module.scss';

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const ChangelogModal: FC<Props> = ({ open, setOpen }) => (
  <Modal open={open} setOpen={() => setOpen(false)}>
    <div className={styles.titleContainer}>
      <p className={styles.small}>Select</p>
      <p className={styles.title}>Topics to subscribe to</p>
    </div>
    <div className={styles.checkbox}>
      <Checkbox icon={<MinusIcon />} labelVariant="small" label="Select All" />
    </div>
    <div className={styles.checkbox}>
      <Checkbox label="Storefront" />
    </div>
    <div className={styles.checkbox}>
      <Checkbox label="Service Composer" />
    </div>
    <div className={styles.checkbox}>
      <Checkbox label="Payments" />
    </div>
    <div className={styles.checkbox}>
      <Checkbox label="Data integrator" />
    </div>
    <div className={styles.bottomControls}>
      <Button href="#" onClick={() => setOpen(false)} color="transparent">
        Cancel
      </Button>
      <Button href="#" color="primary" endIcon={<MailIcon />}>
        Subscribe
      </Button>
    </div>
  </Modal>
);

export default ChangelogModal;
