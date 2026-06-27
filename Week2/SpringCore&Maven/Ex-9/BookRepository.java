package com.Library.LibraryManagement.repository;

import com.Library.LibraryManagement.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}

