import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";

const FoodIntake = ({ answers, onAnswerChange, onNext }) => {
  console.log("Updated Answers:", answers);
  const [visibleFatQuestions, setVisibleFatQuestions] = useState({
    "16a": "",
    "16b": "",
    "16c": "",
    "16d1": "",
    "16d2": "",
  });


  const [mainQuestionAnswer, setMainQuestionAnswer] = useState("");
  const [showMainQuestion, setShowMainQuestion] = useState(false);


  const mainQuestion = {
    question: "How many poritons of visible fats like cooking oil, ghee butter etc do you consume per day?",
    options: {
      A: "7.5-9",
      B: "7-4.5",
      C: "less than 4.5 and more than 9",
    },
  };


  const questions = [
    {
      question: "How many meals do you consume per day like breakfast, mid-morning, lunch, evening snack and dinner?",
      options: {
        A: "5 meals (This includes all the meals included above)",
        B: "meals",
        C: "2 or less meals",
      },
    },
    {
      question: "How many portions of cereals and millets (food prepared from wheat, rice, maize, sorghum etc) based food preparations such as roti/phulka/chapatti/bread/pasta/puri/rice/biryani/poha/upma/noodles/oats/khakra/dosa/idli/ do you usually consume in various meals such as breakfast, mid-morning, lunch, evening snack and dinner in a day?",
      explanation: "[consider the following 1 portion = 2 in number phulkas/bread/thin chapati/2-3 puris/ 1 thalipith or pancake/1 bowl pasta/ 1 katori rice 1/2 katori poha/ 1/2 katori upma/ 1/2 vermicelli/ 2 idlis/ 1 dosa approximately (1kotori= 125 ml). 1.5 portions: 1 Vegitable Paratha (Diameter 5-6 inches)]",
      options: {
        A: "9-11 portions",
        B: "5-8 portions",
        C: "4 and less portions",
      },
    },
    {
      question: "How many portions of Pulse and legumes based recipes such as dals, chole, rajmah, sambhar, rasam, soya chunks, khaman dhokla etc do you usually consume in various meals such as breakfast, mid-morining, lunch, evening snack and dinner in a day?",
      explanation: "[1 portion = 1/2 std katori thick dal, 1 std karori thin dal, 3-4 pieces dhokla, 1 std kaktori sooyachunks, 1 std katori rajma.chole] (1 Katori = 125 ml)]",
      options: {
        A: "2 or more portions",
        B: "1 portion",
        C: "less than 1 portion",
      },
    },
    {
      question: "How many portions of Meat and Poultry based recipes such as egg, chicken, mutton, fish do you usually consume in various meals such as breakfast, mid- morning, lunch, evening snack and dinner in a day?",
      explanation: "[1 portion = 1 egg, 2-3 pieces chicken, 2-3 pieces mutton, 2-3 pieces fish (Bombay duck/ mackerel. I slice Pork/Beef]",
      options: {
        A: "2 or more portions",
        B: "1 portion",
        C: "less than 1 portions",
      },
    },
    {
      question: "How many portions of roots and tubers based recipes in the form of gravy or dry vegetable or salads such as potato, raddish, onion, carrot, beetroot, etc do you consume in a day?",
      explanation: "[1 portion = 1 medium sized Potato/ 1 medium sized onion (50fms), 1 beetroot (70 gms), 1-2 carrots (100 gms, 1 katori Potato gravy, 1/2 katori potato dry, 1 katori carrot grated (80gm), (1 Katori = 125ml)( 1 bowl = 225ml))]",
      options: {
        A: "2 or more portions",
        B: "1 portion",
        C: "less than 1 portions",
      },
    },
    {
      question: "How many portions of green vegetables such as spinach, fenugreek, amaranth etc in various food preparations of green vegetables such as gravy/dry vegetable, in parathas, soups etc do you usually consume in a day?",
      explanation: "[1 portion = 1/2 katori dry green leafy vegetable, 1 1/2 katori green leafy gravy, 1 1/2 katori green leafy vegetable soup, 1 katori in combination with other vegetable, 1/4 portion = Green leafy vegetable in one paratha (1 Katori = 125 ml)]",
      options: {
        A: "1 or more portions",
        B: "1/2 portion",
        C: "less than 1/2 portion",
      },
    },
    {
      question: "How many portions of other vegetables such as cabbage, cauliflower, broccoli, ladies finger, beans, gourds, brinjal, pumpkin etc do you consume in various meals such as breakfast, mid- morning, lunch, evening snack and dinner in an entire day?",
      explanation: "[1 portion = 1/2 katori dry cabbage vegetable, 1 katori cauliflower, 1/2 katori broccoli, 1 katori ladies finger dry, 1 katori brinjal dry, 1 1/2 katori lettuce, 1/2 katori beans, 1 1/2 katori Brinjal (baigan bharta), 1 1/2 katori baigan gravy, 1 katori pumpkin ( 1 katori = 125ml)]",
      options: {
        A: "1 or more portions",
        B: "1/2 portion",
        C: "less than 1/2 portion",
      },
    },
    {
      question: "How many portions of fruits do you consume in a  day such as banana, pears, apple, chiku, orange, sweet lime, seasonal fruits such as mango, strawberries, grapes etc in various meals such as breakfast, mid- morining, lunch, evening snack and dinner in an entire day?",
      explanation: "[1 portion = 1 fruit (50gms)]",
      options: {
        A: "1 or more portions",
        B: "1/2 portion",
        C: "less than 1/2 portion",
      },
    },
    {
      question: "How many portions of milk and milk products such as paneer, cheese, curds, buttermilk etc do you consume in a day?",
      explanation: "[1 portion = 200 ml medium sized glass milk/ buttermilk, 1/2 katori paneer dry, 1 katori paneer gravy, 1 cheese cube/slice, 1 katori curd (1 katori = 150 ml)]",
      options: {
        A: "4-5 portions",
        B: "2-3 portions",
        C: "less than 2 portions",
      },
    },
    {
      question: "How many portions of dry fruits and nuts do you consume such as almond, cashews, walnut, pistas, peanuts (in the form of eanut butter, chikki/laddoo, rosted, salted ets), coconut ( in laddoo, chutney, malai etc) raisins, flaxseeds etc do you consume in a day?",
      explanation: "[1 portion = 1 teaspoon of peanut butter; 15-20 peanuts, 1 square piece of chikki slice 10-12 cashews/almonds/pista, 6-7 walnuts]",
      options: {
        A: "1 or more portions",
        B: "1/2 portion",
        C: "less than 1/2 portion",
      },
    },
    {
      question: "Do yo add table salt over your food usually apart from what is added while cooking?",
      options: {
        A: "Yes",
        B: "Sometimes",
        C: "No",
      },
    },
    {
      question: "How many portions of table sugar do you consume in a day eg. In milk or adding in your plate during lunch/ dinner/snacks or eating sugar as it is?",
      options: {
        A: "More than 5 teaspoons",
        B: "3-5 teaspoons",
        C: "2 or less than 2 teaspoons",
      },
    },
    {
      question: "How many portions of sweets and confectionary and bakery items such as biscuits, cookies, cakes, pastries, ice cream/lulfis, ice candies, pedas/burfis/juices sugar sweetened beverages such as soft drinks  / aerated drinks, chocolates, toffes, candies etc do you usually consume in a week?",
      explanation: "[1 portion = For Peda/Barfi/Sweet 1 piece, cake 1 piece, pastry 1 piece, 1/2 chocloate bar, 1 sugar candy, for Jam: 1 tablespoon full, fur biscuits/ cream/ chocolate: 2-3, 1 small bottle of soft drink/ 1 can of aerated drink = 200 ml, consider the total of all portions of food items mentioned for total portions]",
      options: {
        A: "5 portions or more",
        B: "3 to 4",
        C: "2 or less than 2 portions",
      },
    },
    {
      question: "How many portions of sweets and confectionary and bakery items such as biscuits, cookies, cakes, pastries, ice cream/kulfis, ice candies, pedas/burfis/juices sugar sweetened beverages such as soft drinks/aerated drinks, chocolates, toffes, candies etc do you usually consume in a week?",
      explanation: "[1 portion = For Peda/Barfi/Sweet 1 piece, cake 1 piece, pastry 1 piece, 1/2 chocloate bar, 1 sugar candy, for Jam: 1 tablespoon full, fur biscuits/ cream/ chocolate: 2-3, 1 small bottle of soft drink/ 1 can of aerated drink = 200 ml, consider the total of all portions of food items mentioned for total portions]",
      options: {
        A: "5 portions or more",
        B: "3 to 4",
        C: "2 or less than 2 portions",
      },
    },
    {
      question: "How many portions of following foods such as chips, samosa, kachori, wadapao, fried franky, fired chicken, namkeen kurkure, pizza, burger, bread pakoda, ready to cook french fries of following foods do you consume in a week?",
      explanation: "[1 portion = 15 potato chips(30gm), 1/2 latori kurkure (10-12 kurkure), 1/2 katori namkeen farsan 1 wada, 3-4 pakoda, 1 bread pakoda, 1 samosa/kachori, 10 -12 pieces of frozen fries, around 15 pieces of French fries (85gms), 1 slice of pizza (1/4th pizza std size), 1 std size burger, 4 nuggets of chichen, consider the total of all portions of food items mentioned for total portions]",
      options: {
        A: "3 or more portions",
        B: "1-2 portions",
        C: "less than 1 portion",
      },
    },

  ];


  const handleInputChange = (field, value) => {
    setVisibleFatQuestions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const calculatePortionValue = () => {
    const { "16a": liters, "16b": familyMembers, "16c": answer16c, "16d": additional } = visibleFatQuestions;

    if (!liters || !familyMembers) return;

    // Convert liters to milliliters
    const milliliters = liters * 1000;

    // Calculate per day per member
    const perDayPerMember = (milliliters / familyMembers) / 30; // Milliliters per day per member
    let finalValue = perDayPerMember / 5; // Divide by 5 to get portions

    // Add additional value if answer16c is "Yes"
    if (answer16c === "Yes") {
      finalValue += parseFloat(additional || 0); // Add 16d if 16c is yes
    }
    return finalValue;
  };


  const handleMainQuestion = () => {
    const finalValue = calculatePortionValue();
    if (finalValue >= 7.5 && finalValue <= 9) {
      setMainQuestionAnswer("A");
    } else if (finalValue >= 4.5 && finalValue < 7) {
      setMainQuestionAnswer("B");
    } else {
      setMainQuestionAnswer("C");
    }

    setShowMainQuestion(true);
  };


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

      {/* Additional Visible Fat Questions */}
      <Box>
        <Typography>16a. How many packets or cans of visible fat (like butter, ghee, or oil) are used when cooking for the entire family?</Typography>
        <TextField
          name="16a"
          value={visibleFatQuestions["16a"]}
          onChange={(e) => handleInputChange("16a", e.target.value)}
          label="Enter quantity"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Box>

      <Box>
        <Typography>16b. How many members are there in your family?</Typography>
        <TextField
          name="16b"
          value={visibleFatQuestions["16b"]}
          onChange={(e) => handleInputChange("16b", e.target.value)}
          label="Enter number of members"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 1 }}
        />
      </Box>

      <Box>
        <Typography>16c. Do you add ghee, butter, or oil to foods served on your plate?</Typography>
        <RadioGroup name="16c" value={visibleFatQuestions["16c"]} onChange={(e) => handleInputChange("16c", e.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </Box>
      {visibleFatQuestions["16c"] === "Yes" && (
        <>
          <Box>
            <Typography>16d. How much ghee/oil/butter was added in teaspoons?</Typography>
            <TextField
              fullWidth
              id="fat-quantity"
              label="Enter value in Teaspoons"
              type="number"
              value={visibleFatQuestions["16d"]}
              onChange={(e) => handleInputChange("16d", e.target.value)}
              helperText="1 teaspoon is 1 portion = 5gms"
            />
          </Box>
        </>
      )}
      {/* Main question 16 (conditionally rendered) */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleMainQuestion}
        disabled={!visibleFatQuestions["16a"] || !visibleFatQuestions["16b"]}
        sx={{ mt: 2 }}
      >
        Calculate
      </Button>

      {showMainQuestion && (
        <Box mt={4}>
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
            {`${16}. How many portions of visible fats like cooking oil, ghee butter, etc., do you consume per day?`}
          </Typography>
          <RadioGroup
            name={`question-16`}
            value={mainQuestionAnswer || ""} // Always use the calculated value
            onChange={(e) => onAnswerChange(16, e.target.value)}
           
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem", // Spacing between options
              paddingLeft: "0.5rem",
            }}
          >
            {[
              { value: "A", label: "7.5-9" },
              { value: "B", label: "7-4.5" },
              { value: "C", label: "Less than 4.5 or more than 9" },
            ].map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={
                  <Radio
                    disabled={option.value !== mainQuestionAnswer} // Disable other options
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "1rem", md: "1.3rem" }, // Responsive option size
                      fontWeight: "400",
                      color: "text.primary",
                    }}
                  >
                    {option.label}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </Box>
      )}
    </Box>
  );
};

export default FoodIntake;





