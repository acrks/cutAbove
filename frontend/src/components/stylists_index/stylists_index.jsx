import React from 'react';
import StylistIndexItem from './stylist_list_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
// import {useState} from 'react'

class StylistsIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {search: ''}
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    this.props.fetchStylists()
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  }

  render() {
    const searchTerm = this.state.search
    if (!this.props.stylists) {
      return null
    } else {

    return (
      <div className='stylists-index-container'>
        <div className="search-box">
              <button className="btn-search"><FontAwesomeIcon className="fas fa-search" icon={faSearch}/></button>
        <input className = "input-search" type="text" placeholder="search by name/handle/address..." onChange={this.updateSearch}/>
        </div>
        <div className="search"></div>
        <ul className='stylist-list'>
          {
            this.props.stylists.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (val.handle.toLowerCase().includes(searchTerm.toLowerCase()) || val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val.address.toLowerCase().includes(searchTerm.toLowerCase()))
                return val
            }).map( (stylist, i) => <StylistIndexItem key={i} stylist={stylist}/> )
          }
        </ul>
      </div>
    )
  }
  }
}

export default StylistsIndex