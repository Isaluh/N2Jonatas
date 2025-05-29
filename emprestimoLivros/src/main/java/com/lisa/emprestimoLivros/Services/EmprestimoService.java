package com.lisa.emprestimoLivros.Services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lisa.emprestimoLivros.Entities.Emprestimo;
import com.lisa.emprestimoLivros.Entities.Emprestimo.StatusLivro;
import com.lisa.emprestimoLivros.Repositories.EmprestimoRepository;

@Service
public class EmprestimoService {
    @Autowired
    private EmprestimoRepository emprestimoRepository;

    public Emprestimo cadastrarEmprestimo(Emprestimo emprestimo) {
        var verificarLivroUser = emprestimoRepository.findAll();

        for(var livro : verificarLivroUser){
            if(livro.getLivro().getId() == emprestimo.getLivro().getId() && livro.getStatus() == StatusLivro.EMPRESTADO){
                throw new RuntimeException("O livro já foi emprestado a alguem.");
            }
        }

        var cont = 0;
        for(var usuario : verificarLivroUser){
            if(usuario.getUsuario().getId() == emprestimo.getUsuario().getId()){
                cont++;
                if(cont >= 3){
                    throw new RuntimeException("O usuário já alugou o limite de 3 livros.");
                }
            }
        }

        emprestimo.setDataEmprestimo(LocalDate.now());
        emprestimo.setDataDevolucaoPrevista(emprestimo.getDataEmprestimo().plusDays(7));
        emprestimo.setStatus(StatusLivro.EMPRESTADO);
        return emprestimoRepository.save(emprestimo);
    }

    public List<Emprestimo> listarEmprestimos(){
        List<Emprestimo> emprestimos = emprestimoRepository.findAll();
        if (emprestimos.isEmpty()) {
            throw new RuntimeException("Não há nenhum emprestimo cadastrado atualmente.");
        }
        return emprestimos;
    }

    public Emprestimo findById(Integer id) {
        return emprestimoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Emprestimo não encontrado com ID: " + id));
    }

    public void apagarEmprestimo(Integer id) {
        if (!emprestimoRepository.existsById(id)) {
            throw new RuntimeException("Emprestimo não encontrado com ID: " + id);
        }
        if(emprestimoRepository.getReferenceById(id).getStatus() == StatusLivro.EMPRESTADO){
            throw new RuntimeException("Não é possível apagar emprestimo com o livro emprestado. ID: " + id);
        }
        emprestimoRepository.deleteById(id);
    }

    public Emprestimo updateStatusEmprestimo(StatusLivro status, Integer id) {
        emprestimoRepository.getReferenceById(id).setStatus(status);
        return emprestimoRepository.save(emprestimoRepository.getReferenceById(id));
    }
}
