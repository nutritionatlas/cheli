import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  Button,
} from "@mui/material";

const PhysicalActivity = ({ answers, onAnswerChange, onNext }) => {
  const questions = [
    {
      question: "How many hours do lyou engage in school physical activity per day (school physical activity session like PT period or dance/aerobics/football/tennis/running/cricket etc",
      options: {
        A: "No activity or very less activity",
        B: "Less than 60 minutes of activity",
        C: "60 minutes of vigorous activity",
      },
    },
    {
      question: "How many hours do you engage in after school physical activity such as cycling, jogging, cricket, football, aerobics, swimming, kabaddi, basketball, volley ball, tennis, suryanamaskars you usually do in a day in your spare time or after school or in classes outside school?",
      options: {
        A: "No activity or very less activity",
        B: "Less than 60 minutes of activity",
        C: "60 minutes of vigorous activity",
      },
    },
  ];

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <Box sx={{ padding: "0.2rem" }}>
      {questions.map((q, index) => (
        <Box key={index} sx={{ marginBottom: "2rem" }}>
          {/* Question Styling */}
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: { xs: "0.75rem", sm: "1rem", md: "1.3rem" }, // Responsive question size
              marginBottom: "0.5rem",
              wordWrap: "break-word", // Wraps long words
              lineHeight: 1.5, // Improves readability
            }}
          >
            {`${index + 1}. ${q.question}`}
          </Typography>

          {/* Conditionally Render Additional Explanation */}
          {q.explanation && (
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" }, // Smaller font size
                color: "text.secondary", // Grayish text for secondary content
                lineHeight: 1.4, // Better readability
                marginBottom: "1rem",
                textAlign: 'left'
              }}
            >
              {q.explanation} {/* Display the explanation for this question */}
            </Typography>
          )}

          {/* Options Styling */}
          <RadioGroup
            name={`question-${index}`}
            value={answers[index] || ""}
            onChange={(e) => onAnswerChange(index, e.target.value)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem", // Spacing between options
              paddingLeft: "0.5rem",
            }}
          >
            {Object.keys(q.options).map((key) => (
              <FormControlLabel
                key={key}
                value={key}
                control={<Radio />}
                label={
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "1rem", md: "1.3rem" }, // Responsive option size
                      fontWeight: "400",
                      color: "text.primary",
                      textAlign: "left"
                    }}
                  >
                    {` ${q.options[key]}`}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </Box>
      ))}
    </Box>


  );
};

export default PhysicalActivity;





