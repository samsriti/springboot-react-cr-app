package com.springreactbasic.springbootreactdemoproject.controller;

import com.springreactbasic.springbootreactdemoproject.model.Student;
import com.springreactbasic.springbootreactdemoproject.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/createstudent")
    public Student createStudent(@RequestBody Student student){
        return studentService.saveStudent(student);
    }


    @GetMapping("/getstudent")
    public List<Student> getStudent(){
        return studentService.readStudent();
    }
}
