// import React from "react";
// import {
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Typography,
//   Box,
//   Button,
// } from "@mui/material";

// const StressComponent = ({ answers, onAnswerChange, onNext }) => {
//   const questions = [
//     {
//       question: "How many servings of fruits or vegetables do you consume daily?",
//       options: {
//         A: "5 or more servings",
//         B: "3-4 servings",
//         C: "1-2 servings",
//       },
//     },
//     {
//       question: "How often do you eat processed foods?",
//       options: {
//         A: "Rarely",
//         B: "Sometimes",
//         C: "Frequently",
//       },
//     },
//   ];

//   const allAnswered = Object.keys(answers).length === questions.length;

//   return (
//     <Box sx={{ padding: "2rem" }}>
//       <Typography variant="h4" gutterBottom>
//       StressComponent Questions
//       </Typography>
//       {questions.map((q, index) => (
//         <Box key={index} sx={{ marginBottom: "2rem" }}>
//           <Typography variant="h6" gutterBottom>
//             {q.question}
//           </Typography>
//           <RadioGroup
//             name={`question-${index}`}
//             value={answers[index] || ""}
//             onChange={(e) => onAnswerChange(index, e.target.value)}
//           >
//             {Object.keys(q.options).map((key) => (
//               <FormControlLabel
//                 key={key}
//                 value={key}
//                 control={<Radio />}
//                 label={`${key}. ${q.options[key]}`}
//               />
//             ))}
//           </RadioGroup>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default StressComponent;





// import React from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   ToggleButton,
//   ToggleButtonGroup,
//   Paper,
// } from "@mui/material";

// const StressComponent = ({ answers, onAnswerChange }) => {
//   const questions = [
//     "Question 1",
//     "Question 2",
//     "Question 3",
//     "Question 4",
//     "Question 5",
//     "Question 6",
//     "Question 7",
//     "Question 8",
//     "Question 9",
//     "Question 10",
//   ];

//   const options = ["Least Stress", "Moderate Stress", "Most Stress"];

//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <Typography variant="h6" fontWeight="bold">
//                 Questions
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h6" fontWeight="bold">
//                 Stress Level
//               </Typography>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {questions.map((question, index) => (
//             <TableRow key={index}>
//               <TableCell>
//                 <Typography variant="body1">{`${index + 1}. ${question}`}</Typography>
//               </TableCell>
//               <TableCell>
//                 <ToggleButtonGroup
//                   value={answers[index] || ""}
//                   exclusive
//                   onChange={(e, value) => onAnswerChange(index, value)}
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-around",
//                   }}
//                 >
//                   {options.map((option, i) => (
//                     <ToggleButton
//                       key={i}
//                       value={option}
//                       sx={{
//                         textTransform: "none",
//                         padding: "0.5rem 1rem",
//                         fontSize: "0.875rem",
//                       }}
//                     >
//                       {option}
//                     </ToggleButton>
//                   ))}
//                 </ToggleButtonGroup>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default StressComponent;

// import React, { useState } from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   ToggleButton,
//   ToggleButtonGroup,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Paper,
// } from "@mui/material";

// const StressComponent = ({ answers, onAnswerChange }) => {
//   const questions = [
//     "Question 1",
//     "Question 2",
//     "Question 3",
//     "Question 4",
//     "Question 5",
//     "Question 6",
//     "Question 7",
//     "Question 8",
//     "Question 9",
//     "Question 10",
//   ];

//   const options = ["Least Stress", "Moderate Stress", "Most Stress"];

//   const [radioAnswer, setRadioAnswer] = useState("");

//   const handleRadioChange = (e) => {
//     setRadioAnswer(e.target.value);
//   };

