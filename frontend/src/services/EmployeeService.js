import axios from "axios";


const BASE_URL = "http://localhost:8080/employees/";
class EmployeeService {

    
    getEmployees(){
        const res = axios.get(BASE_URL+"getAll");
        console.log(res);
        return res;
    }
    createEmployee(employee){
        return axios.post(BASE_URL+ "save" , employee);
    }

    getEmployeeById(employeeId){
        return axios.get(BASE_URL + "findById/" + employeeId);
    }

    updateEmployee(employee){
        return axios.put(BASE_URL + "update/" , employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(BASE_URL + 'delete/' + employeeId);
    }
}

export default new EmployeeService();