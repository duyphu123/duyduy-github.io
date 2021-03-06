import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import * as S from "../Home/home.style";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import SearchItemResult from "../../components/SearchItemResult/SearchItemResult";
import useQuery from '../../hooks/useQuery'
import { getCategories, getProducts } from "./home.slice";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({})
  const [filters, setFilters] = useState({})
  const query = useQuery()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then((res) => {
        setCategories(res.data);
      });
  }, [dispatch]);

  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 30,
      sortBy: query.sortBy || 'view'
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    const _getProducts = async () => {
      const data = await dispatch(getProducts({ params }));
      const res = unwrapResult(data);
      setProducts(res.data);
    };
    _getProducts();
  }, [query, dispatch]);

  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories}  filters={filters} />
        </S.Side>
        <S.Main>
          <SearchItemResult products={products} />
        </S.Main>
      </S.Container>
    </div>
  );
}
