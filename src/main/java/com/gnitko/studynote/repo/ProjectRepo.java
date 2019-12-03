package com.gnitko.studynote.repo;

import com.gnitko.studynote.entity.Project;
import com.gnitko.studynote.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepo extends JpaRepository<Project, Long> {
    List<Project> findAllByUser(User user);
    Optional<Project> findByName(String projectName);
}
