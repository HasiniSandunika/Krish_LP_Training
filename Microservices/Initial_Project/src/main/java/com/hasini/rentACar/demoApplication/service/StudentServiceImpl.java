package com.hasini.rentACar.demoApplication.service;

import com.hasini.rentACar.demoApplication.model.Student;
import com.hasini.rentACar.demoApplication.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    StudentRepository studentRepository;
    @Override
    public Student save(Student student) {
        return studentRepository.save(student);
    }
    @Override
    public Student getById(int id) {
        Optional<Student> student =  studentRepository.findById(id);
        Student student1 = student.get();
        return student1;
    }

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }
}
