package com.speMajor.demo.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Role {
    @Id
    private int id;
    private String name;

//    @OneToMany(mappedBy = "role",fetch = FetchType.LAZY)
//    private List<Employee> employeeList=new ArrayList<>();
}
