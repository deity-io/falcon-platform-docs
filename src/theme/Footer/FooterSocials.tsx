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
    <FooterSocialIcon title="Twitter" icon={<TwitterIcon />} url="https://twitter.com/deity_commerce" />
    <FooterSocialIcon
      title="YouTube"
      icon={<YoutubeIcon />}
      url="https://www.youtube.com/channel/UCCyszDV63yrqFHUY1uWf4mQ"
    />
    <FooterSocialIcon title="Instagram" icon={<InstagramIcon />} url="https://instagram.com/deity_commerce" />
    <FooterSocialIcon title="Github" icon={<GithubIcon />} url="#" />
    <FooterSocialIcon title="Facebook" icon={<FacebookIcon />} url="#" />
    <FooterSocialIcon title="LinkedIn" icon={<LinkedinIcon />} url="https://www.linkedin.com/company/deity-bv" />
  </div>
);

export default FooterSocials;
