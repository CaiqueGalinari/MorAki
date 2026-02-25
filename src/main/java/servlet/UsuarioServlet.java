package servlet;

import dao.UsuarioDAO;
import dto.Usuario;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/usuarios")
public class UsuarioServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String nome = req.getParameter("nome");
        String email = req.getParameter("email");
        String senha = req.getParameter("senha");
        String descricao = "Escreva aqui sua descrição!";

        Usuario u = new Usuario();
        u.setNome(nome);
        u.setEmail(email);
        u.setSenha(senha);
        u.setDescricao(descricao);
        u.setSecurityKey(java.util.UUID.randomUUID().toString().substring(0, 8));

        UsuarioDAO dao = new UsuarioDAO();
        try {
            dao.cadastrar(u);
            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"ok\",\"mensagem\":\"Usuário cadastrado com sucesso\"}");
        } catch (Exception e) {
            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"erro\",\"mensagem\":\"" + e.getMessage() + "\"}");
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            int idUsuario = Integer.parseInt(req.getParameter("idUsuario"));
            UsuarioDAO dao = new UsuarioDAO();
            Usuario u = dao.buscarPorId(idUsuario);

            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");

            if (u != null) {
                String json = "{\"idUsuario\":" + u.getIdUsuario() + ",\"nome\":\"" + u.getNome() + "\",\"email\":\"" + u.getEmail() + "\",\"descricao\":\"" + u.getDescricao() + "\"}";
                resp.getWriter().write(json);
            } else {
                resp.setStatus(404);
                resp.getWriter().write("{\"erro\":\"Usuário não encontrado\"}");
            }
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

            Usuario u = new Usuario();
            u.setIdUsuario(Integer.parseInt(map.get("idUsuario")));
            u.setNome(map.get("nome"));
            u.setEmail(map.get("email"));
            u.setSenha(map.get("senha"));
            u.setDescricao(map.get("descricao"));

            UsuarioDAO dao = new UsuarioDAO();
            dao.atualizar(u);

            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"ok\",\"mensagem\":\"Perfil atualizado com sucesso!\"}");

        } catch (Exception e) {
            resp.setContentType("application/json");
            resp.getWriter().write("{\"status\":\"erro\",\"mensagem\":\"Erro ao atualizar usuário: " + e.getMessage() + "\"}");
        }
    }
}