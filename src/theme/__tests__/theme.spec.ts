import { green, grey } from "@mui/material/colors";
import { theme } from "../theme";

describe("theme", () => {
  it("should create a valid Material-UI theme", () => {
    expect(theme.palette.primary.main).toEqual(green[700]);
    expect(theme.palette.secondary.main).toEqual(grey[600]);
    expect(theme.palette.info.main).toEqual(grey[800]);
    expect(theme.typography.body1.color).toEqual(grey[800]);
  });
});
