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
var discord_js_1 = require("discord.js");
var guilds_1 = __importDefault(require("../../data/guilds"));
var config_json_1 = __importDefault(require("../../../config.json"));
var GuildCreateHandler = /** @class */ (function () {
    function GuildCreateHandler(guilds) {
        if (guilds === void 0) { guilds = deps_1.default.get(guilds_1.default); }
        this.guilds = guilds;
        this.on = 'guildCreate';
    }
    GuildCreateHandler.prototype.invoke = function (guild) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.guilds.get(guild)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.sendJoinMessage(guild)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GuildCreateHandler.prototype.sendJoinMessage = function (guild) {
        var _a;
        return (_a = guild.systemChannel) === null || _a === void 0 ? void 0 : _a.send(new discord_js_1.MessageEmbed({
            title: "Hey!",
            fields: [
                { name: ':rocket: Check out your server listing...', value: config_json_1.default.dashboardURL + "/servers/" + guild.id },
                { name: ':art: Customize it at...', value: config_json_1.default.dashboardURL + "/dashboard/servers/" + guild.id + "/edit" }
            ],
            thumbnail: { url: guild.iconURL({ dynamic: true, size: 64 }) }
        }));
    };
    return GuildCreateHandler;
}());
exports.default = GuildCreateHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQtY3JlYXRlLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvaGFuZGxlcnMvZ3VpbGQtY3JlYXRlLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwREFBb0M7QUFDcEMseUNBQWlEO0FBQ2pELDZEQUF1QztBQUN2QyxxRUFBMEM7QUFFMUM7SUFHSSw0QkFBb0IsTUFBaUM7UUFBakMsdUJBQUEsRUFBQSxTQUFTLGNBQUksQ0FBQyxHQUFHLENBQVMsZ0JBQU0sQ0FBQztRQUFqQyxXQUFNLEdBQU4sTUFBTSxDQUEyQjtRQUZyRCxPQUFFLEdBQUcsYUFBYSxDQUFDO0lBRXFDLENBQUM7SUFFbkQsbUNBQU0sR0FBWixVQUFhLEtBQVk7Ozs7OzRCQUNyQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTVCLFNBQTRCLENBQUM7Ozs7d0JBR3pCLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFDOzs7Ozs7Ozs7S0FFekM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLEtBQVk7O1FBQ3hCLGFBQU8sS0FBSyxDQUFDLGFBQWEsMENBQ3BCLElBQUksQ0FBQyxJQUFJLHlCQUFZLENBQUM7WUFDcEIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUU7Z0JBQ0osRUFBRSxJQUFJLEVBQUUsMkNBQTJDLEVBQUUsS0FBSyxFQUFLLHFCQUFNLENBQUMsWUFBWSxpQkFBWSxLQUFLLENBQUMsRUFBSSxFQUFFO2dCQUMxRyxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUsscUJBQU0sQ0FBQyxZQUFZLDJCQUFzQixLQUFLLENBQUMsRUFBRSxVQUFPLEVBQUU7YUFDM0c7WUFDRCxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7U0FDakUsQ0FBQyxFQUFFO0lBQ1osQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQyJ9