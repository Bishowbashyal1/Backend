import express from "express";

const PORT = 5004;
const app = express();

//middleware-It verifies the req and response before giving output
app.use(express.json());

//get method
app.get("/", (req, res) => {
  res.send("our Backend is running");
});

app.post("/", (req, res) => {
  //destructing
  const { name, rollno, semester } = req.body;

  try {
    //validation part
    if (!name || !rollno || !semester) {
      res.status(400).json({
        message: "All field should be filled",
        success: false,
      });
    }

    //sucess response

    res.status(200).json({
      message: "Data posted sucessfully",
      data: {
        name: name,
        rollno: rollno,
        semester: semester,
      },
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}); 

app.put("/ss", (req, res) => {
  res.send("Hello from backend PUT");
});

app.delete("/dd", (req, res) => {
  res.send("Hello from backend DELETE");
});

app.listen(PORT, () => {
  console.log(`server is Running on PORT:http://localhost:${PORT}`);
});
