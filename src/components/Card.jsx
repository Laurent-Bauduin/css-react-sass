import "../style.scss";

function Card() {
  return (
    <div className="container">
      <section>
        <h1 className="saiyan">Dragon Ball Z</h1>
        <h2 className="saiyan">The eternal challenger</h2>
        <figure>
          <img src="https://pm1.narvii.com/6323/784e60653675770a538ca8ca2a1ad1d5e5eb5541_hq.jpg" />
          <figcaption className="saiyan">Vegeta</figcaption>
        </figure>
      </section>
      <p>
        Membre aristocratique de la race extra-terrestre des saiyens, il est le
        fils du roi de ce peuple.
      </p>
      <p>Il porte le nom de la planète d'origine des saiyens : Vegeta.</p>
      <p>
        D'abord ennemi mortel de la Terre, dont il veut éliminer toute forme de
        vie afin de pouvoir la vendre "prête à coloniser" au plus offrant, il
        sera vaincu puis épargné par Sangoku, lui-même membre des saiyens, mais
        élevé sur Terre.
      </p>
      <p>
        Ce fait marque le début de la rivalité légendaire entre les deux
        guerriers, ainsi qu'une évolution de la personnalité de Vegeta, qui
        abandonnera peu à peu sa facette cruelle et sa volonté de domination
        impériale.
      </p>
    </div>
  );
}

export default Card;
