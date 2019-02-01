import React from 'react';
import {connect} from 'react-redux';
import SmurfList from '../components/SmurfList';
import {getSmurfs} from '../actions/index';

class SmurfsListView extends React.Component {
    // state = {
    //     smurfs: []
    // };

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        console.log(this.props)
        return (
            <SmurfList
                smurfs={this.props.smurfs}
                // history={this.props.history}
            />
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect (
    mapStateToProps,
    {getSmurfs}
)(SmurfsListView)