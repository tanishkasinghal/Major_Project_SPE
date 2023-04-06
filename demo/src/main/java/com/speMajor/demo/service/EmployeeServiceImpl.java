package com.speMajor.demo.service;

import com.speMajor.demo.exception.ResourceNotFoundException;
import com.speMajor.demo.model.Employee;
import com.speMajor.demo.payload.EmployeeDTO;
import com.speMajor.demo.repository.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public EmployeeDTO addEmployee(EmployeeDTO EmployeeDTO) {
        Employee employee=this.dtoToEmployee(EmployeeDTO);
        Employee savedEmployee=this.employeeRepository.save(employee);

        return this.EmployeeTodto(savedEmployee);
    }

    @Override
    public EmployeeDTO updateEmployeeDetails(EmployeeDTO EmployeeDTO, Long id) {
        Employee employee=this.employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("user","id",id));
        employee.setFirstName(EmployeeDTO.getFirstName());
        employee.setLastName(EmployeeDTO.getLastName());
        employee.setEmailId(EmployeeDTO.getEmailId());
        employee.setPassword(EmployeeDTO.getPassword());

        Employee updatedEmployee=this.employeeRepository.save(employee);
        return this.EmployeeTodto(updatedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long id) {
        Employee employee=this.employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("user","id",id));
        return this.EmployeeTodto(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> employees=this.employeeRepository.findAll();
        List<EmployeeDTO> employeeDTOS=employees.stream().map(employee -> this.EmployeeTodto(employee)).collect(Collectors.toList());
        return employeeDTOS;
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee=this.employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("user","id",id));
        employeeRepository.delete(employee);
    }

    public Employee dtoToEmployee(EmployeeDTO employeeDTO){
        Employee employee = this.modelMapper.map(employeeDTO, Employee.class);

//        Employee employee=new Employee();
//        employee.setId(employeeDTO.getId());
//        employee.setFirstName(employeeDTO.getFirstName());
//        employee.setLastName(employeeDTO.getLastName());
//        employee.setEmailId(employeeDTO.getEmailId());
//        employee.setPassword(employeeDTO.getPassword());
        return  employee;
    }

    public EmployeeDTO EmployeeTodto(Employee employee){
        EmployeeDTO employeeDTO=this.modelMapper.map(employee,EmployeeDTO.class);
//        EmployeeDTO employeeDTO=new EmployeeDTO();
//        employeeDTO.setId(employee.getId());
//        employeeDTO.setFirstName(employee.getFirstName());
//        employeeDTO.setLastName(employee.getLastName());
//        employeeDTO.setEmailId(employee.getEmailId());
//        employeeDTO.setPassword(employee.getPassword());
        return employeeDTO;
    }
}
