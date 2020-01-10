/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  UselessTextInput,
} from './src/component';
import HanziWriter from './src/HanziWriter/HanziWriter';
import Canvas from 'react-native-canvas';

class App extends React.Component {

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.showCharacter();
    })

  }

  handleCanvas = (canvas, hanzi='汉') => {
    if (canvas !== null) {
      console.log("handleCanvas");
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'purple';
      ctx.fillRect(0, 0, 150, 150);
      ctx.lineWidth = 1;

      this._canvas = canvas;

      this._writer = HanziWriter.create(this._canvas, hanzi, {
        width: 150,
        height: 150,
        padding: 1,
        renderer: 'canvas',
        radicalColor: '#f00',
        showOutline: false,
      });
    }
  }

  playAnimation = () => {
    this._writer.animateCharacter();
    this.setState({
      random: Math.random(),
    });
  }
  showCharacter = () => {
    this._writer.showCharacter();
    this.setState({
      random: Math.random(),
    });
  }
  hideCharacter = () => {
    this._writer.hideCharacter();
    this.setState({
      random: Math.random(),
    });
  }


  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={{
                ...styles.sectionContainer,
                // width: 150, 
                paddingHorizontal: 0,
                marginHorizontal:50,
                flexDirection:'row',
                justifyContent:"space-between",
                alignItems:"center",
              }}>
                <Canvas style={styles.canvas} ref={this.handleCanvas} />
                <UselessTextInput 
                style={styles.textInput}
                textChangeCallback={(text)=>{this.handleCanvas(this._canvas, text)}}/>
              </View>
              <View style={styles.separator} />
             
              <View style={styles.sectionContainer}>

              
                <TouchableOpacity
                  accessibilityRole={'button'}
                  onPress={this.playAnimation}
                  style={styles.linkContainer}>
                  <Text style={styles.sectionTitle}>Play animation</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionContainer}>
                <TouchableOpacity
                  accessibilityRole={'button'}
                  onPress={this.showCharacter}
                  style={styles.linkContainer}>
                  <Text style={styles.sectionTitle}>Show Character</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionContainer}>
                <TouchableOpacity
                  accessibilityRole={'button'}
                  onPress={this.hideCharacter}
                  style={styles.linkContainer}>
                  <Text style={styles.sectionTitle}>Hide Character</Text>
                </TouchableOpacity>
              </View>
             
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  canvas:{
    width:150,
    backgroundColor: '#00ff00', 
  },
  textInput:{
    width:150,
    marginHorizontal:50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  separator: {
    width:375,
    height:5, 
    backgroundColor:'#00888888'
  }
});

export default App;
