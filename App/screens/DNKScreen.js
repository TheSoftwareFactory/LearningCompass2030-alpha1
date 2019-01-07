import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Linking,
StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class CreditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      card: 0,
      stage: 0,
      pressed: [ [false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false],
                 [false, false, false, false, false, false, false]], 
      psyResult: 'Unknown',
      experiences : [false, false, false, false],
      loadMore : false
    };
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

    goBack = () => { this.setState (previousState => (
      { stage: previousState.stage - 1 }
    )) }

    showExperiences = (num) => { 
      tem_experiences = this.state.experiences;
      tem_experiences[num] = !this.state.experiences[num];
      this.setState (previousState => ( { experiences: tem_experiences})); }
    
    loadMore = () => { this.setState (previousState => (
      { loadMore: !previousState.stage.loadMore }
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
    /*
    const fallingLake = require('../HTMLS/html5-canvas-waterfall-lake/index.html');
    const statistics = require('../HTMLS/statistics/statistics.html'); */

    



    switch (this.state.card) {

      case 0: return (
        
        <View style={styles.container}>
          <ScrollView>
          <TouchableOpacity onPress={() => jump(1, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> PSY Test </Text>
                 <Text  style={styles.contents}> You can make a psychological test to help find your interests. </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump(2, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> Statistics </Text>
                 <Text  style={styles.contents}> See the report and statistics of each of the 11 fields. </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => jump(3, 0)} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> Others' Experience </Text>
                 <Text  style={styles.contents}> See students' narratives and suggestions of how they develop themselvs on these 11 fields. </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => Linking.openURL('https://storage.googleapis.com/symmetric-lotus-227804.appspot.com/Reports/Reports.html') } > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> Report and Materials </Text>
                 <Text  style={styles.contents}>  See reports and materials about these 11 fields. </Text>
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
        <View style={{flex: 1, flexDirection:'column'}}>
        <WebView 
         source={{uri: "https://storage.googleapis.com/symmetric-lotus-227804.appspot.com/statistics/statistics_mobile.html"}} />
         <TouchableOpacity onPress={() => goDNKHome()} > 
                <View style={styles.bottomTouch} >
                  <Text  style={styles.subtitle}> Back </Text>
                </View>
         </TouchableOpacity>
      </View>
      );

        case 3: return (
          <View style={styles.container}>
             <ScrollView >
              <TouchableOpacity onPress={() => showExperiences(0)} > 
                      <View style={styles.items2} >
                         <Text  style={styles.head}>Graham Schwikkard</Text>
                         <Text  style={styles.subtitle}>Consulting Manager, Datta Burton and Associates</Text>
                         <Text  style={styles.contents}>"I enjoyed the return to a learning environment, 
                          with the benefit of being able to augment the taught material with personal professional 
                          experiences and that of others in the class."{"\n"} </Text>
                          <Text  style={styles.head}> Click me to read more {"\n"} </Text>
                      </View>
              </TouchableOpacity>
              { this.state.experiences[0] ? 
              <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.youtube.com/channel/UCm-zBFOtOkGM9Wlauh-EOIA'})  } > 
                   <View style={  {  backgroundColor : "#776e0d",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Video Narrative </Text>
                   </View>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.jbs.cam.ac.uk/alumni/alumni-profiles/mba/consulting/graham-schwikkard/'})  } > 
                   <View style={  {  backgroundColor : "#37770c",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Profile </Text>
                   </View>
                 </TouchableOpacity>
               </View> : null } 
 

              <TouchableOpacity onPress={() => showExperiences(1)} > 
                      <View style={styles.items2} >
                         <Text  style={styles.head}>Helen Quirke</Text>
                         <Text  style={styles.subtitle}>Principal, BCG Toronto</Text>
                         <Text  style={styles.contents}>"I felt that I needed broader business experience and more international 
                         exposure to be able to bring a genuine commercial perspective to the world of sport."{"\n"} </Text>
                          <Text  style={styles.head}> Click me to read more {"\n"} </Text>
                      </View>
              </TouchableOpacity>
              { this.state.experiences[1] ? 
              <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.youtube.com/watch?v=eSHj1GH17SY'})  } > 
                   <View style={  {  backgroundColor : "#776e0d",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Video Narrative </Text>
                   </View>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.jbs.cam.ac.uk/alumni/alumni-profiles/mba/consulting/helen-quirke/'})  } > 
                   <View style={  {  backgroundColor : "#37770c",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Profile </Text>
                   </View>
                 </TouchableOpacity>
               </View> : null } 

              { !this.state.loadMore ? 
              <TouchableOpacity onPress={() => loadMore()} > 
                <View style={styles.bottomTouch}  >
                  <Text  style={styles.contents}> More People and experiences </Text>
                </View>
              </TouchableOpacity> : null }

              { this.state.loadMore ? 
              <TouchableOpacity onPress={() => showExperiences(2)} > 
                      <View style={styles.items2} >
                         <Text  style={styles.head}>Damon Sununtnasuk</Text>
                         <Text  style={styles.subtitle}>Head of Digital Marketing and Campaigns, Samsung Electronics</Text>
                         <Text  style={styles.contents}>"I knew coming into the MBA that a career change to Asia was going to be 
                         the right choice for me, and I really felt that the Cambridge MBA helped enable and empower me to make 
                         that transition."{"\n"} </Text>
                          <Text  style={styles.head}> Click me to read more {"\n"} </Text>
                      </View>
              </TouchableOpacity> : null }

              { this.state.experiences[2] ? 
              <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.youtube.com/watch?v=ihFWjh5efwE'})  } > 
                   <View style={  {  backgroundColor : "#776e0d",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Video Narrative </Text>
                   </View>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.jbs.cam.ac.uk/alumni/alumni-profiles/mba/onlinetechnology/damon-sununtnasuk/'})  } > 
                   <View style={  {  backgroundColor : "#37770c",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Profile </Text>
                   </View>
                 </TouchableOpacity>
               </View> : null } 

              { this.state.loadMore ? 
              <TouchableOpacity onPress={() => showExperiences(3)} > 
                      <View style={styles.items2} >
                         <Text  style={styles.head}>Olga Royenko</Text>
                         <Text  style={styles.subtitle}>Marketing Lead, Aspen Technology</Text>
                         <Text  style={styles.contents}>"This was a transformational experience. It has impacted the 
                         way I interact with my team, colleagues, managers and peers. I am much more confident and vocal in my 
                         leadership and that has helped me to build relationships across my organisation."{"\n"} </Text>
                          <Text  style={styles.head}> Click me to read more {"\n"} </Text>
                      </View>
              </TouchableOpacity> : null }
              { this.state.experiences[3] ? 
              <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.youtube.com/watch?v=PRIs1g9gR4o'})  } > 
                   <View style={  {  backgroundColor : "#776e0d",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Video Narrative </Text>
                   </View>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress={() => navigate('Setting', { url : 'https://www.jbs.cam.ac.uk/alumni/alumni-profiles/mba/onlinetechnology/olga-royenko/'})  } > 
                   <View style={  {  backgroundColor : "#37770c",  margin : 5}  }>
                    <Text  style={styles.subtitle}> Profile </Text>
                   </View>
                 </TouchableOpacity>
               </View> : null } 
              <TouchableOpacity onPress={() => goDNKHome()} > 
               <View style={styles.bottomTouch} >
                  <Text  style={styles.subtitle}> Back </Text>
                </View>
              </TouchableOpacity>  
              </ScrollView>
            </View>  
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
  items2: {
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
