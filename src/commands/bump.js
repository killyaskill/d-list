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
var config_json_1 = __importDefault(require("../../config.json"));
var BumpCommand = /** @class */ (function () {
    function BumpCommand(guilds) {
        var _this = this;
        if (guilds === void 0) { guilds = deps_1.default.get(guilds_1.default); }
        this.guilds = guilds;
        this.name = 'bump';
        this.summary = 'Bump your server.';
        this.precondition = '';
        this.cooldown = 60 * 60;
        this.module = 'General';
        this.execute = function (ctx) { return __awaiter(_this, void 0, void 0, function () {
            var savedGuild;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.guilds.get(ctx.guild)];
                    case 1:
                        savedGuild = _a.sent();
                        savedGuild.lastBumpAt = new Date();
                        return [4 /*yield*/, savedGuild.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, ctx.channel.send("\uD83D\uDC4A Bumped -> " + config_json_1.default.dashboardURL)];
                }
            });
        }); };
    }
    return BumpCommand;
}());
exports.default = BumpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9idW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMERBQW9DO0FBQ3BDLHVEQUFpQztBQUNqQyxrRUFBdUM7QUFFdkM7SUFPSSxxQkFBb0IsTUFBaUM7UUFBckQsaUJBQXlEO1FBQXJDLHVCQUFBLEVBQUEsU0FBUyxjQUFJLENBQUMsR0FBRyxDQUFTLGdCQUFNLENBQUM7UUFBakMsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFOckQsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztRQUM5QixpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QixhQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQUcsU0FBUyxDQUFDO1FBSW5CLFlBQU8sR0FBRyxVQUFPLEdBQW1COzs7OzRCQUNiLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTdDLFVBQVUsR0FBRyxTQUFnQzt3QkFDbkQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3dCQUNuQyxxQkFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDO3dCQUV4QixzQkFBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBZ0IscUJBQU0sQ0FBQyxZQUFjLENBQUMsRUFBQzs7O2FBQ2xFLENBQUE7SUFSdUQsQ0FBQztJQVM3RCxrQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMifQ==