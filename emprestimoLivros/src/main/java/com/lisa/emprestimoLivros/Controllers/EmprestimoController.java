package com.lisa.emprestimoLivros.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.lisa.emprestimoLivros.Entities.Emprestimo;
import com.lisa.emprestimoLivros.Entities.Emprestimo.StatusLivro;
import com.lisa.emprestimoLivros.Services.EmprestimoService;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emprestimos")
@CrossOrigin("*")
public class EmprestimoController {
    @Autowired
    private EmprestimoService emprestimoService;

    @GetMapping
    public List<Emprestimo> getAllEmprestimos(){
        return emprestimoService.listarEmprestimos();
    }

    @GetMapping("/{id}")
    public Emprestimo getEmprestimoId(@PathVariable Integer id){
        return emprestimoService.findById(id);
    }

    @PostMapping("/add")
    public Emprestimo saveEmprestimo(@RequestBody Emprestimo contato){
        return emprestimoService.cadastrarEmprestimo(contato);
    }

    @PutMapping("/status/{id}/{status}")
    public Emprestimo updateStatusEmprestimo(@PathVariable StatusLivro status, @PathVariable Integer id){
        return emprestimoService.updateStatusEmprestimo(status , id);
    }

    @DeleteMapping("/{id}")
    public void deleteEmprestimo(@PathVariable Integer id){
        this.emprestimoService.apagarEmprestimo(id);
    }
}
