"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validators = /** @class */ (function () {
    function Validators() {
    }
    Validators.prototype.checkPreconditions = function (command, executor) {
        if (command.precondition && !executor.hasPermission(command.precondition))
            throw new TypeError("**Required Permission**: `" + command.precondition + "`");
    };
    return Validators;
}());
exports.default = Validators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtJQUtBLENBQUM7SUFKRyx1Q0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0IsRUFBRSxRQUFxQjtRQUN0RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDckUsTUFBTSxJQUFJLFNBQVMsQ0FBQywrQkFBOEIsT0FBTyxDQUFDLFlBQVksTUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0MifQ==