import Logo from './logo-foot.png'

export default function Footer() {
  return (
    <footer>
        <img src={Logo} />
        <div className="foot-mid">
            <h6>Republic of Moldova</h6>
            <h6>district Dubăsari</h6>
            <h6>village Corjova</h6>
            <h6>str. Gheorghe Murgu 18</h6>
        </div>
        <div className="foot-right">
            <h5>+373369340232</h5>
            <h5>dorfruct.group@gmail.com</h5>
        </div>
    </footer>
  )
}
