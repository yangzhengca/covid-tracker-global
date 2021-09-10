import React from "react";
// import useStyles from "./styles";
// import moment from "moment";
// import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@material-ui/core"


// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const Tables = ({ dataCP, dataC, province}) => {
       
    // const classes = useStyles();

    if(province){
      const tableTitle=province
    }else{
      const tableTitle="Canada"
    }

    let tableHead=['New Cases', 'Testing', 'Active Cases', 'Total Cases', 'Total Vaccines', 'Deaths']
  
    return (
      <Container>
        <Typography variant="h4" display='inline' align='center'>
          {province? province : "Canada"}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHead.map((item,index)=>
                  <TableCell key={index}>{item}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  };

export default Tables
