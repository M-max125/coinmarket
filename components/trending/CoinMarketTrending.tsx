import React from "react";
import Fire from "../../assets/fire.png";
import btc from "../../assets/btc.png";
import usdt from "../../assets/usdt.png";
import gainers from "../../assets/gainers.png";
import recent from "../../assets/recent.png";
import { styled } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Grid,
  Typography,
  SwitchProps,
} from "@mui/material";
import CryptoRate from "../cmc-table/CryptoRate";
import { StaticImageData } from "next/image";
import TrendingCard from "./TrendingCard";

export type TrendingDataProps = {
  number: number,
  symbol: string,
  name: string,
  icon: StaticImageData,
  isIncrement: boolean,
  rate: string,
}

const trendingData: TrendingDataProps[] = [
  {
      number: 1,
      symbol: "BTC",
      name: "Bitcoin",
      icon: btc,
      isIncrement: true,
      rate: "2.34%"
  }, {
      number: 2,
      symbol: "USDT",
      name: "Tether",
      icon: usdt,
      isIncrement: false,
      rate: "9.32%"
  }, {
      number: 3,
      symbol: "BTC",
      name: "Bitcoin",
      icon: btc,
      isIncrement: true,
      rate: "2.34%"
  },
]


/**
 * IOSSwitch
 */
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CoinMarketTrending = () => {
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <div className="px-7">
      {/**TITLE AND SWITCH */}
      <div className="mt-4">
        <Grid
          container
          direction="row"
          justifyContent={isMobile ? "flex-end" : "space-between"}
          alignItems="center"
        >
          <Typography
            variant="h5"
            sx={{ fontSize: isMobile ? "1rem" : "1.3rem" }}
          >
            Today's Cryptocurrency Prices by Market Cap
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Highlights"
            />
          </FormGroup>
        </Grid>
      </div>
      {/**END TITLE AND SWITCH */}

      {/**CRYPTO RATE LINE */}
      <div className="flex flex-wrap items-baseline mt-6">
        <Typography
          variant="h6"
          sx={{ fontSize: isMobile ? "1rem" : "1.2rem", marginRight: ".5rem" }}
          className="text-gray-400"
        >
          The global crypto marker cap is $1.56T ,a
        </Typography>
        <CryptoRate isIncrement={true} rate="0.58%" />
        <p>
          &nbsp; decrease over the last day.
          <span className="underline">Read more</span>
        </p>
      </div>
      {/** END CRYPTO RATE LINE */}
      {/** TRENDING CARDS */}
      <div className="flex mt-7 flex-col md:flex-row">
        <TrendingCard title="Trending" trendingData={trendingData} icon={Fire }/>
        <TrendingCard title="Biggest Gainers" trendingData={trendingData} icon={gainers}/>
        <TrendingCard title="Recently added" trendingData={trendingData} icon={recent}/>
      </div>
      {/** END TRENDING CARDS */}
    </div>
  );
};

export default CoinMarketTrending;
