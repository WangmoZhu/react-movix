import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from "./utils/api";
import { useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Detail from "./pages/details/Detail";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";

function App() {

  const dispatch = useDispatch();
  // const {url} = useSelector(state => (state as any).home)

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then(res => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url));
      })
  }

  const genresCall = async () => {
    let promises: any[] = [];
    let endpoints = ['tv', 'movie'];
    let allGenres: any = {};

    endpoints.forEach(url => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    })

    const data = await Promise.all(promises);
    console.log(data)
    data.map(({genres}) => {
      return genres.map((item: any) => (allGenres[item.id] = item))
    })
    console.log(allGenres);

    dispatch(getGenres(allGenres));
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:mediaType/:id" element={<Detail />}/>
        <Route path="/search/:query" element={<SearchResult />}/>
        <Route path="/explore/:mediaType" element={<Explore />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
