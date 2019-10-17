import React from "react";
import { storiesOf } from "@storybook/react";
//import { array } from "./testarray";
//import { number } from "./vars";
import { IncrementButton } from "./button";

var stories = storiesOf("Make a button", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("moarbuttons", () => <IncrementButton />);
