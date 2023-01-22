import { NodeGroup as NodeGroupType } from '.prisma/client';
import { MyButton } from '@my/ui/src/components/MyButton';
import { Folder, Trash } from '@tamagui/lucide-icons';
import { XStack, Paragraph, Spinner, YStack } from 'tamagui';
import { trpc } from 'app/utils/trpc';

interface Props {
  nodeGroup: NodeGroupType;
  nodeCount: number;
}

export const NodeGroup: React.FC<Props> = ({ nodeGroup, nodeCount }) => {
  const deleteNodeGroup = trpc.nodeGroup.delete.useMutation();
  const utils = trpc.useContext();
  return (
    <YStack>
      <XStack
        ai={'center'}
        jc={'space-between'}
        w={'100%'}
        overflow={'hidden'}
        space={'$4'}
      >
        <MyButton
          linkTo={`/category/${nodeGroup.id}`}
          icon={<Folder style={{ minHeight: 15, minWidth: 15 }} />}
          text={nodeGroup.name}
          textProps={{
            color: 'white',
          }}
          p={0}
          chromeless
          color={'$blue9'}
          f={1}
          jc={'flex-start'}
          height={'100%'}
        />
        <MyButton
          icon={
            deleteNodeGroup.status === 'loading' ? (
              <Spinner />
            ) : (
              <Trash color={'$red10'} />
            )
          }
          chromeless
          onClick={() =>
            deleteNodeGroup.mutate(
              {
                nodeGroupId: nodeGroup.id,
              },
              {
                onSuccess: () => {
                  utils.nodeGroup.all.invalidate();
                },
              }
            )
          }
        />
      </XStack>
      <Paragraph color={'gray'}>({nodeCount} nodes)</Paragraph>
    </YStack>
  );
};
