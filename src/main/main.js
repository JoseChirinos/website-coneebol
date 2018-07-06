import React, { Component } from 'react';
import { mainStyle } from './main.styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './navbar';
import Footer from './footer';
class Main extends Component {
  render(){
    return(
      <MuiThemeProvider theme={createMuiTheme(mainStyle)}>
      
        <Navbar/>

        <section>
          { this.props.children }
        </section>
        
        <Footer/>

      </MuiThemeProvider>
    )
  }
}

export default Main;