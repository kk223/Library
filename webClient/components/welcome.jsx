import React from 'react';
import {hashHistory} from 'react-router';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cookie from 'react-cookie';
import Paper from 'material-ui/Paper';
var style = {
           minWidth: '200px',
           marginTop:'-10px',
           width: '100%',
           height:'600px',
           textAlign: 'left',
           padding: '50px',
           backgroundImage: `url(${ '../images/intro-back.jpg'})`,
           display: 'inline-block',
           paddingTop: '20%',
           backgroundSize:'full'
       };
const styles = {
 labelStyle : {
            color: 'white',
            fontWeight: '400px',
            fontSize: '20px'
        },
  button: {
    padding: '8px',
    backgroundColor: '#994d00',
    borderRadius: '4px',
    opacity:0.7
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  appbarStyle: {
       backgroundColor: '#994d00',
       position: 'fixed',
       width: '100%',
       top:'0px',
       left:'0px',
       opacity: 0.4
   },
};
class Introduction extends React.Component {

render(){

  return(
    <MuiThemeProvider>
<div >
   <Paper style={style} zDepth={0}>
 <center>
    <a href='/auth/google'><RaisedButton label="SIGN IN WITH GOOGLE" icon={<img src="../images/google_login.png" style={{height:'36px',width:'36px'}}/>} labelStyle={styles.labelStyle} backgroundColor='#994d00'
                                style={styles.button}/></a>
                                </center>
</Paper>
</div>
 </MuiThemeProvider>

  )
}



}
export default Introduction;
