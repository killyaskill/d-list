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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var command_1 = require("../commands/command");
var log_1 = __importDefault(require("../utils/log"));
var deps_1 = __importDefault(require("../utils/deps"));
var cooldowns_1 = __importDefault(require("./cooldowns"));
var validators_1 = __importDefault(require("./validators"));
var util_1 = require("util");
var readdir = util_1.promisify(fs_1.default.readdir);
var CommandService = /** @class */ (function () {
    function CommandService(cooldowns, validators) {
        if (cooldowns === void 0) { cooldowns = deps_1.default.get(cooldowns_1.default); }
        if (validators === void 0) { validators = deps_1.default.get(validators_1.default); }
        this.cooldowns = cooldowns;
        this.validators = validators;
        this.commands = new Map();
    }
    CommandService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, files_1, files_1_1, fileName, cleanName, Command, command, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, readdir('./src/commands')];
                    case 1:
                        files = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        files_1 = __values(files), files_1_1 = files_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!files_1_1.done) return [3 /*break*/, 6];
                        fileName = files_1_1.value;
                        cleanName = fileName.replace(/(\..*)/, '');
                        return [4 /*yield*/, require("../commands/" + cleanName).default];
                    case 4:
                        Command = _b.sent();
                        if (!Command)
                            return [3 /*break*/, 5];
                        command = new Command();
                        this.commands.set(command.name, command);
                        _b.label = 5;
                    case 5:
                        files_1_1 = files_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        log_1.default.info("Loaded: " + this.commands.size + " commands", "cmds");
                        return [2 /*return*/];
                }
            });
        });
    };
    CommandService.prototype.handle = function (msg, prefix) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!(msg.member && msg.content && msg.guild && !msg.author.bot))
                    return [2 /*return*/];
                return [2 /*return*/, this.handleCommand(msg, prefix)];
            });
        });
    };
    CommandService.prototype.handleCommand = function (msg, prefix) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var slicedContent, command, cooldown, error_1, content;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        slicedContent = msg.content.slice(prefix.length);
                        command = this.findCommand(slicedContent);
                        if (!command)
                            return [2 /*return*/];
                        cooldown = this.cooldowns.get(msg.member, command);
                        if (cooldown)
                            throw new TypeError("Command is in a `" + command.cooldown / 60 + "` minute cooldown for you or your server.");
                        this.validators.checkPreconditions(command, msg.member);
                        return [4 /*yield*/, command.execute.apply(command, __spread([new command_1.CommandContext(msg)], this.getCommandArgs(slicedContent)))];
                    case 1:
                        _b.sent();
                        this.cooldowns.add(msg.member, command);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        content = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.message) !== null && _a !== void 0 ? _a : 'Un unknown error occurred';
                        msg.channel.send(':warning: ' + content);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommandService.prototype.findCommand = function (slicedContent) {
        var _a;
        var name = this.getCommandName(slicedContent);
        return (_a = this.commands.get(name)) !== null && _a !== void 0 ? _a : this.findByAlias(name);
    };
    CommandService.prototype.findByAlias = function (name) {
        return Array.from(this.commands.values())
            .find(function (c) { var _a; return (_a = c.aliases) === null || _a === void 0 ? void 0 : _a.some(function (a) { return a === name; }); });
    };
    CommandService.prototype.getCommandArgs = function (slicedContent) {
        return slicedContent
            .split(' ')
            .slice(1);
    };
    CommandService.prototype.getCommandName = function (slicedContent) {
        return slicedContent === null || slicedContent === void 0 ? void 0 : slicedContent.toLowerCase().split(' ')[0];
    };
    return CommandService;
}());
exports.default = CommandService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2NvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBb0I7QUFFcEIsK0NBQThEO0FBQzlELHFEQUErQjtBQUMvQix1REFBaUM7QUFDakMsMERBQW9DO0FBQ3BDLDREQUFzQztBQUN0Qyw2QkFBaUM7QUFFakMsSUFBTSxPQUFPLEdBQUcsZ0JBQVMsQ0FBQyxZQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFdEM7SUFHSSx3QkFDWSxTQUEwQyxFQUMxQyxVQUE2QztRQUQ3QywwQkFBQSxFQUFBLFlBQVksY0FBSSxDQUFDLEdBQUcsQ0FBWSxtQkFBUyxDQUFDO1FBQzFDLDJCQUFBLEVBQUEsYUFBYSxjQUFJLENBQUMsR0FBRyxDQUFhLG9CQUFVLENBQUM7UUFEN0MsY0FBUyxHQUFULFNBQVMsQ0FBaUM7UUFDMUMsZUFBVSxHQUFWLFVBQVUsQ0FBbUM7UUFKakQsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO0lBSWMsQ0FBQztJQUV2RCw2QkFBSSxHQUFWOzs7Ozs7NEJBQ2tCLHFCQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFBOzt3QkFBdkMsS0FBSyxHQUFHLFNBQStCOzs7O3dCQUV0QixVQUFBLFNBQUEsS0FBSyxDQUFBOzs7O3dCQUFqQixRQUFRO3dCQUNULFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFFakMscUJBQU0sT0FBTyxDQUFDLGlCQUFlLFNBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBQTs7d0JBQTNELE9BQU8sR0FBRyxTQUFpRDt3QkFDakUsSUFBSSxDQUFDLE9BQU87NEJBQUUsd0JBQVM7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