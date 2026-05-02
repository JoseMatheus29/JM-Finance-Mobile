import React from 'react';
import { Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  icon?: string;
  colors?: [string, string, string] | [string, string];
  shadowColor?: string;
}

export default function GradientButton({
  title,
  onPress,
  icon,
  colors = ['#3161B2', '#4A74BB'],
  shadowColor = '#3161B2'
}: GradientButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="h-[54px] rounded-2xl items-center justify-center flex-row gap-2 shadow-xl elevation-8"
        style={{ shadowColor }}
      >
        {icon && <Icon name={icon} size={20} color="#fff" />}
        <Text className="text-white text-base font-bold">{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}
