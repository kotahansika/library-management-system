package com.Test.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Test.demo.model.BorrowRecord;

public interface BorrowRecordRepository extends JpaRepository<BorrowRecord, Long> {
    Optional<BorrowRecord> findByBookIdAndReturnedFalse(Long bookId);
    List<BorrowRecord> findByUserIdAndReturnedFalse(Long userId);
}

