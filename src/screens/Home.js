import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fakeRequestTodo } from '../actions';

const Home = ({ dispatch, isFetchingTodo, error, todo }) => {
  useEffect(() => {
    // Example use Redux and Redux Thunk to request a fake API
    dispatch(fakeRequestTodo(1));
  }, []);

  const renderIndicator = () => {
    if (isFetchingTodo) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return <Text>Welcome to Expo React Native Full Template!</Text>;
    }
  }

  const renderContent = () => {
    if (!isFetchingTodo && error) {
      return <Text>Error in request Todo!</Text>;
    } else if (!isFetchingTodo && todo) {
      return <Text>TODO: {todo.title}</Text>;
    }

    return null;
  }

  return (
    <View style={styles.container}>
      { renderIndicator() }
      <View style={styles.todo}>
        { renderContent() }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  todo: {
    padding: 20,
  }
});

const mapStateToProps = (state) => {
  return {
    isFetchingTodo: state.isFetching,
    error: state.todo.error,
    todo: state.todo.data,
  };
};

export default connect(mapStateToProps)(Home);
