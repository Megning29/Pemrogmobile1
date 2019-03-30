import React from 'react'; 
import { StyleSheet, Text, TextInput, View, Image,  ActivityIndicator,TouchableHighlight, } from 'react-native'; 
 
export default class AppWeatherAsync1715051031 extends React.Component {   
        constructor(props){
        super(props)
        this.state = {
        city: '',
        forecast: {
            temp: '-',
            main: '-',
            sunrise: '-',
            pressure: '-',
            sea_level: '-',
            speed: '-',
            description: '-',
            sunset: '-',
            humidity: '-',
            grnd_level: '-',
            loading: false,
        }};
}
async getWeather() {
    try {
        this.setState({loading: true });
        let response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=fb53da86ce47a2abe501035d4cedca3c&units=metric'
        );
        let responseJson = await response.json();
        return this.setState({
            loading: false,
            forecast: {
              temp: responseJson.main.temp,
              main: responseJson.weather[0].main,
              sunrise: responseJson.sys.sunrise,
              pressure: responseJson.main.pressure,
              sea_level: responseJson.main.sea_level,
              speed: responseJson.wind.speed,
              description: responseJson.weather[0].description,
              sunset: responseJson.sys.sunset,
              humidity: responseJson.main.humidity,
              grnd_level: responseJson.main.grnd_level,
                
            }});
    } catch (error) {
        console.error(error);
        this.setState({loading: true });
    }}
    render() {     
        return (
            <View style={styles.Main} >
                <View style={styles.Header}>
                    <Text style={styles.txtHeader1}>Prakiraan Cuaca</Text>
                </View>
                <View style={styles.box1}>
                    <View style={styles.box2}>
                    <Text style={styles.txtbox2}>Masukan Nama Kota</Text>
                        <TextInput style={styles.txtInput}
                            placeholder="Masukan nama kota"  
                                onChangeText={
                                (city)=>
                                this.setState({city})
                                }/>
                    <TouchableHighlight onPress={()=> this.getWeather()}>
                    {
                        this.state.loading ? <ActivityIndicator color="#81C784" size="small" animating />
                        :<Text style={styles.txtbox3}> Lihat</Text>
                     }
                    </TouchableHighlight>
                    </View>
                <View style={styles.box3}>
                    <View style={styles.ChildBox}> 
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./temp.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Temp :{this.state.forecast.temp}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./main.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Main :{this.state.forecast.main}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./sunrise.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Sunrise :{this.state.forecast.sunrise}{"\n"}</Text>
                        </View>
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./pressure.png")} style={styles.gambar} />  
                            </View>
                            <Text style={styles.txtbox4}>Pressure :{this.state.forecast.pressure}{"\n"}</Text>
                        </View>
                            <View style={styles.textInput}>
                            <View>
                            <Image source={require("./sealevel.jpg")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Sea Level :{this.state.forecast.sea_level}{"\n"}</Text>
                        </View></View>
                    <View style={styles.ChildBox1}> 
                    <View style={styles.textInput}>
                            <View>
                            <Image source={require("./windspeed.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Wind Speed :{this.state.forecast.speed}{"\n"}</Text>
                        </View>
                    <View style={styles.textInput}>
                            <View>
                            <Image source={require("./desc.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Main Desc :{this.state.forecast.description}{"\n"}</Text>
                        </View>
                       
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./sunset.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Sunset :{this.state.forecast.sunset}{"\n"}</Text>
                        </View>
                        
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./humid.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Humadity :{this.state.forecast.humidity}{"\n"}</Text>
                        </View>
                        
                        <View style={styles.textInput}>
                            <View>
                            <Image source={require("./ground.png")} style={styles.gambar} />  
                            </View>
                        <Text style={styles.txtbox4}>Ground Level :{this.state.forecast.grnd_level}{"\n"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.txtbox5}>@meganingrum299 {'\n'} Programmer React Native</Text>
                </View>
                </View>
            </View>
        );}   } 
   const styles = StyleSheet.create({
   Main: {
        flex: 1,
    },
    Header: {
        flex: 0.5,
        backgroundColor: '#FF007F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    box1: {
        flex: 5,
        backgroundColor: '#90caf9',
    },
    box2: {
        flex: 0.3,
        backgroundColor: '#9370DB',
        margin: 10,
    },
    box3: {
        flex: 0.6,
        backgroundColor: '#9370DB',
        margin: 10,
        flexDirection: 'row'

    },
    box4: {
        flex: 0.1,
        backgroundColor: '#FF007F',
    },
    gambar:{
      flexDirection: 'row',
      justifyContent: 'center',
      height: 30,
      width: 30,
  },
    textInput: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        height: 45,
        width: 155,
        marginTop: 15,
        borderRadius: 5,
    },
    txtbox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,
        marginLeft:80

    },
    
    txtbox3: {
        color: 'black',
        alignItems: 'center',
        fontSize: 20,
        marginLeft:140,
        marginRight:140,
        marginTop:10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    txtbox4: {
        color: 'black',
        alignItems: 'center',
        fontSize: 10,
        margin:10,
        marginTop:20,
    },
    txtbox5: {
      alignItems: 'center',
        color: 'white',
        fontSize: 15,
        marginTop:15,
        marginLeft:110,
    },
    txtInput: {
        flex: 0.7,
        height: 20,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        fontSize:18,
        marginTop:20,
        marginRight:60,
        marginLeft:70,
        borderRadius: 5,
    },
    txtHeader1: {
        color: 'white',
        alignItems: 'center',
        fontSize: 20

    },
    txtHeader2: {
        color: 'white',
        fontSize: 18
    },
    ChildBox:{
      flex:0.7,
      backgroundColor: '#9370DB',
      width: 40,
      height:40,
      margin:5,
    
  },
  ChildBox1:{
      flex:0.7,
      backgroundColor: '#9370DB',
      width: 40,
      height:40,
      margin:5,
      marginLeft:10,
  }
});