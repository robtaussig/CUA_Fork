import { Paragraph } from '@my/ui';
import React from 'react';
import { MyPage } from '@my/ui/src/MyPage';
import { Home, Search, BookOpen, Plus } from '@tamagui/lucide-icons';

export function BrowseScreen() {
  return (
    <MyPage
      pageTitle='Browse'
      navItems={[
        { icon: Home, text: 'Home', link: '/' },
        { icon: Search, text: 'Search', link: '/search' },
        { icon: BookOpen, text: 'Browse', link: '/browse', isActive: true },
        { icon: Plus, text: 'Create', link: '/create' },
      ]}
      sections={[
        {
          title: 'Search',
          content: <Paragraph>BrowseContent</Paragraph>,
        },
      ]}
    />
  );
}
