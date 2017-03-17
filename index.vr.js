import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

class HelloReactVR extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    };

    // setInterval(this.incrementCount, 1000);
  }

  incrementCount = () =>{
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrButton
          onClick={this.incrementCount}
        >
          <Text
            style={{
              backgroundColor: 'tomato',
              fontSize: 0.8,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [
                {translate: [-3 + (this.state.count * 0.1), 0, -3]}
              ],
            }}>
            {this.state.count}
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('HelloReactVR', () => HelloReactVR);
