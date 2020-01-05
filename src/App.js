import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Header from './components/Header/Header';
import ImageClickBtn from './components/Container/ImageClickBtn';
import ImageInputForm from './components/Container/ImageInputForm';
import ImageShowFull from './components/Container/ImageShowFull';
import ImageColorRecognition from './components/Container/ImageColorRecognition';
import './style.css'; 

const app = new Clarifai.App({
  apiKey: 'b8ec3b2f72e14679ac6285cf00c0d384'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      colors: []
    }
  }

  getImageColors = (data) => {
    return data.outputs[0].data.colors;
  }

  displayColorFromImage = (colors) => {
    this.setState({colors: colors})
    console.log(colors)
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  onSubmitBtn = () => {
    this.setState({ imageUrl: this.state.input });

    app.models.predict(Clarifai.COLOR_MODEL, this.state.input)
      .then(response => this.displayColorFromImage(this.getImageColors(response)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="wrapper">
        <div className="overlay">
          <Header />
          <section className="section-main">
            <div className="container">
              <div>
                <ImageClickBtn onSubmitBtn = {this.onSubmitBtn} />
              </div>
              <div>
                <ImageInputForm onInputChange = {this.onInputChange} />
                <ImageShowFull imageUrl = {this.state.imageUrl} />
                <ImageColorRecognition colors = {this.state.colors} />
              </div>
            </div>
          </section>
  
        </div>
      </div>
    );
  }
}

export default App;
