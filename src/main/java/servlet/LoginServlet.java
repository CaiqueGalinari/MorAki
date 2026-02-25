package servlet;

import dao.UsuarioDAO;
import dto.Usuario;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = req.getParameter("email");
        String senha = req.getParameter("senha");

        UsuarioDAO dao = new UsuarioDAO();
        Usuario u = dao.autenticar(email, senha);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        if (u != null) {
            resp.getWriter().write("{\"status\":\"ok\", \"mensagem\":\"Login efetuado!\", \"nome\":\"" + u.getNome() + "\", \"idUsuario\":" + u.getIdUsuario() + "}");
        } else {
            resp.getWriter().write("{\"status\":\"erro\", \"mensagem\":\"E-mail ou senha incorretos.\"}");
        }
    }
}