package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {

    public static Connection getConexao() {
        try {
            // Tenta conectar no banco
            Class.forName("org.postgresql.Driver");
            return DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/db_moraki", // URL
                    "postgres",
                    "88756789"
            );
        } catch (ClassNotFoundException e) {
            // Este é o bloco que estava faltando!
            throw new RuntimeException("Driver do Banco não encontrado (Erro de biblioteca): " + e.getMessage());
        } catch (SQLException e) {
            // Este é o bloco para erro de senha ou banco desligado
            throw new RuntimeException("Erro ao conectar no banco: " + e.getMessage());
        }
    }
}