import logoImg from '../assets/logo.svg';
import './style.scss';

export function Home() {
  return (
    <div className="home">
      <header>
        <img src={logoImg} alt="logo" />
      </header>

      <main>
        <h2>
          Quem está assistindo?
        </h2>

        <div className="users">
          <div className="user">
            <div className="userImg"></div>

            <span className="userName">Bruno</span>
          </div>
        </div>
      </main>
    </div>
  )
}