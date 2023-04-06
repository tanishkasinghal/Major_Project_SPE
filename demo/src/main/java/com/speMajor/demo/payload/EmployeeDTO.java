package com.speMajor.demo.payload;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EmployeeDTO {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String password;
}
