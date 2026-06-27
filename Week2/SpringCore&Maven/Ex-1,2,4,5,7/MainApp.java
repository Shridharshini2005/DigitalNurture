package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        System.out.println("Loading Spring IoC Container...");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("Beans created successfully.");

        BookService service = context.getBean("bookService", BookService.class);

        service.showBook();
    }
}
