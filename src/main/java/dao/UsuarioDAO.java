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

            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getDescricao());
            ps.setString(3, usuario.getEmail());
            ps.setString(4, usuario.getSenha());
            ps.setString(5, usuario.getSecurityKey());

            ps.execute();
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

    public Usuario autenticar(String email, String senha) {
        String sql = "SELECT id_usuario, nome, email FROM usuario WHERE email = ? AND senha = ?";
        Connection conn = null;
        PreparedStatement ps = null;
        java.sql.ResultSet rs = null;
        Usuario u = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);
            ps.setString(1, email);
            ps.setString(2, senha);
            rs = ps.executeQuery();

            if (rs.next()) {
                u = new Usuario();
                u.setIdUsuario(rs.getInt("id_usuario"));
                u.setNome(rs.getString("nome"));
                u.setEmail(rs.getString("email"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
        return u;
    }

    public Usuario buscarPorId(int idUsuario) {
        String sql = "SELECT nome, descricao, email, senha, security_key FROM usuario WHERE id_usuario = ?";
        Connection conn = null;
        PreparedStatement ps = null;
        java.sql.ResultSet rs = null;
        Usuario u = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);
            ps.setInt(1, idUsuario);
            rs = ps.executeQuery();

            if (rs.next()) {
                u = new Usuario();
                u.setIdUsuario(idUsuario);
                u.setNome(rs.getString("nome"));
                u.setDescricao(rs.getString("descricao"));
                u.setEmail(rs.getString("email"));
                u.setSenha(rs.getString("senha"));
                u.setSecurityKey(rs.getString("security_key"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
        return u;
    }

    public void atualizar(Usuario u) {
        String sql = "CALL pr_atualizar_usuario(?, ?, ?, ?, ?)";
        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);

            ps.setInt(1, u.getIdUsuario());
            ps.setString(2, u.getNome());
            ps.setString(3, u.getDescricao());
            ps.setString(4, u.getEmail());
            ps.setString(5, u.getSenha());

            ps.execute();
            System.out.println("Usuário atualizado com sucesso via Procedure!");

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao atualizar usuário: " + e.getMessage());
        } finally {
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
    }
}