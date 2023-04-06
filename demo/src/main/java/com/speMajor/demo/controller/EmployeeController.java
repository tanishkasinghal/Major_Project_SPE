package com.speMajor.demo.controller;
import com.speMajor.demo.model.Employee;
import com.speMajor.demo.payload.ApiResponse;
import com.speMajor.demo.payload.EmployeeDTO;
import com.speMajor.demo.repository.EmployeeRepository;
import com.speMajor.demo.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/")
   public ResponseEntity<EmployeeDTO> addEmployee(@Valid @RequestBody EmployeeDTO employeeDTO){
       EmployeeDTO newEmployeeDTO=this.employeeService.addEmployee(employeeDTO);
       return new ResponseEntity<>(newEmployeeDTO, HttpStatus.CREATED);
   } //working

   @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@Valid @RequestBody EmployeeDTO employeeDTO,@PathVariable Long id){
        EmployeeDTO updatedEmployeeDTO=this.employeeService.updateEmployeeDetails(employeeDTO,id);
        return ResponseEntity.ok(updatedEmployeeDTO);
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<ApiResponse> deleteEmployee(@PathVariable("id") Long id){
        this.employeeService.deleteEmployee(id);
        return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully",true),HttpStatus.OK);
   } //working

   @GetMapping("/")
   public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        return ResponseEntity.ok(this.employeeService.getAllEmployee());
   } //working

   @GetMapping("/{id}")
   public ResponseEntity<EmployeeDTO> getEmployeebyId(@PathVariable Long id){
        return ResponseEntity.ok(this.employeeService.getEmployeeById(id));
   } // working
}
