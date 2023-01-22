import { XStack, Input, StackPropsBase } from 'tamagui';
import { MyButton } from './MyButton';
import { CheckCircle2 } from '@tamagui/lucide-icons';
import { useState } from 'react';

interface Props extends StackPropsBase {
  initialValue?: string;
  clearOnSubmit?: boolean;
  inputPlaceholder?: string;
  onSubmit: (value: string) => void;
}

export const MyInput: React.FC<Props> = ({
  initialValue = '',
  inputPlaceholder,
  clearOnSubmit,
  onSubmit,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleSubmit = () => {
    if (inputValue) {
      onSubmit(inputValue);
      if (clearOnSubmit) setInputValue('');
    }
  };

  return (
    <XStack>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        f={1}
        fontSize={16}
        pr={50}
        placeholder={inputPlaceholder}
        borderWidth={3}
        onSubmitEditing={handleSubmit}
        focusStyle={{
          borderColor: '$blue10',
          borderWidth: 3,
        }}
      />
      <MyButton
        icon={<CheckCircle2 color={inputValue ? '$blue9' : undefined} />}
        right={0}
        scaleIcon={1.5}
        onClick={handleSubmit}
        chromeless
        position='absolute'
        disabled={!inputValue}
      />
    </XStack>
  );
};
