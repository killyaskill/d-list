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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var bot_1 = require("../../../bot");
var guilds_1 = __importDefault(require("../../../data/guilds"));
var guild_1 = require("../../../data/models/guild");
var users_1 = __importDefault(require("../../../data/users"));
var deps_1 = __importDefault(require("../../../utils/deps"));
var api_utils_1 = require("../../modules/api-utils");
var guild_widget_generator_1 = require("../../modules/image/guild-widget-generator");
var stats_1 = __importDefault(require("../../modules/stats"));
var config_json_1 = __importDefault(require("../../../../config.json"));
var discord_js_1 = require("discord.js");
var server_1 = require("../../server");
exports.router = express_1.Router();
var guilds = deps_1.default.get(guilds_1.default), stats = deps_1.default.get(stats_1.default), users = deps_1.default.get(users_1.default);
exports.router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var guilds_2, savedGuilds, savedGuilds_1, savedGuilds_1_1, savedGuild, guild, error_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                guilds_2 = [];
                return [4 /*yield*/, guild_1.SavedGuild.find()];
            case 1:
                savedGuilds = _b.sent();
                try {
                    for (savedGuilds_1 = __values(savedGuilds), savedGuilds_1_1 = savedGuilds_1.next(); !savedGuilds_1_1.done; savedGuilds_1_1 = savedGuilds_1.next()) {
                        savedGuild = savedGuilds_1_1.value;
                        guild = bot_1.bot.guilds.cache.get(savedGuild.id);
                        if (!guild)
                            continue;
                        guilds_2.push(api_utils_1.toAPIGuild(guild));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (savedGuilds_1_1 && !savedGuilds_1_1.done && (_a = savedGuilds_1.return)) _a.call(savedGuilds_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                res.json({ saved: savedGuilds, guilds: guilds_2 });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                api_utils_1.sendError(res, 400, error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authUser, bots, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                authUser = server_1.AuthClient.getUser(req.query.key);
                return [4 /*yield*/, api_utils_1.getManagableGuilds(authUser.id)];
            case 1:
                bots = _a.sent();
                res.json(bots);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                api_utils_1.sendError(res, 400, error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id', function (req, res) {
    try {
        var guild = bot_1.bot.guilds.cache.get(req.params.id);
        res.json(api_utils_1.toAPIGuild(guild));
    }
    catch (error) {
        api_utils_1.sendError(res, 400, error);
    }
});
exports.router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, guild, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, api_utils_1.validateGuildManager(req.query.key, id)];
            case 1:
                _a.sent();
                guild = bot_1.bot.guilds.cache.get(id);
                return [4 /*yield*/, guilds.delete(guild)];
            case 2:
                _a.sent();
                res.json({ success: true });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                api_utils_1.sendError(res, 400, error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/vote', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var voter, savedVoter, guild, savedGuild, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, api_utils_1.getUser(req.query.key)];
            case 1:
                voter = _a.sent();
                return [4 /*yield*/, users.get(voter)];
            case 2:
                savedVoter = _a.sent();
                api_utils_1.validateIfCanVote(savedVoter);
                savedVoter.lastVotedAt = new Date();
                return [4 /*yield*/, savedVoter.save()];
            case 3:
                _a.sent();
                guild = bot_1.bot.guilds.cache.get(req.params.id);
                return [4 /*yield*/, guilds.get(guild)];
            case 4:
                savedGuild = _a.sent();
                savedGuild.votes.push({ at: new Date(), by: voter.id });
                savedGuild.totalVotes++;
                savedGuild.lastVoteAt = new Date();
                return [4 /*yield*/, savedGuild.save()];
            case 5:
                _a.sent();
                res.json({ success: true });
                return [3 /*break*/, 7];
            case 6:
                error_4 = _a.sent();
                api_utils_1.sendError(res, 400, error_4);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/saved', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var guild, savedGuild, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                guild = bot_1.bot.guilds.cache.get(req.params.id);
                return [4 /*yield*/, guilds.get(guild)];
            case 1:
                savedGuild = _a.sent();
                res.json(savedGuild);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                api_utils_1.sendError(res, 400, error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/widget', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var guild, savedGuild, image, error_6;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                guild = bot_1.bot.guilds.cache.get(req.params.id);
                return [4 /*yield*/, guilds.get(guild)];
            case 1:
                savedGuild = _c.sent();
                return [4 /*yield*/, new guild_widget_generator_1.ServerWidgetGenerator(guild, savedGuild)
                        .generate((_b = (_a = req.query.size) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : 'large')];
            case 2:
                image = _c.sent();
                res.set({ 'Content-Type': 'image/png' }).send(image);
                return [3 /*break*/, 4];
            case 3:
                error_6 = _c.sent();
                api_utils_1.sendError(res, 400, error_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/stats', function (req, res) {
    var id = req.params.id;
    res.json({
        general: stats.general(id),
        topVoters: stats.topVoters(id),
        votes: stats.votes(id),
        recentVotes: stats.recentVotes(id)
    });
});
exports.router.get('/:id/report', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authUser, user, targetGuild, error_7;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                return [4 /*yield*/, api_utils_1.getUser(req.query.key)];
            case 1:
                authUser = _c.sent();
                user = bot_1.bot.users.cache.get(authUser.id);
                targetGuild = bot_1.bot.guilds.cache.get(req.params.id);
                if (!targetGuild)
                    throw new TypeError('Gulld not found.');
                return [4 /*yield*/, ((_b = (_a = bot_1.bot.guilds.cache
                        .get(config_json_1.default.guild.id)) === null || _a === void 0 ? void 0 : _a.channels.cache.get(config_json_1.default.guild.reportChannelId)) === null || _b === void 0 ? void 0 : _b.send(new discord_js_1.MessageEmbed({
                        title: "Report for `" + targetGuild.name + "`",
                        fields: [
                            { name: 'Server ID', value: "`" + targetGuild.id + "`" },
                            { name: 'Reason', value: req.query.reason }
                        ],
                        thumbnail: { url: targetGuild.iconURL({ dynamic: true, size: 64 }) },
                        footer: {
                            text: "Reported by " + user.tag + " - " + user.id,
                            iconURL: user.avatarURL({ dynamic: true, size: 32 })
                        }
                    })))];
            case 2:
                _c.sent();
                res.json({ success: true });
                return [3 /*break*/, 4];
            case 3:
                error_7 = _c.sent();
                api_utils_1.sendError(res, 400, error_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRzLXJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL2d1aWxkcy9ndWlsZHMtcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLG9DQUFtQztBQUNuQyxnRUFBMEM7QUFDMUMsb0RBQXdEO0FBQ3hELDhEQUF3QztBQUN4Qyw2REFBdUM7QUFDdkMscURBQWdKO0FBQ2hKLHFGQUFtRjtBQUNuRiw4REFBd0M7QUFDeEMsd0VBQTZDO0FBQzdDLHlDQUF1RDtBQUN2RCx1Q0FBMEM7QUFFN0IsUUFBQSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRS9CLElBQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQVMsZ0JBQU0sQ0FBQyxFQUNqQyxLQUFLLEdBQUcsY0FBSSxDQUFDLEdBQUcsQ0FBUSxlQUFLLENBQUMsRUFDOUIsS0FBSyxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQVEsZUFBSyxDQUFDLENBQUM7QUFFckMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBTyxHQUFHLEVBQUUsR0FBRzs7Ozs7OztnQkFFakIsV0FBUyxFQUFFLENBQUM7Z0JBQ0UscUJBQU0sa0JBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXJDLFdBQVcsR0FBRyxTQUF1Qjs7b0JBRTNDLEtBQXlCLGdCQUFBLFNBQUEsV0FBVyxDQUFBLHlHQUFFO3dCQUEzQixVQUFVO3dCQUNYLEtBQUssR0FBRyxTQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNsRCxJQUFJLENBQUMsS0FBSzs0QkFBRSxTQUFTO3dCQUVyQixRQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFVLENBQUMsS0FBSyxDQUFD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