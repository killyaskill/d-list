"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cooldowns = /** @class */ (function () {
    function Cooldowns() {
        this.cooldowns = [];
    }
    Cooldowns.prototype.get = function (member, command) {
        return this.cooldowns
            .find(function (c) { return (c.userId === member.id
            && c.commandName === command.name)
            || (c.commandName === command.name
                && c.guildId === member.guild.id); });
    };
    Cooldowns.prototype.add = function (member, command) {
        var _this = this;
        var _a;
        var cooldown = {
            userId: member.id,
            commandName: command.name,
            guildId: member.guild.id
        };
        if (!this.get(member, command))
            this.cooldowns.push(cooldown);
        var seconds = ((_a = command.cooldown) !== null && _a !== void 0 ? _a : 0) * 1000;
        setTimeout(function () { return _this.remove(member, command); }, seconds);
    };
    Cooldowns.prototype.remove = function (member, command) {
        var index = this.cooldowns
            .findIndex(function (c) { return (c.userId === member.id
            && c.commandName === command.name)
            || (c.commandName === command.name
                && c.guildId === member.guild.id); });
        this.cooldowns.splice(index, 1);
    };
    return Cooldowns;
}());
exports.default = Cooldowns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vbGRvd25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2Nvb2xkb3ducy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQUE7UUFDWSxjQUFTLEdBQXNCLEVBQUUsQ0FBQztJQThCOUMsQ0FBQztJQTVCRyx1QkFBRyxHQUFILFVBQUksTUFBbUIsRUFBRSxPQUFnQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxTQUFTO2FBQ2hCLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsRUFBRTtlQUN2QixDQUFDLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUM7ZUFDbkMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxJQUFJO21CQUMzQixDQUFDLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBSDlCLENBRzhCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsdUJBQUcsR0FBSCxVQUFJLE1BQW1CLEVBQUUsT0FBZ0I7UUFBekMsaUJBWUM7O1FBWEcsSUFBTSxRQUFRLEdBQUc7WUFDYixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDakIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ3pCLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7U0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsSUFBTSxPQUFPLEdBQUcsT0FBQyxPQUFPLENBQUMsUUFBUSxtQ0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0MsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsMEJBQU0sR0FBTixVQUFPLE1BQW1CLEVBQUUsT0FBZ0I7UUFDeEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFO2VBQzVCLENBQUMsQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQztlQUNuQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLElBQUk7bUJBQzNCLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFIekIsQ0FHeUIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDIn0=