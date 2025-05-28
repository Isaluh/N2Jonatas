package com.lisa.emprestimoLivros.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lisa.emprestimoLivros.Entities.Livro;
import com.lisa.emprestimoLivros.Services.LivroService;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/livros")
@CrossOrigin("*")
public class LivroController {
    @Autowired
    private LivroService livroService;

    @GetMapping
    public List<Livro> getAllLivros(){
        return livroService.listarLivros();
    }

    @GetMapping("/{id}")
    public Livro getLivroId(@PathVariable Integer id){
        return livroService.findById(id);
    }

    @PostMapping("/add")
    public Livro saveLivro(@RequestBody Livro contato){
        return livroService.cadastrarLivro(contato);
    }

    @PutMapping("/update")
    public Livro updateLivro(@RequestBody Livro contato){
        return livroService.updateLivro(contato);
    }

    @DeleteMapping("/{id}")
    public void deleteLivro(@PathVariable Integer id){
        this.livroService.apagarLivro(id);
    }
}
