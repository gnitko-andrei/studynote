package com.gnitko.studynote.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User parseRegistrationJson(JsonNode userJson) {
        String username = userJson.get("username").textValue();
        String password = userJson.get("password").textValue();
        String email = userJson.get("email").textValue();
        String firstName = userJson.get("firstName").textValue();
        String lastName = userJson.get("lastName").textValue();
        return new User(username, password, email, firstName, lastName);
    }

    public User parseEditJson(JsonNode userJson) {
        String username = userJson.get("username").textValue();
        String password = userJson.get("password").textValue();
        String firstName = userJson.get("firstName").textValue();
        String lastName = userJson.get("lastName").textValue();
        return new User(username, password, firstName, lastName);
    }

    public boolean isUsernameInDatabase(String username) {
        return userRepo.existsByUsername(username);
    }

    public boolean isEmailInDatabase(String email) {
        return userRepo.existsByEmail(email);
    }

    public String validateRegistration(User user) {
        if(isUsernameInDatabase(user.getUsername())) {
            return "Пользователь с таким логином уже существует";
        }
        if(isEmailInDatabase(user.getEmail())) {
            return "Пользователь с таким адресом электронной почты уже существует";
        }
        return "ok";
    }
}


