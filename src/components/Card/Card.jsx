import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MyCard({ location }) {
  const navigate = useNavigate();

  // ...

  const handleMyCardClick = (uuid) => {
    // Перенаправление на страницу деталей с параметром uuid
    navigate(`/detail/${uuid}`);
  };

  return (
    <Card sx={{ minWidth: 180, marginBottom: "20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Производство :
        </Typography>
        <Typography variant="h6" component="div">
          Цеx: {location.data.product}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Участок: {location.data.shop}
        </Typography>
        <Typography variant="body2">
          этаж:
          {location.data.floor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleMyCardClick(location.uuid)} size="small">
          Заказать воду
        </Button>
      </CardActions>
    </Card>
  );
}
