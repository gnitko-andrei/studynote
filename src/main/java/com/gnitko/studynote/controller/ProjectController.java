package com.gnitko.studynote.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.ProjectRepo;
import com.gnitko.studynote.repo.UserRepo;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProjectController {
    private final ProjectRepo projectRepo;
    private final UserRepo userRepo;

    public ProjectController(ProjectRepo projectRepo, UserRepo userRepo) {
        this.projectRepo = projectRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepo.findByUsername(userDetails.getUsername()).get();
        return projectRepo.findAllByUser(user);
    }


    @PostMapping("/projects")
    public Project newProject(@AuthenticationPrincipal UserDetails userDetails, @RequestBody JsonNode newProjectJson) {
        User user = userRepo.findByUsername(userDetails.getUsername()).get();
        String name = newProjectJson.get("name").textValue();
        String description = newProjectJson.get("description").textValue();
        Project project = new Project(name, description, user);
        return projectRepo.save(project);
    }

    @DeleteMapping("/projects/{project}")
    public void deleteProject(@PathVariable Project project) {
        projectRepo.delete(project);
    }
}
