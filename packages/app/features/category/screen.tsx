import { Paragraph, YStack } from "@my/ui";
import React from "react";
import { createParam } from "solito";

const { useParam } = createParam<{ id: string }>()

export function CategoryScreen() {
  const [id] = useParam('id')

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">
        {`id: ${id}`}
      </Paragraph>
    </YStack>
  );
} 