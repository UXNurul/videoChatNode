import express from "express";
const app = express ( );
const port = 9000:
app.use(" /", (reg, res) => 1 res.json ( { message:
"Hello From Express App" \);
                                         });

app.listen (9000, () => (
console.log( Starting Server on Port $(port)")
});
