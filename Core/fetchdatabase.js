import firebase from './firebase' ; 

export default  fetchdatabse = () => {
    firebase.database().ref('test').on('value' , (data)=> {
        console.log(data.toJSON()) ; 
    })
}