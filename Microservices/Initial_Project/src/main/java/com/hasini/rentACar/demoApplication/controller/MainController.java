package com.hasini.rentACar.demoApplication.controller;

import com.hasini.rentACar.demoApplication.model.Student;
import com.hasini.rentACar.demoApplication.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MainController {
    @Autowired
    StudentService studentService;
    @RequestMapping(value  ="/hello", method = RequestMethod.GET)
    public String greeting1(){
        return "Hello SpringBoot get";
    }

    @RequestMapping(value  ="/hello", method = RequestMethod.POST)
    public String greeting2(){
        return "Hello SpringBoot post";
    }

    @RequestMapping(value = "/student", method = RequestMethod.POST)
    public Student save(@RequestBody Student student){
    return studentService.save(student);
    }

    @RequestMapping(value = "student/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Student getById(@PathVariable int id) {
        Student student =  studentService.getById(id);
        return student;
    }

    @RequestMapping(value = "student/all", method = RequestMethod.GET)
    @ResponseBody
    public List<Student> findAll() {
        List<Student> students=studentService.findAll();
        return students;
    }
}
