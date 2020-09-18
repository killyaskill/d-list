"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deps_1 = __importDefault(require("../../utils/deps"));
var guilds_1 = __importDefault(require("../../data/guilds"));
var bot_1 = require("../../bot");
var distinct = function (v, i, a) { return a.indexOf(v) === i; };
var Stats = /** @class */ (function () {
    function Stats(guilds) {
        var _this = this;
        if (guilds === void 0) { guilds = deps_1.default.get(guilds_1.default); }
        this.guilds = guilds;
        this.savedGuilds = [];
        bot_1.emitter.on('savedGuildCreate', function (savedGuild) { return _this.savedGuilds.push(savedGuild); });
    }
    Stats.prototype.general = function (id) {
        var guild = bot_1.bot.guilds.cache.get(id);
        var savedGuild = this.savedGuilds.find(function (b) { return b.id === id; });
        if (!savedGuild || !guild)
            return null;
        return {
            memberCount: guild.members.cache.size,
            lastVoteAt: savedGuild.lastVoteAt,
            totalVotes: savedGuild.totalVotes,
            voteCount: savedGuild.votes.length
        };
    };
    Stats.prototype.votes = function (id) {
        var _a;
        return (_a = this.savedGuilds
            .find(function (b) { return b.id === id; })) === null || _a === void 0 ? void 0 : _a.votes;
    };
    Stats.prototype.recentVotes = function (id) {
        var savedGuild = this.savedGuilds.find(function (b) { return b.id === id; });
        if (!savedGuild)
            return null;
        return Array(7)
            .fill(new Date())
            .map(function (today, i) { return new Date(today - 8.64e7 * i); })
            .map(function (date) { return ({
            day: date.getDate()
                .toString()
                .padStart(2, '0') + "/" + (date.getMonth() + 1)
                .toString()
                .padStart(2, '0'),
            count: savedGuild.votes
                .filter(function (v) { var _a; return ((_a = v.at) === null || _a === void 0 ? void 0 : _a.getDate()) === (date === null || date === void 0 ? void 0 : date.getDate()); }).length
        }); })
            .reverse();
    };
    Stats.prototype.topVoters = function (id) {
        var savedGuild = this.savedGuilds.find(function (b) { return b.id === id; });
        if (!savedGuild)
            return null;
        return savedGuild.votes
            .map(function (c) { return c.by; })
            .filter(distinct)
            .map(function (id) { return ({ userId: id, count: savedGuild.votes.filter(function (v) { return v.by = id; }).length }); });
    };
    Stats.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var interval;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateValues()];
                    case 1:
                        _a.sent();
                        interval = 30 * 60 * 1000;
                        setInterval(function () { return _this.updateValues(); }, interval);
                        return [2 /*return*/];
                }
            });
        });
    };
    Stats.prototype.updateValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.guilds.getAll()];
                    case 1:
                        _a.savedGuilds = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Stats;
}());
exports.default = Stats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21vZHVsZXMvc3RhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBb0M7QUFDcEMsNkRBQXVDO0FBRXZDLGlDQUF5QztBQUV6QyxJQUFNLFFBQVEsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUM7QUFFakQ7SUFHRSxlQUFvQixNQUFpQztRQUFyRCxpQkFHQztRQUhtQix1QkFBQSxFQUFBLFNBQVMsY0FBSSxDQUFDLEdBQUcsQ0FBUyxnQkFBTSxDQUFDO1FBQWpDLFdBQU0sR0FBTixNQUFNLENBQTJCO1FBRjdDLGdCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUd4QyxhQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUMzQixVQUFDLFVBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLElBQU0sS0FBSyxHQUFHLFNBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBRWQsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtZQUNqQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUNuQyxDQUFBO0lBQ0gsQ0FBQztJQUVELHFCQUFLLEdBQUwsVUFBTSxFQUFVOztRQUNkLGFBQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLDBDQUFFLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVTtZQUNiLE9BQU8sSUFBSSxDQUFDO1FBRWQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1osSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDaEIsR0FBRyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSyxPQUFBLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUM7YUFDL0MsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQztZQUNaLEdBQUcsRUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFO2lCQUNYLFFBQVEsRUFBRTtpQkFDVixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUNuQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2xCLFFBQVEsRUFBRTtpQkFDVixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRztZQUN2QixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7aUJBQ3BCLE1BQU0sQ0FBQyxVQUFBLENBQUMsWUFBSSxPQUFBLE9BQUEsQ0FBQyxDQUFDLEVBQUUsMENBQUUsT0FBTyxTQUFPLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxPQUFPLEdBQUUsQ0FBQSxFQUFBLENBQUMsQ0FBQyxNQUFNO1NBQUUsQ0FBQyxFQVRsRCxDQVNrRCxDQUFDO2FBQy9ELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHlCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVU7WUFDYixPQUFPLElBQUksQ0FBQztRQUVkLE9BQU8sVUFBVSxDQUFDLEtBQUs7YUFDcEIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUM7YUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2hCLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQXZFLENBQXVFLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUssb0JBQUksR0FBVjs7Ozs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQXpCLFNBQXlCLENBQUM7d0JBRXBCLFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQzt3QkFDaEMsV0FBVyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7O0tBQ2xEO0lBRUssNEJBQVksR0FBbEI7Ozs7Ozt3QkFDRSxLQUFBLElBQUksQ0FBQTt3QkFBZSxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBN0MsR0FBSyxXQUFXLEdBQUcsU0FBMEIsQ0FBQzs7Ozs7S0FDL0M7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQyJ9