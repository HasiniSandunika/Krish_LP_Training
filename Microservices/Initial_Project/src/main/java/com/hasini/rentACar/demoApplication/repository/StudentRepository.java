package com.hasini.rentACar.demoApplication.repository;

import com.hasini.rentACar.demoApplication.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
