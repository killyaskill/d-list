"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeek = exports.createUUID = void 0;
var CommandUtils = /** @class */ (function () {
    function CommandUtils() {
    }
    CommandUtils.getMemberFromMention = function (mention, guild) {
        var _a;
        var id = (_a = mention.replace(/^<@!?(\d+)>$/gm, '$1')) !== null && _a !== void 0 ? _a : '';
        var member = guild.members.cache.get(id);
        if (!member)
            throw new TypeError('Member not found.');
        return member;
    };
    return CommandUtils;
}());
exports.default = CommandUtils;
function createUUID() {
    var time = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var random = (time + Math.random() * 16) % 16 | 0;
        time = Math.floor(time / 16);
        return ((c == 'x') ? random : (random & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
exports.createUUID = createUUID;
function getWeek(date) {
    var yearStart = +new Date(date.getFullYear(), 0, 1);
    var today = +new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var dayOfYear = ((today - yearStart + 1) / 86400000);
    return Math.ceil(dayOfYear / 7).toString();
}
exports.getWeek = getWeek;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21tYW5kLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQUE7SUFTQSxDQUFDO0lBUlUsaUNBQW9CLEdBQTNCLFVBQTRCLE9BQWUsRUFBRSxLQUFVOztRQUNuRCxJQUFNLEVBQUUsU0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxtQ0FBSSxFQUFFLENBQUM7UUFDekQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNO1lBQ1AsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUVELFNBQWdCLFVBQVU7SUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxJQUFJLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztRQUNuRSxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFSRCxnQ0FRQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxJQUFVO0lBQzlCLElBQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0UsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFFdkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBTkQsMEJBTUMifQ==