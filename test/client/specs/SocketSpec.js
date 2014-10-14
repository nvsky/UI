"use strict";

describe("Socket Factory", function () {

    beforeEach(module("BrowserSync"));

    var socket;
    var onSpy;
    var offSpy;

    before(function () {
        onSpy = sinon.spy(___browserSync___.socket, "on");
        offSpy = sinon.spy(___browserSync___.socket, "removeListener");
    });

    beforeEach(inject(function ($injector) {
        socket = $injector.get("Socket");
    }));
    afterEach(function () {
        onSpy.reset();
        offSpy.reset();
    });

    it("should be available", function () {
        assert.isDefined(socket);
    });
    it("should have a registerEvent Function", function () {
        assert.isDefined(socket.on);
    });
    it("should add an event", function () {
        var cb = sinon.stub();
        socket.on("event", cb);
        sinon.assert.calledWithExactly(onSpy, "event", cb);
    });
    it("should remove an event", function () {
        var cb = sinon.stub();
        socket.removeEvent("eventRm", cb);
        sinon.assert.calledWithExactly(offSpy, "eventRm", cb);
    });
});