// import React, { useState } from "react";
// import { Button, Typography, Box } from "@mui/material";

// const ScoringDetails = ({ scores }) => {
//   const [isDone, setIsDone] = useState(false); // State to track if the "Done" button is clicked

//   const cumulativeScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

//   const handleDone = () => {
//     setIsDone(true); // Mark quiz as completed
//   };

//   return (
//     <Box textAlign="center" mt={4}>
//       {!isDone ? (
//         <>
//           <Typography variant="h4" gutterBottom>
//             Scoring Details
//           </Typography>
//           <Typography>Food Intake: {scores.foodIntake}</Typography>
//           <Typography>Breakfast Quality: {scores.breakfastQuality}</Typography>
//           <Typography>Stress: {scores.stress}</Typography>
//           <Typography>Screen Time: {scores.screenTime}</Typography>
//           <Typography>Physical Activity: {scores.physicalActivity}</Typography>
//           <Typography variant="h5" sx={{ mt: 2 }}>
//             Cumulative Score: {cumulativeScore}
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleDone}
//             sx={{ mt: 4 }}
//           >
//             Done
//           </Button>
//         </>
//       ) : (
//         <Typography variant="h5" color="success.main">
//           🎉 You have successfully completed the quiz! 🎉
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ScoringDetails;

import React from "react";
import { Button, Typography, Box } from "@mui/material";

const ScoringDetails = ({ scores }) => {
  const cumulativeScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Scoring Details
      </Typography>
      <Typography>Food Intake: {scores.foodIntake}</Typography>
      <Typography>Breakfast Quality: {scores.breakfastQuality}</Typography>
      <Typography>Stress: {scores.stress}</Typography>
      <Typography>Screen Time: {scores.screenTime}</Typography>
      <Typography>Physical Activity: {scores.physicalActivity}</Typography>
      <Typography>Sleep Component: {scores.sleepComponent}</Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Cumulative Score: {cumulativeScore}
      </Typography>
    </Box>
  );
};

export default ScoringDetails;

