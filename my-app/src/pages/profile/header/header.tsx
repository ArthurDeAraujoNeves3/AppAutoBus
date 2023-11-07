export default function Header() {
  return (
    <header>
      <button id="SetaVoltar">
        <img src={require("../assets/icons/seta.png")} />
      </button>
      <div id="parentePic">
        <img src={require("../assets/img/profile/Pfp.png")} id="ProfilePic" />
      </div>
      <h1>Arthur de Araujo Neves</h1>
    </header>
  );
}
