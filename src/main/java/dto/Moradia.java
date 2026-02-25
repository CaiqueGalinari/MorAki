package dto;

public class Moradia {
    private int idMoradia;
    private String endereco;
    private int totInquilino;
    private int maxInquilino;
    private String tipo;
    private String nomeDono;
    private String telefoneDono;
    private int tempoAluguel;
    private double valor;
    private String descricao;
    private int idQuemCadastrou;

    public Moradia() {}

    public int getIdMoradia() { return idMoradia; }
    public void setIdMoradia(int idMoradia) { this.idMoradia = idMoradia; }

    public String getEndereco() { return endereco; }
    public void setEndereco(String endereco) { this.endereco = endereco; }

    public int getTotInquilino() { return totInquilino; }
    public void setTotInquilino(int totInquilino) { this.totInquilino = totInquilino; }

    public int getMaxInquilino() { return maxInquilino; }
    public void setMaxInquilino(int maxInquilino) { this.maxInquilino = maxInquilino; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public String getNomeDono() { return nomeDono; }
    public void setNomeDono(String nomeDono) { this.nomeDono = nomeDono; }

    public String getTelefoneDono() { return telefoneDono; }
    public void setTelefoneDono(String telefoneDono) { this.telefoneDono = telefoneDono; }

    public int getTempoAluguel() { return tempoAluguel; }
    public void setTempoAluguel(int tempoAluguel) { this.tempoAluguel = tempoAluguel; }

    public double getValor() { return valor; }
    public void setValor(double valor) { this.valor = valor; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public int getIdQuemCadastrou() { return idQuemCadastrou; }
    public void setIdQuemCadastrou(int idQuemCadastrou) { this.idQuemCadastrou = idQuemCadastrou; }
}