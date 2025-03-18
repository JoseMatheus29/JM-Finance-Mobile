import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const SideBar = () => {
  return (

    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/Home.svg')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/Calendario.svg')} />
      </TouchableOpacity>

      {/* Botão central "Create" */}
      <TouchableOpacity style={styles.addButton}>
        <Image source={require('../../assets/images/Create.svg')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/wallet.svg')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={require('../../assets/images/user.svg')} />
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
    backgroundColor: '#3366CC',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'white',
  },

});

export default SideBar;
