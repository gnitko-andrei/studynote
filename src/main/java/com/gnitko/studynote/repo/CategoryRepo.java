package com.gnitko.studynote.repo;

import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CategoryRepo extends JpaRepository<Category, Long> {
    List<Category> findAllByProject(Project project);
    Optional<Category> findByName(String categoryName);
}
