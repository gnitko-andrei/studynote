package com.gnitko.studynote.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.gnitko.studynote.entity.Category;
import com.gnitko.studynote.entity.Note;
import com.gnitko.studynote.repo.CategoryRepo;
import com.gnitko.studynote.repo.NoteRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class NoteController {
    private final NoteRepo noteRepo;

    public NoteController(NoteRepo noteRepo) {
        this.noteRepo = noteRepo;
    }

    @GetMapping("/{category}/notes")
    public List<Note> getAllCategoryNotes(@PathVariable Category category) {
        return noteRepo.findAllByCategory(category);
    }

    @PostMapping("/{category}/notes")
    public Note newCategory(@PathVariable Category category, @RequestBody JsonNode newNoteJson) {
        String name = newNoteJson.get("name").textValue();
        String link = newNoteJson.get("link").textValue();
        String description = newNoteJson.get("description").textValue();
        Note note = new Note(name, link, description, category);
        return noteRepo.save(note);
    }

    @DeleteMapping("/notes/{note}")
    public void deleteProject(@PathVariable Note note) {
        noteRepo.delete(note);
    }
}
