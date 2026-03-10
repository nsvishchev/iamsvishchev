import './App.css';

function App() {
  return (
    <div className="page city">
      <div className="page-shell">
        <header className="topbar">
          <div className="brand">NS</div>
          <nav className="nav">
            <a href="#profile">Профиль</a>
            <a href="#experience">Опыт</a>
            <a href="#skills">Навыки</a>
            <a href="#education">Образование</a>
            <a href="#contact">Контакты</a>
          </nav>
          <div className="top-actions">
            <a className="pill" href="mailto:n.svishchev2@gmail.com">
              Email
            </a>
            <a className="pill outline" href="tel:+79042632382">
              Позвонить
            </a>
          </div>
        </header>

        <section className="hero-grid" id="profile">
          <div className="hero-copy">
            <div className="hero-kicker">Java Backend Developer</div>
            <h1 className="hero-title">
              СВИЩЕВ НИКИТА
              <span>СЕРГЕЕВИЧ</span>
            </h1>
            <p className="hero-subtitle">
              Java backend‑разработчик с фокусом на интеграции, REST API и
              надежную обработку данных. 1 год коммерческого опыта: довожу
              сервисы от анализа и проектирования до релиза, тестирования и
              стабильной эксплуатации.
            </p>
            <div className="hero-actions">
              <a className="pill wide" href="mailto:n.svishchev2@gmail.com">
                n.svishchev2@gmail.com
              </a>
              <a className="pill outline wide" href="tel:+79042632382">
                +7 (904) 263-23-82
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <span>Локация</span>
                Москва
              </div>
              <div>
                <span>Связь</span>
                Предпочитаю телефон
              </div>
              <div>
                <span>Формат</span>
                Удаленно, гибрид, офис
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">1 год</div>
              <div className="stat-label">Коммерческий опыт</div>
            </div>
            <div className="stat">
              <div className="stat-value">Java + 1С</div>
              <div className="stat-label">Интеграции</div>
            </div>
            <div className="stat">
              <div className="stat-value">2 проекта</div>
              <div className="stat-label">Smart Monitor + FinTech</div>
            </div>
          </div>
        </section>

        <section className="summary-strip">
          <div className="strip-card">
            <div className="strip-label">Проект 01</div>
            <div className="strip-title">FinTech интеграция</div>
            <p>
              Модуль, который отправляет данные из 1С в SberAPI: надежный
              обмен и контроль бизнес‑событий.
            </p>
          </div>
          <div className="strip-card">
            <div className="strip-label">Проект 02</div>
            <div className="strip-title">Smart Monitor</div>
            <p>
              Мониторинг кластера 1С Предприятия через RAS: сбор метрик и
              состояние узлов.
            </p>
          </div>
          <div className="strip-card">
            <div className="strip-label">Подход</div>
            <div className="strip-title">API + Тесты + Релиз</div>
            <p>
              Проектирование REST API, покрытие тестами, подготовка к
              развертыванию и сопровождение.
            </p>
          </div>
        </section>

        <section className="statement">
          <h2>
            Современный backend для мониторинга 1С и FinTech‑интеграций с
            SberAPI.
          </h2>
        </section>

        <section className="feature-grid" id="experience">
          <div className="feature-list">
            <div className="feature-card">
              <div>
                <h3>FinTech: 1С → SberAPI</h3>
                <p>
                  Разработка модуля, который отправляет данные из 1С в SberAPI
                  для автоматизации финансовых операций.
                </p>
              </div>
              <span className="feature-link">↗</span>
            </div>
            <div className="feature-card">
              <div>
                <h3>Monitoring Module</h3>
                <p>
                  Разработал модуль мониторинга кластера серверов 1С
                  Предприятия для партнера Smart Monitor.
                </p>
              </div>
              <span className="feature-link">↗</span>
            </div>
            <div className="feature-card">
              <div>
                <h3>REST API</h3>
                <p>
                  Спроектировал и реализовал API, подготовил интеграционные
                  контракты и документацию.
                </p>
              </div>
              <span className="feature-link">↗</span>
            </div>
            <div className="feature-card dark">
              <div>
                <h3>Tests & Deploy</h3>
                <p>
                  Настроил покрытие тестами и подготовил сервис к развертыванию
                  в контуре продукта.
                </p>
              </div>
              <span className="feature-link">↗</span>
            </div>
            <div className="feature-card">
              <div>
                <h3>RAS Integration</h3>
                <p>
                  Интегрировался с 1С через Java‑библиотеку для RAS и организовал
                  сбор эксплуатационных метрик.
                </p>
              </div>
              <span className="feature-link">↗</span>
            </div>
          </div>
          <div className="insight-panel">
            <div className="insight-title">Роль и вклад</div>
            <h3>Java backend‑разработка с упором на интеграции</h3>
            <ul>
              <li>Проектирование REST API и контрактов обмена</li>
              <li>Интеграции 1С с внешними системами через Java‑библиотеки</li>
              <li>Тестирование, релизы и эксплуатационная стабильность</li>
              <li>Документация и сопровождение в продукте</li>
            </ul>
            <div className="insight-note">
              Фокус: предсказуемые интеграции, понятные интерфейсы и контроль
              качества данных.
            </div>
          </div>
        </section>

        <section className="info-grid" id="skills">
          <div className="info-panel">
            <h3>Ключевые навыки</h3>
            <div className="chip-grid">
              <span>Java</span>
              <span>Spring Framework</span>
              <span>REST API</span>
              <span>SQL</span>
              <span>Git</span>
              <span>Linux</span>
              <span>Atlassian Jira</span>
            </div>
            <div className="lang-row">
              <div className="lang">
                <div className="lang-title">Русский</div>
                <div className="lang-level">Родной</div>
              </div>
              <div className="lang">
                <div className="lang-title">Английский</div>
                <div className="lang-level">A2 — элементарный</div>
              </div>
            </div>
          </div>
          <div className="info-panel" id="education">
            <h3>Образование</h3>
            <div className="edu-card">
              <div className="edu-year">2026</div>
              <div>
                <div className="edu-title">МГКЭИТ</div>
                <div className="edu-sub">
                  Информационные технологии, Информационные системы и
                  технологии
                </div>
              </div>
            </div>
            <div className="experience-note">
              <h4>Формат работы</h4>
              <p>
                Полная занятость, стажировка. Удаленно, гибрид, офис. Переезд не
                рассматриваю, редкие командировки возможны.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer-light" id="contact">
          <div>
            <div className="footer-title">Открыт к предложениям</div>
            <div className="footer-sub">
              Интересны backend‑задачи с интеграциями, мониторингом и
              эксплуатационной надежностью.
            </div>
          </div>
          <div className="footer-actions">
            <a className="pill wide" href="mailto:n.svishchev2@gmail.com">
              Написать на почту
            </a>
            <a className="pill outline wide" href="tel:+79042632382">
              Позвонить
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
