class List extends React.component {
  render(){
    return(
      <ul>
        {this.props.items.map((item) => {
                                return <li key={item}>{item}</li>
                              }
                              )
        }
      </ul>
    );
  }
}

class FilteredList extends React.Component {

  constructor(props) {
    super.props();
    let allItems = [ "anteater", "bear", "cat", "dog", "elephant", "fox" ];
    this.state = {initialItems : allItems, currentItems : allItems};
  }

  filterList(input) {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(
                                     (item) => {
                                      return item.search(input.target.value) !== 1});
    this.setState({currentItems : updatedList});
  }

  render(){
    return (
      <div className='filter-list'>
        <input type='text' placeholder='Search' onChange={this.filterList.bind(this)}/>
        <List items={this.state.currentItems}/>
      </div>
    );
  }
}


