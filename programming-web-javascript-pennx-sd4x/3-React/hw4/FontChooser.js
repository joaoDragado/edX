class FontChooser extends React.Component {

  constructor(props) {
	  super(props);
    this.state = {
      hidden: true,
      checked: (this.props.bold !== 'false' ? true : false),
      weight: (this.props.bold !== 'false' ? 'bold' : 'normal'),
      size: Number(this.props.size),
      min: Number(this.props.min),
      max: Number(this.props.max),
      color : 'black'
    };
  }

    toggle() {
      this.setState({hidden : !this.state.hidden});
    }

    doubleC() {
      this.setState({size: this.props.size});
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
      let val = this.state.size - 1 ;
      if (val <= this.state.min) {
        this.setState({
          size: this.state.min,
          color : 'red'
        });
      } else {
        this.setState({
          size: val,
          color : 'black'
        });
      }
    }

    sizeIncr(){
      let val = this.state.size + 1;
      if (val >= this.state.max) {
        this.setState({
          size: this.state.max,
          color : 'red'
        });
      } else {
        this.setState({
          size: val,
          color : 'black'
        });
      }
    }

  render() {
    let wgt = this.state.weight;
    let sze = this.state.size;
    let color = this.state.color;
    return(
    <div>
    <input type="checkbox" id="boldCheckbox" checked={this.state.checked} hidden={this.state.hidden} onClick={this.setWeight.bind(this)}/>
    <button id="decreaseButton" hidden={this.state.hidden} onClick={this.sizeDecr.bind(this)}>-</button>
    <span id="fontSizeSpan" hidden={this.state.hidden}>{sze}</span>
    <button id="increaseButton" hidden={this.state.hidden} onClick={this.sizeIncr.bind(this)}>+</button>
    <span style={{ color: color, fontWeight: wgt, fontSize: sze }} id="textSpan" onClick={this.toggle.bind(this)} onDoubleClick={this.doubleC.bind(this)} >{this.props.text}</span>
    </div>
    );
  }

};


