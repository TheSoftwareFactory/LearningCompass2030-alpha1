import React from 'react';
import {Image, Text, TextInput, Picker, ScrollView, StyleSheet, TouchableOpacity, View, Alert, WebView, AsyncStorage } from 'react-native';


export default class IntroScreen extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = { 
      stage: 0, 
      pressed: [0,0,0,0,0,0,0,0,0,0,0,0],
      fields: ['Sports', 'News', 'Entertainment', 'Lifestyle', 'Music', 'Science', 
      'Technology', 'Education', 'Art', 'Culture', 'Politics', 'Game'],
      intere : 'You must firstly submit your interest in the introduction part in order to get recommendation.',
      login: false,
      register: false,
      gd: 'Select',
      current_id: null,
      };
  }
  
  static navigationOptions = {
    title: 'Introduction',
  };

  componentWillMount() {
    AsyncStorage.getItem('current_id').then((crid) => {
      this.setState (() => ({ current_id: crid })) ;
    })
  }

  /* Body */
  render() {
    const {navigate} = this.props.navigation;
    const color1 = '#184726';
    const color2 = '#5f8c6c';
    const consts = ["Life Satisfaction", "Health", "Civic Engagement", "Environment", "Education", "Community", "Jobs", 
    "Income", "Housing", "Work-Life Balance", "Safety"];
    goNext = () => { this.setState (previousState => ({ stage: previousState.stage + 1 })) ;  }
    goBack = () => { this.setState (previousState => ({ stage: previousState.stage - 1 }));}
    goLast = () => { this.setState (previousState => ({ stage: 7 })); }
    goFirst = () => { this.setState (previousState => ({ stage: 0 })) }
    changeColor = (num) => { 
      tem_state = this.state.pressed;
      tem_state[num] = (this.state.pressed[num]-1)**2; 
      this.setState (previousState => (
      { pressed: tem_state }
    )) }
    goToHome = () => { navigate('Home', {'intere' : this.state.intere} ); }
    goToLogin = () => { navigate('Login', {} ); }
    updateIntere = () => { 
      var rcm = Math.abs(this.state.pressed[0]+2*this.state.pressed[1]+4*this.state.pressed[2]+8*this.state.pressed[3]+
      16*this.state.pressed[4]+32*this.state.pressed[5]+64*this.state.pressed[6]+128*this.state.pressed[7]+
      +256*this.state.pressed[8]+512*this.state.pressed[9]+1024*this.state.pressed[10]+2048*this.state.pressed[11]) % 11;
      this.setState (() => ({ intere : consts[rcm]})) }
    showAlertWithDelay=()=>{
      setTimeout(function(){
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        Alert.alert("Alert Shows After 1 Seconds of Delay.")
      }, 1000);}

    loginWindow = () => {
      if (this.state.login) {
        if (this.state.lg_id  == null | this.state.lg_id  == null) {
          Alert.alert("Please fill in all required filled !");
         } else {
        AsyncStorage.getItem(this.state.lg_id).then((pswd) => {
          if ( pswd == this.state.lg_pw ) {
             AsyncStorage.setItem('current_id', this.state.lg_id).then(() => {
              Alert.alert("You are now logged in !"); 
              this.setState (previousState => ({ login: !previousState.login, register: false, current_id: this.state.lg_id }));
            }  )
           } else {Alert.alert("Login failed !")}
        } ) }
      } else { this.setState (previousState => ({ login: !previousState.login, register: false })); }
    }

    registerWindow = () => { 
      if (this.state.register) {
         
        if ( this.state.id == null | this.state.pw1 == null | this.state.pw2 == null | this.state.em == null | this.state.gd == 'Select' | this.state.ag == null) 
        {Alert.alert("Please fill in all required filled !"); } else {
        AsyncStorage.getItem(this.state.id).then((pswd) => { 
          if ( pswd != null) {  // ??????
            Alert.alert("Sorry, this id is already registered !")
          } else if (this.state.pw1 != this.state.pw2) {
            Alert.alert("Register failed: two passwords are not consistent !")
          } else {
            AsyncStorage.setItem(this.state.id, this.state.pw1).then(() => {
              Alert.alert('Welcome ' + this.state.id + ', you are now registered !')   ///// ???????
              this.setState ((previousState) => ({ name: this.state.id, register: !previousState.register, login: false, current_id: this.state.id })) 
            }   ) 
          }
        } ) }
     } else {this.setState (previousState => ({ register: !previousState.register, login: false })); }
    }
   
    clearCurrentId = () => {
      Alert.alert(
        'Do you want to log out from this account ?',
        'Log out will not lose data of this account, but you have to type your username and password again.',
        [
          {text: 'Cancel', onPress: () => {}, style: 'cancel'},
          {text: 'Sure', onPress: () => AsyncStorage.removeItem('current_id').then(() => {
            this.setState ({ current_id: null });
          })},
        ],
        { cancelable: false }
      )
    }

    clearAll = () => {
      Alert.alert(
        'Are you sure you want to clear all the data saved in this App ?',
        'This operation is not possible to be recovered!',
        [
          {text: 'Cancel', onPress: () => {}, style: 'cancel'},
          {text: 'Sure', onPress: () => AsyncStorage.clear()},
        ],
        { cancelable: false }
      )
    }

    switch (this.state.stage)  {
      case 0: return (
        <View style={styles.container}>
          <ScrollView>

          { this.state.login | this.state.register ? null :  
          <Image source={require('../assets/images/OECD2030_Post.jpg')} style={{width: '60%', height: 300, alignSelf : 'center', margin: 2}}/>}

          { this.state.login ?
          <View style={styles.textInputView}>
            <TextInput
            style={styles.textInputText}
            placeholder="Username"
            onChangeText={(text) => {this.setState({ lg_id: text })}}
            />
            <TextInput
            secureTextEntry={true}
            style={styles.textInputText}
            placeholder="Password"
            onChangeText={(text) => {this.setState({ lg_pw: text })}}
            />
          </View> 
          : null }

          { this.state.register ?
           <View style={styles.textInputView}> 
            <TextInput
            style={styles.textInputText}
            placeholder="Username"
            onChangeText={(text) => {this.setState({ id: text })}}
            />
            <TextInput
            style={styles.textInputText}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {this.setState({ pw1: text })}}
            />
            <TextInput
            style={styles.textInputText}
            secureTextEntry={true}
            placeholder="Confirm Password"
            onChangeText={(text) => {this.setState({ pw2: text })}}
            />
            <TextInput
            style={styles.textInputText}
            placeholder="Email Address"
            onChangeText={(text) => {this.setState({ em: text })}}
            />
            <Text style={{color: 'white', alignSelf: 'flex-start', marginLeft: '5%'}}>Gender</Text>
            <Picker
            selectedValue={this.state.gd}
            style={{height: 40, width: '90%', color: 'white', backgroundColor: 'black'}}
            onValueChange={(itemValue) => {this.setState({gd: itemValue});}}
            placeholder='Gender'
            mode = 'dropdown'>
            <Picker.Item label="Female" value="Female"/>
            <Picker.Item label="Male" value="Male"/>
            </Picker>
            <TextInput
            style={styles.textInputText}
            placeholder="Age"
            onChangeText={(text) => { this.setState({ ag: text })}}
            />
          </View> 
          : null }

          <View style={{ flexDirection: 'column'}}>
               { this.state.register | this.state.current_id != null ? null :
                <TouchableOpacity onPress={() => loginWindow() } > 
                   <View style={  styles.textInputView }>
                    <Text  style={styles.subtitle}>Login</Text>
                   </View>
                 </TouchableOpacity> }

                 { this.state.login | this.state.current_id != null ? null :
                 <TouchableOpacity onPress={() => registerWindow() } > 
                   <View style={  styles.textInputView   }>
                    <Text  style={styles.subtitle}>Register</Text>
                   </View>
                 </TouchableOpacity> }
          </View>

          { this.state.current_id == null ? null :
                <TouchableOpacity onPress={() => clearCurrentId() } > 
                   <View style={  styles.textInputView  }>
                    <Text  style={styles.subtitle}>You are logged in as {this.state.current_id}{'\n'}{'\n'}(Click to Switch User)</Text>
                   </View>
                 </TouchableOpacity> }

          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 { this.state.login | this.state.register ? 
                 <TouchableOpacity onPress={() => {this.setState (() => ({ login: false, register: false })); }} > 
                 <View style={  {  backgroundColor : "gold",  margin : 5}  }>
                  <Text  style={styles.subtitle}>Back</Text>
                 </View>
               </TouchableOpacity> :
                 <TouchableOpacity onPress={() => goLast()} > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Skip</Text>
                   </View>
                 </TouchableOpacity> }
                 <TouchableOpacity onPress={() => goNext() } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Next</Text>
                   </View>
                 </TouchableOpacity> 
            </View>

            { this.state.login | this.state.register ? null :
            <TouchableOpacity onPress={() => clearAll() } > 
                   <View style={  {  backgroundColor : "red",  margin: 5, width: '20%', alignSelf: 'flex-end'}  }>
                    <Text  style={ {color: 'white', alignSelf: 'center'} }>Reset</Text>
                   </View>
            </TouchableOpacity> }
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
          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => goNext() } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Next</Text>
                   </View>
                 </TouchableOpacity> 
            </View>
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
          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => goNext() } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Next</Text>
                   </View>
                 </TouchableOpacity> 
            </View>
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
          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => goNext() } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Next</Text>
                   </View>
                 </TouchableOpacity> 
            </View>
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
          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => goNext() } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Next</Text>
                   </View>
                 </TouchableOpacity> 
            </View>
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
           <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => goNext() } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Next</Text>
                   </View>
                 </TouchableOpacity> 
            </View>
        </ScrollView>
      </View>
    );

    case 6: return (
      <View style={styles.container}>
       <ScrollView >
       <View style={styles.items}>
          <Text style={styles.head}> What is your interests </Text>
            <Text style={styles.contents}> What is your interests ? Your choices used for recommendation and data analysis during your usage of this app. </Text>
        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
           <TouchableOpacity onPress={() => changeColor(0)  } > 
              <View style={   {  backgroundColor : this.state.pressed[0] > 0  ? color2 : color1, margin : 5}  }>
                <Text  style={styles.subtitle}> Sports </Text>
              </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => changeColor(1)}  > 
              <View style={  {  backgroundColor : this.state.pressed[1]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> News </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(2)} > 
              <View style={  { backgroundColor : this.state.pressed[2]> 0  ? color2 : color1,  margin : 5}   }>
                <Text  style={styles.subtitle}> Entertainment </Text>
              </View>
          </TouchableOpacity>
          </View>
          
          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => changeColor(3)} > 
              <View style={  {  backgroundColor : this.state.pressed[3]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Lifestyle </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(4)} > 
              <View style={  {  backgroundColor : this.state.pressed[4]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Music </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(5)} > 
              <View style={  {   backgroundColor : this.state.pressed[5]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Science </Text>
              </View>
          </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => changeColor(6)} > 
              <View style={  {   backgroundColor : this.state.pressed[6] > 0 ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Technology </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(7)} > 
              <View style={  { backgroundColor : this.state.pressed[7]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Education </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(8)} > 
              <View style={  {  backgroundColor : this.state.pressed[8]> 0 ? color2 : color1, margin : 5}  }>
                <Text  style={styles.subtitle}> Art </Text>
              </View>
          </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => changeColor(9)} > 
              <View style={  {  backgroundColor : this.state.pressed[9]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Culture </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(10)} > 
              <View style={  {  backgroundColor : this.state.pressed[10]> 0 ? color2 : color1, margin : 5}  }>
                <Text  style={styles.subtitle}> Politics </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeColor(11)} > 
              <View style={  {  backgroundColor : this.state.pressed[11]> 0  ? color2 : color1,  margin : 5}  }>
                <Text  style={styles.subtitle}> Game </Text>
              </View>
          </TouchableOpacity> 
          </View>

          <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => {updateIntere(); goNext();} } > 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Submit</Text>
                   </View>
                 </TouchableOpacity> 
            </View>
          
        </ScrollView>
      </View>
    );


    case 7: return (
      <View style={styles.container}>
       <ScrollView>
         <Text  style={{fontFamily: "serif", color:'black', fontSize: 20, textAlign: 'center'}}> Checking Update and New Messages </Text>
          <WebView
           source={{uri: 'https://storage.googleapis.com/symmetric-lotus-227804.appspot.com/html5-canvas-waterfall-lake/index.html'}} 
           style={{width: "100%", marginTop: 5}}/>
           <View style={{ alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => goFirst()} > 
                  <View style={  {  backgroundColor : "gold",  margin : 5}  }>
                   <Text  style={styles.subtitle}>Go First</Text>
                  </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => goBack() } > 
                   <View style={  {  backgroundColor : "#4c8705",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Back</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => {updateIntere(); goToHome() }  }> 
                   <View style={  {  backgroundColor : "#058764",  margin : 5}  }>
                    <Text  style={styles.subtitle}>Go Home</Text>
                   </View>
                 </TouchableOpacity>
            </View>
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
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-start',
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
  textInputView: {
    backgroundColor : 'gray',
    alignItems: 'center',
    marginRight: "5%",
    marginLeft: "5%",
    padding: 20,
    margin: 10
  },
  textInputText: {
    width: '90%', 
    borderColor: 'white', 
    fontFamily: "noto-sans-thin", 
    borderBottomWidth: 1, 
    margin: 10,
    color: 'white'
  }
});