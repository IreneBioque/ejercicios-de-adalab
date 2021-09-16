import '../styles/App.scss';
import cover from '../images/cover.jpg';
import arrow from '../images/ico-arrow.svg';
import menu from '../images/ico-menu.svg';
import scroll from '../images/ico-scroll-down.svg';

function App() {
  return (
    <div>
      <header className="header">
        <a href="https://adalab.es/" title="Home-Adalab" target="_blank" rel="noreferrer">
          <img src={menu} alt="menu" /></a>
      </header>

      <main>
        <section id="hero" className="hero" style={{ backgroundImage: `url(${cover})`}}>
          <h1 className="hero__title">Anonymous proxy</h1>
          <p className="hero__paragraph">In hac habitasse platea dictumst.</p>
          <div className="hero__image"><a href="#section-2" title="Ir a sección"><img src={scroll} alt="arrow-down"/></a></div>
      </section>

      <section>
        <article classNameName="article">
          <h2 className="article__title">Insomnia tips</h2>
          <h3 className="article__subtitle">Looking through a window</h3>
          <p className="article__paragraph">
            Donec accusmsan, nulla ut volutpat porttitor, quam odio tempus felis, at
            luctus ex diam nec lectus. Vivamus semper soldales rutrum.
          </p>
          <button className="article__button">Go</button>
        </article>
      </section>

      <section id="section-2" className="section-2">
        <h2 className="section-2__title">3 reasons to purchase</h2>
        <article className="section-2__article">
          <h3 className="section-2__article--title">Ut sed metus</h3>
          <p className="section-2__article--paragraph">
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        </article>
        <article className="section-2__article">
          <h3 className="section-2__article--title">Curabitur ac erat</h3>
          <p className="section-2__article--paragraph">
            Mauris mattis urna quis lorem molestie.
          </p>
        </article>
        <article className="section-2__article">
          <h3 className="section-2__article--title">Morbi dictum</h3>
          <p className="section-2__article--paragraph">
            Aliquam in dolor et dolor tincidunt.
          </p>
        </article>
        <button className="section-2__button">More reasons</button>
      </section>

    </main><footer className="footer">
        <div className="footer__container">
          <div className="footer__container--image">
            <a href="#hero" title="Ir al principio"
            ><img src={arrow} alt="arrow-up" /></a>
          </div>
        </div>
        <nav>
          <ul className="footer__list">
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Articles</a>
            </li>
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Books</a>
            </li>
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Events</a>
            </li>
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Reasons</a>
            </li>
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Tips</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="footer__list">
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Twitter</a>
            </li>
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Instagram</a>
            </li>
            <li className="footer__list--link">
              <a
                className="footer__list--link"
                title="Ir a Adalab"
                href="https://adalab.es/"
                target="_blank" rel="noreferrer"
              >Mastodon.social</a>
            </li>
          </ul>
        </nav>
        <div className="footer__paragraph">
          <p>&copy;2021</p>
          <p>we <i className="fas fa-heart"></i> components</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
