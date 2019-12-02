package com.gnitko.studynote.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/greet")
    @CrossOrigin("http://localhost:3000")
    public String greet() {
        return "Hello world";
    }
}
