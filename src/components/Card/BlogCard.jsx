import React from "react";
import {
  code,
  creative,
  productive,
  iPlusCover,
  jsPromisesCover,
  webSecurityCover,
} from "../../assets";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BLOG_CARDS = [
  {
    id: 0,
    title: "The Difference Between i++ and ++i in JavaScript",
    desc: "In JavaScript, you can increment a value using i++ or ++i. Both of these operators will increase the value of the variable by one, but they do it slightly differently. Developers often get confused...",
    image: iPlusCover,
    subTitle: "JavaScript",
    link: "https://medium.com/javascript-in-plain-english/the-difference-between-i-and-i-in-javascript-8ac109e84741",
    date: "4, Jul, 2022",
  },
  {
    id: 1,
    title: "JavaScript Promises: What They Are and How to Use Them",
    image: jsPromisesCover,
    desc: "Promises — a new feature that was added to JavaScript in 2015. They are designed to make asynchronous programming easier and more reliable. In this blog post...",
    subTitle: "JavaScript",
    link: "https://medium.com/javascript-in-plain-english/javascript-promises-what-they-are-and-how-to-use-them-fe5b55496271",
  },
  {
    id: 2,
    title: "Web Security: The Importance of Hashing and Salting Passwords",
    desc: "When it comes to web security, one of the most important aspects is protecting passwords. In this article, we will discuss the importance of hashing and salting passwords. We will also look at how...",
    image: webSecurityCover,
    subTitle: "Web Security",
    link: "https://medium.com/gitconnected/web-security-the-importance-of-hashing-and-salting-passwords-7582f36f9d0e",
  },
];

export default function BlogCard() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 6, lg: 3 },
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
      }}
    >
      {BLOG_CARDS.map((card, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              mx: "auto",
              maxWidth: 400,
              width: "100%",
              background: (theme) => theme.palette.primary.darker,
              boxShadow: "0px 6px 16px rgba(255, 255, 255, 0.04)",
              borderRadius: "20px",
              textAlign: "left",
            }}
          >
            <Box
              component="img"
              src={card.image}
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                height: "266px",
                objectFit: "cover",
              }}
            />

            <Box sx={{ p: 2.5 }}>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "& svg": {
                    fill: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                <AccessTimeIcon />
                <Typography
                  variant="h6"
                  sx={{ color: (theme) => theme.palette.primary.main }}
                >
                  24 Aug, 2022{" "}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.25)",
                    height: "10px",
                    lineHeight: "0px",
                    mt: -4,
                  }}
                >
                  .
                </Typography>
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  {card.subTitle}
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{ textAlign: "left", fontWeight: "bold" }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", fontWeight: "normal" }}
              >
                {card.desc}
              </Typography>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: 120,
                    mt: 2,
                    fontSize: 16,
                    "&:hover": {
                      background: (theme) => theme.palette.primary.main,
                      color: "#fff",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Read more
                </Button>
              </a>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
