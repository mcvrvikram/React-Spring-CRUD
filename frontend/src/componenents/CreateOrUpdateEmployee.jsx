import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateOrUpdateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            name: '',
            designation: '',
            email: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDesignationHandler = this.changeDesignationHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    
    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({name: employee.name,
                    designation: employee.designation,
                    email : employee.email
                });
            }).catch(err=>alert(err.data));
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, designation: this.state.designation, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));

        
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
                alert(res.data)
            }).catch(err=>alert(err.message));
        }else{
            employee.id=this.state.id;
            EmployeeService.updateEmployee(employee).then( res => {
                this.props.history.push('/employees');
            }).catch(err=>alert(JSON.stringify(err.data)));
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDesignationHandler= (event) => {
        this.setState({designation: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>  Designation: </label>
                                            <input placeholder="designation" name="designation" className="form-control" 
                                                value={this.state.designation} onChange={this.changeDesignationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateOrUpdateEmployee