import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";
import { useRef } from "react";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

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
  "& label.Mui-focused": {},
  "& .MuiInput-underline:after": {
    color: "#fff !important",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none",
      color: "#fff !important",
    },
    "&:hover fieldset": {
      color: "#fff !important",
    },
    "&.Mui-focused fieldset": {
      color: "#fff",
      borderColor: "#fff",
    },
  },
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  background: "#101417",
  color: "#fff",
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
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
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
    setSuccessfullySubmitted(true);

    setTimeout(() => {
      setSuccessfullySubmitted(false);
    }, 5000);
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Box>
        {successfullySubmitted && (
          <Typography variant="h6" sx={{ mt: 0, mb: 2, color: "#39C16C" }}>
            Message sent successfully! I will get back to you as soon as
            possible.
          </Typography>
        )}
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
              placeholder="Enter your name"
              name="name"
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
              placeholder="Enter your email"
              name="email"
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
            name="message"
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
            mt: 2,
          }}
          type="submit"
          value="Send"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
