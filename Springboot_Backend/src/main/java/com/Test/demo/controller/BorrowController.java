package com.Test.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/library")
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @PostMapping("/borrow")
    public ResponseEntity<String> borrowBook(@RequestParam Long bookId, @RequestParam Long userId) {
        return ResponseEntity.ok(borrowService.borrowBook(bookId, userId));
    }

    @PostMapping("/return")
    public ResponseEntity<String> returnBook(@RequestParam Long bookId, @RequestParam Long userId) {
        return ResponseEntity.ok(borrowService.returnBook(bookId, userId));
    }
}
