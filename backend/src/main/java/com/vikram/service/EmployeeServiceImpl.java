package com.vikram.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vikram.entity.Employee;
import com.vikram.repository.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> getAllEmployees() {
		
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(Integer id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new NoSuchElementException("No Employee found with Id "+id));
		return employee;
	}

	@Override
	public String saveEmployee(Employee employee) {
		Employee emp = employeeRepository.save(employee);
		log.info("{}"+emp);
		return "Employee successfully saved";
	}

	@Override
	public String deleteEmployeeById(Integer id) {
		employeeRepository.deleteById(id);
		return "Employee successfully deleted";
	}

}
