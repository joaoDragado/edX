class FontChooser extends React.Component {

  constructor(props) {
	  super(props);
    this.state = {
      hidden: true,
      checked: false,
      weight: 'normal',
      size: 16
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

    sizeDecr(){
      let val = this.state.size - 1;
      if (val >= this.props.min) {
        this.setState({
          size: val
        });
      }
    }

    sizeIncr(){
      let val = this.state.size + 1;
      if (val <= this.props.max) {
        this.setState({
          size: val
        });
      }
    }

  render() {
    let wgt = this.state.weight;
    let sze = this.state.size;
    return(
    <div>
    <input type="checkbox" id="boldCheckbox" checked={this.state.checked} hidden={this.state.hidden} onClick={this.setWeight.bind(this)}/>
    <button id="decreaseButton" hidden={this.state.hidden} onClick={this.sizeDecr.bind(this)}>-</button>
    <span id="fontSizeSpan" hidden={this.state.hidden}>{sze}</span>
    <button id="increaseButton" hidden={this.state.hidden} onClick={this.sizeIncr.bind(this)}>+</button>
    <span style={{ fontWeight: wgt, fontSize: sze }} id="textSpan" onClick={this.toggle.bind(this)} >{this.props.text}</span>
    </div>
    );
  }

};


