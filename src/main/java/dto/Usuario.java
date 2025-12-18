package dto;

public class Usuario {
    //Colunas da tabela
    private String nome;
    private int idUsuario;
    private String descricao;
    private String email;
    private String senha;
    private String securityKey;

    // Construtor vazio
    public Usuario() {}

    // Getters e Setters
    public String getNome(){ return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public int getIdUsuario() { return idUsuario; }
    public void setIdUsuario(int idUsuario) { this.idUsuario = idUsuario; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public String getSecurityKey() { return securityKey; }
    public void setSecurityKey(String securityKey) { this.securityKey = securityKey; }
}