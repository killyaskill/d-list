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
var log_1 = __importDefault(require("../../utils/log"));
var bot_1 = require("../../bot");
var config_json_1 = __importDefault(require("../../../config.json"));
var command_service_1 = __importDefault(require("../command.service"));
var deps_1 = __importDefault(require("../../utils/deps"));
var server_1 = require("../../api/server");
var ReadyHandler = /** @class */ (function () {
    function ReadyHandler(commandService, api) {
        if (commandService === void 0) { commandService = deps_1.default.get(command_service_1.default); }
        if (api === void 0) { api = deps_1.default.get(server_1.API); }
        this.commandService = commandService;
        this.api = api;
        this.on = 'ready';
    }
    ReadyHandler.prototype.invoke = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log_1.default.info("Bot is live!", "events");
                        return [4 /*yield*/, bot_1.bot.user.setPresence({
                                activity: {
                                    name: config_json_1.default.bot.activity,
                                    type: 'WATCHING',
                                    url: 'https://dlist.xyz'
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.commandService.init()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.initSitemaps()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ReadyHandler;
}());
exports.default = ReadyHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9oYW5kbGVycy9yZWFkeS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQWtDO0FBRWxDLGlDQUFnQztBQUNoQyxxRUFBMEM7QUFDMUMsdUVBQWdEO0FBQ2hELDBEQUFvQztBQUNwQywyQ0FBdUM7QUFFdkM7SUFHSSxzQkFDWSxjQUF5RCxFQUN6RCxHQUF3QjtRQUR4QiwrQkFBQSxFQUFBLGlCQUFpQixjQUFJLENBQUMsR0FBRyxDQUFpQix5QkFBYyxDQUFDO1FBQ3pELG9CQUFBLEVBQUEsTUFBTSxjQUFJLENBQUMsR0FBRyxDQUFNLFlBQUcsQ0FBQztRQUR4QixtQkFBYyxHQUFkLGNBQWMsQ0FBMkM7UUFDekQsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFKcEMsT0FBRSxHQUFHLE9BQU8sQ0FBQztJQUkwQixDQUFDO0lBRWxDLDZCQUFNLEdBQVo7Ozs7O3dCQUNJLGFBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUVuQyxxQkFBTSxTQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQ0FDdkIsUUFBUSxFQUFFO29DQUNOLElBQUksRUFBRSxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRO29DQUN6QixJQUFJLEVBQUUsVUFBVTtvQ0FDaEIsR0FBRyxFQUFFLG1CQUFtQjtpQ0FDM0I7NkJBQ0osQ0FBQyxFQUFBOzt3QkFORixTQU1FLENBQUM7d0JBRUgscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQWhDLFNBQWdDLENBQUM7d0JBQ2pDLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDOzs7OztLQUNqQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQyJ9