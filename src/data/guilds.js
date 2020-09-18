"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var guild_1 = require("./models/guild");
var db_wrapper_1 = __importDefault(require("./db-wrapper"));
var command_utils_1 = require("../utils/command-utils");
var bot_1 = require("../bot");
var Guilds = /** @class */ (function (_super) {
    __extends(Guilds, _super);
    function Guilds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guilds.prototype.getOrCreate = function (guild) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var savedGuild, _b, votedForThisWeek;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!guild.id || guild.id === 'user')
                            return [2 /*return*/, null];
                        return [4 /*yield*/, guild_1.SavedGuild.findById(guild.id)];
                    case 1:
                        if (!((_a = _c.sent()) !== null && _a !== void 0)) return [3 /*break*/, 2];
                        _b = _a;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.create(guild)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        savedGuild = _b;
                        votedForThisWeek = savedGuild.lastVoteAt
                            && command_utils_1.getWeek(savedGuild.lastVoteAt) === command_utils_1.getWeek(new Date());
                        if (!votedForThisWeek)
                            savedGuild.votes = [];
                        return [2 /*return*/, savedGuild];
                }
            });
        });
    };
    Guilds.prototype.create = function (guild) {
        var savedGuild = new guild_1.SavedGuild({
            _id: guild.id,
            ownerId: guild.ownerID
        });
        bot_1.emitter.emit('savedGuildCreate', savedGuild);
        return savedGuild.save();
    };
    Guilds.prototype.delete = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, guild_1.SavedGuild.findByIdAndDelete(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    Guilds.prototype.exists = function (id) {
        return guild_1.SavedGuild.exists({ _id: id });
    };
    Guilds.prototype.getManageable = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, guild_1.SavedGuild.find({ ownerId: id })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    Guilds.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, guild_1.SavedGuild.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Guilds;
}(db_wrapper_1.default));
exports.default = Guilds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGEvZ3VpbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUEyRDtBQUMzRCw0REFBcUM7QUFDckMsd0RBQWlEO0FBRWpELDhCQUFpQztBQUVqQztJQUFvQywwQkFBK0I7SUFBbkU7O0lBeUNBLENBQUM7SUF4Q21CLDRCQUFXLEdBQTNCLFVBQTRCLEtBQVk7Ozs7Ozs7d0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssTUFBTTs0QkFBRSxzQkFBTyxJQUFJLEVBQUM7d0JBRS9CLHFCQUFNLGtCQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBQTs7b0NBQW5DLFNBQW1DOzs7NEJBQy9DLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF4QixLQUFBLFNBQXdCLENBQUE7Ozt3QkFEekIsVUFBVSxLQUNlO3dCQUV6QixnQkFBZ0IsR0FBRyxVQUFVLENBQUMsVUFBVTsrQkFDdkMsdUJBQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssdUJBQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxnQkFBZ0I7NEJBQ2pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUUxQixzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFFUyx1QkFBTSxHQUFoQixVQUFpQixLQUFZO1FBQ3pCLElBQU0sVUFBVSxHQUFHLElBQUksa0JBQVUsQ0FBQztZQUM5QixHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFDO1FBRUgsYUFBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU3QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUssdUJBQU0sR0FBWixVQUFhLEVBQWE7WUFBWCxFQUFFLFFBQUE7Ozs7NEJBQ04scUJBQU0sa0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBQTs0QkFBN0Msc0JBQU8sU0FBc0MsRUFBQzs7OztLQUNqRDtJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsT0FBTyxrQkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSyw4QkFBYSxHQUFuQixVQUFvQixFQUFzQjtZQUFwQixFQUFFLFFBQUE7Ozs7NEJBQ2IscUJBQU0sa0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQTs0QkFBN0Msc0JBQU8sU0FBc0MsRUFBQzs7OztLQUNqRDtJQUVLLHVCQUFNLEdBQVo7Ozs7NEJBQ1cscUJBQU0sa0JBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs0QkFBOUIsc0JBQU8sU0FBdUIsRUFBQzs7OztLQUNsQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBekNELENBQW9DLG9CQUFTLEdBeUM1QyJ9