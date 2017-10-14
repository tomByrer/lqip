const chai = require("chai");
const mockFiles = require("mock-fs");
const chaiAsPromised = require("chai-as-promised");
const lqip = require("../index");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("lqip base64 function", () => {
  it("hould reject uknown or unsupported file formats", done => {
    const file = "test/dir/images/earth.mp3";
    let lqipped = lqip.base64(file);
    expect(lqipped).to.be.rejected.and.notify(done);
  });

  it("should generate a valid base64", done => {
    const file = `${__dirname}/img/riding-a-bike.jpg`;
    const expectedBase64 =
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAA4DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAABAwMFAQAAAAAAAAAAAAABAgMFABEhBAYTFCIx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDBBL/2gAMAwEAAhEDEQA/AKWxvLRuQPWaeDKlIHgskAm2AbD5ipbCykXuCHckJApRy6lRSxxnwLYyBnFKVGua3KxOvRFn/9k=";
    let lqipped = lqip.base64(file);
    expect(lqipped).to.be.eventually.equal(expectedBase64).notify(done);
  });
});


describe("lqip palette function", () => {
    it("should generate a color palette", done => {
        const file = `${__dirname}/img/riding-a-bike.jpg`;
        let lqipped = lqip.palette(file);
        expect(lqipped).to.eventually.have.lengthOf(6).notify(done);
    });
});
