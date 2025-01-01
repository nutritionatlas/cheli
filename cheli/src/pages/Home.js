// import React, { useState } from "react";
// import { Button, Typography, Box, LinearProgress } from "@mui/material";
// import FoodIntake from "./FoodIntake";
// import BreakfastQuality from "./BreakfastQuality";
// import StressComponent from "./StressComponent";
// import ScreenTime from "./ScreenTime";
// import PhysicalActivity from "./PhysicalActivity";
// import ScoringDetails from "./ScoringDetails";

// const Home = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [scores, setScores] = useState({
//     foodIntake: 0,
//     breakfastQuality: 0,
//     stress: 0,
//     screenTime: 0,
//     physicalActivity: 0,
//   });

//   const [answers, setAnswers] = useState({
//     foodIntake: {},
//     breakfastQuality: {},
//     stress: {},
//     screenTime: {},
//     physicalActivity: {},
//   });
//   const totalQuestions = 44; // Adjust this based on the total number of questions across all steps
//   const totalSteps = 4; // Number of quiz steps (excluding scoring details)

//   const calculateProgress = () => {
//     // Count answered questions
//     const answeredQuestions = Object.values(answers).reduce(
//       (total, stepAnswers) => total + Object.keys(stepAnswers).length,
//       0
//     );

//     // Combine page completion and question completion
//     const stepCompletionWeight = (currentStep / totalSteps) * 50; // Pages are 50% weight
//     const questionCompletionWeight = (answeredQuestions / totalQuestions) * 50; // Questions are 50% weight

//     return stepCompletionWeight + questionCompletionWeight;
//   };

//   const handleAnswerChange = (step, questionIndex, answer) => {
//     const updatedAnswers = {
//       ...answers,
//       [step]: {
//         ...answers[step],
//         [questionIndex]: answer,
//       },
//     };
//     setAnswers(updatedAnswers);

//     // Calculate score
//     const score = Object.values(updatedAnswers[step] || {}).reduce((acc, ans) => {
//       let questionScore = 0;
//       switch (ans) {
//         case "A":
//           questionScore = 3;
//           break;
//         case "B":
//           questionScore = 2;
//           break;
//         case "C":
//           questionScore = 1;
//           break;
//         default:
//           break;
//       }
//       return acc + questionScore;
//     }, 0);

//     setScores({ ...scores, [step]: score });
//   };

//   const steps = [
//     {
//       component: (
//         <FoodIntake
//           answers={answers.foodIntake}
//           onAnswerChange={(qIndex, ans) =>
//             handleAnswerChange("foodIntake", qIndex, ans)
//           }
//           onNext={() => setCurrentStep(currentStep + 1)}
//         />
//       ),
//     },
//     {
//       component: (
//         <BreakfastQuality
//           answers={answers.breakfastQuality}
//           onAnswerChange={(qIndex, ans) =>
//             handleAnswerChange("breakfastQuality", qIndex, ans)
//           }
//           onNext={() => setCurrentStep(currentStep + 1)}
//         />
//       ),
//     },
//     {
//       component: (
//         <StressComponent
//           answers={answers.stress}
//           onAnswerChange={(qIndex, ans) =>
//             handleAnswerChange("stress", qIndex, ans)
//           }
//           onNext={() => setCurrentStep(currentStep + 1)}
//         />
//       ),
//     },
//     {
//       component: (
//         <ScreenTime
//           answers={answers.screenTime}
//           onAnswerChange={(qIndex, ans) =>
//             handleAnswerChange("screenTime", qIndex, ans)
//           }
//           onNext={() => setCurrentStep(currentStep + 1)}
//         />
//       ),
//     },
//     {
//       component: (
//         <PhysicalActivity
//           answers={answers.physicalActivity}
//           onAnswerChange={(qIndex, ans) =>
//             handleAnswerChange("physicalActivity", qIndex, ans)
//           }
//           onNext={() => setCurrentStep(currentStep + 1)}
//         />
//       ),
//     },
//     {
//       component: <ScoringDetails scores={scores} />,
//     },
//   ];

//   return (
//     <Box sx={{ textAlign: "center", mt: 4, width: "80%", mx: "auto" }}>
//       {/* Progress Bar */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Progress
//         </Typography>
//         <LinearProgress
//           variant="determinate"
//           value={calculateProgress()}
//           sx={{ height: 10, borderRadius: 5 }}
//         />
//         <Typography sx={{ mt: 1 }}>{Math.round(calculateProgress())}%</Typography>
//       </Box>

//       {/* Current Step Component */}
//       <Box>{steps[currentStep].component}</Box>

