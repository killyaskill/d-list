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
exports.API = exports.AuthClient = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var config_json_1 = __importDefault(require("../../config.json"));
var cors_1 = __importDefault(require("cors"));
var disco_oauth_1 = __importDefault(require("disco-oauth"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = require("path");
var rate_limiter_1 = __importDefault(require("./modules/rate-limiter"));
var log_1 = __importDefault(require("../utils/log"));
var deps_1 = __importDefault(require("../utils/deps"));
var stats_1 = __importDefault(require("./modules/stats"));
var api_routes_1 = require("./routes/api-routes");
var guilds_routes_1 = require("./routes/guilds/guilds-routes");
var manage_guilds_routes_1 = require("./routes/guilds/manage-guilds-routes");
var reviewer_routes_1 = require("./routes/guilds/reviewer-routes");
var stats_routes_1 = require("./routes/guilds/stats-routes");
var user_routes_1 = require("./routes/user-routes");
var sitemap_generator_1 = __importDefault(require("./modules/sitemap-generator"));
exports.app = express_1.default(), exports.AuthClient = new disco_oauth_1.default(config_json_1.default.bot.id, config_json_1.default.bot.secret);
var API = /** @class */ (function () {
    function API(sitemapGenerator, stats) {
        var _this = this;
        if (sitemapGenerator === void 0) { sitemapGenerator = deps_1.default.get(sitemap_generator_1.default); }
        if (stats === void 0) { stats = deps_1.default.get(stats_1.default); }
        this.sitemapGenerator = sitemapGenerator;
        this.stats = stats;
        this.rootSitemap = '';
        this.guildsSitemap = '';
        exports.AuthClient.setRedirect(config_json_1.default.api.url + "/auth");
        exports.AuthClient.setScopes('identify', 'guilds');
        exports.app.use(rate_limiter_1.default);
        exports.app.use(cors_1.default());
        exports.app.use(body_parser_1.default.json());
        exports.app.get('/api/v1/sitemaps/root.xml', function (req, res) {
            return res.set('Content-Type', 'text/xml').send(_this.rootSitemap);
        });
        exports.app.get('/api/v1/sitemaps/guilds.xml', function (req, res) {
            return res.set('Content-Type', 'text/xml').send(_this.guildsSitemap);
        });
        exports.app.use('/api/v1/user', user_routes_1.router);
        exports.app.use('/api/v1/guilds', guilds_routes_1.router, manage_guilds_routes_1.router);
        exports.app.use('/api/v1/guilds/:id', reviewer_routes_1.router, stats_routes_1.router);
        exports.app.use('/api/v1', api_routes_1.router);
        // uncomment if you are using Glitch or client-side rendering
        exports.app.use(express_1.default.static(path_1.join(__dirname, '../../dist/dashboard')));
        exports.app.all('*', function (req, res) { return res.status(200).sendFile(path_1.join(__dirname, '../../dist/dashboard/index.html')); });
        var port = config_json_1.default.api.port || 3000;
        exports.app.listen(port, function () { return log_1.default.info("API is live on port " + port); });
        this.stats.init();
    }
    API.prototype.initSitemaps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.rootSitemap = this.sitemapGenerator.getRootMap();
                        _a = this;
                        return [4 /*yield*/, this.sitemapGenerator.getGuildsMap()];
                    case 1:
                        _a.guildsSitemap = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLGtFQUF1QztBQUN2Qyw4Q0FBd0I7QUFDeEIsNERBQXNDO0FBQ3RDLDREQUFxQztBQUNyQyw2QkFBNEI7QUFDNUIsd0VBQWlEO0FBQ2pELHFEQUErQjtBQUMvQix1REFBaUM7QUFDakMsMERBQW9DO0FBRXBDLGtEQUEwRDtBQUMxRCwrREFBdUU7QUFDdkUsNkVBQWlGO0FBQ2pGLG1FQUEyRTtBQUMzRSw2REFBcUU7QUFDckUsb0RBQTREO0FBQzVELGtGQUEyRDtBQUU5QyxRQUFBLEdBQUcsR0FBRyxpQkFBTyxFQUFFLEVBQ2YsUUFBQSxVQUFVLEdBQUcsSUFBSSxxQkFBVyxDQUFDLHFCQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU1RTtJQUlJLGFBQ1ksZ0JBQStELEVBQy9ELEtBQThCO1FBRjFDLGlCQTZCQztRQTVCVyxpQ0FBQSxFQUFBLG1CQUFtQixjQUFJLENBQUMsR0FBRyxDQUFtQiwyQkFBZ0IsQ0FBQztRQUMvRCxzQkFBQSxFQUFBLFFBQVEsY0FBSSxDQUFDLEdBQUcsQ0FBUSxlQUFLLENBQUM7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUErQztRQUMvRCxVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUwxQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUtmLGtCQUFVLENBQUMsV0FBVyxDQUFJLHFCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBTyxDQUFDLENBQUM7UUFDakQsa0JBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLFdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxFQUFFLENBQUMsQ0FBQztRQUNoQixXQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzQixXQUFHLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDMUMsT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQztRQUExRCxDQUEwRCxDQUFDLENBQUM7UUFDaEUsV0FBRyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQzVDLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFBNUQsQ0FBNEQsQ0FBQyxDQUFDO1FBRWxFLFdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLG9CQUFVLENBQUMsQ0FBQztRQUNwQyxXQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHNCQUFZLEVBQUUsNkJBQWUsQ0FBQyxDQUFDO1FBQ3pELFdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsd0JBQWMsRUFBRSxxQkFBVyxDQUFDLENBQUM7UUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsbUJBQVMsQ0FBQyxDQUFDO1FBRTlCLDZEQUE2RDtRQUM3RCxXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQy9DLFdBQUksQ0FBQyxTQUFTLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxFQUQ1QixDQUM0QixDQUFDLENBQUM7UUFFekQsSUFBTSxJQUFJLEdBQUcscUJBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNyQyxXQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFNLE9BQUEsYUFBRyxDQUFDLElBQUksQ0FBQyx5QkFBdUIsSUFBTSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFSywwQkFBWSxHQUFsQjs7Ozs7O3dCQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN0RCxLQUFBLElBQUksQ0FBQTt3QkFBaUIscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBL0QsR0FBSyxhQUFhLEdBQUcsU0FBMEMsQ0FBQzs7Ozs7S0FDbkU7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxrQkFBRyJ9