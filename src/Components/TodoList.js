import React, { Component } from 'react'
import Todoform from './Todoform'

import { connect } from 'react-redux';
import * as action from '../Actions/todoActions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {

    onSelectEdit = (index) => {
        this.props.UpdateTransactionIndex(index);
    }

    onDelete = (index) => {
        if (window.confirm("Delete the item?")) {
            this.props.DeleteTransaction(index);
        }
    }


    render() {
        return (
            <>
                <Todoform></Todoform>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>S.no</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((item, index) => {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.todoText}</td>
                                    <td>
                                        <button type="submit" onClick={() => this.onSelectEdit(index)} className="button btn btn-primary">Edit</button>&nbsp;&nbsp;&nbsp;
                                <button type="submit" onClick={() => this.onDelete(index)} className="button btn btn-error">Delete</button></td>
                                </tr>
                            })}
                    </tbody>

                </table>
            </>
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
        DeleteTransaction: action.Delete,
        UpdateTransactionIndex: action.UpdateIndex
    }, dispatch)
}

export default connect(mapStatetoProps, dispatchToProps)(TodoList);