import React from "react";

export default function jwtcreation(payload) {
  const options = { expiresIn: 604800 };
  jwt.sign(payload, key.secretOrKey, options, (err, token) => {
    if (err) {
      res.json({
        success: false,
        token: "There was an error"
      });
    } else {
      res.json({
        success: true,
        token: token
      });
    }
  });
}
