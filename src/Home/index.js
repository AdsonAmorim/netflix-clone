import logoImg from '../assets/logo.svg';
import userProfile1 from '../assets/userProfile-1.png';
import userProfile2 from '../assets/userProfile-2.png';
import userProfile3 from '../assets/userProfile-3.png';
import userProfile4 from '../assets/userProfile-4.png';
import userProfile5 from '../assets/userProfile-5.png';

import { UserCard } from '../components/UserCard';
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
          <UserCard image={userProfile1} name="Bruno"/>
          <UserCard image={userProfile2} name="Adson"/>
          <UserCard image={userProfile3} name="Gabriel"/>
          <UserCard image={userProfile4} name="Lindomar"/>
          <UserCard image={userProfile5} name="William"/>
        </div>

        <button className="button">
          Gerenciar perfis
        </button>
      </main>
    </div>
  )
}