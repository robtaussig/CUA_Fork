import { Paragraph } from '@my/ui';
import React from 'react';
import { MyPage } from '@my/ui/src/MyPage';
import { Home, Search, BookOpen, Plus } from '@tamagui/lucide-icons';

export function SettingsScreen() {
  return (
    <MyPage
      pageTitle='Settings'
      isSettings
      navItems={[
        { icon: Home, text: 'Home', link: '/' },
        { icon: Search, text: 'Search', link: '/search' },
        { icon: BookOpen, text: 'Browse', link: '/browse' },
        { icon: Plus, text: 'Create', link: '/create' },
      ]}
      sections={[
        {
          title: 'Settings',
          content: <Paragraph>SettingsContent</Paragraph>,
        },
      ]}
    />
  );
}
