package com.lisa.emprestimoLivros.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lisa.emprestimoLivros.Entities.Livro;
import com.lisa.emprestimoLivros.Repositories.LivroRepository;

@Service
public class LivroService {
    @Autowired
    private LivroRepository livroRepository;

    public Livro cadastrarLivro(Livro livro) {
        return livroRepository.save(livro);
    }

    public List<Livro> listarLivros(){
        List<Livro> livros = livroRepository.findAll();
        if (livros.isEmpty()) {
            throw new RuntimeException("Não há nenhum livro cadastrado atualmente.");
        }
        return livros;
    }

    public Livro findById(Integer id) {
        return livroRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Livro não encontrado com ID: " + id));
    }

    public void apagarLivro(Integer id) {
        if (!livroRepository.existsById(id)) {
            throw new RuntimeException("Livro não encontrado com ID: " + id);
        }
        livroRepository.deleteById(id);
    }

    public Livro updateLivro(Livro livro) {
        if (livro == null || livro.getId() == null) {
            throw new IllegalArgumentException("Livro não pode ser atualizado: Falta de informações.");
        }
        return livroRepository.save(livro);
    }
}
