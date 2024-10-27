import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClinet } from "../../../utils/hooks/httpHook";
import ProudctsListItem from "../../components/products/proudctsListItem/proudctsListItem";
import Button from "../../../component/others/button/button";
import "./products.css";
import BackDrop from "../../../component/others/backDrop/backDrop";
import ErrorModal from "../../../component/others/models/error/errorModel";
import LoadingSpinner from "../../../component/others/loadingSpinner/loadingSpinner";
const ProductsPage = () => {
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClinet();
  const [loadedProducts, setLoadedProducts] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseDataProduct = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+"/api/products/allProduct"
        );
        if (responseDataProduct) {
          setLoadedProducts(responseDataProduct.products);
        }
      } catch (err) {}
    };
    fetchProduct();
  }, [sendRequest]);
  console.log(loadedProducts);
  return (
    <Fragment>
    {error && <BackDrop />} 
    {error && <ErrorModal data={error} onClick={clearError} />}
      <div className="product-page">
      {isLoading &&<LoadingSpinner/>}

        <div className="product-page-header">
          <Button
            onClick={() => {
              navigate("/AdminPanel/addProduct");
            }}
          >
            Add New Product
          </Button>
        </div>
        <div>
          <div className="view-product">
            <div className="view-product-header">
              <h3>Product Name</h3>
            </div>
            <div className="ViewProduct">
              {loadedProducts &&
                loadedProducts.map((loadedProduct) => {
                  return <ProudctsListItem product={loadedProduct} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsPage;
