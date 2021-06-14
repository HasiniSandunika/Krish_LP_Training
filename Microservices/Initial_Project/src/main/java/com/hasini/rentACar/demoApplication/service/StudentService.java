package com.hasini.rentACar.demoApplication.service;

import com.hasini.rentACar.demoApplication.model.Student;

import java.util.List;

public interface StudentService {
    Student save(Student student);
    Student getById(int id);
    List<Student> findAll();

}
