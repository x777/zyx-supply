import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NumberFormat from "react-number-format";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SupplyCard({ supply, title }) {
  return (
    <Card sx={{ minWidth: 500 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={supply}
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {cirkSupply}
        </Typography> */}
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
