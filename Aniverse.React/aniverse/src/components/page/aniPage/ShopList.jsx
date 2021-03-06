import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../../redux/actions/productAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineBook, AiFillBook } from 'react-icons/ai';
import ShopSave from './ShopSave';

function ShopList(props) {
 const { getShop } = props;
 const { id } = props.page.data;

 useEffect(() => {
  if (id) {
   getShop(1, 10, id);
  }
 }, []);
 return (
  <div className="shop-list row">
   {props.products.data.map((product, index) => (
    <div className="col-6 col-md-3 shop-col" key={product.id}>
     <a href={product.url} className="shop-card">
      <div className="shop-card-img">
       <Swiper slidesPerView={1}>
        {product.pictures.map((picture) => (
         <SwiperSlide key={picture.id}>
          <div className="shop-img">
           <img alt={product.name} src={picture.imageName} />
          </div>
         </SwiperSlide>
        ))}
       </Swiper>
      </div>
      <div className="shop-card-footer">
       <h3>{product.name}</h3>
       <h4>${product.price}</h4>
      </div>
     </a>
     <ShopSave product={product} />
    </div>
   ))}

   <div></div>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  products: state.productsReducer,
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getShop: (page, size, id) => {
   dispatch(getProducts(page, size, id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
