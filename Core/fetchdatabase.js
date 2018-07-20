import firebase from './firebase' ; 

export default  fetchdatabse = () => {
    firebase.database().ref('users').on('value' , (data)=> {
        console.log(data.toJSON()) ; 
    })
}