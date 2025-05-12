package com.Test.demo.controller;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Test.demo.model.BorrowRecord;
import com.Test.demo.repository.BorrowRecordRepository;

@Service
public class BorrowService {
    
    @Autowired
    private BorrowRecordRepository borrowRecordRepository;

    public String borrowBook(Long bookId, Long userId) {
        Optional<BorrowRecord> existing = borrowRecordRepository.findByBookIdAndReturnedFalse(bookId);
        if (existing.isPresent()) {
            return "Book is already borrowed.";
        }

        BorrowRecord record = new BorrowRecord();
        record.setBookId(bookId);
        record.setUserId(userId);
        record.setBorrowDate(LocalDate.now());
        record.setReturned(false);

        BorrowRecord.save(record);
        return "Book borrowed successfully.";
    }

    public String returnBook(Long bookId, Long userId) {
        Optional<BorrowRecord> recordOpt = borrowRecordRepository.findByBookIdAndReturnedFalse(bookId);
        if (recordOpt.isEmpty() || !recordOpt.get().getUserId().equals(userId)) {
            return "No active borrow record found for this user and book.";
        }

        BorrowRecord record = recordOpt.get();
        record.setReturnDate(LocalDate.now());
        record.setReturned(true);
        BorrowRecord.save(record);

        return "Book returned successfully.";
    }
}

