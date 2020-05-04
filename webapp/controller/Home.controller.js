sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ui5demo.sapui5app.controller.Home", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ui5demo.sapui5app.view.Home
		 */
		onInit: function () {

		},
		goToAbout: function () {
			new sap.ui.core.UIComponent.getRouterFor(this).navTo("about");
		},
		goToUsers: function () {
			new sap.ui.core.UIComponent.getRouterFor(this).navTo("users");
		},
		goToEmployee: function () {
			new sap.ui.core.UIComponent.getRouterFor(this).navTo("employee");
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ui5demo.sapui5app.view.Home
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ui5demo.sapui5app.view.Home
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ui5demo.sapui5app.view.Home
		 */
		//	onExit: function() {
		//
		//	}

	});

});