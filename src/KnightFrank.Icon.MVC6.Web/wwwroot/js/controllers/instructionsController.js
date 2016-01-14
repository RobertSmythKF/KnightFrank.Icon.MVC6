// instructionsController.js

(function() {

    "use strict";

    angular.module("instructionsApp").controller("instructionsController", instructionsController);

    function instructionsController() {

        var vm = this;

        // TODO - Initialise from API
        vm.instructions = [
            { Id: 1, InstructionTitle: "Test 1", Address1: "Address 1", Postcode: "SW1 1AA" },
            { Id: 2, InstructionTitle: "Test 2", Address1: "Address 2", Postcode: "SW2 2AA" },
            { Id: 3, InstructionTitle: "Test 3", Address1: "Address 3", Postcode: "SW3 3AA" },
            { Id: 4, InstructionTitle: "Test 4", Address1: "Address 4", Postcode: "SW4 4AA" }
        ];

        vm.editInstruction = function(id) {
            alert("TODO - Implement");
        };

        vm.deleteInstruction = function (id) {

            if (confirm("Are you sure you want to delete this instruction?"))
                alert("TODO - Implement");
        };

        vm.createInstruction = function () {
            alert("TODO - Implement");
        };
    }

})();