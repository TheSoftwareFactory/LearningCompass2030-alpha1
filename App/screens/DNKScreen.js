import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, 
StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class CreditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      card: 0,
      stage: 0,
      pressed: [ [false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false],
                 [false, false, false, false, false, false, false]], 
      psyResult: 'Unknown'};
  }
  
  
  static navigationOptions = {
    title: 'Credit Page',
  };

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    const color1 = '#184726';
    const color2 = '#5f8c6c';

    jump = (num1, num2) => { this.setState (previousState => (
      { card: num1, stage: num2 }
    )) }

    changeColor = (num1, num2, boo) => {
      tem_state = this.state.pressed;
      if (boo) {
           tem_state[num1-1] = tem_state[num1-1].map( (b) => false );
      }
      tem_state[num1-1][num2-1] = !this.state.pressed[num1-1][num2-1];
      this.setState (previousState => (
      { pressed: tem_state }
    )) }

    goDNKHome = () => { this.setState (previousState => (
      { card: 0 }
    )) }

    goNext = () => { this.setState (previousState => (
      { stage: previousState.stage + 1 }
    )) }

    goNextAndGetResult = () => { 
      tem_state = this.state.pressed;
      q1 = tem_state[0].indexOf(true)+2;
      q2 = tem_state[1].indexOf(true)+2;
      q3 = tem_state[2].indexOf(true)+2;
      q4 = tem_state[3].indexOf(true)+2;
      q5 = tem_state[4].map((bo) => bo ? 2 : 3);
      num = Math.abs( ((q1^2 + q2^3)*( q3^3 - q4) + (q5[0]^2 + q5[1]^3)*(q5[2]^4 - q5[3])/(q5[4]^2 - q5[5]) - q5[6]^2)*1234*(q3 + q4)) % 11;
      rt = 'Default';
      switch (num) {
        case 0 : rt = 'Health'; break;
        case 1 : rt = 'Community'; break;
        case 2 : rt = 'Education';break;
        case 3 : rt = 'Environment';break;
        case 4 : rt = 'Civic Engamenent';break;
        case 5 : rt = 'Life Satisfaction';break;
        case 6 : rt = 'Safety';break;
        case 7 : rt = 'Work-Life Balance';break;
        case 8 : rt = 'Housing';break;
        case 9 : rt = 'Income';break;
        case 10 : rt = 'Jobs';break;
        default: rt = 'Unknown';
      }
      this.setState (previousState => (
      { stage: previousState.stage + 1, psyResult: rt }
    )) }

    const programHTML = require('../HTMLS/Bsc_2_majors.html');
    



    switch (this.state.card) {

      case 0: return (
        
        <View style={styles.container}>
          <ScrollView>
          <TouchableOpacity onPress={() => jump(1, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} PSY Test {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} You can make a psychological test to help find your interests. {"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump(2, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} Statistics {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} See the report and statistics of each of the 11 fields. {"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump(0, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} Others' experience {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} See students' narratives and suggestions of how they develop themselvs on these 11 fields. {"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump(0, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"} Formal suggestions {"\n"} </Text>
                 <Text  style={styles.contents}> {"\n"} See suggestions from authorities, scientists and researchers about finding your own areas and topics to learn.  {"\n"} </Text>
               </View>
           </TouchableOpacity>
          </ScrollView>
        </View>
      );  

      case 1:

        switch (this.state.stage) {

           case 0: return (

            <View style={styles.container}>
            <ScrollView >
            <View style={styles.items}>
               <Text style={styles.head}> PSY Test to find your interest </Text>
                 <Text style={styles.contents}> This is a psychological test to help give a suggestion that which particular area
                  is recommended for you to focus on among the 11 key fields of OECD learning compass. Note that the feedback is
                  only an unofficial suggestion and you should not decide your choice of field merely on the result of this test. 
                  Your privacy is strictly protected and no infotmation will be shared to any third party.  </Text>
             </View>

             <View style={styles.items}>
               <Text style={styles.contents}>{"\n"} What is your gender ? {"\n"} </Text>
             </View>
             <View style={{ alignItems: 'stretch', justifyContent: 'center'}}>
               <TouchableOpacity onPress={() => changeColor(1, 1, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[0][0] ? color2 : color1,  margin : 1}  }>
                     <Text  style={styles.subtitle}> Male </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(1, 2, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[0][1] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Female </Text>
                   </View>
               </TouchableOpacity>
               </View>

              <View style={styles.items}>
               <Text style={styles.contents}> {"\n"} What level of education are you currently undertaking ? {"\n"} </Text>
              </View>
               <View style={{ alignItems: 'stretch', justifyContent: 'center'}}>
               <TouchableOpacity onPress={() => changeColor(2, 1, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[1][0] ? color2 : color1,  margin : 1}  }>
                     <Text  style={styles.subtitle}> Primary School </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(2, 2, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[1][1] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Secondary School </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(2, 3, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[1][2] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> High School </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(2, 4, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[1][3] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Undergraduate </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(2, 5, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[1][4] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Postgraduate or above </Text>
                   </View>
               </TouchableOpacity>
               </View>
               

              <View style={styles.items}>
              <Text style={styles.contents}>{"\n"} Which of the following subjects do you learn best ? {"\n"} </Text>
              </View>
              <View style={{ alignItems: 'stretch', justifyContent: 'center'}}>
               <TouchableOpacity onPress={() => changeColor(3, 1, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[2][0] ? color2 : color1,  margin : 1}  }>
                     <Text  style={styles.subtitle}> Literature </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(3, 2, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[2][1] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Mathematics </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(3, 3, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[2][2] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Physical Education (P.E.)</Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(3, 4, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[2][3] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> General Science </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(3, 5, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[2][4] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> General Humanities </Text>
                   </View>
               </TouchableOpacity>
               </View>

               <View style={styles.items}>
               <Text style={styles.contents}> {"\n"} What is the most common source of your anxiety or upset ? {"\n"} </Text>
              </View>
               <View style={{ alignItems: 'stretch', justifyContent: 'center'}}>
               <TouchableOpacity onPress={() => changeColor(4, 1, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[3][0] ? color2 : color1,  margin : 1}  }>
                     <Text  style={styles.subtitle}> Study and Work </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(4, 2, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[3][1] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Social Network </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(4, 3, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[3][2] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Family Relationship </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(4, 4, true)} > 
                   <View style={  {  backgroundColor : this.state.pressed[3][3] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Self Appearance and Health </Text>
                   </View>
               </TouchableOpacity>
               </View>


               <View style={styles.items}>
               <Text style={styles.contents}> {"\n"} Which are your really favoured hobbies among the following things ? {"\n"} </Text>
              </View>
               <View style={{ alignItems: 'stretch', justifyContent: 'center'}}>
               <TouchableOpacity onPress={() => changeColor(5, 1, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][0] ? color2 : color1,  margin : 1}  }>
                     <Text  style={styles.subtitle}> Doing Sport </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(5, 2, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][1] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Playing Music Instruments </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(5, 3, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][2] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Watching Dramas or Movies </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(5, 4, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][3] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Playing Video Games </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(5, 5, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][4] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Shopping </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(5, 6, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][5] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Attending Parties </Text>
                   </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => changeColor(5, 7, false)} > 
                   <View style={  {  backgroundColor : this.state.pressed[4][6] ? color2 : color1, margin : 1}  }>
                     <Text  style={styles.subtitle}> Eating Delicious Food </Text>
                   </View>
               </TouchableOpacity>
               </View>
               
              <TouchableOpacity onPress={() => goNextAndGetResult()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Submit and Finish </Text>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => goDNKHome()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"}Back{"\n"} </Text>
               </View>
              </TouchableOpacity>
               
             </ScrollView>
           </View>

           );

           case 1: return (

            <View style={styles.container}>
            <ScrollView >
            <View style={styles.items}>
               <Text style={styles.head}> You are recommended to start at : {"\n"} {this.state.psyResult} </Text>
                 <Text style={styles.contents}> </Text>
             </View>
              
              <TouchableOpacity onPress={() => goDNKHome()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"}Back{"\n"} </Text>
               </View>
              </TouchableOpacity>
               
             </ScrollView>
           </View>


           );
               
        }

    
        case 2: return (
          <WebView
             source={programHTML}
          />

        );


    }
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
    fontFamily: "serif",
    color: '#b3d5d6',
    fontSize: 20,
    textAlign: 'center',
    margin : 10,
    fontWeight : 'normal',
  },
});
