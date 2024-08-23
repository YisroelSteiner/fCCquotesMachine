import React from "react";
import axios from "axios";


export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.generateQuote();
        this.state = {
          quote: "",
          author: ""
        };
        this.generateQuote = this.generateQuote.bind(this);
      }
      
      generateQuote() {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      axios.get("https://api.quotable.io/random", config).then((res)=>{
        this.setState({
          quote: res.data.content
        });
        this.setState({ 
          author: res.data.author
        });
      }) 
    }
   
    render() {
       
        return  (<div id="quote-box" className="container">
            <h3>Quotes Machine</h3>
            <div id="text" className="quote">{this.state.quote}</div>
            <p id="author">{this.state.author}</p>
            <button id="new-quote" className="btn" onClick={this.generateQuote}>New quote</button>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="btn" >Tweet this wisdom</a>
        </div>);
    }
}
