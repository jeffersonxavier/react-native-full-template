import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fakeRequestTodo } from '../actions';

const Home = ({ dispatch, isFetchingTodo }) => {
  useEffect(() => {
    // Example use Redux and Redux Thunk to request a fake API
    dispatch(fakeRequestTodo(1));
  }, []);

  return (
    <View style={styles.container}>
      {
        isFetchingTodo
          ? <ActivityIndicator size="large" color="#0000ff" />
          : <Text>Welcome to Expo React Native Full Template!</Text>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isFetchingTodo: state.isFetching,
  };
};

export default connect(mapStateToProps)(Home);
