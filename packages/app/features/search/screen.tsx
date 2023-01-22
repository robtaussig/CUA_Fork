import { Paragraph, YStack } from '@my/ui';
import React from 'react';
import { MyPage } from '@my/ui/src/MyPage';
import { Home, Search, BookOpen, Plus } from '@tamagui/lucide-icons';

export function SearchScreen() {
  return (
    <MyPage
      pageTitle='Search'
      navItems={[
        { icon: Home, text: 'Home', link: '/' },
        { icon: Search, text: 'Search', link: '/search', isActive: true },
        { icon: BookOpen, text: 'Browse', link: '/browse' },
        { icon: Plus, text: 'Create', link: '/create' },
      ]}
      sections={[
        {
          title: 'Search',
          content: <Paragraph>SearchContent</Paragraph>,
        },
      ]}
    />
  );
}
