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
var guilds_1 = __importDefault(require("../data/guilds"));
var deps_1 = __importDefault(require("../utils/deps"));
var InviteCommand = /** @class */ (function () {
    function InviteCommand(guilds) {
        var _this = this;
        if (guilds === void 0) { guilds = deps_1.default.get(guilds_1.default); }
        this.guilds = guilds;
        this.name = 'invite';
        this.summary = 'Update the invite for your server.';
        this.precondition = 'MANAGE_CHANNELS';
        this.cooldown = 1 * 60;
        this.module = 'General';
        this.execute = function (ctx) { return __awaiter(_this, void 0, void 0, function () {
            var savedGuild, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.guilds.get(ctx.guild)];
                    case 1:
                        savedGuild = _a.sent();
                        savedGuild.lastBumpAt = new Date();
                        return [4 /*yield*/, ctx.channel
                                .createInvite({ temporary: false, maxAge: 0, reason: 'Invite command executed.' })];
                    case 2:
                        code = (_a.sent()).code;
                        savedGuild.invite = code;
                        return [4 /*yield*/, savedGuild.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, ctx.channel.send("\u2611 Invite updated to `" + code + "`!")];
                }
            });
        }); };
    }
    return InviteCommand;
}());
exports.default = InviteCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBEQUFvQztBQUNwQyx1REFBaUM7QUFFakM7SUFPSSx1QkFBb0IsTUFBaUM7UUFBckQsaUJBQXlEO1FBQXJDLHVCQUFBLEVBQUEsU0FBUyxjQUFJLENBQUMsR0FBRyxDQUFTLGdCQUFNLENBQUM7UUFBakMsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFOckQsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixZQUFPLEdBQUcsb0NBQW9DLENBQUM7UUFDL0MsaUJBQVksR0FBZSxpQkFBaUIsQ0FBQztRQUM3QyxhQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQUcsU0FBUyxDQUFDO1FBSW5CLFlBQU8sR0FBRyxVQUFPLEdBQW1COzs7OzRCQUNiLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTdDLFVBQVUsR0FBRyxTQUFnQzt3QkFDbkQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3dCQUVsQixxQkFBTSxHQUFHLENBQUMsT0FBTztpQ0FDN0IsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLEVBQUE7O3dCQUQ5RSxJQUFJLEdBQUssQ0FBQSxTQUNxRSxDQUFBLEtBRDFFO3dCQUdaLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixxQkFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDO3dCQUV4QixzQkFBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBeUIsSUFBSSxPQUFLLENBQUMsRUFBQzs7O2FBQy9ELENBQUE7SUFidUQsQ0FBQztJQWM3RCxvQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMifQ==