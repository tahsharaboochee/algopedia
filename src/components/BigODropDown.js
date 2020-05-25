import React, {Component} from 'react'
import algorithms from './algorithms.json'
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown} from 'reactstrap';
import './dropDown.css'

class BigODropDown extends Component {
  state = {
    algorithms: algorithms, 
    visibleAlgorithms: algorithms,
    dropDownOpen: ''
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


  render = () => {
      return (
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
        
      );
  }         
  
}

export default BigODropDown