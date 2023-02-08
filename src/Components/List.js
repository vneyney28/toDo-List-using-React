import React, { useState } from "react";

function List(props) {
  return <li onClick={() => props.del(props.id)}>{props.text}</li>;
}

export default List;
