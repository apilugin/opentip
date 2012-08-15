// Generated by CoffeeScript 1.3.3

describe("utils", function() {
  describe("sanitizePosition()", function() {
    return it("should properly parse all 8 possible positions", function() {
      expect(Opentip.prototype.sanitizePosition(["center", "top"])).to.equal(Opentip.prototype.position.top);
      expect(Opentip.prototype.sanitizePosition(["right", "top"])).to.equal(Opentip.prototype.position.topRight);
      expect(Opentip.prototype.sanitizePosition(["right", "middle"])).to.equal(Opentip.prototype.position.right);
      expect(Opentip.prototype.sanitizePosition(["right", "bottom"])).to.equal(Opentip.prototype.position.bottomRight);
      expect(Opentip.prototype.sanitizePosition(["center", "bottom"])).to.equal(Opentip.prototype.position.bottom);
      expect(Opentip.prototype.sanitizePosition(["left", "bottom"])).to.equal(Opentip.prototype.position.bottomLeft);
      expect(Opentip.prototype.sanitizePosition(["left", "middle"])).to.equal(Opentip.prototype.position.left);
      return expect(Opentip.prototype.sanitizePosition(["left", "top"])).to.equal(Opentip.prototype.position.topLeft);
    });
  });
  return describe("ucfirst()", function() {
    return it("should transform the first character to uppercase", function() {
      return expect(Opentip.prototype.ucfirst("abc def")).to.equal("Abc def");
    });
  });
});
