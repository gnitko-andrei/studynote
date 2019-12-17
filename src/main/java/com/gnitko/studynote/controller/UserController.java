package com.gnitko.studynote.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.gnitko.studynote.entity.Role;
import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.UserRepo;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;


@RestController
@CrossOrigin
public class UserController {
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/user")
    public User getUser(@AuthenticationPrincipal UserDetails user) {
        return userRepo.findByUsername(user.getUsername()).get();
    }

    @PostMapping("/registration")
    public User registration(@RequestBody JsonNode newUserJson) {
        String username = newUserJson.get("username").textValue();
        String password = newUserJson.get("password").textValue();
        String email = newUserJson.get("email").textValue();
        String firstName = newUserJson.get("firstName").textValue();
        String lastName = newUserJson.get("lastName").textValue();
        Set<Role> roles = new HashSet<>();
        roles.add(Role.USER);
        User user = new User(username, password, email, firstName, lastName, roles);
        return userRepo.save(user);
    }

    @PutMapping("/user")
    public User editUser(@AuthenticationPrincipal UserDetails userDetails,
                         @RequestBody JsonNode userJson) {
        User user = userRepo.findByUsername(userDetails.getUsername()).get();
        System.out.println(user);
        System.out.println(userJson);
        return user;
    }

    @DeleteMapping("/user/delete")
    public void deleteProject(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepo.findByUsername(userDetails.getUsername()).get();
        userRepo.delete(user);
    }
}
