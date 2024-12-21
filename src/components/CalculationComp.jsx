import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const CalculationComp = () => {
  // Store all numbers and their conditions in an object
  const [numbers, setNumbers] = useState({
    number1: 1, // For the first box
    number2: 25, // For the second box (initial value 25)
    number3: 1, // For the third box
    number4: 1, // For the fourth box
  });

  // Stopping conditions for each number
  const stoppingConditions = {
    number1: 100, // Stop at 100
    number2: 30, // Stop at 30
    number3: 50, // Stop at 50
    number4: 20, // Stop at 20
  };

  useEffect(() => {
    // Set up a single interval to increment all numbers
    const intervalId = setInterval(() => {
      setNumbers((prevNumbers) => {
        let updatedNumbers = { ...prevNumbers };

        // Loop through each number and increment based on its condition
        Object.keys(updatedNumbers).forEach((key) => {
          if (updatedNumbers[key] < stoppingConditions[key]) {
            updatedNumbers[key] = updatedNumbers[key] + 1;
          }
        });

        // If all numbers have reached their stopping condition, clear the interval
        if (
          Object.values(updatedNumbers).every(
            (value, index) =>
              value >= stoppingConditions[Object.keys(updatedNumbers)[index]]
          )
        ) {
          clearInterval(intervalId);
        }

        return updatedNumbers;
      });
    }, 20); // Increment every 10ms for all numbers

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4,
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            width: "265px",
            height: "188px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e0e0e0",
            backgroundImage: "linear-gradient(-35deg, #82E182 0%, #0ACBF5 100%)",
            boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
            margin: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            >
              {numbers.number1}
              <sup
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                +
              </sup>
            </Typography>
            <Typography variant="subtitle1">Teams of Professional</Typography>
          </div>
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            width: "265px",
            height: "188px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e0e0e0",
            backgroundImage: "linear-gradient(-35deg, #B18CFE 0%, #9460FF 100%)",
            boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
            margin: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            >
              {numbers.number2}
              <sup
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                +
              </sup>
            </Typography>
            <Typography variant="subtitle1">Years of Experience</Typography>
          </div>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            width: "265px",
            height: "188px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e0e0e0",
            backgroundImage: "linear-gradient(-35deg, #F2709C 0%, #FE8F75 100%)",
            boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
            margin: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            >
              {numbers.number3}
              <sup
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                +
              </sup>
            </Typography>
            <Typography variant="subtitle1">Size of Own Fleet</Typography>
          </div>
        </Box>

        {/* Box 4 */}
        <Box
          sx={{
            width: "265px",
            height: "188px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e0e0e0",
            backgroundImage: "linear-gradient(-35deg, #07B787 0%, #7ED500 100%)",
            boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
            margin: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            >
              {numbers.number4}
              <sup
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                +
              </sup>
            </Typography>
            <Typography variant="subtitle1">Branches</Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default CalculationComp;
