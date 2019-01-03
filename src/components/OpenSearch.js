import React from 'react'
import PropTypes from 'prop-types';

const OpenSearch = ({history}) => {   
    return(
        <div className="open-search">
            <button onClick={() => history.push('/search') }>Add a book</button>
        </div>
    )
}

OpenSearch.propTypes = {
    history: PropTypes.object.isRequired
}

export default OpenSearch