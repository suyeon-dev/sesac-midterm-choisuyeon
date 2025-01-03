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
  console.log("req.query", req.query);
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {};
