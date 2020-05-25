import React, {Fragment, Component} from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown, Button} from 'reactstrap';
import Algorithms from './Algorithms'
import Header from './Header'
import algorithms from './algorithms.json'
import './App.css';
import './card.css'
import './dropDown.css'


class App extends Component{
 
  state = {
    algorithms: algorithms, 
    visibleAlgorithms: algorithms,
    dropDownOpen: '',
    showProsAndCons: true
  }

  toggle = () => {
    this.setState({
       dropDownOpen: !this.state.dropDownOpen,
    })
  }

select = (e) => {
  let displayedAlgorithms = this.state.algorithms.filter(algorithm => {
     if(e.target.value === 'display all'){
      return algorithm
     }
    return algorithm.averagePerformance === e.target.value
  });
 
  this.setState({visibleAlgorithms: displayedAlgorithms})
}

reset = () => {
  this.setState({
    algorithms: algorithms, 
    visibleAlgorithms: algorithms,
    dropDownOpen: '',
    showProsAndCons: true
  })
}

hide = () => {
  this.setState({showProsAndCons: !this.state.showProsAndCons})
}
  render (){
    return (
      <Fragment>
      <Header algorithms={this.state.algorithms} visibleAlgorithms={this.state.visibleAlgorithms}/>
      <ButtonDropdown >
          <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
              <DropdownToggle color="primary" caret className="dropdown-toggle">
                  Select Which Big O Notation To View
              </DropdownToggle>
              <DropdownMenu className="bigO-dropdown">
                <DropdownItem onClick={this.select} value="O(🥞)">O(🥞)</DropdownItem>
                <DropdownItem onClick={this.select} value="O(n log n)">O(n log n)</DropdownItem>
                <DropdownItem onClick={this.select} value="O(n²)">O(n²)</DropdownItem>
                <DropdownItem onClick={this.select} value="display all">Display all</DropdownItem>
              </DropdownMenu>
            </Dropdown>
        </ButtonDropdown>  
        <Button onClick={this.reset} >Reset</Button>
        <Button onClick={this.hide}> {this.state.showProsAndCons ? 'Hide' : 'Show'} the Pros And Cons</Button>
          <Algorithms algorithms={this.state.visibleAlgorithms} showProsAndCons={this.state.showProsAndCons} />
      </Fragment>
    )
  }
}

export default App;
