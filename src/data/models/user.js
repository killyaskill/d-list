"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedUser = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    _id: String,
    lastVotedAt: Date,
    role: String
});
exports.SavedUser = mongoose_1.model('user', userSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhL21vZGVscy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFtRDtBQUVuRCxJQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDMUIsR0FBRyxFQUFFLE1BQU07SUFDWCxXQUFXLEVBQUUsSUFBSTtJQUNqQixJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUMsQ0FBQztBQVVVLFFBQUEsU0FBUyxHQUFHLGdCQUFLLENBQWUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDIn0=