package com.Test.demo.controller;

import com.Test.demo.exception.ResourceNotFoundException;
import com.Test.demo.model.Student;
import com.Test.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "http://localhost:3000",
methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,RequestMethod.DELETE})
@RestController
@RequestMapping("/api/v1")
public class StudentController
{
    @Autowired
    private StudentRepository studentRepository;
    //get all employees
    @GetMapping("/students")
    public List<Student> getAllStudents(){

        return studentRepository.findAll();
    }
    // create student  rest api
    @PostMapping("/students")
    public Student createStudent( @RequestBody Student student)
    {
        return studentRepository.save(student);
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Student loginDetails) {
        Optional<Student> student = studentRepository.findByUsernameAndPassword(
            loginDetails.getusername(), loginDetails.getpassword()
        );

        if (student.isPresent()) {
            return ResponseEntity.ok(student.get());
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

    // get student by id rest api
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" +id));
        return ResponseEntity.ok(student);
    }
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));

        student.setFirstname(studentDetails.getFirstname());
        student.setLastname(studentDetails.getLastname());
        student.setMail(studentDetails.getMail());
        student.setMobile(studentDetails.getMobile());
        student.setRoll(studentDetails.getRoll());
        student.setStandard(studentDetails.getStandard());
        student.setSubject(studentDetails.getSubject());
        student.setAuthor(studentDetails.getAuthor());
        student.setIssue(studentDetails.getIssue());
        student.setReturned(studentDetails.getReturned());
        student.setusername(studentDetails.getusername());
        student.setpassword(studentDetails.getpassword());
        

        Student updatedStudent = studentRepository.save(student);

        return ResponseEntity.ok(updatedStudent);
    }
    // Delete student rest API
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStudent( @PathVariable Long id){
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
        studentRepository.delete(student);
        Map<String,  Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
