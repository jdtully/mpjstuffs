import React from "react";
import { storiesOf } from "@storybook/react";
import { array } from "./testarray";
import { headers } from "./headersArray";

import { PersonTable } from "./Table2.js";

var stories = storiesOf("Make a table", module);

stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

stories.add("Table Proj", () => (
  <PersonTable data={array} headerInfo={headers} />
));
