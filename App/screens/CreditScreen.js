import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, 
StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class DNKScreen extends React.Component {
  static navigationOptions = {
    title: 'Credit Page',
  };

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <ScrollView>
              <View style={styles.bottomTouch} >
                <Text  style={styles.head}> Credit Page </Text>
                <Text  style={styles.contents}> Copyright © 2010 by Bill Shakespeare
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other 
electronic or mechanical methods, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other
 noncommercial uses permitted by copyright law. For permission requests, write to the publisher, addressed “Attention: Permissions Coordinator,” at the address below.
Imaginary Press
1233 Pennsylvania Avenue
San Francisco, CA 94909
www.imaginarypress.com
Ordering Information:
Quantity sales. Special discounts are available on quantity purchases by corporations, associations, and others. For details, contact the publisher at the address above.
Orders by U.S. trade bookstores and wholesalers. Please contact Big Distribution: Tel: (800) 800-8000; Fax: (800) 800-8001 or visit www.bigbooks.com.
Printed in the United States of America </Text>
              </View>
          </ScrollView>
        </View>
      );
  }
}

/* Style */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#b3d5d6',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  items: {
    backgroundColor : '#3b3a70',
    marginRight: "5%",
    marginLeft: "5%",
    alignItems: 'center',
    margin: 10,
  },
  bottomTouch : {
     alignItems : 'center',
     backgroundColor : '#915b45',
     marginRight: "5%",
     marginLeft: "5%",
     margin : 10,
  },
  head : {
    fontFamily: "noto-sans-thin",
    color:'#fff',
    fontSize: 30,
    textAlign: 'center',
    margin : 10,
    fontWeight : 'bold',
  },
  subtitle: {
    fontFamily: "noto-sans-thin",
    color:'#fff',
    fontSize: 20,
    textAlign: 'center',
    margin : 10,
  },
  contents: {
    fontFamily: "noto-sans-thin",
    color: '#b3d5d6',
    fontSize: 20,
    textAlign: 'center',
    margin : 10,
    fontWeight : 'normal',
  },
});
