package servlet;

import dao.MoradiaDAO;
import dto.Moradia;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/moradias")
public class MoradiaServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            String endereco = req.getParameter("endereco");
            String tipo = req.getParameter("tipo");
            int tempoAluguel = Integer.parseInt(req.getParameter("tempoAluguel"));
            double valor = Double.parseDouble(req.getParameter("valor"));
            String nomeDono = req.getParameter("nomeDono");
            String telefoneDono = req.getParameter("telefoneDono");
            int maxInquilino = Integer.parseInt(req.getParameter("maxInquilino"));
            String descricao = req.getParameter("descricao");

            int totInquilino = req.getParameter("totInquilino") != null ? Integer.parseInt(req.getParameter("totInquilino")) : 0;
            int idQuemCadastrou = req.getParameter("idQuemCadastrou") != null ? Integer.parseInt(req.getParameter("idQuemCadastrou")) : 1;

            Moradia m = new Moradia();
            m.setEndereco(endereco);
            m.setTipo(tipo);
            m.setTempoAluguel(tempoAluguel);
            m.setValor(valor);
            m.setNomeDono(nomeDono);
            m.setTelefoneDono(telefoneDono);
            m.setMaxInquilino(maxInquilino);
            m.setDescricao(descricao);
            m.setTotInquilino(totInquilino);
            m.setIdQuemCadastrou(idQuemCadastrou);

            MoradiaDAO dao = new MoradiaDAO();
            dao.cadastrar(m);

            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"ok\",\"mensagem\":\"Imóvel cadastrado com sucesso!\"}");
        } catch (Exception e) {
            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"erro\",\"mensagem\":\"Erro ao cadastrar imóvel: " + e.getMessage() + "\"}");
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            MoradiaDAO dao = new MoradiaDAO();

            String acao = req.getParameter("acao");
            String idMoradiaParam = req.getParameter("idMoradia");
            String idUsuarioParam = req.getParameter("idUsuario");

            if (idMoradiaParam != null) {
                int idMoradia = Integer.parseInt(idMoradiaParam);
                Moradia m = dao.buscarPorId(idMoradia);
                if (m != null) {
                    String json = "{\"idMoradia\":" + m.getIdMoradia() + ",\"tipo\":\"" + m.getTipo() + "\",\"valor\":" + m.getValor() + ",\"maxInquilino\":" + m.getMaxInquilino() + ",\"endereco\":\"" + m.getEndereco() + "\",\"descricao\":\"" + m.getDescricao() + "\",\"telefoneDono\":\"" + m.getTelefoneDono() + "\",\"nomeDono\":\"" + m.getNomeDono() + "\"}";
                    resp.getWriter().write(json);
                } else {
                    resp.setStatus(404);
                    resp.getWriter().write("{\"erro\": \"Imóvel não encontrado\"}");
                }
                return;
            }

            java.util.List<Moradia> lista;

            if ("buscar".equals(acao)) {
                String cidade = req.getParameter("cidade");
                String tipo = req.getParameter("tipo");
                String valorStr = req.getParameter("valorMax");
                String inqStr = req.getParameter("maxInquilinos");

                Double valorMax = (valorStr != null && !valorStr.isEmpty()) ? Double.parseDouble(valorStr) : 0.0;
                Integer maxInq = (inqStr != null && !inqStr.isEmpty()) ? Integer.parseInt(inqStr) : 0;

                lista = dao.buscarImoveis(cidade, tipo, valorMax, maxInq);
            }
            else if (idUsuarioParam != null) {
                int idUsuario = Integer.parseInt(idUsuarioParam);
                lista = dao.listarMeusImoveis(idUsuario);
            }
            else {
                resp.setStatus(400);
                resp.getWriter().write("{\"erro\": \"Parâmetros inválidos para busca.\"}");
                return;
            }

            StringBuilder json = new StringBuilder("[");
            for (int i = 0; i < lista.size(); i++) {
                Moradia m = lista.get(i);
                json.append("{")
                        .append("\"idMoradia\":").append(m.getIdMoradia()).append(",")
                        .append("\"tipo\":\"").append(m.getTipo()).append("\",")
                        .append("\"valor\":").append(m.getValor()).append(",")
                        .append("\"tempoAluguel\":").append(m.getTempoAluguel()).append(",")
                        .append("\"maxInquilino\":").append(m.getMaxInquilino()).append(",")
                        .append("\"telefoneDono\":\"").append(m.getTelefoneDono()).append("\",") // TELEFONE INSERIDO AQUI
                        .append("\"endereco\":\"").append(m.getEndereco())
                        .append("\"}");

                if (i < lista.size() - 1) json.append(",");
            }
            json.append("]");
            resp.getWriter().write(json.toString());

        } catch (Exception e) {
            resp.setStatus(500);
            resp.getWriter().write("{\"erro\": \"" + e.getMessage() + "\"}");
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            java.util.Scanner scanner = new java.util.Scanner(req.getInputStream(), "UTF-8");
            String params = scanner.useDelimiter("\\A").hasNext() ? scanner.next() : "";
            scanner.close();

            java.util.Map<String, String> map = new java.util.HashMap<>();
            for (String param : params.split("&")) {
                String[] pair = param.split("=");
                if (pair.length > 1) {
                    map.put(pair[0], java.net.URLDecoder.decode(pair[1], "UTF-8"));
                } else {
                    map.put(pair[0], "");
                }
            }

            Moradia m = new Moradia();
            m.setIdMoradia(Integer.parseInt(map.get("idMoradia")));
            m.setEndereco(map.get("endereco"));
            m.setValor(Double.parseDouble(map.get("valor")));
            m.setDescricao(map.get("descricao"));
            m.setMaxInquilino(Integer.parseInt(map.get("maxInquilino")));
            m.setTelefoneDono(map.get("telefoneDono"));
            m.setNomeDono(map.get("nomeDono"));

            int idUsuarioLogado = Integer.parseInt(map.get("idUsuarioLogado"));

            MoradiaDAO dao = new MoradiaDAO();
            dao.atualizar(m, idUsuarioLogado);

            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"ok\",\"mensagem\":\"Imóvel atualizado com sucesso!\"}");

        } catch (Exception e) {
            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"erro\",\"mensagem\":\"Erro ao atualizar imóvel: " + e.getMessage() + "\"}");
        }
    }
}