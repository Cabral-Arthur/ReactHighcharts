import React from "react";

import Header from "./Components/Header/Header";
import AreaChart from "./Components/Charts/AreaChart/AreaChart";
import WaterfallChart from "./Components/Charts/WaterfallChart/WaterfallChart";
import StockChart from "./Components/Charts/StockChart/StockChart";
import ColumnChart from "./Components/Charts/ColumnChart/ColumnChart";
import PieChart from "./Components/Charts/PieChart/PieChart";


import { GlobalStyle } from './Styles/GlobalStyle'

export default function App() {

  return (
    <>

      <GlobalStyle />
      <Header />
      <div className='lineDiv'>
        <AreaChart />
        <StockChart />
        <ColumnChart />
        <WaterfallChart />
      </div>
      <div className='lineDiv'>
        <PieChart />
      </div>
    </>
  );
}
