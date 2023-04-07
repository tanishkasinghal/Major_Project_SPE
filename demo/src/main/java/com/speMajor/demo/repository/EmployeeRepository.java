package com.speMajor.demo.repository;

import com.speMajor.demo.model.Department;
import com.speMajor.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    List<Employee> findByDepartment(Department department);
}
