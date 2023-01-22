import { Spinner, YStack } from 'tamagui';
import { trpc } from 'app/utils/trpc';
import { MyInput } from '@my/ui/src/components/MyInput';
import { NodeGroup } from './NodeGroup';

interface Props {}

export const Categories: React.FC<Props> = ({}) => {
  const createNodeGroup = trpc.nodeGroup.create.useMutation();
  const { data, status } = trpc.nodeGroup.all.useQuery();
  const utils = trpc.useContext();

  return (
    <YStack space={'$4'}>
      <MyInput
        inputPlaceholder={'Create Category...'}
        onSubmit={(value) => {
          createNodeGroup.mutate(
            {
              name: value,
            },
            {
              onSuccess: () => {
                utils.nodeGroup.all.invalidate();
              },
            }
          );
        }}
        clearOnSubmit
      />
      {data?.map((nodeGroup) => (
        <NodeGroup
          key={nodeGroup.id}
          nodeGroup={nodeGroup}
          nodeCount={nodeGroup._count.nodes}
        />
      ))}
      {createNodeGroup.status === 'loading' && <Spinner />}
    </YStack>
  );
};
