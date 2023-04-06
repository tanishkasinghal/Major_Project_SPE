package com.speMajor.demo.service;

import com.speMajor.demo.model.Employee;
import com.speMajor.demo.payload.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO addEmployee(EmployeeDTO EmployeeDTO);
    EmployeeDTO updateEmployeeDetails(EmployeeDTO EmployeeDTO,Long id);
    EmployeeDTO getEmployeeById(Long id);
    List<EmployeeDTO> getAllEmployee();
    void deleteEmployee(Long id);
}
