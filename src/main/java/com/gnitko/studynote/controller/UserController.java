package com.gnitko.studynote.controller;

import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.UserRepo;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/user")
    public User getAllUsers(@AuthenticationPrincipal UserDetails user) {
        return userRepo.findByUsername(user.getUsername()).get();
    }
}
