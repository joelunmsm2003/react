class App extends React.Component{

	clickHandler(){

		alert('skskks')
	}

	render(){

		return (
			<button onClick={()=>this.clickHandler()}>Click</button>
		)
	}
}

ReactDOM.render(

	<App/>,
	document.getElementById('app')
	



);

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

ReactDOM.render(

	<Square/>,
	document.getElementById('app')
	



);
