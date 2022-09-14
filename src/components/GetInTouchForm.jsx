import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";
import { useRef } from "react";

// import { Label } from "@mui/icons-material";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& input": {
    color: "#fff !important",
    width: "100%",
    borderRadius: 1,
    fontFamily: "Lato, sans-serif",
  },
  "& label": {
    color: "#fff",
    alignItems: "center",
    display: "flex",
  },
  "& label.Mui-focused": {
    // color: theme.palette.primary.main,
    // borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:after": {
    color: "#fff !important",

    // borderBottomColor: 'red',
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none",
      color: "#fff !important",
      // background: theme.palette.primary.lighter,
    },
    "&:hover fieldset": {
      // borderColor: 'white',
      color: "#fff !important",
      // background: theme.palette.primary.lighter,
    },
    "&.Mui-focused fieldset": {
      // borderColor: '#fff',
      color: "#fff",
      // background: theme.palette.primary.lighter,
    },
  },
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  background: "#101417",
  color: "#fff",
  // height: 200,
  outline: "none",
  border: "none",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "16px",
  fontFamily: "Lato, sans-serif",
}));

export default function GetInTouchForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_lcg9bb7",
    //     "template_hv1i6um",
    //     e.target,
    //     "4MGoctA0I91cPnLxG"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // e.target.reset();

    emailjs
      .sendForm(
        "service_lcg9bb7",
        "template_hv1i6um",
        form.current,
        "4MGoctA0I91cPnLxG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            gap: { xs: 2, sm: 4 },
            textAlign: "left",
          }}
        >
          <Box>
            <Box component="label" sx={{ ml: 1 }}>
              Name
            </Box>
            <StyledInput
              id="name"
              placeholder="Enter you name"
              // label="Enter you name"
              fullWidth
              variant="outlined"
              sx={{
                background: (theme) => theme.palette.primary.lighter,
                borderRadius: 1,
                color: "#fff !important",
                mt: 1,
              }}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <Box component="label" sx={{ ml: 1 }}>
              Email
            </Box>
            <StyledInput
              id="email"
              placeholder="Enter you email"
              // label="Enter you email"
              fullWidth
              variant="outlined"
              type="email"
              sx={{
                background: (theme) => theme.palette.primary.lighter,
                borderRadius: 1,
                mt: 1,
              }}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: "left", mt: 4 }}>
          <Box component="label" sx={{ ml: 1, mt: 2 }}>
            Message
          </Box>
          <br />
          <StyledTextArea
            aria-label="minimum height"
            minRows={6}
            placeholder="Write message..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength="1000"
          />
          <Typography
            variant="h6"
            sx={{
              textAlign: "right",
              color: "#6C757D",
              fontWeight: "normal",
              textStyle: "italic",
              textTransform: "capitalize",
            }}
          >
            {message.length}/1000 Characters
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            fontSize: { xs: 18, md: 22 },
            width: { xs: 160, md: 200 },
            py: { xs: 1, md: 1.5 },
          }}
          type="submit"
          value="Send"
        >
          {" "}
          Submit
        </Button>
      </Box>
    </form>
  );
}
