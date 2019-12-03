package com.gnitko.studynote.controller;

import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Note;
import com.gnitko.studynote.repo.CategoryRepo;
import com.gnitko.studynote.repo.NoteRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoteController {
    private final NoteRepo noteRepo;
    private final CategoryRepo categoryRepo;

    public NoteController(NoteRepo noteRepo, CategoryRepo categoryRepo) {
        this.noteRepo = noteRepo;
        this.categoryRepo = categoryRepo;
    }

    @GetMapping("/{categoryName}/notes")
    public List<Note> getAllCategoryNotes(@PathVariable String categoryName) {
        Category category = categoryRepo.findByName(categoryName).get();
        return noteRepo.findAllByCategory(category);
    }

    @GetMapping("/notes/{noteName}")
    public Note getCategoryNoteByName(@PathVariable String noteName) {
        return noteRepo.findByName(noteName).get();
    }
}
