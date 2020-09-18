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
exports.saveBotAndChanges = exports.validateCanEdit = exports.getUser = exports.validateGuildManager = exports.getManagableGuilds = exports.validateIfCanVote = exports.toAPIGuild = exports.sendError = void 0;
var server_1 = require("../server");
var bot_1 = require("../../bot");
var deps_1 = __importDefault(require("../../utils/deps"));
var guilds_1 = __importDefault(require("../../data/guilds"));
var users_1 = __importDefault(require("../../data/users"));
var guild_logs_1 = __importDefault(require("../../data/guild-logs"));
var audit_logger_1 = __importDefault(require("./audit-logger"));
var guilds = deps_1.default.get(guilds_1.default), logs = deps_1.default.get(guild_logs_1.default), users = deps_1.default.get(users_1.default);
function sendError(res, code, error) {
    return res.status(code).json({ code: code, message: error === null || error === void 0 ? void 0 : error.message });
}
exports.sendError = sendError;
function toAPIGuild(guild) {
    return {
        id: guild.id,
        name: guild.name,
        ownerID: guild.ownerID,
        memberCount: guild.memberCount,
        iconURL: guild.iconURL({ dynamic: true, size: 256 }),
        managerIds: guild.members.cache
            .filter(function (m) { return m.permissions.has('MANAGE_GUILD'); })
            .map(function (m) { return m.id; })
    };
}
exports.toAPIGuild = toAPIGuild;
function validateIfCanVote(savedVoter) {
    var twelveHoursMs = 1000 * 60 * 60 * 12;
    var oneDayAgo = new Date(Date.now() - twelveHoursMs);
    if (savedVoter.lastVotedAt > oneDayAgo) {
        var timeLeftMs = new Date(savedVoter.lastVotedAt.getTime() + twelveHoursMs).getTime() - Date.now();
        var hoursLeft = (timeLeftMs / 1000 / 60 / 60);
        throw new TypeError("You have already voted. You can next vote in " + hoursLeft.toFixed(2) + " hours.");
    }
}
exports.validateIfCanVote = validateIfCanVote;
function getManagableGuilds(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, bot_1.bot.guilds.cache
                    .filter(function (g) { var _a; return (_a = g.members.cache
                    .get(userId)) === null || _a === void 0 ? void 0 : _a.hasPermission('MANAGE_GUILD'); })];
        });
    });
}
exports.getManagableGuilds = getManagableGuilds;
function validateGuildManager(key, guildId) {
    return __awaiter(this, void 0, void 0, function () {
        var authUser, savedUser, guilds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!key)
                        throw new TypeError('Unauthorized.');
                    return [4 /*yield*/, server_1.AuthClient.getUser(key)];
                case 1:
                    authUser = _a.sent();
                    return [4 /*yield*/, users.get(authUser)];
                case 2:
                    savedUser = _a.sent();
                    if (savedUser.role === 'admin')
                        return [2 /*return*/];
                    return [4 /*yield*/, getManagableGuilds(authUser.id)];
                case 3:
                    guilds = _a.sent();
                    if (!guilds.some(function (g) { return g.id === guildId; }))
                        throw TypeError('Server not manageable.');
                    return [2 /*return*/];
            }
        });
    });
}
exports.validateGuildManager = validateGuildManager;
function getUser(key) {
    return __awaiter(this, void 0, void 0, function () {
        var authUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, server_1.AuthClient.getUser(key)];
                case 1:
                    authUser = _a.sent();
                    authUser['displayAvatarURL'] = authUser.avatarUrl(64);
                    authUser = JSON
                        .parse(JSON.stringify(authUser)
                        .replace(/"_(.*?)"/g, '"$1"'));
                    return [2 /*return*/, authUser];
            }
        });
    });
}
exports.getUser = getUser;
function validateCanEdit(req, id) {
    return __awaiter(this, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body)
                        throw new TypeError('Request body is empty.');
                    return [4 /*yield*/, guilds.exists(id)];
                case 1:
                    exists = _a.sent();
                    if (!exists)
                        throw new TypeError('Bot does not exist.');
                    return [2 /*return*/];
            }
        });
    });
}
exports.validateCanEdit = validateCanEdit;
function saveBotAndChanges(req, id) {
    return __awaiter(this, void 0, void 0, function () {
        var guild, savedGuild, change, log;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    guild = bot_1.bot.guilds.cache.get(id);
                    return [4 /*yield*/, guilds.get(guild)];
                case 1:
                    savedGuild = _a.sent();
                    change = audit_logger_1.default.getChanges({ old: savedGuild.listing, new: req.body }, savedGuild.ownerId);
                    savedGuild.listing = req.body;
                    return [4 /*yield*/, logs.get(id)];
                case 2:
                    log = _a.sent();
                    log.changes.push(change);
                    return [4 /*yield*/, log.save()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, guilds.save(savedGuild)];
            }
        });
    });
}
exports.saveBotAndChanges = saveBotAndChanges;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL2FwaS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBdUM7QUFFdkMsaUNBQWdDO0FBQ2hDLDBEQUFvQztBQUNwQyw2REFBdUM7QUFDdkMsMkRBQXFDO0FBQ3JDLHFFQUE0QztBQUM1QyxnRUFBeUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLEdBQUcsQ0FBUyxnQkFBTSxDQUFDLEVBQ2pDLElBQUksR0FBRyxjQUFJLENBQUMsR0FBRyxDQUFVLG9CQUFPLENBQUMsRUFDakMsS0FBSyxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQVEsZUFBSyxDQUFDLENBQUM7QUFFckMsU0FBZ0IsU0FBUyxDQUFDLEdBQVEsRUFBRSxJQUFZLEVBQUUsS0FBWTtJQUM1RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxFQUFFLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxLQUFZO0lBQ3JDLE9BQU87UUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7UUFDaEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztRQUM5QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtB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