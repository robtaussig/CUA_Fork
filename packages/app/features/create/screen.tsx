import { Paragraph } from '@my/ui';
import React from 'react';
import { MyPage } from '@my/ui/src/MyPage';
import { Home, Search, BookOpen, Plus, Pencil } from '@tamagui/lucide-icons';

export function CreateScreen() {
  return (
    <MyPage
      pageTitle='Create'
      navItems={[
        { icon: Home, text: 'Home', link: '/' },
        { icon: Search, text: 'Search', link: '/search' },
        { icon: BookOpen, text: 'Browse', link: '/browse' },
        { icon: Plus, text: 'Create', link: '/create', isActive: true },
      ]}
      sections={[
        {
          title: 'Create',
          Icon: Pencil,
          content: <Paragraph>CreateContent</Paragraph>,
        },
      ]}
    />
  );
}
