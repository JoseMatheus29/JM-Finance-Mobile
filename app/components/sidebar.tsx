import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter, usePathname } from 'expo-router';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  isCenter?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { icon: 'home', label: 'Início', route: '/dashboard' },
  { icon: 'bar-chart', label: 'Detalhes', route: '/myDetailing' },
  { icon: 'add', label: '', route: '/registrationSpent', isCenter: true },
  { icon: 'account-balance-wallet', label: 'Carteira', route: '/wallet' },
  { icon: 'person', label: 'Perfil', route: '/editAcount' },
];

const NavButton = ({
  item,
  isActive,
  onPress,
}: {
  item: NavItem;
  isActive: boolean;
  onPress: () => void;
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const dotAnim = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(dotAnim, {
      toValue: isActive ? 1 : 0,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  }, [isActive]);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.85,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 25,
        bounciness: 6,
      }),
    ]).start();
    onPress();
  };

  if (item.isCenter) {
    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.85}
        className="items-center justify-center"
      >
        <Animated.View
          style={{ transform: [{ scale: scaleAnim }] }}
          className="w-14 h-14 rounded-full bg-primary items-center justify-center -mt-7"
          style={{
            shadowColor: '#3161B2',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 10,
            marginTop: -28,
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: '#3161B2',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="add" size={28} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="flex-1 items-center justify-center py-2"
    >
      <Animated.View
        style={{ transform: [{ scale: scaleAnim }] }}
        className="items-center"
      >
        {/* Indicador ativo */}
        <Animated.View
          style={{
            opacity: dotAnim,
            transform: [{ scaleX: dotAnim }],
            height: 3,
            width: 20,
            borderRadius: 2,
            backgroundColor: '#3161B2',
            marginBottom: 4,
          }}
        />

        <Icon
          name={item.icon}
          size={22}
          color={isActive ? '#3161B2' : '#A0AEC0'}
        />
        <Text
          className="text-xs mt-1"
          style={{
            color: isActive ? '#3161B2' : '#A0AEC0',
            fontWeight: isActive ? '700' : '400',
          }}
        >
          {item.label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname.startsWith(route);

  const handleNav = (route: string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push(route as any);
  };

  return (
    <View
      className="flex-row items-center bg-white"
      style={{
        borderTopWidth: 1,
        borderTopColor: '#EBF1F6',
        paddingBottom: Platform.OS === 'ios' ? 20 : 8,
        paddingTop: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 16,
      }}
    >
      {NAV_ITEMS.map((item) => (
        <NavButton
          key={item.route}
          item={item}
          isActive={isActive(item.route)}
          onPress={() => handleNav(item.route)}
        />
      ))}
    </View>
  );
};

export default SideBar;