//       {/* Navigation Buttons */}
//       <Box sx={{ mt: 4 }}>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => setCurrentStep(currentStep - 1)}
//           disabled={currentStep === 0}
//           sx={{ mr: 2 }}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setCurrentStep(currentStep + 1)}
//           disabled={currentStep === steps.length - 1}
//         >
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import { Button, Typography, Box, LinearProgress, Divider } from "@mui/material";
// import FoodIntake from "./FoodIntake";
// import BreakfastQuality from "./BreakfastQuality";
// import StressComponent from "./StressComponent";
// import ScreenTime from "./ScreenTime";
// import PhysicalActivity from "./PhysicalActivity";
// import ScoringDetails from "./ScoringDetails";
// import SleepComponent from "./SleepComponent";

// const Home = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [scores, setScores] = useState({
//     foodIntake: 0,
//     breakfastQuality: 0,
//     stress: 0,
//     screenTime: 0,
//     physicalActivity: 0,
//     sleepComponent:0,
//   });

//   const [answers, setAnswers] = useState({
//     foodIntake: {},
//     breakfastQuality: {},
//     stress: {},
//     screenTime: {},
//     physicalActivity: {},
//     sleepComponent:{},
//   });

//   const totalQuestions = 44; // Adjust based on total number of questions across all steps
//   const totalSteps = 6; // Number of quiz steps (excluding scoring details)

//   const calculateProgress = () => {
//     const answeredQuestions = Object.values(answers).reduce(
//       (total, stepAnswers) => total + Object.keys(stepAnswers).length,
//       0
//     );

//     const stepCompletionWeight = (currentStep / totalSteps) * 50; // Pages are 50% weight
//     const questionCompletionWeight = (answeredQuestions / totalQuestions) * 50; // Questions are 50% weight

//     return stepCompletionWeight + questionCompletionWeight;
//   };

//   const handleAnswerChange = (step, questionIndex, answer) => {
//     const updatedAnswers = {
//       ...answers,
//       [step]: {
//         ...answers[step],
//         [questionIndex]: answer,
//       },
//     };
//     setAnswers(updatedAnswers);

//     const score = Object.values(updatedAnswers[step] || {}).reduce((acc, ans) => {
//       let questionScore = 0;
//       switch (ans) {
//         case "A":
//           questionScore = 3;
//           break;
//         case "B":
//           questionScore = 2;
//           break;
//         case "C":
//           questionScore = 1;
//           break;
//         default:
//           break;
//       }
//       return acc + questionScore;
//     }, 0);

//     setScores({ ...scores, [step]: score });
//   };

//   const steps = [
//     { name: "Food Intake", component: <FoodIntake answers={answers.foodIntake} onAnswerChange={(qIndex, ans) => handleAnswerChange("foodIntake", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
//     { name: "Breakfast Quality", component: <BreakfastQuality answers={answers.breakfastQuality} onAnswerChange={(qIndex, ans) => handleAnswerChange("breakfastQuality", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
//     { name: "Stress Management", component: <StressComponent answers={answers.stress} onAnswerChange={(qIndex, ans) => handleAnswerChange("stress", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
//     { name: "Screen Time", component: <ScreenTime answers={answers.screenTime} onAnswerChange={(qIndex, ans) => handleAnswerChange("screenTime", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
//     { name: "Physical Activity", component: <PhysicalActivity answers={answers.physicalActivity} onAnswerChange={(qIndex, ans) => handleAnswerChange("physicalActivity", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
//     { name: "Sleep Component", component: <SleepComponent answers={answers.sleepComponent} onAnswerChange={(qIndex, ans) => handleAnswerChange("sleepComponent", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
//     { name: "Scoring Details", component: <ScoringDetails scores={scores} /> },
//   ];

//   return (
//     <>
//       {/* Title Container */}
//       <Box
//         sx={{
//           py: 2,
//           px: 3,
//           width: "80%", // Match the width of the main content container
//           mx: "auto", // Center align
//           mt: 4,
//           mb: 2, // Add space between title and content
//           background: "#C0D6DF", // Light appealing background color from palette
//           borderRadius: 2,
//           color: "#4F6D7A", // Complementary text color
//           boxShadow: 2, // Subtle shadow for depth
//           textAlign: "center",
//         }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: "bold",
//             fontSize: { xs: "1.8rem", md: "2.5rem" },
//             textTransform: "uppercase",
//             mb: 1,
//           }}
//         >
//           Cheli Questionnaire
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontStyle: "italic",
//             fontSize: { xs: "1rem", md: "1.25rem" },
//             color: "#4F6D7A", // Softer matching color for subtitle
//           }}
//         >
//           A Measure of Healthy Eating and Living for Adolescents
//         </Typography>
//       </Box>

