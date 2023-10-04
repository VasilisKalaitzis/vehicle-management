import React from "react";
import { render, screen } from "@testing-library/react";
import TabPanel from "../TabPanel";

describe("TabPanel", () => {
  it("should render the TabPanel content when the index and the value match", () => {
    const text = "TabPanel content";
    render(
      <TabPanel index={1} value={1}>
        {text}
      </TabPanel>,
    );
    expect(screen.getByText(text)).not.toBeNull();
  });
  it("should not render the TabPanel content when the index and the value doesnt match", () => {
    const text = "TabPanel content";
    render(
      <TabPanel index={0} value={1}>
        {text}
      </TabPanel>,
    );
    expect(screen.queryByText(text)).toBeNull();
  });
});
