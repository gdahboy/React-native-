import React , {Component} from 'react' ; 
import {Text} from 'react-native'





export default class Test extends Component  {
    
    constructor(id,NumberofQuestions){
        super()
        this.id = id ; 
        this.NumberofQuestions = NumberofQuestions ; 
    }

    render(){
        return(
            <Text>hello</Text>
        );
    }



}