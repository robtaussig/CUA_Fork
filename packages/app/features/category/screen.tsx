import { createParam } from "solito";
import { Paragraph } from '@my/ui';
import React from 'react';
import { MyPage } from '@my/ui/src/MyPage';
import {
  Home,
  Search,
  Plus,
  Network,
} from '@tamagui/lucide-icons';
import { trpc } from 'app/utils/trpc';
import { YStack } from "@tamagui/stacks";

const { useParam } = createParam<{ id: string }>()

export function CategoryScreen() {
  const [id] = useParam('id');
  const { data, status } = trpc.nodeGroup.one.useQuery({
    id: id!,
  });

  return (
    <MyPage
      statuses={[status]}
      pageTitle={data?.name ?? 'Loading...'}
      navItems={[
        { icon: Home, text: 'Home', link: '/', isActive: true },
        { icon: Search, text: 'Search', link: '/search' },
        { icon: Plus, text: 'Create', link: '/create' },
      ]}
      sections={[
        {
          title: 'Nodes',
          Icon: Network,
          content: <YStack height={'100%'}><Paragraph>StageContent</Paragraph></YStack>,
        },
      ]}
    />
  );
}
