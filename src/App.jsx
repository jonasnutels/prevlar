import './App.css';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            Ouro Preto - Construção
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Serviços
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Ouro Preto - Construção</h1>
            <p>
              A Ouro Preto Construção é uma empresa especializada em serviços de
              construção civil, reconhecida por sua excelência em projetos
              residenciais, comerciais e industriais. Com uma equipe altamente
              qualificada e comprometida com a qualidade, a empresa se destaca
              pela inovação, responsabilidade e pelo rigoroso cumprimento de
              prazos. Atuando desde a concepção até a entrega final das obras, a
              Ouro Preto Construção oferece soluções completas, garantindo
              eficiência e segurança em cada etapa do processo. Nossa missão é
              transformar projetos em realidade, sempre com o foco em satisfazer
              as necessidades e expectativas de nossos clientes.
            </p>
            <a className="btn btn-primary" href="#!">
              Ler Mais
            </a>
          </div>
        </div>
        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">
              Ouro Presto - Construção: Seja bem vindo!
            </p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Missão</h2>
                <p className="card-text">
                  Facilitar a vida em condomínios, promovendo uma gestão
                  eficiente e transparente, que contribua para a harmonia,
                  segurança e valorização do patrimônio dos nossos clientes em
                  Maceió, Alagoas. Buscamos constantemente a excelência no
                  atendimento, a inovação tecnológica e a sustentabilidade,
                  visando sempre superar as expectativas e promover a satisfação
                  dos condôminos.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  Ler Mais
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Visão</h2>
                <p className="card-text">
                  Ser reconhecida como a principal referência em materiais de
                  construção s em Maceió, Alagoas, destacando-nos pela qualidade
                  dos serviços oferecidos, pela integridade nas relações com
                  clientes e colaboradores, e pela implementação de soluções
                  inovadoras. Buscamos expandir nossa presença de forma
                  sustentável, mantendo o compromisso com a ética, a
                  transparência e a excelência em todos os aspectos da nossa
                  atuação.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  Ler Mais
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Valores</h2>
                <p className="card-text">
                  <ul>
                    <li>Compromisso Ético</li>
                    <li>Excelência no Atendimento</li>
                    <li>Inovação e Tecnologia</li>
                    <li>Respeito e Colaboração</li>
                    <li>Sustentabilidade</li>
                    <li>Foco no Cliente</li>
                  </ul>
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  Ler Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Ouro Preto Construção. Todos os direitos
            reservados. 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
