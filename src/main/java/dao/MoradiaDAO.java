package dao;

import dto.Moradia;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MoradiaDAO {

    public void cadastrar(Moradia m) {
        String sql = "INSERT INTO moradia (endereco, tot_inquilino, max_inquilino, tipo, " +
                "nome_dono, telefone_dono, tempo_aluguel, valor, descricao, id_quem_cadastrou) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);

            ps.setString(1, m.getEndereco());
            ps.setInt(2, m.getTotInquilino());
            ps.setInt(3, m.getMaxInquilino());
            ps.setString(4, m.getTipo());
            ps.setString(5, m.getNomeDono());
            ps.setString(6, m.getTelefoneDono());
            ps.setInt(7, m.getTempoAluguel());
            ps.setDouble(8, m.getValor());
            ps.setString(9, m.getDescricao());
            ps.setInt(10, m.getIdQuemCadastrou());

            ps.execute();
            System.out.println("Moradia cadastrada com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao cadastrar moradia: " + e.getMessage());
        } finally {
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
    }

    public java.util.List<Moradia> listarMeusImoveis(int idUsuario) {
        java.util.List<Moradia> lista = new java.util.ArrayList<>();
        String sql = "SELECT * FROM moradia WHERE id_quem_cadastrou = ?";

        Connection conn = null;
        PreparedStatement ps = null;
        java.sql.ResultSet rs = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);
            ps.setInt(1, idUsuario);
            rs = ps.executeQuery();

            while (rs.next()) {
                Moradia m = new Moradia();
                m.setIdMoradia(rs.getInt("id_moradia"));
                m.setEndereco(rs.getString("endereco"));
                m.setTotInquilino(rs.getInt("tot_inquilino"));
                m.setMaxInquilino(rs.getInt("max_inquilino"));
                m.setTipo(rs.getString("tipo"));
                m.setNomeDono(rs.getString("nome_dono"));
                m.setTelefoneDono(rs.getString("telefone_dono"));
                m.setTempoAluguel(rs.getInt("tempo_aluguel"));
                m.setValor(rs.getDouble("valor"));
                m.setDescricao(rs.getString("descricao"));
                m.setIdQuemCadastrou(rs.getInt("id_quem_cadastrou"));

                lista.add(m);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao buscar imóveis: " + e.getMessage());
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
        return lista;
    }

    public Moradia buscarPorId(int idMoradia) {
        Moradia m = null;
        String sql = "SELECT id_moradia, endereco, valor, descricao, max_inquilino, tipo, telefone_dono, nome_dono, id_quem_cadastrou FROM moradia WHERE id_moradia = ?";

        java.sql.Connection conn = null;
        java.sql.PreparedStatement ps = null;
        java.sql.ResultSet rs = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);
            ps.setInt(1, idMoradia);
            rs = ps.executeQuery();

            if (rs.next()) {
                m = new Moradia();
                m.setIdMoradia(rs.getInt("id_moradia"));
                m.setEndereco(rs.getString("endereco"));
                m.setValor(rs.getDouble("valor"));
                m.setDescricao(rs.getString("descricao"));
                m.setMaxInquilino(rs.getInt("max_inquilino"));
                m.setTipo(rs.getString("tipo"));
                m.setTelefoneDono(rs.getString("telefone_dono"));
                m.setNomeDono(rs.getString("nome_dono"));
                m.setIdQuemCadastrou(rs.getInt("id_quem_cadastrou"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
        return m;
    }

    public void atualizar(Moradia m, int idUsuarioLogado) {
        String sql = "CALL pr_atualizar_imovel(?, ?, ?, ?::NUMERIC, ?, ?, ?, ?)";

        java.sql.Connection conn = null;
        java.sql.PreparedStatement ps = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql);

            ps.setInt(1, m.getIdMoradia());
            ps.setInt(2, idUsuarioLogado);
            ps.setString(3, m.getEndereco());
            ps.setDouble(4, m.getValor());
            ps.setString(5, m.getDescricao());
            ps.setInt(6, m.getMaxInquilino());
            ps.setString(7, m.getTelefoneDono());
            ps.setString(8, m.getNomeDono());

            ps.execute();
            System.out.println("Imóvel atualizado via Procedure com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao atualizar imóvel: " + e.getMessage());
        } finally {
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
    }

    public java.util.List<Moradia> buscarImoveis(String cidade, String tipo, Double valorMax, Integer maxInquilinos) {
        java.util.List<Moradia> lista = new java.util.ArrayList<>();

        StringBuilder sql = new StringBuilder("SELECT * FROM vw_imoveis_detalhados WHERE 1=1 ");

        if (cidade != null && !cidade.isEmpty()) sql.append(" AND cidade ILIKE ? ");
        if (tipo != null && !tipo.isEmpty()) sql.append(" AND tipo = ? ");
        if (valorMax != null && valorMax > 0) sql.append(" AND valor <= ? ");
        if (maxInquilinos != null && maxInquilinos > 0) sql.append(" AND max_inquilino <= ? ");

        java.sql.Connection conn = null;
        java.sql.PreparedStatement ps = null;
        java.sql.ResultSet rs = null;

        try {
            conn = Conexao.getConexao();
            ps = conn.prepareStatement(sql.toString());

            int paramIndex = 1;
            if (cidade != null && !cidade.isEmpty()) ps.setString(paramIndex++, "%" + cidade + "%");
            if (tipo != null && !tipo.isEmpty()) ps.setString(paramIndex++, tipo);
            if (valorMax != null && valorMax > 0) ps.setDouble(paramIndex++, valorMax);
            if (maxInquilinos != null && maxInquilinos > 0) ps.setInt(paramIndex++, maxInquilinos);

            rs = ps.executeQuery();

            while (rs.next()) {
                Moradia m = new Moradia();
                m.setIdMoradia(rs.getInt("id_moradia"));
                m.setTipo(rs.getString("tipo"));
                m.setValor(rs.getDouble("valor"));
                m.setMaxInquilino(rs.getInt("max_inquilino"));
                m.setTotInquilino(rs.getInt("tot_inquilino"));
                m.setDescricao(rs.getString("descricao"));
                m.setNomeDono(rs.getString("nome_dono"));
                m.setTelefoneDono(rs.getString("telefone_dono"));
                m.setTempoAluguel(rs.getInt("tempo_aluguel"));
                m.setEndereco(rs.getString("endereco_completo"));
                lista.add(m);
            }
        } catch (java.sql.SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro na busca avançada: " + e.getMessage());
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }
        return lista;
    }
}