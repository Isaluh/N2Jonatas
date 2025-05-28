package com.lisa.emprestimoLivros.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lisa.emprestimoLivros.Entities.Usuario;
import com.lisa.emprestimoLivros.Repositories.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {
        var verificarUser = usuarioRepository.findAll();
        for(var user : verificarUser){
            if(user.getMatricula() == usuario.getMatricula()){
                throw new RuntimeException("Usuário com essa matricula já existe.");
            }
        }
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios(){
        List<Usuario> usuarios = usuarioRepository.findAll();
        if (usuarios.isEmpty()) {
            throw new RuntimeException("Não há nenhum usuario cadastrado atualmente.");
        }
        return usuarios;
    }

    public Usuario findById(Integer id) {
        return usuarioRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario não encontrado com ID: " + id));
    }

    public void apagarUsuario(Integer id) {
        if (!usuarioRepository.existsById(id)) {
            throw new RuntimeException("Usuario não encontrado com ID: " + id);
        }
        usuarioRepository.deleteById(id);
    }

    public Usuario updateUsuario(Usuario usuario) {
        if (usuario == null || usuario.getId() == null) {
            throw new IllegalArgumentException("Usuario não pode ser atualizado: Falta de informações.");
        }
        return usuarioRepository.save(usuario);
    }
}
