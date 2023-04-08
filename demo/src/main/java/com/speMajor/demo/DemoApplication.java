package com.speMajor.demo;

import com.speMajor.demo.model.Employee;
import com.speMajor.demo.repository.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class DemoApplication  implements CommandLineRunner{

//	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {
		//System.out.println(this.passwordEncoder.encode("jnjek"));
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
