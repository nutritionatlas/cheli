import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  Button,
} from "@mui/material";

const BreakfastQuality = ({ answers, onAnswerChange, onNext }) => {
  const questions = [
    {
      question: "How often do you consume Breakfast?",
      options: {
        A: "Daily",
        B: "Sometimes",
        C: "Never",
      },
    },
    {
      question: "Which of the following are your breakfast options usually in a week?",
      options: {
        A: "Only milk or only biscuits",
        B: "Milk with eggs or breakfast cereal with milk",
        C: "Indian breakfast items like upma, poha or milk with Indian breakfast / Indian breafast with eggs",
      },
    },
    {
      question: "Do you consume mid meal options in school usually in a week?",
      explanation: "[1 portion = 1/2 std katori thick dal, 1 std karori thin dal, 3-4 pieces dhokla, 1 std kaktori sooyachunks, 1 std katori rajma.chole] (1 Katori = 125 ml)]",
      options: {
        A: "Daily",
        B: "Sometimes",
        C: "Never",
      },
    },
    {
      question: "If yes, what do yo consume for mid-morning snack?",
      options: {
        A: "Fruits/Idli/veg/egg sandwich/parata rolls",
        B: "Biscuits/ Jam-bread/Jam-roti",
        C: "Cakes/chips/Namkeen/ Aerated drinks/packed beverages like juices",
      },
    },
    {
      question: "Which of the following combinations you usually have for Lunch in a week:",
      options: {
        A: "Roti/Paratha/Rice vegetable paratha (potato/ green leafy vegetable/ idlisambar/ uttapsambar/chutney/sandwiches/ Pasta/ other, Vegetables and or Pulse (chole/rajma/dal)/ Paratha with Salads = Raita/curd",
        B: "Burger(veg, nonveg)/ Maggie/ Sausages/ beg/ non veg/ egg puffs (veg/nonveg/eggs (It can be from school canteen)",
        C: "Pri/ jam with bread/ paratha with jam, Shrikhand with paratha, Butter with bread/ cChocospread with bread/samosa/ fried snacks",
      },
    },
    {
      question: "Which of the following foods you consume as an evening snack usually in a week?",
      options: {
        A: "Caffenaited drinks energy drinks/Aerated drinks/Packed juices",
        B: "Fried snacks like samosa/kachori/wadapao",
        C: "Fruits/Nuts/Milk",
      },
    },
    {
      question: "Which of the following combinations you usually have for dinner in a week?",
      options: {
        A: "Roti/Paratha/Rice vegetable paratha (potato/green leafy vegetable/ idlisambar/uttapasambar/chutney/Sandwiches/ Pasta/ other, vegetables and or pulse (chole/rajma/dal)/Paratha with Salads + Raita/curd",
        B: "Burger(veg, nonveg)/Maggie/ Sausages/ veg/non veg/egg puffs(veg/nonveg/eggs( It can be from school canteen)",
        C: "Puri/jam with bread/ paratha with jam, shrikhand with paratha, butter with bread/chocospread with bread/samosa/fried snacks",
      },
    },
    {
      question: "How often fo you eat in restaurants, cafes and hotels or you or your parents order from hotel or restaurants or though online apps?",
      options: {
        A: "Once a week",
        B: "More than twice a week",
        C: "Once a month",
      },
    },
    {
      question: "How much water do you consume in a day?",
      options: {
        A: "Less than 4 glasses",
        B: "5-8 glasses",
        C: "More tgab 8 glasses",
      },
    },
    {
      question: "Do you consume your food in front of television?",
      options: {
        A: "Almost daily",
        B: "Sometimes",
        C: "Rarely/ Occasionally",
      },
    },
    {
      question: "How often do you consume at least one meal of the day with family members (This includes meals consumed without the television or any gadget)?",
      options: {
        A: "Daily",
        B: "Sometimes",
        C: "Rarely",
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

export default BreakfastQuality;





