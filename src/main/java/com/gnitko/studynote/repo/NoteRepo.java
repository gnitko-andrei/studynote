package com.gnitko.studynote.repo;

import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoteRepo extends JpaRepository<Note, Long> {
    List<Note> findAllByCategory(Category category);
    Optional<Note> findByName(String noteName);
}
