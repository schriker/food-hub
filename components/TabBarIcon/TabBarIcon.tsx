import { Feather } from '@expo/vector-icons';
import React from 'react';

export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={20} style={{ marginBottom: -3 }} {...props} />;
}
