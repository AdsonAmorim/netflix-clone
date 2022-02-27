import './style.scss';

export function UserCard(props) {
  return (
    <div className="user">
      <img src={props.image} className="userImg" alt=""/>
      <span className="userName">{props.name}</span>
    </div>
  )
}