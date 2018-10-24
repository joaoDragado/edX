class FontChooser extends React.Component {

  constructor(props) {
	  super(props);
    this.state = {
      hidden  : true,
      min : '4',
      max : '40',
      size : '16',
      text : 'Fun with React!',
      bold : false
    };

    handleTextClick() {
      this.setState({
        hidden : !this.state.hidden
      });
    }


  }


  render() {

  return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden='true'/>
	       <button id="decreaseButton" hidden='true'>-</button>
	       <span id="fontSizeSpan" hidden='true'>{this.props.size}</span>
	       <button id="increaseButton" hidden='true'>+</button>
	       <span onClick={this.handleTextClick.bind(this)} id="textSpan" hidden='false'>{this.props.text}</span>
	       </div>
	);
    }
}

