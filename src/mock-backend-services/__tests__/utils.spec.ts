import { generateUniqueId } from "../utils";

describe("utils", () => {
  describe("generateUniqueId", () => {
    it("should generate a unique ID", () => {
      const id1 = generateUniqueId();
      const id2 = generateUniqueId();

      expect(id1).not.toEqual(id2);
    });

    it("should generate IDs with the correct format", () => {
      const id = generateUniqueId();

      // Ensure that the generated ID matches the expected format
      expect(id).toMatch(/^_[a-z0-9]{9}$/);
    });
  });
});
