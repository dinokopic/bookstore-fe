/*
 *
 * ChartsPage
 *
 */

import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer, useInjectSaga } from "redux-injectors";

import makeSelectChartsPage, {
  makeSelectChartsPageBestSellingBooksData,
  makeSelectChartsPageBestSellingGenreData,
  makeSelectChartsPagePriceData,
  makeSelectChartsPageProfitData,
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  getBestSellingBooksData,
  getBestSellingGenresData,
  getPriceData,
  getProfitData,
} from "./actions";
import { setSelectedPage } from "containers/App/actions";
import { Page } from "containers/App/reducer";
import "./customCss.css";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Register modules,
// this example for time scale and linear scale
const stateSelector = createStructuredSelector({
  chartsPage: makeSelectChartsPage(),
  priceData: makeSelectChartsPagePriceData(),
  profitData: makeSelectChartsPageProfitData(),
  bestSellingGenreData: makeSelectChartsPageBestSellingGenreData(),
  bestSellingBooksData: makeSelectChartsPageBestSellingBooksData(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ChartsPage(props: Props) {
  useInjectReducer({ key: "chartsPage", reducer: reducer });
  useInjectSaga({ key: "chartsPage", saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    chartsPage,
    priceData,
    profitData,
    bestSellingGenreData,
    bestSellingBooksData,
  } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    dispatch(getPriceData());
    dispatch(getProfitData());
    dispatch(getBestSellingGenresData());
    dispatch(getBestSellingBooksData());
    dispatch(setSelectedPage(Page.charts));
  }, []);

  const backgroundColors = [
    "#ef5350",
    "#ec407a",
    "#ab47bc",
    "#7e57c2",
    "#5c6bc0",
    "#42a5f5",
    "#29b6f6",
    "#26c6da",
    "#26a69a",
    "#66bb6a",
  ];

  const createOptionsWithTitle = (title: string) => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          font: {
            size: 28,
          },
          text: title,
        },
        scales: {
          xAxes: [
            {
              display: false,
              ticks: {
                min: 0,
              },
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    };
  };

  const generateBarAtIndex = (index: number, value: number, length: number) => {
    const data = new Array(length).fill(null);
    data[index] = value;
    return data;
  };

  return (
    <div className="chartsPageHolder">
      <div className="popularityChartsHolder">
        <Bar
          className="bestSellingBooksChart"
          options={{
            ...createOptionsWithTitle("Top 10 best selling books"),
            indexAxis: "y" as const,
          }}
          data={{
            labels: bestSellingBooksData.map(({ title }) => title),
            datasets: bestSellingBooksData.map(({ title, sold }, index) => ({
              backgroundColor: backgroundColors[index],
              skipNull: true,
              data: generateBarAtIndex(
                index,
                sold,
                bestSellingBooksData.length
              ),
              label: title,
            })),
          }}
        />
        <Doughnut
          className="bestSellingGenresChart"
          options={createOptionsWithTitle("Top 10 best selling genres")}
          data={{
            labels: bestSellingGenreData.map(({ key }) => key),
            datasets: [
              {
                backgroundColor: backgroundColors,
                data: bestSellingGenreData.map(
                  ({ soldByGenre }) => soldByGenre.value
                ),
              },
            ],
          }}
        />
      </div>
      <br />
      <br />
      <div className="profitChartsHolder">
        <Pie
          className="booksByPriceChart"
          options={createOptionsWithTitle("Books by price")}
          data={{
            labels: priceData.map(({ key }) => key),
            datasets: [
              {
                label: "Number of books",
                data: priceData.map(({ doc_count }) => doc_count),
                backgroundColor: backgroundColors,
              },
            ],
          }}
        />
        <Bar
          className="mostProfitableBooksChart"
          options={createOptionsWithTitle("Top 10 most profitable books")}
          data={{
            labels: profitData.map(({ title }) => title),
            datasets: profitData.map(({ title, profit }, index) => ({
              backgroundColor: backgroundColors[index],
              skipNull: true,
              data: generateBarAtIndex(
                index,
                profit,
                bestSellingBooksData.length
              ),
              label: title,
            })),
          }}
        />
      </div>
    </div>
  );
}

export default ChartsPage;