//       {/* Main Content Container */}
//       <Box
//         sx={{
//           textAlign: "center",
//           width: "80%",
//           mx: "auto",
//           py: 4,
//           px: 2,
//           borderRadius: 2,
//           boxShadow: 3,
//           backgroundColor: "#EAEAEA", // Softer light gray background
//         }}
//       >
//         {/* Header and Progress Bar */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             justifyContent: { md: "space-between" },
//             mb: 3,
//             gap: { xs: 2, md: 2 },
//           }}
//         >
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{
//               fontWeight: "bold",
//               textAlign: "center",
//               color: "#4F6D7A", // Darker color for better contrast
//             }}
//           >
//             {steps[currentStep].name}
//           </Typography>
//           <Box sx={{ width: "100%", maxWidth: { md: "60%" } }}>
//             <LinearProgress
//               variant="determinate"
//               value={calculateProgress()}
//               sx={{
//                 height: 10,
//                 borderRadius: 5,
//                 backgroundColor: "#E8DAB2", // Softer background for unfilled bar
//                 '& .MuiLinearProgress-bar': {
//                   backgroundColor: "#DD6E42", // Vibrant progress color
//                 },
//               }}
//             />
//             <Typography
//               sx={{
//                 mt: 1,
//                 textAlign: "center",
//                 fontSize: { xs: "0.9rem", md: "1rem" },
//                 color: "#4F6D7A", // Matching text color
//               }}
//             >
//               {Math.round(calculateProgress())}%
//             </Typography>
//           </Box>
//         </Box>

//         <Divider sx={{ my: 3, borderColor: "#BDC3C7" }} /> {/* Neutral divider */}

//         {/* Current Step Component */}
//         <Box>{steps[currentStep].component}</Box>

//         {/* Navigation Buttons */}
//         <Box sx={{ mt: 4 }}>
//           <Button
//             variant="contained"
//             onClick={() => setCurrentStep(currentStep - 1)}
//             disabled={currentStep === 0}
//             size="large"
//             sx={{
//               mr: 2,
//               px: { xs: 3, md: 4 },
//               py: { xs: 1, md: 1.5 },
//               fontSize: { xs: "0.9rem", md: "1rem" },
//               backgroundColor: "#4F6D7A", // Button color from palette
//               color: "#EAEAEA", // Text contrast
//               '&:hover': { backgroundColor: "#395A64" }, // Slightly darker shade
//             }}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="contained"
//             onClick={() => setCurrentStep(currentStep + 1)}
//             disabled={currentStep === steps.length - 1}
//             size="large"
//             sx={{
//               px: { xs: 3, md: 4 },
//               py: { xs: 1, md: 1.5 },
//               fontSize: { xs: "0.9rem", md: "1rem" },
//               backgroundColor: "#DD6E42", // Vibrant accent color for Next button
//               color: "#EAEAEA", // Text contrast
//               '&:hover': { backgroundColor: "#BD5A38" }, // Darker shade
//             }}
//           >
//             Next
//           </Button>
//         </Box>
//       </Box>
//     </>

//   );
// };

// export default Home;


import React, { useState } from "react";
import { Button, Typography, Box, LinearProgress, Divider } from "@mui/material";
import FoodIntake from "./FoodIntake";
import BreakfastQuality from "./BreakfastQuality";
import StressComponent from "./StressComponent";
import ScreenTime from "./ScreenTime";
import PhysicalActivity from "./PhysicalActivity";
import ScoringDetails from "./ScoringDetails";
import SleepComponent from "./SleepComponent";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({
    foodIntake: 0,
    breakfastQuality: 0,
    stress: 0,
    screenTime: 0,
    physicalActivity: 0,
    sleepComponent: 0,
  });

  const [answers, setAnswers] = useState({
    foodIntake: {},
    breakfastQuality: {},
    stress: {},
    screenTime: {},
    physicalActivity: {},
    sleepComponent: {},
  });

  const totalQuestions = 44; // Total number of questions across all steps
  const totalSteps = 6; // Total quiz steps (up to SleepComponent)

  const calculateProgress = () => {
    // Total answered questions
    const answeredQuestions = Object.values(answers).reduce(
      (total, stepAnswers) => total + Object.keys(stepAnswers).length,
      0
    );

    // Progress as a percentage of total questions
    return Math.min((answeredQuestions / totalQuestions) * 100, 100);
  };

  // const handleAnswerChange = (step, questionIndex, answer) => {
  //   const updatedAnswers = {
  //     ...answers,
  //     [step]: {
  //       ...answers[step],
  //       [questionIndex]: answer,
  //     },
  //   };
  //   setAnswers(updatedAnswers);

  //   // Update scores dynamically based on answers
  //   const score = Object.values(updatedAnswers[step] || {}).reduce((acc, ans) => {
  //     let questionScore = 0;
  //     switch (ans) {
  //       case "A":
  //         questionScore = 3;
  //         break;
  //       case "B":
  //         questionScore = 2;
  //         break;
  //       case "C":
  //         questionScore = 1;
  //         break;
  //       default:
  //         break;
  //     }
  //     return acc + questionScore;
  //   }, 0);

  //   setScores({ ...scores, [step]: score });
  // };

  const handleAnswerChange = (step, questionIndex, answer) => {
    const updatedAnswers = {
      ...answers,
      [step]: {
        ...answers[step],
        [questionIndex]: answer,
      },
    };
    setAnswers(updatedAnswers);

    // Calculate score for the step
    const score = Object.entries(updatedAnswers[step] || {}).reduce((acc, [qIndex, ans]) => {
      let questionScore = 0;

      // Toggle button questions
      if (["A", "B", "C"].includes(ans)) {
        questionScore = ans === "A" ? 3 : ans === "B" ? 2 : 1;
      }

      // Radio button question
      if (["Most of the time", "Sometimes", "Hardly ever"].includes(ans)) {
        questionScore =
          ans === "Most of the time" ? 3 : ans === "Sometimes" ? 2 : 1;
      }

      return acc + questionScore;
    }, 0);

    setScores({ ...scores, [step]: score });
  };

  const steps = [
    { name: "Food Intake", component: <FoodIntake answers={answers.foodIntake} onAnswerChange={(qIndex, ans) => handleAnswerChange("foodIntake", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
    { name: "Breakfast Quality", component: <BreakfastQuality answers={answers.breakfastQuality} onAnswerChange={(qIndex, ans) => handleAnswerChange("breakfastQuality", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
    { name: "Stress Management", component: <StressComponent answers={answers.stress} onAnswerChange={(qIndex, ans) => handleAnswerChange("stress", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
    { name: "Screen Time", component: <ScreenTime answers={answers.screenTime} onAnswerChange={(qIndex, ans) => handleAnswerChange("screenTime", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
    { name: "Physical Activity", component: <PhysicalActivity answers={answers.physicalActivity} onAnswerChange={(qIndex, ans) => handleAnswerChange("physicalActivity", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
    { name: "Sleep Component", component: <SleepComponent answers={answers.sleepComponent} onAnswerChange={(qIndex, ans) => handleAnswerChange("sleepComponent", qIndex, ans)} onNext={() => setCurrentStep(currentStep + 1)} /> },
    { name: "Scoring Details", component: <ScoringDetails scores={scores} /> },
  ];

  return (
    <>
      {/* Title Container */}
      <Box
        sx={{
          py: 2,
          px: 3,
          width: "80%",
          mx: "auto",
          mt: 4,
          mb: 2,
          background: "#C0D6DF",
          borderRadius: 2,
          color: "#4F6D7A",
          boxShadow: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { xs: "1.8rem", md: "2.5rem" }, textTransform: "uppercase", mb: 1 }}>
          Cheli Questionnaire
        </Typography>
        <Typography variant="subtitle1" sx={{ fontStyle: "italic", fontSize: { xs: "1rem", md: "1.25rem" }, color: "#4F6D7A" }}>
          A Measure of Healthy Eating and Living for Adolescents
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          textAlign: "center",
          width: "80%",
          mx: "auto",
          py: 4,
          px: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#EAEAEA",
        }}
      >
        {/* Header and Progress Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: { md: "space-between" },
            mb: 3,
            gap: { xs: 2, md: 2 },
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", color: "#4F6D7A" }}>
            {steps[currentStep].name}
          </Typography>
          <Box sx={{ width: "100%", maxWidth: { md: "60%" }, display: currentStep < totalSteps ? "block" : "none" }}>
            <LinearProgress
              variant="determinate"
              value={calculateProgress()}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#E8DAB2",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#DD6E42",
                },
              }}
            />
            <Typography sx={{ mt: 1, textAlign: "center", fontSize: { xs: "0.9rem", md: "1rem" }, color: "#4F6D7A" }}>
              {Math.round(calculateProgress())}%
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: "#BDC3C7" }} />

        {/* Current Step Component */}
        <Box>{steps[currentStep].component}</Box>

        {/* Navigation Buttons */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 0}
            sx={{ mr: 2, backgroundColor: "#4F6D7A", color: "#EAEAEA", "&:hover": { backgroundColor: "#395A64" } }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === steps.length - 1}
            sx={{ backgroundColor: "#DD6E42", color: "#EAEAEA", "&:hover": { backgroundColor: "#BD5A38" } }}
          >
            {currentStep === totalSteps - 1 ? "View Score" : "Next"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;


