import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }

        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        this.props.history.push('/employees');
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee Name: </label>
                            <div> {this.state.employee.name}</div>
                        </div>
                        <div className="row">
                            <label> Employee Designation: </label>
                            <div> {this.state.employee.designation}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email ID: </label>
                            <div> {this.state.employee.email}</div>
                        </div>
                    </div>
                   
                </div>
                <div className="center">
                        <button className="btn btn-primary" style={{ margin: "40px 40%" }} onClick={this.cancel}>Back</button>
                    </div>
            </div>
        )
    }
}

export default ViewEmployee