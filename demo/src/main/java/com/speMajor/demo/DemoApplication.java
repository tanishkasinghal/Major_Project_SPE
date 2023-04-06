package com.speMajor.demo;

import com.speMajor.demo.model.Employee;
import com.speMajor.demo.repository.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication  {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}


//	@Autowired
//	private EmployeeRepository employeeRepository;
//implements CommandLineRunner
////	@Override
////	public void run(String... args) throws Exception {
//////		Employee employee = new Employee();
//////		employee.setFirstName("Ramesh");
//////		employee.setLastName("Fadatare");
//////		employee.setEmailId("ramesh@gmail.com");
//////		employee.setPassword("zjhbf");
//////		employeeRepository.save(employee);
////
////	}

}
