import React from "react";
import { storiesOf } from "@storybook/react";
import { CreateUser } from "./create-user.component";
//import { number } from "./vars";
//import { IncrementButton } from "./button";

var stories = storiesOf("Make a button", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("Add user", () => <CreateUser />);
