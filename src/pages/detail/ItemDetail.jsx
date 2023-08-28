import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../redux/states/products/productsSlice";
import LayoutContainer from "../../components/layout/LayoutContainer";
import Item from "./components/item/Item";
import SlidersProducts from "../../components/sliders.products/SlidersProducts";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch]);

  return (
    <LayoutContainer>
      <Item id={id} products={products }/>
      <SlidersProducts
        title={"Quienes vieron este producto también compraron"}
      />
    </LayoutContainer>
  );
};

export default ItemDetail;
