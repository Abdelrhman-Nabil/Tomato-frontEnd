import { Fragment } from "react";
import { useHttpClinet } from "../../../../utils/hooks/httpHook";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import ErrorModel from "../../../../component/others/models/error/errorModel";
import LoadingSpinner from "../../../../component/others/loadingSpinner/loadingSpinner";
import Button from "../../../../component/others/button/button";
import "./deleteAddmin.css";

  const DeleteAddminEmail = ({ onClick, id }) => {
    const { error, clearError, isLoading, sendRequest } = useHttpClinet();
    const deleteHandler = async () => {
      try {
        await sendRequest(
          `http://localhost:5000/api/admins/${id}`,
          "DELETE",
          null
        );
      } catch (error) {}
    };
    return (
      <Fragment>
        {error && <BackDrop />}
        {error && <ErrorModel data={error} onClick={clearError} />}

        <div className="deleteEmailModal">
          {isLoading && <LoadingSpinner asOverlay />}
          <header className="deleteEmailModal-header">
            <h2>Are you sure ?</h2>
          </header>
          <form>
            <div className="deleteEmailModal-content">
              <p>
                Do you want to process and delete this Email ? Please note that
                it can't be undone thereafter
              </p>
            </div>
            <footer className="deleteEmailModal-footer">
              <Button inverse onClick={onClick}>
                close
              </Button>
              <Button inverse onClick={deleteHandler}>
                Delete
              </Button>
            </footer>
          </form>
        </div>
      </Fragment>
    );
  };
export default DeleteAddminEmail;
