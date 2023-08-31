import trollface from "../images/trollface.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollface}></img>
      <h1>Meme Generator</h1>
      <h3>React Project</h3>
    </header>
  );
}
