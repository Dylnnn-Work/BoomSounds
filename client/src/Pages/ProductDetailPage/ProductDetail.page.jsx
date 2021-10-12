import React from 'react';
import ProductDetail from './../../Components/ProductDetail/ProductDetail.component';
import ReviewsList from './../../Forms/Reviews/ReviewsList';
import AddReview from './../../Forms/Reviews/AddReview';
import ReviewAverage from "../../Components/ReviewAverage/reviewAverage"
import './ProductDetailPage.css';

const ProductDetailPage = ({ productId }) => {
  return (
    <>
      <div className="page-product-detail-container">
        <ProductDetail productId={productId} />
      </div>

      <div className="page-reviews-container">
        <p className="reviews-section-title">Opiniones del Producto</p>
        <AddReview productId={productId} />
      </div>
        <ReviewAverage productId={productId} />
        <div className="page-reviews-list">
        <ReviewsList productId={productId} />
        </div>
    </>
  );
};

export default ProductDetailPage;
