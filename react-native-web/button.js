import React, { StyleSheet, Text, View } from 'react-native-web';
import ReactDOM from 'react-dom';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    borderWidth: 0
  },
  text: {
    textAlign: 'center'
  }
});

class Button extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View accessibilityRole='button' style={styles.button}>
          <Text style={styles.text}>Click me!</Text>
        </View>
      </View>
    );
  }
}

document.getElementById('react-stylesheet').textContent = StyleSheet.renderToString();
ReactDOM.render(<Button />, document.getElementById('content'));
