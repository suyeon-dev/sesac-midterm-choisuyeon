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

    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
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
    console.log("새로운 todo 제목 확인:", result.title);

    if (result) {
      res.send(result);
    } else if (result.title) {
      // case2
      res.send({ title: result.title });
    } else if (result.done) {
      // todo: case3...?
      res.send({ done: result.done });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  console.log("수정 req.body", req.body); //{ done: true }
  console.log("수정 req.params", req.params);

  try {
    const [result] = await Todo.update(
      {
        // title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("수정 결과 확인:", result);
    console.log(Boolean(result));

    // todo:
    // if (Boolean(result)) {
    //   res.send(result);
    // } else {
    //   res.send({ message: "Todo not found" });
    // }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  console.log("삭제 req.params", req.params);
  console.log("삭제 req.params.id", req.params.id);

  try {
    const result = await Todo.destroy({
      where: { id: req.params.id },
    });
    console.log("삭제 result 확인:", result);

    if (result) {
      res.send({
        message: "Todo deleted successfully",
        deletedId: req.params.id,
      });
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};
