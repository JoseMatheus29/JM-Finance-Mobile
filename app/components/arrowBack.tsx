import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const ArrowBack = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      activeOpacity={0.7}
      style={{
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: '#EBF1F6',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name="arrow-back" size={20} color="#3161B2" />
    </TouchableOpacity>
  );
};

export default ArrowBack;
