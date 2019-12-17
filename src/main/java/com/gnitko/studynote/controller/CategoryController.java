package com.gnitko.studynote.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.repo.CategoryRepo;
import com.gnitko.studynote.repo.ProjectRepo;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/{project}/categories")
    public Category newCategory(@PathVariable Project project, @RequestBody JsonNode newCategoryJson) {
        String name = newCategoryJson.get("name").textValue();
        Category category = new Category(name, project);
        return categoryRepo.save(category);
    }

    @DeleteMapping("/categories/{category}")
    public void deleteProject(@PathVariable Category category) {
        categoryRepo.delete(category);
    }
}
