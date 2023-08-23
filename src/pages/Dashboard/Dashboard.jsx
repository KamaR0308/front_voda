import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../redux/actions/locationAction";
import MyCard from "../../components/Card/Card";
import s from "./Dashboard.module.scss";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [isFinished, setIsFinished] = useState([]);
  useEffect(() => {
    dispatch(getLocation());
  }, []);

  const { locations, error, isLoading } = useSelector(
    (state) => state.locationSlice
  );

  console.log(locations);

  const handleStartClick = (index) => {
    const updatedFinished = [...isFinished];

    setTimeout(() => {
      updatedFinished[index] = true;
      setIsFinished(updatedFinished);
    }, 10000);

    setTimeout(() => {
      const updatedFinished = [...isFinished];
      updatedFinished[index] = false;
      setIsFinished(updatedFinished);
    }, 60000);
  };

  const renderCardsFromLocalStorage = () => {
    const localStorageRequests =
      JSON.parse(localStorage.getItem("requests")) || [];
    return localStorageRequests.map((request, index) => (
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography>
            Производство: {request.product} -> Цеx: {request.shop}
          </Typography>
          <Typography>
            Участок: {request.site} -> Этаж: {request.floor} ->
          </Typography>
          Сотрудник: {request.user} -> кол-во: {request.count}
        </CardContent>
        <CardActions>
          <Button
            onClick={() => handleStartClick(index)}
            disabled={isFinished[index]}
          >
            {isFinished[index] ? "Выполнено" : "Взять"}
          </Button>
        </CardActions>
      </Card>
    ));
  };

  return (
    <div className="container">
      <div className={s.wrap}>
        {isLoading && <h1> Идет загрузка</h1>}
        <div className={s.content_dashboard}>
          {locations &&
            locations.map((location) => {
              return <MyCard key={location.number} location={location} />;
            })}
        </div>
        {error && <h1> Ошибка </h1>}
        <hr
          style={{
            width: "5px",
            marginRight: "10px",
            marginLeft: "10px",
            backgroundColor: "green",
          }}
        />
        <div>
          <Typography variant="h6">Активные заявки</Typography>
          {renderCardsFromLocalStorage()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
