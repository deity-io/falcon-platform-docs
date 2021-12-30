export type ChangelogItemType = {
  id: string;
  type: 'feature' | 'bugfix' | 'hotfix' | 'improvement';
  text: string;
};

export type ChangelogUpdatedPackageType = {
  id: string;
  title: string;
  code: string;
};

export type ChangelogItemsChange = {
  id: string;
  title: string;
  breaking?: boolean;
  updatedPackages?: ChangelogUpdatedPackageType[];
  data?: ChangelogItemType[];
};

export type ChangelogItemsType = {
  items: {
    id: string;
    title?: string;
    date: Date;
    changes: ChangelogItemsChange[];
  }[];
};
