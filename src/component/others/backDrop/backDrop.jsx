import './backDrop.scss'

const BackDrop=props=>{
return <div className='backdrop' onClick={props.onClick}></div>
}
export default BackDrop