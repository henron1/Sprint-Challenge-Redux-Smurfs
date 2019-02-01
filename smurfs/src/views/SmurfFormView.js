import React from 'react';
import SmurfForm from '../components/SmurfForm';
import {connect}   from 'react-redux';
import { addSmurf } from '../actions/index';

// const newSmurfInfo = {
//     name: '',
//     age: '',
//     // height: '',
// }

class FormView extends React.Component {
    state ={
        smurf: {
            name: '',
            age: ''
        }
    };

    changeHandler = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }

    addNewSmurf = () => {
        this.props.addSmurf(this.state.smurf);
        this.setState({smurf:''})
    }

    // addNewSmurf = () => {
    //     // e.preventDefault();
    //     this.props.addSmurf(this.state.smurf)
    //     this.setState({
    //         smurf: {
    //             name:'',
    //             age:'',
    //         }
    //     })}

    render() {
        return(
            <SmurfForm
                addNewSmurf={this.addNewSmurf}
                changeHandler={this.changeHandler}
                smurf={this.state.smurf}
            />
        );
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    { addSmurf }
)(FormView);