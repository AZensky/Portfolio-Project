import { useEffect } from "react";

import { Box } from "@mui/material";
import Scrollbar from "../Scrollbar";
import { Tab } from "@mui/material";
import { Tabs, Button } from "@mui/material";
import useTabs from "../../hooks/useTabs";
import SliderView from "../Slider/Slider";
import { Business, Ecom } from "../../assets";

// import { TAB_OPTIONS } from './TabsOptions';

const SLIDER_OPTIONS = [
  {
    id: 0,
    title: "Ecommerce Website Wordpress",
    image: Ecom,
  },
  {
    id: 1,
    title: "Social Media App Mobile",
    image: Business,
  },
  {
    id: 2,
    title: "Business Website React Native",
    image: Business,
  },
  {
    id: 3,
    title: "Ecommerce Website Wordpress",
    image: Ecom,
  },
  {
    id: 4,
    title: "Social Media App Mobile",
    image: Business,
  },
  {
    id: 5,
    title: "Business Website React Native",
    image: Business,
  },
];

export const TAB_OPTIONS = [
  {
    id: 1,
    value: "All",
    component: <SliderView sliderOptions={SLIDER_OPTIONS} />,
  },
  {
    id: 2,

    value: "WordPress", // Renting
    component: <SliderView sliderOptions={SLIDER_OPTIONS} />,
  },
  {
    id: 3,
    value: "Web",
    component: <SliderView sliderOptions={SLIDER_OPTIONS} />,
  },
  {
    id: 4,
    value: "Mobile",
    component: <SliderView sliderOptions={SLIDER_OPTIONS} />,
  },
];

export default function PortfolioTabs() {
  const { currentTab, onChangeTab } = useTabs(TAB_OPTIONS[0].value);

  return (
    <Box>
      <Box sx={{ maxWidth: 560, mx: "auto" }}>
        <Tabs
          value={currentTab}
          onChange={onChangeTab}
          orientation="horizontal"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          aria-label="scrollable auto tabs example"
        >
          {TAB_OPTIONS.map((tab, idx) => (
            <Tab
              key={tab.value}
              label={tab.value}
              component={idx === 5 ? Link : Button}
              to={tab.linkUrl}
              value={tab.value}
              sx={{
                width: "auto",
                borderRadius: "18px",
                fontSize: { xs: 16, sm: 20 },
                mx: "auto",
                letterSpacing: "0.045em",
                textTransform: "none",
                wordBreak: "break-word",
                color: "#fff",
                "& .Mui-selected": {
                  color: (theme) => theme.palette.primary.main,
                  // color: "#fff",
                },
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          background: (theme) => theme.palette.primary.maxLight,
          borderRadius: "32px",
          py: 3,
          pb: 5,
        }}
      >
        <Box>
          {TAB_OPTIONS.map((tab) => {
            const isMatched = tab.value === currentTab;

            return (
              isMatched && (
                <Box
                  key={tab.value}
                  sx={{
                    px: { lg: 2 },
                    height: "auto",
                  }}
                >
                  {tab.component}
                </Box>
              )
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
