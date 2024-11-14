import React from "react";
import { Box, Typography } from "@mui/material";

const CalculationComp = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 4,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            // key={index}
            sx={{
              width: "265px",
              height: "188px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
              //   borderRadius: '8px',
              //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundImage:
                "linear-gradient(-35deg, #82E182 0%, #0ACBF5 100%)",
              boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
              margin: 1,
            }}
          >
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
            <Typography variant="subtitle1" sx={{color:"white" , fontSize:"40px" , fontWeight:"bold"}}>100{<sup style={{color:"white" , fontSize:"20px" ,fontWeight:"bold"}}>+</sup>}</Typography>
            <Typography variant="subtitle1">Teams of Professional</Typography>
            </div>
            
            
           
          </Box>
          <Box
            // key={index}
            sx={{
              width: "265px",
              height: "188px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
              //   borderRadius: '8px',
              //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundImage:
                " linear-gradient(-35deg, #B18CFE 0%, #9460FF 100%)",

              boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
              margin: 1,
            }}
          >
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
            <Typography variant="subtitle1" sx={{color:"white" , fontSize:"40px" , fontWeight:"bold"}}>25{<sup style={{color:"white" , fontSize:"20px" ,fontWeight:"bold"}}>+</sup>}</Typography>
            <Typography variant="subtitle1">Years of Experience</Typography>
            </div>
          </Box>
          <Box
            // key={index}
            sx={{
              width: "265px",
              height: "188px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
              //   borderRadius: '8px',
              //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundImage:
                "linear-gradient(-35deg, #F2709C 0%, #FE8F75 100%)",
              boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
              margin: 1,
            }}
          >
             <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
            <Typography variant="subtitle1" sx={{color:"white" , fontSize:"40px" , fontWeight:"bold"}}>100{<sup style={{color:"white" , fontSize:"20px" ,fontWeight:"bold"}}>+</sup>}</Typography>
            <Typography variant="subtitle1">Size of Own Fleet</Typography>
            </div>
          </Box>
          <Box
            // key={index}
            sx={{
              width: "265px",
              height: "188px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
              //   borderRadius: '8px',
              //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundImage:
                " linear-gradient(-35deg, #07B787 0%, #7ED500 100%)",
              boxShadow: "0px 28px 40px 0px rgba(0, 0, 0, 0.1)",
              margin: 1,
            }}
          >
             <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
            <Typography variant="subtitle1" sx={{color:"white" , fontSize:"40px" , fontWeight:"bold"}}>20{<sup style={{color:"white" , fontSize:"20px" ,fontWeight:"bold"}}>+</sup>}</Typography>
            <Typography variant="subtitle1">Branches</Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CalculationComp;
