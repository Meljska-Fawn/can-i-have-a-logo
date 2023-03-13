const { describe, it } = require("node:test");
const { Square, Circle, Triangle } = require("./shapes");

var expect = chai.expect;

describe("shapes", function () {
    it("should return as a blue triangle", function () {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    it("should return as a blue circle", function () {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    it("should return as a blue square", function () {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" r="80" fill="blue" />');
    });

});