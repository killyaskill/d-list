"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedGuild = exports.Listing = void 0;
var mongoose_1 = require("mongoose");
var Listing = /** @class */ (function () {
    function Listing() {
        this.body = 'A server that has not yet been edited.';
        this.overview = 'No description set.';
        this.tags = [];
    }
    return Listing;
}());
exports.Listing = Listing;
var guildSchema = new mongoose_1.Schema({
    _id: String,
    badges: { type: Array, default: [] },
    invite: { type: String, default: '' },
    listing: { type: Object, default: new Listing() },
    ownerId: String,
    totalVotes: { type: Number, default: 0 },
    lastBumpAt: Date,
    lastVoteAt: Date,
    votes: { type: Array, default: [] }
});
exports.SavedGuild = mongoose_1.model('guild', guildSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YS9tb2RlbHMvZ3VpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW1EO0FBT25EO0lBQUE7UUFDSSxTQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFFaEQsYUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ2pDLFNBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksMEJBQU87QUFZcEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQzNCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtJQUNyQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLE9BQU8sRUFBRSxFQUFFO0lBQ2pELE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQ3hDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtDQUN0QyxDQUFDLENBQUM7QUFjVSxRQUFBLFVBQVUsR0FBRyxnQkFBSyxDQUFnQixPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMifQ==