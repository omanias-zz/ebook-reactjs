import { Figure } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-home">
      <Figure>
        <Figure.Image
          width={700}
          height={180}
          alt="171x180"
          src="https://www.educaciontrespuntocero.com/wp-content/uploads/2021/03/libros-sobre-el-placer-de-leer.jpg"
        />
        <Figure.Caption>
          Acostumbra a tu hijo a LEER. Un niño que lee, será un adulto que
          PIENSA.
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default Home;
