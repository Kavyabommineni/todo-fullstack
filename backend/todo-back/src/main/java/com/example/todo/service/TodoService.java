package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> getAllTodos() {
        return repository.findAll();
    }

    public Todo saveTodo(Todo todo) {
        return repository.save(todo);
    }

    public Todo updateTodo(Long id, Todo updatedTodo) {
    Todo existing = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found"));

    if (updatedTodo.getTitle() != null) {
        existing.setTitle(updatedTodo.getTitle());
    }

    existing.setCompleted(updatedTodo.isCompleted());

    return repository.save(existing);
}

    public void deleteTodo(Long id) {
        repository.deleteById(id);
    }
}