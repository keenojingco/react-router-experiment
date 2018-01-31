import React, { Component } from 'react';
import queryString from 'query-string';

class PropertiesSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qs: queryString.parse(props.location.search)
        }
    }
    componentDidMount() {
        // let qs = queryString.parse(this.props.location.search)
        // console.log(qs);
    }

    render() {
        return(
            <div>
                <p>Search Results</p>
                <p>Filters:</p>
                <p>color: {this.state.qs.color}</p>
                <p>filter: {this.state.qs.filter}</p>
            </div>
        )
    }
}

export default PropertiesSearch;