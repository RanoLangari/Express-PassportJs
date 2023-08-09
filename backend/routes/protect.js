const protect = (req, res, next) => {
  if (req.session.passport) {
    console.log("ada session");
    next();
  } else {
    // console.log("tidak ada session");
    // res.redirect("http://localhost:3000/");
    res.status(200).json({ message: "Unauthorized" });
  }
};

module.exports = { protect };