//   return (
//     <Box>
//       {/* Stress Level Questions */}
//       <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto", marginBottom: "2rem" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <Typography variant="h6" fontWeight="bold">
//                   Questions
//                 </Typography>
//               </TableCell>
//               <TableCell>
//                 <Typography variant="h6" fontWeight="bold">
//                   Stress Level
//                 </Typography>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {questions.map((question, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Typography variant="body1">{`${index + 1}. ${question}`}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <ToggleButtonGroup
//                     value={answers[index] || ""}
//                     exclusive
//                     onChange={(e, value) => onAnswerChange(index, value)}
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-around",
//                     }}
//                   >
//                     {options.map((option, i) => (
//                       <ToggleButton
//                         key={i}
//                         value={option}
//                         sx={{
//                           textTransform: "none",
//                           padding: "0.5rem 1rem",
//                           fontSize: "0.875rem",
//                         }}
//                       >
//                         {option}
//                       </ToggleButton>
//                     ))}
//                   </ToggleButtonGroup>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Additional Question with Radio Buttons */}
//       <Box sx={{ maxWidth: 800, margin: "auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
//         <Typography variant="body1" gutterBottom>
//           How often do you feel stressed?
//         </Typography>
//         <RadioGroup value={radioAnswer} onChange={handleRadioChange}>
//           <FormControlLabel value="Most of the time" control={<Radio />} label="Most of the time (Score: 1)" />
//           <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes (Score: 2)" />
//           <FormControlLabel value="Hardly ever" control={<Radio />} label="Hardly ever (Score: 3)" />
//         </RadioGroup>
//       </Box>
//     </Box>
//   );
// };

// export default StressComponent;


import React from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const StressComponent = ({ answers, onAnswerChange }) => {
  const questions = [
    "I feel a lot of pressure in my daily studying.",
    "There is a lot of competition with classmates.",
    "I feel I have disappointed my teacher.",
    "Not getting grades according to my teachers' and parents' expectations.",
    "Appearing for an exam.",
    "Pressure from friends for treats, outings, movies, picnics, discs, buying new gadgets.",
    "Fight and stress between parents.",
    "Fight and stress with parents.",
    "Death of a close family member or friend.",
    "Unsatisfactory body image and weight (like how you look and your weight).",
  ];

  const options = [
    { label: "Least Stress", value: "C", score: 1 },
    { label: "Moderate Stress", value: "B", score: 2 },
    { label: "Most Stress", value: "A", score: 3 },
  ];
  const radioOptions = [
    { value: "Most of the time", score: 3 },
    { value: "Sometimes", score: 2 },
    { value: "Hardly ever", score: 1 },
  ];

  return (
    <Box sx={{ padding: "1rem" }}>
      {/* Stress Level Questions */}
      {questions.map((question, index) => (
        <Box key={index} sx={{ marginBottom: "2rem" }}>
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              marginBottom: "0.5rem",
              wordWrap: "break-word",
              lineHeight: 1.5,
            }}
          >
            {`${index + 1}. ${question}`}
          </Typography>
          {/* <ToggleButtonGroup
            value={answers[index] || ""}
            exclusive
            onChange={(e, value) => onAnswerChange(index, value)}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
            }}
          >
            {options.map((option, i) => (
              <ToggleButton
                key={i}
                value={option.value}
                sx={{
                  textTransform: "none",
                  padding: "0.5rem 1rem",
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
                  borderRadius: "8px",
                }}
              >
                {option.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup> */}
          <ToggleButtonGroup
            value={answers[index] || ""}
            exclusive
            onChange={(e, value) => {
              if (value !== null) {
                onAnswerChange(index, value);
              }
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
            }}
          >
            {options.map((option, i) => (
              <ToggleButton
                key={i}
                value={option.value}
                sx={{
                  textTransform: "none",
                  padding: "0.5rem 1rem",
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
                  borderRadius: "8px",
                }}
              >
                {option.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      ))}

      {/* Additional Radio Question */}
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "justify",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            marginBottom: "0.5rem",
            wordWrap: "break-word",
            lineHeight: 1.5,
          }}
        >
          11. Do you feel low in mood, sad, tense, depressed, irritable, not
          interested in daily activities, or not happy with yourself?
        </Typography>
        <RadioGroup
          value={answers[10] || ""}
          onChange={(e) => {
            const value = e.target.value;
            onAnswerChange(10, value);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            paddingLeft: "0.5rem",
          }}
        >
          {radioOptions.map((option, i) => (
            <FormControlLabel
              key={i}
              value={option.value}
              control={<Radio />}
              label={
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "1rem", md: "1.2rem" },
                  }}
                >
                  {`${option.value} (Score: ${option.score})`}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default StressComponent;



