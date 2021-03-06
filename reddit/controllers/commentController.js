const db = require('./../models');

const commentController = {};

commentController.post = (req, res) => {
  const {
    userId,
    text,
    postId,
  } = req.body;

  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId,
  });

  comment.save().then((newComment) => {
    db.Post.findByIdAndUpdate(
      postId,
      { $push: { '_comments': newComment._id } } // eslint-disable-line
    ).then((existingPost) => {
      res.status(200).json({
        success: true,
        data: newComment,
        existingPost,
      });
    }).catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
  }).catch((err) => {
    res.status(500).json({
      message: err,
    });
  });
};

module.exports = commentController;
