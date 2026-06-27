package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        System.out.println("Constructor Injection Executed");
        this.bookRepository = bookRepository;
    }

    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("Setter Injection Executed");
        this.bookRepository = bookRepository;
    }

    public void showBook() {
        System.out.println("Book Service is processing the request...");
        bookRepository.displayBook();
    }
}
