import { Fragment, useContext } from "react"
import { useHttpClinet } from "../../../../utils/hooks/httpHook";
import { AuthContext } from "../../../../context/authContext";
import Button from "../../../../component/others/button/button";
import LoadingSpinner from "../../../../component/others/loadingSpinner/loadingSpinner";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import ErrorModal from "../../../../component/others/models/error/errorModel";
import './deleteProduct.css'
const DeleteProduct=({onClick,id})=>{
  const{token}=useContext(AuthContext)
  const { error,clearError,isLoading,sendRequest} = useHttpClinet();
  const deleteHandler=async()=>{
    try{
         await sendRequest(`http://localhost:5000/api/products/${id}`,'DELETE',null,{
          authorization:'Bearer '+ token
        })
    }
    catch(error){}
  }
    return (
        <Fragment>
          {error && <BackDrop />}
          {error && <ErrorModal data={error} onClick={clearError} />}   

        <div className="modal">
        {isLoading && <LoadingSpinner asOverlay />}
      <header className='modal-header'>
        <h2>Are you sure ?</h2>
        </header>
        <form>
        <div className='modal-content'>
        <p>Do you want to process and delete this product ? Please note that it can't be undone thereafter</p>
        </div>
        <footer className='modal-footer'>
          <Button inverse onClick={onClick}>close</Button>
          <Button inverse onClick={deleteHandler}>Delete</Button>
        </footer>
      </form>
    </div>
      </Fragment>
        )
}
export default DeleteProduct