import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../Actions/todoActions';
import { bindActionCreators } from 'redux';

class Todoform extends Component {

    state = {
       ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.CurrentIndex === -1) {
            return {
                todoText: ''
            }
        }
        else {
            return this.props.list[this.props.CurrentIndex]
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.CurrentIndex !== this.props.CurrentIndex || prevProps.list.length !== this.props.list.length){
            this.setState({
                ...this.returnStateObject()
            })
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    SaveTodo = (e) => {
        e.preventDefault();
        if (this.state.todoText !=="") {
          
            if(this.props.CurrentIndex === -1){
                this.props.InsertTransaction(this.state)
            }
            else
            {
                this.props.UpdateTransaction(this.state)
            }
         }
        else {
            alert('Please enter text')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.SaveTodo}>
                    <div className="row" style={{ 'padding': '25px' }}>
                        <div className="col-md-9">
                            <input type="text" className="form-control" name="todoText" onChange={this.handleChange} value={this.state.todoText}></input>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="form-control btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



const mapStatetoProps = state => {
    return {
        CurrentIndex: state.CurrentIndex,
        list: state.todoList
    }
}
 
const dispatchToProps = dispatch => {
    return bindActionCreators({
        InsertTransaction: action.insert,
        UpdateTransaction: action.update
    }, dispatch)
}

export default connect(mapStatetoProps, dispatchToProps)(Todoform);