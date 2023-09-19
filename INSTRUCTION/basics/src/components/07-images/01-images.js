import elephant from "../../assets//img/elephant.jpg"

const Image = ({style}) => {
  return (
    <div>
        {/* Static Goruntu */}
        <img style={style} src="./img/image1.jpg" alt="northern light" />

        {/* Harici Goruntu */}
        <img style={style} src="https://picsum.photos/700/500?grayscale" alt="" />

        {/* Import Goruntu */}
        <img style={style} src={elephant} alt=""/>

        {/* Require Goruntu */}
        <img style={style} src={require("../../assets//img/elephant.jpg")} alt="" />
        </div>
  )
}

export default Image