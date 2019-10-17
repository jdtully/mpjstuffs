import React from "react";
import { storiesOf } from "@storybook/react";
//import { array } from "./testarray";
//import { number } from "./vars";
import { OneRow } from "./destructuring";

var stories = storiesOf("Make a table", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);
//stories.add("destructuring", () => <Row data={array} picker={number} />);
stories.add("destructuring", () => <OneRow />);
