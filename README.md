Atividade de controles lógicos
Alunos: William Cardoso, José Reche e João Vitor

O que é isso?

	A injeção de SQL é uma técnica de ataque que permite que um invasor execute comandos SQL maliciosos em um banco de dados, potencialmente acessando, modificando ou excluindo dados.

Como se proteger:

Use instruções preparadas: Use consultas preparadas com parâmetros, que separam a lógica SQL dos dados.

Validação de entrada: Valide e higienize todos os dados inseridos pelo usuário. Use listas de permissões sempre que possível. Privilégios de banco de dados: limite as permissões de usuário do banco de dados. O aplicativo deve usar contas com as permissões mínimas exigidas.

Erros verificados: Não mostra mensagens de erro detalhadas ao usuário porque podem fornecer informações úteis ao invasor.

Web Application Firewall (WAF): Use um WAF para filtrar e monitorar o tráfego HTTP, bloqueando tentativas de injeção de SQL.

2. Script na página (XSS)

O que é isso?

	XSS é um ataque que permite a um invasor injetar scripts maliciosos em páginas da web visualizadas por outros usuários.

Como se proteger:

Escapes: Sempre faça escape dos dados exibidos em páginas HTML, usando as funções de escape apropriadas para HTML, JavaScript, CSS e URLs.

Política de segurança de conteúdo (CSP): aplique uma política de segurança de conteúdo para restringir os scripts que podem ser executados em seu aplicativo.

Validação de entrada: valide e higienize todos os dados de entrada. Remova ou codifique caracteres especiais. Cookies HTTPOnly e Seguros: Use cookies HTTPOnly e Seguros para proteger as sessões de cookies contra acesso por scripts maliciosos.


3. Falsificação de solicitação entre sites (CSRF)

O que é isso?

	CSRF é um ataque que força um usuário autenticado a executar uma ação indesejada em um aplicativo da web no qual está autenticado. 

Como se proteger:

Tokens CSRF: aplique tokens CSRF a formulários e chamadas AJAX. O token deve ser exclusivo para cada sessão e verificado no servidor.

Métodos HTTP seguros: Use métodos HTTP seguros (POST, PUT, DELETE) para operações que alteram o estado do servidor.

Cabeçalho do referenciador: verifique o cabeçalho do referenciador para garantir que a solicitação vem de um domínio autorizado.
# TodoList