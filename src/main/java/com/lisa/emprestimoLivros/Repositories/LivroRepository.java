package com.lisa.emprestimoLivros.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lisa.emprestimoLivros.Entities.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Integer>  {
    
}
