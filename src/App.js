import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import TextArea from './components/textarea';

// import { directive } from '@babel/types';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newDate: '',
      isOn: false,
      clickCount: 0

    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({isOn: !this.state.isOn});
    if(this.state.isOn) {
      this.setState({newDate: new Date()})
    }       
    
  }

  render () {
    const text = "this is some test text"
    return(
      <div className="wrapper">
      <Header />
      <button onClick={this.handleClick}>
                {this.state.isOn? 'Stop the time' : 'Start the time'}
            </button>
      <TextArea text={this.state.newDate.toString()}/>
      <Footer />
      </div>
    )
  }
}

export default App;
