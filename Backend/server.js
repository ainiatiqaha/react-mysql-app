const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudtask"
});

app.get("/", (req,res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err,data)=> {
        if (err) res.json(err);
        else res.send(data);
    });
});

app.post("/create", (req, res) => {
    const sql = "INSERT INTO student(name,email,marks,grade,city) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ];
    db.query(sql, [values], (err, data) => {
        if (err) res.json(err);
        else res.json(data);
    });
});

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET `name` = ?, `email` = ?, `marks` = ?, `grade` = ?, `city` = ? WHERE id = ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) res.json(err);
        else res.json(data);
    });
});

app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) res.json(err);
        else res.json(data);
    });
});

app.listen(5070, () =>{
    console.log("Server started on port 5070");
});
