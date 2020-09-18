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
exports.router = void 0;
var express_1 = require("express");
var deps_1 = __importDefault(require("../../../utils/deps"));
var guilds_1 = __importDefault(require("../../../data/guilds"));
var guild_logs_1 = __importDefault(require("../../../data/guild-logs"));
var api_utils_1 = require("../../modules/api-utils");
var api_utils_2 = require("../../modules/api-utils");
var bot_1 = require("../../../bot");
exports.router = express_1.Router();
var guilds = deps_1.default.get(guilds_1.default), logs = deps_1.default.get(guild_logs_1.default);
exports.router.put('/:id([0-9]{18})', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, key, savedGuild, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                key = req.query.key;
                return [4 /*yield*/, api_utils_1.validateGuildManager(key, id)];
            case 1:
                _a.sent();
                return [4 /*yield*/, api_utils_2.validateCanEdit(req, id)];
            case 2:
                _a.sent();
                return [4 /*yield*/, api_utils_2.saveBotAndChanges(req, id)];
            case 3:
                savedGuild = _a.sent();
                res.json(savedGuild);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                api_utils_2.sendError(res, 400, error_1);
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.delete('/:id([0-9]{18})', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, key, guild, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                key = req.query.key;
                return [4 /*yield*/, api_utils_1.validateGuildManager(key, id)];
            case 1:
                _a.sent();
                guild = bot_1.bot.guilds.cache.get(req.params.id);
                return [4 /*yield*/, guilds.delete(guild)];
            case 2:
                _a.sent();
                res.json({ success: true });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                api_utils_2.sendError(res, 400, error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWd1aWxkcy1yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy9ndWlsZHMvbWFuYWdlLWd1aWxkcy1yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLDZEQUF1QztBQUN2QyxnRUFBMEM7QUFDMUMsd0VBQStDO0FBQy9DLHFEQUErRDtBQUMvRCxxREFBd0Y7QUFDeEYsb0NBQW1DO0FBRXRCLFFBQUEsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUUvQixJQUFNLE1BQU0sR0FBRyxjQUFJLENBQUMsR0FBRyxDQUFTLGdCQUFNLENBQUMsRUFDakMsSUFBSSxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQVUsb0JBQU8sQ0FBQyxDQUFDO0FBRXhDLGNBQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsVUFBTyxHQUFHLEVBQUUsR0FBRzs7Ozs7O2dCQUVqQyxFQUFFLEdBQUssR0FBRyxDQUFDLE1BQU0sR0FBZixDQUFnQjtnQkFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUUxQixxQkFBTSxnQ0FBb0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUE7O2dCQUFuQyxTQUFtQyxDQUFDO2dCQUNwQyxxQkFBTSwyQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBQTs7Z0JBQTlCLFNBQThCLENBQUM7Z0JBRWQscUJBQU0sNkJBQWlCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBN0MsVUFBVSxHQUFHLFNBQWdDO2dCQUVqRCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O2dCQUNMLHFCQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFLLENBQUMsQ0FBQztnQkFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDOzs7OztLQUVsRSxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7OztnQkFFcEMsRUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Z0JBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFFMUIscUJBQU0sZ0NBQW9CLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBbkMsU0FBbUMsQ0FBQztnQkFFOUIsS0FBSyxHQUFHLFNBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxxQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFBOztnQkFBMUIsU0FBMEIsQ0FBQztnQkFFM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7O2dCQUNaLHFCQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFLLENBQUMsQ0FBQzs7Ozs7S0FDOUMsQ0FBQyxDQUFDIn0=