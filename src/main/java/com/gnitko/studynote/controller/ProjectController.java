package com.gnitko.studynote.controller;

import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.entity.User;
import com.gnitko.studynote.repo.ProjectRepo;
import com.gnitko.studynote.repo.UserRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {
    private final ProjectRepo projectRepo;
    private final UserRepo userRepo;

    public ProjectController(ProjectRepo projectRepo, UserRepo userRepo) {
        this.projectRepo = projectRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/{username}/projects")
    public List<Project> getAllUserProjects(@PathVariable String username) {
        User user = userRepo.findByUsername(username).get();
        return projectRepo.findAllByUser(user);
    }

    @GetMapping("/projects/{projectName}")
    public Project getUserProjectByName(@PathVariable String username,
                                            @PathVariable String projectName) {
        return projectRepo.findByName(projectName).get();
    }

}
