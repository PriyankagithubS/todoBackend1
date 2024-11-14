import ToDoModel from "../models/ToDoModel.js";

export const getToDos = async (req, res) => {
    try {
        const toDos = await ToDoModel.find();
        res.send(toDos);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err, msg: "Something went wrong!" });
    }
};

export const saveToDo = (req, res) => {
    const { toDo } = req.body;

    ToDoModel.create({ toDo })
        .then((data) => {
            console.log("Saved Successfully...");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        });
};

export const updateToDo = (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;

    ToDoModel.findByIdAndUpdate(id, { toDo }, { new: true })
        .then((data) => {
            res.send(data || { msg: "Todo not found" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        });
};

export const deleteToDo = (req, res) => {
    const { id } = req.params;

    ToDoModel.findByIdAndDelete(id)
        .then((data) => {
            res.send(data ? "Deleted Successfully...." : { msg: "Todo not found" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        });
};
