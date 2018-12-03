import React from 'react';
import {Image, Text, Platform, ScrollView, StyleSheet, TouchableOpacity, View, 
StatusBar, Animated, Alert, AppRegistry, Button, TouchableHighlight, WebView, TouchableNativeFeedback, TouchableWithoutFeedback, AsyncStorage } from 'react-native';

export default class IntroScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      stage: 0,  };
  }
  
  static navigationOptions = {
    title: 'Introduction',
  };

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    const {dismiss} = this.props.navigation;
    goNext = () => { this.setState (previousState => (
      { stage: previousState.stage + 1 }
    )) }
    goBack = () => { this.setState (previousState => (
      { stage: previousState.stage - 1 }
    )) }
    goToHome = () => { dismiss('IntroScreen'); navigate('Home'); }

    
    switch (this.state.stage)  {
      
      case 0: return (

        <View style={styles.container}>
          <ScrollView>
          <Image source={require('../assets/images/OECD2030_Post.jpg')} style={{width: '80%', height: 400, alignSelf : 'center', margin: 10}}/>
           <TouchableOpacity onPress={() => goNext()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Next </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToHome()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.contents}> {"\n"}Skip Introduction{"\n"} </Text>
               </View>
           </TouchableOpacity>
          </ScrollView>
        </View>
        
      );
    
    
      case 1: return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.items}>
            <Text style={styles.head}> Introduction Page </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.contents}> OECD Education 2030 stakeholders have co-developed 
            the Learning Compass 2030 that shows how young people can navigate their lives and their world. 
            This Learning Framework 2030 offers a vision and some underpinning principles for the future of 
            education systems. It is about orientation, not prescription. </Text>
          </View>
          <TouchableOpacity onPress={() => goNext()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Next </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goBack()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.subtitle}> Back </Text>
               </View>
           </TouchableOpacity>
        </ScrollView>
      </View>
      
    );
  
    case 2: return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.items}>
            <Text style={styles.head}> Mega trends towards 2030 </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.contents}> The world is evolving at an incredible speed. Mega trends refer to the current trends that
            predict what the world in 2030 would look like, such as globalisation, technological and
            climate change, which create numerous challenges and opportunities. </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.contents}> Some of the key mega trends are presented in line with the 11 areas of the OECD Well-
             being Framework, which includes: jobs, income, housing, work-life balance, safety, life
             satisfaction, health, civic engagement, environment, education and community. </Text>
          </View>
          <TouchableOpacity onPress={() => goNext()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Next </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goBack()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.subtitle}> Back </Text>
               </View>
           </TouchableOpacity>
        </ScrollView>
      </View>
      
    );

    case 3: return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.items}>
            <Text style={styles.head}> OECD Well-being Framework </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Jobs </Text>
            <Text style={styles.contents}> Due to digitalisation and automation of tasks, some sectors are likely to
               lose jobs, replaced by machines. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Income </Text>
            <Text style={styles.contents}> The income gap between rich and poor is getting wider and wider. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Housing </Text>
            <Text style={styles.contents}> Living in a secured place with decent conditions is getting harder and harder. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Work-Life Balance </Text>
            <Text style={styles.contents}> Although people spend more and more time at work, they still value quality leisure time. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Safety </Text>
            <Text style={styles.contents}> Threats such as safety walking at night or terrorism, as well as emerging threats such as cyber-bullying both make the world more VUCA. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Life Satisfaction</Text>
            <Text style={styles.contents}> The advancement of technology contributes to life satisfaction. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Health </Text>
            <Text style={styles.contents}> Although children’s health is affected by obesity, teenage suicide rate has decreased. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Civic Engagement </Text>
            <Text style={styles.contents}> There is low confidence in national governments. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Environment </Text>
            <Text style={styles.contents}> Water quality, air pollution and biodiversity have emerged as relevant challenges. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Education </Text>
            <Text style={styles.contents}> Advancement of technology creates important changes in education. </Text>
          </View>
          <View style={styles.items}> 
          <Text style={styles.head}> Community </Text>
            <Text style={styles.contents}> Gets more diverse. </Text>
          </View>
          <TouchableOpacity onPress={() => goNext()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Next </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goBack()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.subtitle}> Back </Text>
               </View>
           </TouchableOpacity>
        </ScrollView>
      </View>
      
    );

    case 4: return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.items}>
            <Text style={styles.head}> Demands analysis </Text>
          </View>
          <View style={styles.items}>
          <Text style={styles.head}> Employers </Text>
            <Text style={styles.contents}> Employers’ demands on students competencies include: human and meta skills
