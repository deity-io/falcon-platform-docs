import React, { FC } from 'react';
import TwitterIcon from '@site/static/icons/twitter.svg';
import YoutubeIcon from '@site/static/icons/youtube.svg';
import InstagramIcon from '@site/static/icons/instagram.svg';
import GithubIcon from '@site/static/icons/github.svg';
import FacebookIcon from '@site/static/icons/facebook.svg';
import LinkedinIcon from '@site/static/icons/linkedin.svg';
import styles from './styles.module.scss';
import FooterSocialIcon from './FooterSocialIcon';

const FooterSocials: FC = () => (
  <div className={styles.socials}>
    <FooterSocialIcon icon={<TwitterIcon />} url="#" />
    <FooterSocialIcon icon={<YoutubeIcon />} url="#" />
    <FooterSocialIcon icon={<InstagramIcon />} url="#" />
    <FooterSocialIcon icon={<GithubIcon />} url="#" />
    <FooterSocialIcon icon={<FacebookIcon />} url="#" />
    <FooterSocialIcon icon={<LinkedinIcon />} url="#" />
  </div>
);

export default FooterSocials;
