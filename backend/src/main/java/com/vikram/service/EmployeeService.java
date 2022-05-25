package com.vikram.service;

import java.util.List;

import com.vikram.entity.Employee;

public interface EmployeeService {

	List<Employee> getAllEmployees();
	Employee getEmployeeById(Integer id);
	String saveEmployee(Employee employee);
	String deleteEmployeeById(Integer id);
	
}