in time of automation and digitalization; core concept in modern disciples, such
as entrepreneurship and wellness, taught in a modern way, for example using an
interdisciplinary approach. with essential content so as to understand the world;
skills to manage themselves including reskilling and upskilling for life-long
learning; knowledge to use AI to make the most out of it; skills for non-routine
interpersonal and non-routine analytic jobs. </Text>
          </View>
          <View style={styles.items}>
          <Text style={styles.head}> Teachers </Text>
            <Text style={styles.contents}> Teachers’ demands on students competencies include: disciplinary knowledge
so that they are equipped with the basic knowledge; management skills such as
cognitive and meta-cognitive skills, social and emotional skills, and physical
and practical skills, which are more and more needed in society and in the
workforce; attitudes and values such as tolerance and good behaviour towards
the other. </Text>
          </View>
          <View style={styles.items}>
          <Text style={styles.head}> Parents </Text>
            <Text style={styles.contents}> Parents’ demands on students competencies include: learning academic
knowledge and traditional core subjects such as math, reading, writing, and
sciences to thrive in their workplace, management skills such as technology
skills, cognitive and social-emotional skills; attitudes and values such as respect
for self and others, honesty, compassion, love for one another, tolerance, global
awareness and perspective, cultural sensitivity and the pursuit for life
satisfaction through the sense of agency. </Text>
          </View>
          <View style={styles.items}>
          <Text style={styles.head}> Students </Text>
            <Text style={styles.contents}> Students present different needs, focus and interests depending on different
stages of their development and education. At a young age, they want education
to be fun, social, practical and a place where they can learn a variety of
knowledge. In secondary education, they want education to be career focused
and in post-secondary education, they want education to be job market oriented
in order to facilitate their integration on the job market. </Text>
          </View>
          <TouchableOpacity onPress={() => goNext()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Next </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goBack()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.subtitle}> Back </Text>
               </View>
           </TouchableOpacity>
        </ScrollView>
      </View>
      
    );

    case 5: return (
      <View style={styles.container}>
       <ScrollView>
          <View style={styles.items}>
             <Text style={styles.head}> OECD 2030 Introduction Video </Text>
          </View>
          <WebView
           source={{uri: 'https://www.youtube.com/embed/tkm_WzQRPEk'}} 
           style={{width: "100%", height: 300}}/>
           <TouchableOpacity onPress={() => goNext()} > 
              <View style={styles.bottomTouch} >
                <Text  style={styles.subtitle}> Next </Text>
              </View>
          </TouchableOpacity>
             <TouchableOpacity onPress={() => goBack()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.subtitle}> Back </Text>
               </View>
           </TouchableOpacity>
        </ScrollView>
      </View>
    );

    case 6: return (
      <View style={styles.container}>
        <ScrollView>
           <View style={styles.items}>
             <Text style={styles.subtitle}> Introduction Finished </Text>
           </View>
           <TouchableOpacity onPress={() => goToHome()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.head}> {"\n"}Start{"\n"} </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => goBack()} > 
              <View style={styles.bottomTouch} >
                 <Text  style={styles.subtitle}> Back </Text>
               </View>
           </TouchableOpacity>
        </ScrollView>
      </View>
    );


    }  /* the end of the switch */
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