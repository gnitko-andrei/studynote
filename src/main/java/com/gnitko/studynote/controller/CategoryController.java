package com.gnitko.studynote.controller;

import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.repo.CategoryRepo;
import com.gnitko.studynote.repo.ProjectRepo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CategoryController {
    private final CategoryRepo categoryRepo;
    private final ProjectRepo projectRepo;

    public CategoryController(CategoryRepo categoryRepo, ProjectRepo projectRepo) {
        this.categoryRepo = categoryRepo;
        this.projectRepo = projectRepo;
    }

    @GetMapping("/{project}/categories")
    public List<Category> getAllProjectCategories(@PathVariable Project project) {
        return categoryRepo.findAllByProject(project);
    }

    @GetMapping("categories/{category}")
    public Category getProjectCategoryByName(@PathVariable Category category) {
        return category;
    }
}
