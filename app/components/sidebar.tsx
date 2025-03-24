import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link, usePathname } from 'expo-router';

export const SideBar = () => {
  const pathname = usePathname();

  const isActiveRoute = (route: string) => {
    return pathname.startsWith(route);
  };

  return (
    <View style={styles.bottomNav}>
      <Link href="/dashboard" asChild style={[styles.navItem, isActiveRoute('/dashboard') && styles.activeNav]}>
        <View>
          <Icon name="home" size={24} color={isActiveRoute('/dashboard') ? "#3161B2" : "#A0A0A0"} />
        </View>
      </Link>

      <Link href="/myDetailing" asChild style={[styles.navItem, isActiveRoute('/myDetailing') && styles.activeNav]}>
        <View>
          <Icon name="calendar-today" size={24} color={isActiveRoute('/myDetailing') ? "#3161B2" : "#A0A0A0"} />
        </View>
      </Link>

      <Link href="/registrationSpent" asChild>
        <View style={styles.navItem}>
          <View style={styles.addButton}>
            <Icon name="add" size={32} color="#FFF" />
          </View>
        </View>
      </Link>

      <Link href="/wallet" asChild style={[styles.navItem, isActiveRoute('/wallet') && styles.activeNav]}>
        <View>
          <Icon name="account-balance-wallet" size={24} color={isActiveRoute('/wallet') ? "#3161B2" : "#A0A0A0"} />
        </View>
      </Link>

      <Link href="/editAcount" asChild style={[styles.navItem, isActiveRoute('/editAcount') && styles.activeNav]}>
        <View>
          <Icon name="person" size={24} color={isActiveRoute('/editAcount') ? "#3161B2" : "#A0A0A0"} />
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeNav: {
    borderTopWidth: 2,
    borderTopColor: '#3161B2',
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: '#3161B2',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
});

export default SideBar;
