package com.springreactbasic.springbootreactdemoproject.service;

import com.springreactbasic.springbootreactdemoproject.model.Student;
import com.springreactbasic.springbootreactdemoproject.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public Student saveStudent(Student student){
        return studentRepo.save(student);
    }

    public List<Student> readStudent(){
        return  studentRepo.findAll();
    }
}
