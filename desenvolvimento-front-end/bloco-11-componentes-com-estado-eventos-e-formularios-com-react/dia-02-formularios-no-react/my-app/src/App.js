import React from 'react';
import TextField from './components/TextFiled';

class App extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { email, password} = this.state;

    return (
      <div className="App">
        <TextField
        name='email'
        type='email'
        value={email}
        onChange={this.handleChange}
        />
        <TextField 
        name='password'
        type='password'
        value={password}
        onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
