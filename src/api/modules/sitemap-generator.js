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
var guilds_1 = __importDefault(require("../../data/guilds"));
var bot_1 = require("../../bot");
var config_json_1 = __importDefault(require("../../../config.json"));
var SitemapGenerator = /** @class */ (function () {
    function SitemapGenerator(guilds) {
        if (guilds === void 0) { guilds = deps_1.default.get(guilds_1.default); }
        this.guilds = guilds;
        this.rootNames = [
            'search'
        ];
        this.docNames = [
            'api',
            'get-started',
            'badges',
            'get-featured',
            'guidelines',
            'how-it-works',
            'widget',
            'changelog'
        ];
        this.tagNames = [
            'anime',
            'art',
            'bots',
            'chat',
            'chill',
            'community',
            'fortnite',
            'friendly',
            'games',
            'gaming',
            'givaways',
            'manga',
            'meme',
            'minecraft',
            'music',
            'roblox',
            'rp',
            'technology',
            'youtube'
        ];
    }
    SitemapGenerator.prototype.template = function (data) {
        return "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\">" + data + "</urlset>";
    };
    SitemapGenerator.prototype.url = function (url) {
        return "<url><loc>" + url + "</loc></url>";
    };
    SitemapGenerator.prototype.comment = function (data) {
        return "<!-- " + data + " -->";
    };
    SitemapGenerator.prototype.getRootMap = function () {
        var _this = this;
        var xml = function (arr, routes) {
            if (routes === void 0) { routes = '/'; }
            return arr
                .map(function (n) { return _this.url("" + config_json_1.default.dashboardURL + (routes !== null && routes !== void 0 ? routes : '/') + n); })
                .join('');
        };
        return this.template(this.comment('root') + xml(this.rootNames) +
            this.comment('docs') + xml(this.docNames, '/docs/') +
            this.comment('tags') + xml(this.tagNames, '/tags/'));
    };
    SitemapGenerator.prototype.getGuildsMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedGuilds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.guilds.getAll()];
                    case 1:
                        savedGuilds = _a.sent();
                        return [2 /*return*/, this.template(savedGuilds
                                .filter(function (sg) { return bot_1.bot.guilds.cache.has(sg._id); })
                                .map(function (sg) { return _this
                                .url(config_json_1.default.dashboardURL + "/servers/" + sg._id); })
                                .join(''))];
                }
            });
        });
    };
    return SitemapGenerator;
}());
exports.default = SitemapGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZW1hcC1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21vZHVsZXMvc2l0ZW1hcC1nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBb0M7QUFDcEMsNkRBQXVDO0FBQ3ZDLGlDQUFnQztBQUNoQyxxRUFBMEM7QUFFMUM7SUFxQ0UsMEJBQW9CLE1BQWlDO1FBQWpDLHVCQUFBLEVBQUEsU0FBUyxjQUFJLENBQUMsR0FBRyxDQUFTLGdCQUFNLENBQUM7UUFBakMsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7UUFwQ3JELGNBQVMsR0FBRztZQUNWLFFBQVE7U0FDVCxDQUFDO1FBRUYsYUFBUSxHQUFHO1lBQ1QsS0FBSztZQUNMLGFBQWE7WUFDYixRQUFRO1lBQ1IsY0FBYztZQUNkLFlBQVk7WUFDWixjQUFjO1lBQ2QsUUFBUTtZQUNSLFdBQVc7U0FBQyxDQUFDO1FBRWYsYUFBUSxHQUFHO1lBQ1QsT0FBTztZQUNQLEtBQUs7WUFDTCxNQUFNO1lBQ04sTUFBTTtZQUNOLE9BQU87WUFDUCxXQUFXO1lBQ1gsVUFBVTtZQUNWLFVBQVU7WUFDVixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7WUFDVixPQUFPO1lBQ1AsTUFBTTtZQUNOLFdBQVc7WUFDWCxPQUFPO1lBQ1AsUUFBUTtZQUNSLElBQUk7WUFDSixZQUFZO1lBQ1osU0FBUztTQUNWLENBQUM7SUFFc0QsQ0FBQztJQUVqRCxtQ0FBUSxHQUFoQixVQUFpQixJQUFZO1FBQzNCLE9BQU8sNlBBQ3NILElBQUksY0FBVyxDQUFDO0lBQy9JLENBQUM7SUFFTyw4QkFBRyxHQUFYLFVBQVksR0FBVztRQUNyQixPQUFPLGVBQWEsR0FBRyxpQkFBYyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWdCLElBQVk7UUFDMUIsT0FBTyxVQUFRLElBQUksU0FBTSxDQUFDO0lBQzVCLENBQUM7SUFHRCxxQ0FBVSxHQUFWO1FBQUEsaUJBU0M7UUFSQyxJQUFNLEdBQUcsR0FBRyxVQUFDLEdBQWEsRUFBRSxNQUFZO1lBQVosdUJBQUEsRUFBQSxZQUFZO1lBQUssT0FBQSxHQUFHO2lCQUM3QyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUcscUJBQU0sQ0FBQyxZQUFZLElBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksR0FBRyxJQUFHLENBQUcsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDO2lCQUNoRSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRmtDLENBRWxDLENBQUM7UUFFWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFSyx1Q0FBWSxHQUFsQjs7Ozs7OzRCQUNzQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBeEMsV0FBVyxHQUFHLFNBQTBCO3dCQUM5QyxzQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7aUNBQzdCLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFNBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQTVCLENBQTRCLENBQUM7aUNBQzFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUk7aUNBQ1osR0FBRyxDQUFJLHFCQUFNLENBQUMsWUFBWSxpQkFBWSxFQUFFLENBQUMsR0FBSyxDQUFDLEVBRHZDLENBQ3VDLENBQUM7aUNBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ2hCO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBeEVELElBd0VDIn0=