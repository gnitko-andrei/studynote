package com.gnitko.studynote.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.TextNode;
import com.gnitko.studynote.entity.Role;
import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.UserRepo;
import com.gnitko.studynote.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;


@RestController
@CrossOrigin
public class UserController {
    private final UserRepo userRepo;
    private final UserService userService;

    public UserController(UserRepo userRepo, UserService userService) {
        this.userRepo = userRepo;
        this.userService = userService;
    }

    @GetMapping("/user")
    public User getUser(@AuthenticationPrincipal UserDetails user) {
        return userRepo.findByUsername(user.getUsername()).get();
    }

    @PostMapping("/registration")
    public JsonNode registration(@RequestBody JsonNode newUserJson) {
        User user = userService.parseRegistrationJson(newUserJson);
        Set<Role> roles = new HashSet<>();
        roles.add(Role.USER);
        user.setRole(roles);
        String validationStatus = userService.validateRegistration(user);
        if(validationStatus.equals("ok")) {
            userRepo.save(user);
        }
        JsonNode statusJson = new TextNode(validationStatus);
        return statusJson;
    }

    @PutMapping("/user")
    public String editUser(@AuthenticationPrincipal UserDetails userDetails,
                         @RequestBody JsonNode userJson) {
        User userFromDb = userRepo.findByUsername(userDetails.getUsername()).get();
        User userFromForm = userService.parseEditJson(userJson);
        userFromForm.setRole(userFromDb.getRole());
        userFromForm.setId(userFromDb.getId());
        userFromForm.setEmail(userFromDb.getEmail());
        String currentPassword = userJson.get("currentPassword").textValue();
        if(currentPassword.equals(userFromDb.getPassword())) {
            userRepo.save(userFromForm);
            return "ok";
        } else {
            return "Неверный пароль";
        }
    }

    @DeleteMapping("/user/delete")
    public void deleteProject(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepo.findByUsername(userDetails.getUsername()).get();
        userRepo.delete(user);
    }
}
