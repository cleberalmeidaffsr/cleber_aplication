import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './Home';
import Curriculo from './Curricul';

const App = () => {
  const [abaAtiva, setAbaAtiva] = useState('Home');

  const renderizando = () => {
    if (abaAtiva === 'Home') {
      return <Home />;
    } else if (abaAtiva === 'Curriculo') {
      return <Curriculo />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeCleber}>Currículo</Text>
      </View>
      {/* Área para renderizar os componentes */}
      <View style={styles.content}>{renderizando()}</View>
      {/* Menu inferior */}
      <View style={styles.menu}>
        <Text
          style={[styles.itemMenu, abaAtiva === 'Home' && styles.itemMenuAction]}
          onPress={() => setAbaAtiva('Home')}
        >
          Home
        </Text>
        <Text
          style={[styles.itemMenu, abaAtiva === 'Curriculo' && styles.itemMenuAction]}
          onPress={() => setAbaAtiva('Curriculo')}
        >
          Currículo
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  nomeCleber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  itemMenu: {
    fontSize: 18,
    color: '#333',
  },
  itemMenuAction: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
