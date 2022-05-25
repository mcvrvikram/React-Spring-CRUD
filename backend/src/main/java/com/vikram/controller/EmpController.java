package com.vikram.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.vikram.entity.Employee;
import com.vikram.service.EmployeeService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/employees")
public class EmpController {

	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Employee>> getAllEmployees() {
		return ResponseEntity.ok(employeeService.getAllEmployees());
	}
	
	@GetMapping("/findById/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable Integer id){
		
		return ResponseEntity.ok(employeeService.getEmployeeById(id));
	}
	
	@PostMapping("/save")
	public ResponseEntity<String> saveEmployee(@Valid @RequestBody Employee employee){
		
		return ResponseEntity.created(null).body(employeeService.saveEmployee(employee));
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateEmployee(@RequestBody Employee employee){
		
		return ResponseEntity.ok(employeeService.saveEmployee(employee));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Integer id){
		return ResponseEntity.accepted().body(employeeService.deleteEmployeeById(id));
	}
	

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
	   Map<String, String> errors = new HashMap<>();
	 
	   ex.getBindingResult().getFieldErrors().forEach(error ->
	           errors.put(error.getField(), error.getDefaultMessage()));
	 
	   return errors;
	}
}
