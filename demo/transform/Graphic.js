/*

graphic.rectRound(110,10,100,25,5);
graphic.fill();

*/

import query from "animate.js/src/static/query";

/**
 *
 * @param params
 * @return {{formatsApply(): void, internalRectRound(*=, *=, *, *, *=): void, formats: {cap: boolean, color: string, thickness: boolean, alpha: boolean, join: boolean}, clearShadow(): this, color: (function(*): this), shadow(*, *, *, *): this, thickness: (function(*): this), line(*=, *=, *=, *=): this, save(): void, rectRound(*=, *=, *=, *=, *=): this, cap: (function(*): this), alpha: (function(*): this), context: *, ellipse(*=, *=, *, *=, *=, *=, *=, *=, *=): this, join: (function(*): this), close(): void, JOINS: {ROUND: string, BEVEL: string, MITER: string}, drawCallback: drawCallback, restore(): void, shape(*, *=): this, fill(): this, stroke(): this, circle(*, *, *=): this, begin(): void, CAPS: {SQUARE: string, ROUND: string, BUTT: string}}|*}
 * @constructor
 */
const Graphic = function (params) {
    const canvas = params['canvas']
        ? params['canvas']
        : query('canvas');

    const context = params['context']
        ? params['context']
        : (canvas ? canvas.getContext('2d') : false);

    if (!canvas || !context) {
        return {};
    }

    return {
        canvas: canvas,
        context: context,
        drawCallback: function () {},
        formats: {
            color: params['color'] || '#000000',
            alpha: params['alpha'] || false,
            thickness: params['thickness'] || false,
            cap: params['cap'] || false,
            join: params['join'] || false,
        },

        color: function (n) {
            if (this.formats.color !== n)
                this.formats.color = n;
            return this;
        },

        // 0 - 1
        alpha: function (n) {
            if (this.formats.alpha !== n)
                this.formats.alpha = n;
            return this;
        },

        // 0 - 100
        thickness: function (n) {
            if (this.formats.thickness !== n)
                this.formats.thickness = n;
            return this;
        },

        // butt, round, square
        cap: function (n) {
            if (this.formats.cap !== n)
                this.formats.cap = n;
            return this;
        },

        // round, bevel, miter
        join: function (n) {
            if (this.formats.join !== n)
                this.formats.join = n;
            return this;
        },

        CAPS: {
            BUTT: "butt",
            ROUND: "round",
            SQUARE: "square",
        },

        JOINS: {
            BEVEL: "bevel",
            ROUND: "round",
            MITER: "miter",
        },

        // draw
        formatsApply () {
            if (this.formats.alpha !== false)
                this.context.globalAlpha = this.formats.alpha;

            if (this.formats.thickness !== false)
                this.context.lineWidth = this.formats.thickness;

            if (this.formats.cap !== false)
                this.context.lineCap = this.formats.cap;

            if (this.formats.join !== false)
                this.context.lineJoin = this.formats.join;
        },
        begin() {this.context.beginPath()},
        close() {this.context.closePath()},
        save() {this.context.save()},
        restore() {this.context.restore()},
        shadow(x, y, blur, color) {
            this.context.shadowOffsetX = x;
            this.context.shadowOffsetY = y;
            this.context.shadowBlur = blur;
            this.context.shadowColor = color;
            return this;
        },
        clear(x = 0, y = 0, width= 1000, height = 1000) {
            this.context.clearRect(x,y,width,height);
            return this;
        },
        clearShadow() {
            this.context.shadowOffsetX =
                this.context.shadowOffsetY =
                    this.context.shadowBlur = 0;
            return this;
        },
        circle(x, y, radius) {
            this.drawCallback = function () {
                this.internalRectRound(x - (radius / 2), y - (radius / 2), radius, radius, radius / 2);
            };
            return this;
        },

        rect (x, y, width, height) {
            this.drawCallback = function () {
                this.context.beginPath();
                this.context.rect(x, y, width, height);
            };
            return this;
        },

        internalRectRound(x, y, width, height, radius) {
            this.context.beginPath();
            this.context.moveTo(x + radius, y);
            this.context.arcTo(x + width, y, x + width, y + height, radius);
            this.context.arcTo(x + width, y + height, x, y + height, radius);
            this.context.arcTo(x, y + height, x, y, radius);
            this.context.arcTo(x, y, x + width, y, radius);
        },


        rectRound (x, y, width, height, radius = 5) {
            this.drawCallback = function () {
                this.internalRectRound(x, y, width, height, radius)
            };
            return this;
        },

        shape (points, closePath) {
            this.drawCallback = function () {
                let i, temp = {}, positions = [];
                points.map(function (p) {
                    if (temp.x === undefined) {temp.x = p}
                    else if (temp.y === undefined) {temp.y = p}

                    if (temp.x !== undefined && temp.y !== undefined) {
                        positions.push(temp);temp = {}}
                });

                this.context.beginPath();
                for (i = 0; i < positions.length; i++) {
                    this.context.lineTo(positions[i].x, positions[i].y);
                }

                if (!!closePath) this.context.closePath();
            };
            return this;
        },

        line (x1, y1, x2, y2) {
            this.drawCallback = function () {
                this.context.beginPath();
                this.context.moveTo(x1, y1);
                this.context.lineTo(x2, y2);
            };
            return this;
        },

        ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, closePath) {
            this.drawCallback = function () {
                this.context.save();
                this.context.beginPath();
                this.context.translate(x, y);
                this.context.rotate(rotation);
                this.context.scale(radiusX / radiusY, 1);
                this.context.arc(0, 0, radiusY, startAngle, endAngle, anticlockwise ? !!anticlockwise : false);
                this.context.restore();
                if (closePath) this.context.closePath();
            };
            return this;
        },

        stroke () {
            this.formatsApply();
            this.drawCallback.call(this);

            if (this.formats.color)
                this.context.strokeStyle = this.formats.color;
            this.context.stroke();

            return this;
        },

        fill () {
            this.formatsApply();
            this.drawCallback.call(this);
            if (this.formats.color)
                this.context.fillStyle = this.formats.color;

            this.context.fill();

            return this;
        },
    }
}

export default Graphic;