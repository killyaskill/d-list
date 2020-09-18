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
var server_1 = require("../server");
var config_json_1 = __importDefault(require("../../../config.json"));
var bot_1 = require("../../bot");
var discord_js_1 = require("discord.js");
var api_utils_1 = require("../modules/api-utils");
exports.router = express_1.Router();
exports.router.get('/', function (req, res) { return res.json({ elthre: 'hlao' }); });
exports.router.get('/auth', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var key, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, server_1.AuthClient.getAccess(req.query.code)];
            case 1:
                key = _a.sent();
                res.redirect(config_json_1.default.dashboardURL + "/auth?key=" + key);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                api_utils_1.sendError(res, 400, error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.post('/error', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var message, key, user, _a, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                message = req.body.message, key = req.query.key;
                if (!(key)) return [3 /*break*/, 2];
                return [4 /*yield*/, server_1.AuthClient.getUser(key)];
            case 1:
                _a = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = { id: 'N/A' };
                _b.label = 3;
            case 3:
                user = _a;
                return [4 /*yield*/, bot_1.bot.users.cache
                        .get(config_json_1.default.bot.ownerId)
                        .send(new discord_js_1.MessageEmbed({
                        title: 'Dashboard Error',
                        description: "**Message**: " + message,
                        footer: { text: "User ID: " + user.id }
                    }))];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                error_2 = _b.sent();
                api_utils_1.sendError(res, 400, error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/invite', function (req, res) {
    return res.redirect("https://discordapp.com/api/oauth2/authorize?client_id=" + config_json_1.default.bot.id + "&redirect_uri=" + config_json_1.default.dashboardURL + "/dashboard&permissions=2065&scope=bot");
});
exports.router.get('/login', function (req, res) {
    return res.redirect("https://discordapp.com/oauth2/authorize?client_id=" + config_json_1.default.bot.id + "&redirect_uri=" + config_json_1.default.api.url + "/auth&response_type=code&scope=identify&guilds&prompt=none");
});
exports.router.get('*', function (req, res) { return api_utils_1.sendError(res, 404, new TypeError('Not found.')); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL2FwaS1yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLG9DQUF1QztBQUN2QyxxRUFBMEM7QUFDMUMsaUNBQWdDO0FBQ2hDLHlDQUEwQztBQUMxQyxrREFBaUQ7QUFFcEMsUUFBQSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRS9CLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0FBRTVELGNBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7OztnQkFFbkIscUJBQU0sbUJBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQWhELEdBQUcsR0FBRyxTQUEwQztnQkFDdEQsR0FBRyxDQUFDLFFBQVEsQ0FBSSxxQkFBTSxDQUFDLFlBQVksa0JBQWEsR0FBSyxDQUFDLENBQUM7Ozs7Z0JBQ3ZDLHFCQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFLLENBQUMsQ0FBQzs7Ozs7S0FDOUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBTSxHQUFHLEVBQUUsR0FBRzs7Ozs7O2dCQUV4QixPQUFPLEdBQUssR0FBRyxDQUFDLElBQUksUUFBYixFQUNQLEdBQUcsR0FBSyxHQUFHLENBQUMsS0FBSyxJQUFkLENBQWU7cUJBQ2YsQ0FBQyxHQUFHLENBQUMsRUFBTCx3QkFBSztnQkFBRyxxQkFBTSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQTs7Z0JBQTdCLEtBQUEsU0FBNkIsQ0FBQTs7O2dCQUFHLEtBQUEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUE7OztnQkFBNUQsSUFBSSxLQUF3RDtnQkFFaEUscUJBQU0sU0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLO3lCQUNsQixHQUFHLENBQUMscUJBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO3lCQUN2QixJQUFJLENBQUMsSUFBSSx5QkFBWSxDQUFDO3dCQUNyQixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixXQUFXLEVBQUUsa0JBQWdCLE9BQVM7d0JBQ3RDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxjQUFZLElBQUksQ0FBQyxFQUFJLEVBQUU7cUJBQ3hDLENBQUMsQ0FBQyxFQUFBOztnQkFOTCxTQU1LLENBQUM7Ozs7Z0JBQ1kscUJBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQUssQ0FBQyxDQUFDOzs7OztLQUNoRCxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzdCLE9BQUEsR0FBRyxDQUFDLFFBQVEsQ0FBQywyREFBeUQscUJBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxzQkFBaUIscUJBQU0sQ0FBQyxZQUFZLDBDQUF1QyxDQUFDO0FBQS9KLENBQStKLENBQUMsQ0FBQztBQUVuSyxjQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzVCLE9BQUEsR0FBRyxDQUFDLFFBQVEsQ0FBQyx1REFBcUQscUJBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxzQkFBaUIscUJBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRywrREFBNEQsQ0FBQztBQUEzSyxDQUEySyxDQUFDLENBQUM7QUFFL0ssY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEscUJBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQyJ9