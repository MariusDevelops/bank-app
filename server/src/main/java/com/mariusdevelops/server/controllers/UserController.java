package com.mariusdevelops.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/hello")
    public String sayHello() {
        System.out.println("Hello, this message is printed on the server console!");
        return "Request received at /hello";
    }

}
