import React from 'react';
import {Link} from 'react-router';
import './search.css';
import {hashHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

class viewFavorite extends React.Component{
  constructor(props){
    super(props);
        this.state = {
          items:[]
        }
        this.view=this.view.bind(this);
        this.handleClick=this.handleClick.bind(this);
  }

view(){
  var that =this
  axios({

                 method:'GET',
                 url:'/books/viewbooks'
               }).then(function(res){
                 // that.state.items.push(res);
                 console.log("result",res.data);
                  that.setState({items:res.data});
                  console.log("result",this.state.items);
               }).catch(function(e){
                 console.log("error in adding book",e);
               })
}

handleClick(item,e){
  var bookname=item.bookname
  let result=confirm("do u want to delete???");
  if (result)
  axios({

                 method:'DELETE',
                 url:'/books/'+bookname
               }).then(function(res){


               }).catch(function(e){
                 console.log("error in adding book",e);
               })
               alert("Deleted..");
               this.state.items.splice(bookname,1);
                 this.setState(this.state);

}

  render(){
    return(
      <MuiThemeProvider>
  <div >
      <Paper style={style} zDepth={0}>
         <center>
           <RaisedButton label='ViewFavorite 'style={styleButton} labelStyle={labelStyle} backgroundColor='#994d00' onClick={this.view}/>
           <div className="color-ret">
           {this.state.items.map((item, index) => {
             let boundItemClick = this.handleClick.bind(this, item);

                return (
      <div className="clsname-div" key={index}  style={{"backgroundColor":"#73ef07"}} onClick={boundItemClick}>{item.bookname}</div>
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
export default viewFavorite
