var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.testzone = {};
        this.countDown = "";
        this.count = 0;
    },

    bindEvents: function() {
        document.addEventListener("deviceready", this.onDeviceReady, false);
        document.addEventListener("pause", this.onPause, false);
        document.addEventListener("resume", this.onResume, false);
        document.addEventListener("online", this.onOnline, false);
        document.addEventListener("offline", this.onOffline, false);
    },

    onDeviceReady: function() {
        console.log("Ready");

        window.addEventListener("batterycritical", app.onBatteryCritical, false);
        window.addEventListener("batterylow", app.onBatteryLow, false);
        window.addEventListener("batterystatus", app.onBatteryStatus, false);
        document.addEventListener("menubutton", app.onMenuButton, false);
        document.addEventListener("searchbutton", app.onSearchButton, false);
        document.addEventListener("backbutton", app.onBackButton, false);

        app.testzone = document.getElementById("test-zone");
    },
    onPause: function() {
        app.testzone.innerHTML += "<br />PAUSED";
    },
    onResume: function() {
        app.testzone.innerHTML += "<br />RESUMED";
    },
    onOnline: function() {
        app.testzone.innerHTML += "<br />ONLINE";
    },
    onOffline: function() {
        app.testzone.innerHTML += "<br />OFFLINE";
    },
    onBackButton: function() {
        app.testzone.innerHTML += "<br />BACK BUTTON";
    },
    onMenuButton: function() {
        app.testzone.innerHTML += "<br />MENU BUTTON";
    },
    onSearchButton: function() {
        app.testzone.innerHTML += "<br />SEARCH BUTTON";
    },
    onBatteryCritical: function() {
        app.testzone.innerHTML += "<br />BATTERY CRITICAL";
    },
    onBatteryLow: function() {
        app.testzone.innerHTML += "<br />BATTERY LOW";
    },
    onBatteryStatus: function(info) {
        app.testzone.innerHTML += "<br />BATTER STATUS: " + info.level + "% and isPlugged: " + info.isPlugged;
    },
	
	/************/
	halkibsi_test: function(){
		alert("السلام عليكم");
	}
};
