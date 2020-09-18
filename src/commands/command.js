"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandContext = void 0;
var CommandContext = /** @class */ (function () {
    function CommandContext(msg) {
        this.msg = msg;
        this.member = msg.member;
        this.channel = msg.channel;
        this.guild = msg.guild;
        this.user = msg.member.user;
        this.bot = msg.client;
    }
    return CommandContext;
}());
exports.CommandContext = CommandContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWtCQTtJQVFJLHdCQUFZLEdBQVk7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBc0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyJ9