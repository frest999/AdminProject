const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

let userExist = [{username: 'Oleh', pass: '111'}];

let LastYearSales = [["Websites", 450],["Logo", 216],["Social Media",350],["Adwords", 375], ["E-Commerce", 169]];
let LastMonthSales = [["Websites", 250],["Logo", 116],["Social Media",150],["Adwords", 175], ["E-Commerce", 69]];
let LastWeekSales = [["Websites", 150],["Logo", 58],["Social Media",50],["Adwords", 75], ["E-Commerce", 47]];

let ReportSalesLastYear = [320, 270, 400, 380, 700, 400, 450, 290, 330, 280];
let ReportSalesLastMonth = [120, 170, 200, 180, 300, 200, 250, 190, 130, 280];
let ReportSalesLastWeek = [60, 70, 100, 80, 70, 100, 150, 90, 30, 80];


App.post('/api/user', (req, res) => {
  console.log(req.body);
  console.log('Registration was successfully');
  userExist.push({username: req.body.username, pass: req.body.password});
  return res.json()
});

App.post('/api/auth', (req, res) => {
  const username = req.body.login;
  const pass = req.body.pass;

  let userFilterCheck = userExist.filter((item) => {
    return (item.username === username && item.pass === pass)
  });

  if (userFilterCheck[0] !== undefined) {
    console.log("First");
    return res.json({
      check: true,
      username: userFilterCheck[0].username
    })
  } else {
    console.log("Second");
    return res.json({check: false});
  }
});

App.get('/api/sales/last-year', (req, res) => {
  return res.json(
      LastYearSales
  )
});

App.get('/api/sales/last-month', (req, res) => {
  return res.json(
      LastMonthSales
  )
});

App.get('/api/sales/last-week', (req, res) => {
  return res.json(
      LastWeekSales
  )
});

App.get('/api/report/last-year', (req, res) => {
  return res.json(
      ReportSalesLastYear
  )
});

App.get('/api/report/last-month', (req, res) => {
  return res.json(
      ReportSalesLastMonth
  )
});

App.get('/api/report/last-week', (req, res) => {
  return res.json(
      ReportSalesLastWeek
  )
});

App.listen(4000, () => {
  console.log("Server was started");
});