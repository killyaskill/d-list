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
exports.ServerWidgetGenerator = void 0;
var image_generator_1 = __importDefault(require("./image-generator"));
var canvas_1 = require("canvas");
var ServerWidgetGenerator = /** @class */ (function (_super) {
    __extends(ServerWidgetGenerator, _super);
    function ServerWidgetGenerator(guild, savedGuild) {
        var _this = _super.call(this) || this;
        _this.guild = guild;
        _this.savedGuild = savedGuild;
        _this.colors = {
            primary: '#F4F2F3',
            secondary: '#46828D',
            tertiary: '#36E2CA',
            bgPrimary: '#2C2F33',
            bgSecondary: '#23272A'
        };
        return _this;
    }
    ServerWidgetGenerator.prototype.generate = function (size) {
        if (size === void 0) { size = 'large'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (size === 'medium')
                    return [2 /*return*/, this.medium()];
                else if (size === 'small')
                    return [2 /*return*/, this.small()];
                return [2 /*return*/, this.large()];
            });
        });
    };
    ServerWidgetGenerator.prototype.large = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canvas, ctx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createCanvas(300, 250), canvas = _a.canvas, ctx = _a.ctx;
                        ctx.fillStyle = this.colors.bgPrimary;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        this.addGuildText(ctx, canvas);
                        return [4 /*yield*/, this.addGuildAvatar(ctx)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addStats(ctx, canvas)];
                    case 2:
                        _b.sent();
                        this.addGuildOverview(ctx, canvas);
                        return [4 /*yield*/, this.addFooter(canvas, ctx)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, canvas.toBuffer()];
                }
            });
        });
    };
    ServerWidgetGenerator.prototype.medium = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canvas, ctx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createCanvas(300, 150), canvas = _a.canvas, ctx = _a.ctx;
                        ctx.fillStyle = this.colors.bgPrimary;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        this.addGuildText(ctx, canvas, { x: 0, y: 20 });
                        return [4 /*yield*/, this.addGuildAvatar(ctx, { x: 0, y: 0 })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addStats(ctx, canvas, { x: 0, y: 35 })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.addFooter(canvas, ctx, { x: 0, y: -7.5 })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, canvas.toBuffer()];
                }
            });
        });
    };
    ServerWidgetGenerator.prototype.small = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canvas, ctx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createCanvas(300, 75), canvas = _a.canvas, ctx = _a.ctx;
                        ctx.fillStyle = this.colors.bgPrimary;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        return [4 /*yield*/, this.addGuildAvatar(ctx, { x: -15, y: -15 }, true)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addStats(ctx, canvas, { x: 50, y: -10 })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.addFooter(canvas, ctx, { x: 0, y: -15 })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, canvas.toBuffer()];
                }
            });
        });
    };
    ServerWidgetGenerator.prototype.addStats = function (ctx, canvas, offset) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        return __awaiter(this, void 0, void 0, function () {
            var pos, votesImage, usersImage, nativeSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pos = { x: offset.x, y: canvas.height / 3.25 + offset.y };
                        return [4 /*yield*/, canvas_1.loadImage("assets/img/chevron-circle-up.png")];
                    case 1:
                        votesImage = _a.sent();
                        return [4 /*yield*/, canvas_1.loadImage("assets/img/users.png")];
                    case 2:
                        usersImage = _a.sent();
                        nativeSize = { w: 128, h: 128 };
                        ctx.drawImage(votesImage, pos.x + 25, pos.y, nativeSize.w / 6, nativeSize.h / 6);
                        ctx.font = 'bold 16px Whitney, sans-serif';
                        ctx.fillStyle = 'white';
                        ctx.fillText(this.savedGuild.votes.length.toString(), pos.x + 50, pos.y + 16.5);
                        ctx.fillText(this.fancyNumber(this.guild.memberCount), (canvas.width / 2) + pos.x + 27.5, pos.y + 16.5);
                        ctx.drawImage(usersImage, (canvas.width / 2) + pos.x, pos.y, nativeSize.w / 6, nativeSize.h / 6);
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerWidgetGenerator.prototype.fancyNumber = function (x) {
        var nums = x.toString().replace(/,/g, '');
        if (!nums || nums.endsWith('.'))
            return;
        return parseFloat(nums).toLocaleString();
    };
    ServerWidgetGenerator.prototype.addGuildOverview = function (ctx, canvas) {
        ctx.font = '16px Whitney, sans-serif';
        ctx.fillStyle = 'gray';
        _super.prototype.wrapText.call(this, ctx, this.savedGuild.listing.overview, 25, canvas.height / 2, canvas.width - 50, 20);
    };
    ServerWidgetGenerator.prototype.addFooter = function (canvas, ctx, offset) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        return __awaiter(this, void 0, void 0, function () {
            var pos, avatar, nativeSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pos = { x: 10 + offset.x, y: canvas.height * 0.9 + offset.y };
                        ctx.fillStyle = this.colors.bgSecondary;
                        ctx.fillRect(0, pos.y - 5, canvas.width, canvas.height);
                        return [4 /*yield*/, canvas_1.loadImage('assets/img/logo.png')];
                    case 1:
                        avatar = _a.sent();
                        nativeSize = { w: 231, h: 46 };
                        ctx.drawImage(avatar, pos.x, pos.y, nativeSize.w / 2.5, nativeSize.h / 2.5);
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerWidgetGenerator.prototype.addGuildText = function (ctx, canvas, offset) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        var pos = { x: canvas.width / 4 + offset.x, y: canvas.height / 5 + offset.y };
        ctx.font = _super.prototype.applyText.call(this, canvas, this.guild.name);
        ctx.fillStyle = this.colors.primary;
        ctx.fillText(this.guild.name, pos.x, pos.y);
    };
    ServerWidgetGenerator.prototype.addGuildAvatar = function (ctx, offset, square) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        if (square === void 0) { square = false; }
        return __awaiter(this, void 0, void 0, function () {
            var pos, avatar_1, avatar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pos = { x: 15 + offset.x, y: 15 + offset.y };
                        if (!square) return [3 /*break*/, 2];
                        return [4 /*yield*/, canvas_1.loadImage(this.guild.iconURL({ format: 'png' }))];
                    case 1:
                        avatar_1 = _a.sent();
                        return [2 /*return*/, ctx.drawImage(avatar_1, pos.x, pos.y, 50, 50)];
                    case 2:
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(pos.x + 25, pos.y + 25, 25, 0, Math.PI * 2, true);
                        ctx.closePath();
                        ctx.clip();
                        return [4 /*yield*/, canvas_1.loadImage(this.guild.iconURL({ format: 'png' }))];
                    case 3:
                        avatar = _a.sent();
                        ctx.drawImage(avatar, pos.x, pos.y, 50, 50);
                        ctx.beginPath();
                        ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
                        ctx.clip();
                        ctx.closePath();
                        ctx.restore();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerWidgetGenerator.prototype.createCanvas = function (width, height) {
        var canvas = canvas_1.createCanvas(width, height);
        var ctx = canvas.getContext('2d');
        return { canvas: canvas, ctx: ctx };
    };
    return ServerWidgetGenerator;
}(image_generator_1.default));
exports.ServerWidgetGenerator = ServerWidgetGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQtd2lkZ2V0LWdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy9pbWFnZS9ndWlsZC13aWRnZXQtZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBK0M7QUFDL0MsaUNBQW1GO0FBSW5GO0lBQTJDLHlDQUFjO0lBU3JELCtCQUNZLEtBQVksRUFDWixVQUF5QjtRQUZyQyxZQUV5QyxpQkFBTyxTQUFHO1FBRHZDLFdBQUssR0FBTCxLQUFLLENBQU87UUFDWixnQkFBVSxHQUFWLFVBQVUsQ0FBZTtRQVZyQyxZQUFNLEdBQUc7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsU0FBUztZQUNwQixRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsU0FBUztTQUN6QixDQUFBOztJQUlpRCxDQUFDO0lBRTdDLHdDQUFRLEdBQWQsVUFBZSxJQUFjO1FBQWQscUJBQUEsRUFBQSxjQUFjOzs7Z0JBQ3pCLElBQUksSUFBSSxLQUFLLFFBQVE7b0JBQ2pCLHNCQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQztxQkFDcEIsSUFBSSxJQUFJLEtBQUssT0FBTztvQkFDckIsc0JBQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDO2dCQUN4QixzQkFBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUM7OztLQUN2QjtJQUVhLHFDQUFLLEdBQW5COzs7Ozs7d0JBQ1UsS0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQTNDLE1BQU0sWUFBQSxFQUFFLEdBQUcsU0FBQSxDQUFpQzt3QkFFcEQsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FB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