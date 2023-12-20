export type SidebarLinkProps = {
  to: string;
  href: string;
  offset: number;
  label: string;
};

export type WorkHistoryItemProps = {
  duration: string;
  durationLabel: string;
  company: string;
  jobTitle: string;
  href: string;
  skills: string[];
};

export type ProjectItemProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};
