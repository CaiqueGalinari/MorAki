package dao;

import dto.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UsuarioDAO {

    public void cadastrar(Usuario usuario) {
        String sql = "INSERT INTO usuario (nome, descricao, email, senha, security_key) VALUES (?, ?, ?, ?, ?)";

        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);

            // Preenche os ? do SQL com os dados do objeto usuario
            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getDescricao());
            ps.setString(3, usuario.getEmail());
            ps.setString(4, usuario.getSenha());
            ps.setString(5, usuario.getSecurityKey());

            ps.execute(); // Executa o INSERT
            System.out.println("Usuário gravado com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao cadastrar usuário: " + e.getMessage());
        } finally {
            // Fechando conexões p não travar o BD
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
    }


}