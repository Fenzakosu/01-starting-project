import React from "react";

const MyParagraph = (props) => {
	console.log("PARAGARAPH RUNNING");
	return <p>{props.children}</p>;
};

export default MyParagraph;
