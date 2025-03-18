import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const SideBar = () => {
  return (

    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/Home.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/Calendario.png')} />
      </TouchableOpacity>

      {/* Botão central "Create" */}
      <TouchableOpacity style={styles.addButton}>
        <Image source={require('../../assets/images/Create.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/wallet.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/user.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    backgroundColor: "#EBF1F6"
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

});

export default SideBar;
