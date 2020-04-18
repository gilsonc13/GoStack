/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect( () => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProjetc(){

    const response = await api.post('projects', {
      title: `Desenvolvimento Teste ${Date.now()}`,
      owner: 'Gilson Camargo',
    });

    const project = response.data;

    setProjects([...projects, project]);

  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
    <SafeAreaView style={styles.container} >
      <FlatList

        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item }) => (
          <Text style={styles.title}>{item.title}</Text>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddProjetc}
      >
        <Text style={styles.buttonText}>Adicionar Projeto</Text>
      </TouchableOpacity>
     </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7169c1',
  },

  title: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
