package com.gnitko.studynote.controller;

import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.repo.CategoryRepo;
import com.gnitko.studynote.repo.ProjectRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {
    private final CategoryRepo categoryRepo;
    private final ProjectRepo projectRepo;

    public CategoryController(CategoryRepo categoryRepo, ProjectRepo projectRepo) {
        this.categoryRepo = categoryRepo;
        this.projectRepo = projectRepo;
    }

    @GetMapping("/{projectName}/categories")
    public List<Category> getAllProjectCategories(@PathVariable String projectName) {
        Project project = projectRepo.findByName(projectName).get();
        return categoryRepo.findAllByProject(project);
    }

    @GetMapping("categories/{categoryName}")
    public Category getProjectCategoryByName(@PathVariable String categoryName) {
        return categoryRepo.findByName(categoryName).get();
    }
}
