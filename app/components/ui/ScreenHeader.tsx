import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ArrowBack from '../arrowBack';

interface ScreenHeaderProps {
  title: string;
  rightComponent?: React.ReactNode;
  children?: React.ReactNode;
  gradientColors?: [string, string, string];
  hideBack?: boolean;
}

export default function ScreenHeader({ 
  title, 
  rightComponent, 
  children,
  gradientColors = ['#1E3F7A', '#3161B2', '#4A74BB'],
  hideBack = false
}: ScreenHeaderProps) {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="pt-14 pb-[52px] px-6"
    >
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center gap-3">
          {!hideBack && <ArrowBack />}
          <Text className="text-white text-xl font-bold">{title}</Text>
        </View>
        {rightComponent}
      </View>
      {children}
    </LinearGradient>
  );
}
