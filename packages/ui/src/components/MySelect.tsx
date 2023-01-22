import { Adapt, LinearGradient, Select, Sheet, YStack } from 'tamagui';
import { ChevronDown, ChevronUp, Check } from '@tamagui/lucide-icons';

interface MySelectProps<T = string> {
  value: T;
  options: T[];
  onValueChange: (value: T) => void;
  width?: number;
}

export const MySelect: React.FC<MySelectProps> = ({
  value,
  options,
  onValueChange,
  width = 180,
}) => {
  return (
    <Select value={value} defaultValue={value} onValueChange={onValueChange}>
      <Select.Trigger w={width} iconAfter={ChevronDown}>
        <Select.Value placeholder={value} />
      </Select.Trigger>

      <Adapt when='sm' platform='touch'>
        <Sheet modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200_000}>
        <Select.ScrollUpButton
          ai='center'
          jc='center'
          pos='relative'
          w='100%'
          h='$3'
        >
          <YStack zi={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', '$backgroundTransparent']}
            br='$4'
          />
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <Select.Group>
            {options.map((option, i) => {
              return (
                <Select.Item
                  index={i}
                  key={option}
                  value={option.toLowerCase()}
                >
                  <Select.ItemText>{option}</Select.ItemText>
                  <Select.ItemIndicator ml='auto'>
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton
          ai='center'
          jc='center'
          pos='relative'
          w='100%'
          h='$3'
        >
          <YStack zi={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$backgroundTransparent', '$background']}
            br='$4'
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
};
