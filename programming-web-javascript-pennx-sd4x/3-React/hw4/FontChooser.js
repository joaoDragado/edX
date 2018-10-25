class FontChooser extends React.Component {

  constructor(props) {
	  super(props);
    this.state = {
      hidden: true,
      checked: false,
      weight: 'normal',
    };
  }

    toggle() {
      this.setState({hidden : !this.state.hidden});
    }

    setWeight(){
      if (this.state.checked)
        this.setState({weight: 'normal',
                    checked: false });
      else
        this.setState({weight: 'bold',
                     checked: true });


    }

  render() {

    return(
    <div>
    <input type="checkbox" id="boldCheckbox" checked={this.state.checked} hidden={this.state.hidden} onClick={this.setWeight.bind(this)}/>
    <button id="decreaseButton" hidden={this.state.hidden}>-</button>
    <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
    <button id="increaseButton" hidden={this.state.hidden}>+</button>
    <span style={{ fontWeight: this.state.weight }} id="textSpan" onClick={this.toggle.bind(this)} >{this.props.text}</span>
    </div>
    );
  }

};


