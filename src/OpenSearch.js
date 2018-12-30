import React, { Component } from 'react'
import PropTypes from 'prop-types';

class OpenSearch extends Component{
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    render(){
        return(
            <div className="open-search">
              <button onClick={() => this.props.history.push('/search') }>Add a book</button>
            </div>
        )
    }
}

export default OpenSearch