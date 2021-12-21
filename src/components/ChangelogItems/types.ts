export type ChangelogItemType = {
  type: 'feature' | 'bugfix' | 'hotfix' | 'improvement';
  text: string;
};

export type ChangelogUpdatedPackageType = {
  title: string;
  code: string;
};

export type ChangelogItemsChange = {
  title: string;
  breaking?: boolean;
  updatedPackages?: ChangelogUpdatedPackageType[];
  data?: ChangelogItemType[];
};

export type ChangelogItemsType = {
  items: {
    title?: string;
    date: Date;
    changes: ChangelogItemsChange[];
  }[];
};
