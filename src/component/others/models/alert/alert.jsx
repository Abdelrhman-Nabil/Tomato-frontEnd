import { useNavigate } from 'react-router-dom';
import Button from '../../button/button';
import './alert.css'
const  AlartModal=({data,onClick,nav})=>{
  const navigate=useNavigate()

  const navHnadler=()=>{
    navigate(`${nav}`)
  }
  return(
    <div className="modal">
      <header className='modal1-header'>
        <h2>Needed to alert you About </h2>
        </header>
        <form>
        <div className={'modal1-content'}>
         <h2> {data}</h2>
        </div>
        <footer className={'modal1-footer'}>
          <Button   onClick={onClick}>close</Button>
          <Button  onClick={navHnadler}>Go to Log in</Button>
        </footer>
      </form>
    </div>
  )
}
export default AlartModal