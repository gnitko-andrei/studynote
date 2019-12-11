package com.gnitko.studynote.controller;

import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.ProjectRepo;
import com.gnitko.studynote.repo.UserRepo;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin()
public class ProjectController {
    private final ProjectRepo projectRepo;
    private final UserRepo userRepo;

    public ProjectController(ProjectRepo projectRepo, UserRepo userRepo) {
        this.projectRepo = projectRepo;
        this.userRepo = userRepo;
    }
    @CrossOrigin
    @GetMapping("/projects")
    public List<Project> getAllProjects(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepo.findByUsername(userDetails.getUsername()).get();
        return projectRepo.findAllByUser(user);
    }

    @GetMapping("/projects/{project}")
    public Project getUserProjectByName(@PathVariable Project project) {
        return project;
    }

}
