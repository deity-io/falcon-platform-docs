import { ChangelogItemType } from './types';

export const tooltipBadgeMap: {
  [key in ChangelogItemType['type']]: string;
} = {
  feature: 'lorem feature ipsum',
  bugfix: 'lorem bugfix ipsum',
  hotfix: 'lorem bugfix ipsum',
  improvement: 'lorem improvement ipsum'
};
