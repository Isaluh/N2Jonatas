package com.lisa.emprestimoLivros.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lisa.emprestimoLivros.Entities.Usuario;
import com.lisa.emprestimoLivros.Services.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAllUsuarios(){
        return usuarioService.listarUsuarios();
    }

    @GetMapping("/{id}")
    public Usuario getUsuarioId(@PathVariable Integer id){
        return usuarioService.findById(id);
    }

    @PostMapping("/add")
    public Usuario saveUsuario(@RequestBody Usuario contato){
        return usuarioService.cadastrarUsuario(contato);
    }

    @PutMapping("/update")
    public Usuario updateUsuario(@RequestBody Usuario contato){
        return usuarioService.updateUsuario(contato);
    }

    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Integer id){
        this.usuarioService.apagarUsuario(id);
    }
}
