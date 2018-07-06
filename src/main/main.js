import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from '../footer/footer';
class Main extends Component {
  render(){
    return(
      <main>
        <header>
          <Navbar/>
        </header>
        <section>
          { this.props.children }
        </section>
        <footer>
          <Footer/>
        </footer>
      </main>
    )
  }
}

export default Main;