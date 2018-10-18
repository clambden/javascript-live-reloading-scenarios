'use strict';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { strings: [] };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
      
      var newstrings = this.state.strings;
      newstrings.push(this.state.value);
      this.setState({ strings: newstrings });

      event.preventDefault();
  }

  render() {
      let stringlist = this.state.strings.map(text =>
          <div>{text}</div>
      );
      return <div>
          <h1>Hello, world!</h1>
          <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} ></input>
              <input type="submit" value="Submit"></input>
          </form>
          {stringlist}
      </div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(App), domContainer);