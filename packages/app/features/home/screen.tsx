import { Paragraph } from '@my/ui';
import React from 'react';
import { MyPage } from '@my/ui/src/MyPage';
import {
  Home,
  Search,
  BookOpen,
  Plus,
  Bookmark,
  FolderTree,
  History,
  Users,
} from '@tamagui/lucide-icons';
import { Categories } from '../categories/screen';

export function HomeScreen() {
  return (
    <MyPage
      pageTitle='Home'
      navItems={[
        { icon: Home, text: 'Home', link: '/', isActive: true },
        { icon: Search, text: 'Search', link: '/search' },
        { icon: BookOpen, text: 'Browse', link: '/browse' },
        { icon: Plus, text: 'Create', link: '/create' },
      ]}
      sections={[
        {
          title: 'Stage',
          Icon: Bookmark,
          content: <Paragraph>StageContent</Paragraph>,
        },
        {
          title: 'Categories',
          Icon: FolderTree,
          content: <Categories />,
        },
        {
          title: 'History',
          Icon: History,
          content: <Paragraph>HistoryContent</Paragraph>,
        },
        {
          title: 'Members',
          Icon: Users,
          content: <Paragraph>MembersContent</Paragraph>,
        },
      ]}
    />
  );
}
