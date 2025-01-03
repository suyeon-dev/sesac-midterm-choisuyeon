const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  try {
    const result = await Todo.findAll();
    res.send(result);
  } catch (err) {
    console.error("err:", err);
    res.status(500).send("internal server error");
  }
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  console.log("req.params", req.params);
  console.log("id", req.params.id);

  try {
    const result = await Todo.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log("findOne 결과 확인", result);
    res.send(result);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  console.log("req.body", req.body);

  try {
    const result = await Todo.create({
      title: req.body.title,
      done: req.body.done,
    });
    console.log("새로운 todo생성 결과 확인", result);
    res.send(result);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  console.log("삭제 req.params", req.params);
  console.log("삭제 req.params.id", req.params.id);

  try {
    const result = await Todo.destroy({
      where: { id: req.params.id },
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};
