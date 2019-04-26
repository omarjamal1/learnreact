import React from 'react';
import logo from './logo.svg';
import './App.css';


class Label extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      status: this.props.text === 'Unlike' ? 'on' : 'off',
      color: ''
      
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log('Label componentDidMount');
  }


  componentDidUpdate(){
    console.log('Label componentDidUpdate');
  }

  handleClick() {
    this.setState( state => {
      let status = state.status === 'on' ? 'off' : 'on';

      return {status:status};
    })
  }

  render(){

    return <span> {this.props.text}
            <span onClick={this.handleClick}> Myown state is {this.state.status} </span>
          </span>;

  }
}


class Button extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        liked: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState(state => ({liked:!state.liked}), function(){

    });

    console.log(this.state.liked); 

    

  }

  render(){
      let text = this.state.liked ? 'Unlike' : 'Like';
      if (this.state.liked)
      return <button onClick={this.handleClick}> <Label text={text}/> </button>;
      else
        return <button onClick={this.handleClick}> <Label text={text}/> </button>;
  }
}


function App() {
  return (
    <div className="App">
       <Button/>
    </div>
  );
}

export default App;
