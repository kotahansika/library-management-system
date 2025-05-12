package com.Test.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "First_name")
    private String firstname;

    @Column(name = "Last_name")
    private String lastname;

    @Column(name = "Email_id")
    private String mail;

    @Column(name = "Mobile_No")
    private long mobile;

    @Column(name = "Roll_No")
    private long roll;

    @Column(name = "Standard")
    private String standard;

    @Column(name = "Subject")
    private String subject;

    @Column(name = "Author")
    private String author;

    @Column(name = "Issue_Date")
    private String issue;

    @Column(name = "Return_Date")
    private String returned;
    
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
    

    public Student() {
    }

    public Student(String firstname, String lastname, String mail, long mobile, long roll, String standard, String subject, String author, String  issue, String  returned,String username,String password
) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = mail;
        this.mobile = mobile;
        this.roll = roll;
        this.standard = standard;
        this.subject = subject;
        this.author = author;
        this.issue = issue;
        this.returned = returned;
        this.username = username;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public long getMobile() {
        return mobile;
    }

    public void setMobile(long mobile) {
        this.mobile = mobile;
    }

    public long getRoll() {
        return roll;
    }

    public void setRoll(long roll) {
        this.roll = roll;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public String getReturned() {
        return returned;
    }

    public void setReturned(String returned) {
        this.returned = returned;
    }
    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }
    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

}
