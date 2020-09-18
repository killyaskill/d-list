"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedLog = exports.Change = void 0;
var mongoose_1 = require("mongoose");
var Change = /** @class */ (function () {
    function Change(by, changes) {
        this.by = by;
        this.changes = changes;
        this.at = new Date();
    }
    return Change;
}());
exports.Change = Change;
var LogSchema = new mongoose_1.Schema({
    _id: String,
    changes: { type: Array, default: [] }
});
exports.SavedLog = mongoose_1.model('log', LogSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGEvbW9kZWxzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUQ7QUFFbkQ7SUFHSSxnQkFDVyxFQUFVLEVBQ1YsT0FBNEI7UUFENUIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBSmhDLE9BQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBSW1CLENBQUM7SUFDL0MsYUFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksd0JBQU07QUFRbkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ3pCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0NBQ3hDLENBQUMsQ0FBQztBQU9VLFFBQUEsUUFBUSxHQUFHLGdCQUFLLENBQWMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDIn0=