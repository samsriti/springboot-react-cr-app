import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Paper, Button } from "@mui/material";


export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [students, setStudents] = React.useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, age };
    console.log(student);
    fetch("http://localhost:8080/api/student/createstudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      alert("New Student added")
    })
  };

  React.useEffect(()=>{
    fetch("http://localhost:8080/api/student/getstudent")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
      console.log(result)
    }
  )
  },[])

  return (
    <Container>
      <Paper style={paperStyle}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1 style={{ color: "lightblue" }}> Adding Students </h1>
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Age"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </Box>
      </Paper>

      <h1> List of Students</h1>
      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            Id:{student.id}
            <br />
            Name:{student.name}
            <br />
            Age:{student.age}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
