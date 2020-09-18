"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("canvas");
var ImageGenerator = /** @class */ (function () {
    function ImageGenerator() {
        canvas_1.registerFont('./assets/fonts/whitneysemibold.ttf', { family: 'Whitney' });
    }
    ImageGenerator.prototype.applyText = function (canvas, text, offsetX) {
        if (offsetX === void 0) { offsetX = 25; }
        var context = canvas.getContext('2d');
        var fontSize = 32;
        do {
            context.font = (fontSize -= 8) + "px Whitney, sans-serif";
        } while (context.measureText(text).width > canvas.width - offsetX);
        return context.font;
    };
    ImageGenerator.prototype.wrapText = function (context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
    };
    return ImageGenerator;
}());
exports.default = ImageGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL2ltYWdlL2ltYWdlLWdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE4QztBQUU5QztJQUNFO1FBQ0UscUJBQVksQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsTUFBYyxFQUFFLElBQVksRUFBRSxPQUFZO1FBQVosd0JBQUEsRUFBQSxZQUFZO1FBQ2xELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWxCLEdBQUc7WUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUcsUUFBUSxJQUFJLENBQUMsNEJBQXdCLENBQUM7U0FDekQsUUFDTSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sRUFBRTtRQUNqRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNELGlDQUFRLEdBQVIsVUFBUyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVU7UUFDaEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxTQUFTLEdBQUcsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLENBQUMsSUFBSSxVQUFVLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLFFBQVEsQ0FBQzthQUNqQjtTQUNGO1FBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0MifQ==