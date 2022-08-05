import './Cards.css';
export default function Cards({ value, title, changeValue, mainText, subtext, logo }) {
  let style = value === title ? 'card-selected' : 'card-not-selected';

  let onClick = () => {
    console.log(title, value);
    changeValue(title);
  };
  return (
    <div className={`${style}`} onClick={() => onClick()}>
      <img src={logo} alt={title} height={60} className="logo"></img>
      <h3 className="card-title">{mainText}</h3>
      <p className="card-text">{subtext}</p>
    </div>
  );
}
