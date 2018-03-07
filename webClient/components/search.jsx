import React from 'react';
import {Link} from 'react-router';
import './search.css';
import {hashHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
const styleButton = {
  margin: 12,
  padding: '8px',
  backgroundColor: '#994d00',
  borderRadius: '4px',
  opacity:0.7
};
const labelStyle={
           color: 'white',
           fontWeight: '400px',
           fontSize: '20px'
       };
const style = {
           minWidth: '200px',
           marginTop:'-10px',
           width: '100%',
           height:'600px',
           textAlign: 'left',
           padding: '50px',
           backgroundImage: `url(${ '../images/background_image.jpg'})`,
           display: 'inline-block',
           paddingTop: '20%',
           backgroundSize:'full'
       };
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Navigator extends React.Component{
  constructor(props){
    super(props);
        this.state = {
          bookTitle:'',
          items:[],
        successview:false,
          failureview:false
        }
        var bookTitle='';
        this.mover = this.mover.bind(this);
        this.publish = this.publish.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleClick = this.handleClick.bind(this);
  }

   handleChange({target}){
     this.setState({bookTitle:this.refs.topic.value});
   }

handleClick(item,e){
  var addbooks =item.volumeInfo.title
    console.log("added to favorite list",addbooks);
    axios({

                   method:'POST',
                   url:'/books/'+addbooks
                 }).then(function(res){
                   alert("Book added")
                 }).catch(function(e){
                   alert("error in adding book");
                 })


};
   publish(){
  // console.log("bookTitle",this.state.bookTitle);
            // bookTitle =this.state.bookTitle
            //   console.log("bookTitle",bookTitle);
            var that=this;
            var result='';
                      axios({
                     method: 'GET',
                     url: 'https://www.googleapis.com/books/v1/volumes?q='+this.state.bookTitle

                  })
               .then(function(res){
                 that.setState({
                   items: res.data.items
                 });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

mover(){
  console.log("inside mover");
  hashHistory.push("/viewFavorite")
}

  render(){
    return(
      <MuiThemeProvider>
  <div >
      <Paper style={style} zDepth={0}>
      <div>
      <RaisedButton label='ViewFavorite 'style={styleButton} labelStyle={labelStyle} backgroundColor='#994d00' onClick={this.mover}/>
      </div>
         <center>
         <input type="text" ref="topic"name="topicBox" placeholder="Enter topic here..." value={ this.state.bookTitle } onChange={ this.handleChange }/>
         <RaisedButton label="SEARCH" style={styleButton}labelStyle={labelStyle} backgroundColor='#994d00' onClick={this.publish}/>
         <div style={styles.wrapper}>
       </div>
       <div className="color-ret">
       {this.state.items.map((item, index) => {
         let boundItemClick = this.handleClick.bind(this, item);

            return (
  <div className="clsname-div" key={index}  style={{"backgroundColor":"#73ef07"}} onClick={boundItemClick}>{item.volumeInfo.title}</div>
                    );
                    })}
          </div>
     </center>
      </Paper>
      </div>
       </MuiThemeProvider>
    )
  }
}
export default Navigator
