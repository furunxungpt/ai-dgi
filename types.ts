export enum Category {
  NEWS = 'NEWS',
  ACHIEVEMENT = 'ACHIEVEMENT',
  RESEARCH = 'RESEARCH',
  EVENT = 'EVENT',
  LEARNING = 'LEARNING',
  ACTION = 'ACTION'
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: string[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image?: string;
  author?: string;
  tags?: string[];
}

export interface IndexData {
  name: string;
  value: number;
  delta?: number;
}
