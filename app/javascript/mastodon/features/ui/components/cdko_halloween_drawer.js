import React from 'react';

class CDkoHalloweenDrawerCanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = 'https://media.monado.ren/site_uploads/241028/c6c7ed8ee0c2dac51b282ff928a8e6a2.png';

        const eyeWidth = 275;
        const eyeHeight = 105;
        const cdkoWidth = 1377;
        const cdkoHeight = 1350;
        const silkieWidth = 171;
        const silkieHeight = 439;
        const ghostWidth = 176;
        const ghostHeight = 312;

        img.onload = () => {
            // 裁剪并放置图像
            ctx.drawImage(img, 0, 0, cdkoWidth, cdkoHeight, 0, 0, cdkoWidth, cdkoHeight); // cdko 图
            ctx.drawImage(img, 1377, 839, ghostWidth, ghostHeight, 1085, 567, ghostWidth, ghostHeight); // ghost 图
            ctx.drawImage(img, 1377, 0, silkieWidth, silkieHeight, 424, 91, silkieWidth, silkieHeight); // silkie 图
            ctx.drawImage(img, 1553, 0, eyeWidth, eyeHeight, 740, 498, eyeWidth, eyeHeight); // 初始eye_a 图

            // 示例帧数据，假设有 10 帧
            const eyesFrames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 2, 2, 2, 1, 1, 3, 3, 6, 6, 6, 6, 3, 1, 2, 2, 2, 0, 0, 2, 2, 1, 1, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 3, 3, 6, 6, 6, 3, 1, 4, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 1, 2, 2, 0, 0, 0];

            const ghostFrames = [[567, 255], [566, 255], [565, 254], [564, 253], [562, 252], [559, 251], [557, 249], [553, 247], [550, 245], [546, 243], [541, 240], [537, 238], [532, 235], [527, 232], [522, 230], [517, 227], [511, 224], [506, 221], [500, 219], [495, 216], [489, 213], [484, 211], [479, 209], [474, 206], [469, 205], [465, 203], [460, 201], [456, 200], [453, 199], [449, 199], [447, 199], [444, 199], [441, 199], [438, 200], [435, 201], [431, 203], [428, 205], [425, 206], [421, 209], [417, 211], [414, 213], [410, 216], [407, 219], [403, 221], [400, 224], [397, 227], [393, 230], [390, 232], [387, 235], [384, 238], [381, 240], [379, 243], [376, 245], [374, 247], [372, 249], [371, 251], [369, 252], [368, 253], [367, 254], [367, 255], [367, 255], [367, 255], [368, 254], [369, 253], [370, 252], [372, 251], [375, 249], [378, 247], [381, 245], [384, 243], [387, 240], [391, 238], [395, 235], [399, 232], [403, 230], [407, 227], [411, 224], [414, 221], [418, 219], [422, 216], [426, 213], [429, 211], [432, 209], [435, 206], [438, 205], [441, 203], [443, 201], [444, 200], [446, 199], [446, 199], [447, 199], [446, 199], [446, 199], [444, 200], [443, 201], [441, 203], [438, 205], [435, 206], [432, 209], [429, 211], [426, 213], [422, 216], [418, 219], [414, 221], [411, 224], [407, 227], [403, 230], [399, 232], [395, 235], [391, 238], [387, 240], [384, 243], [381, 245], [378, 247], [375, 249], [372, 251], [370, 252], [369, 253], [368, 254], [367, 255], [367, 255], [367, 255], [367, 254], [368, 253], [369, 252], [371, 251], [372, 249], [374, 247], [376, 245], [379, 243], [381, 240], [384, 238], [387, 235], [390, 232], [393, 230], [397, 227], [400, 224], [403, 221], [407, 219], [410, 216], [414, 213], [417, 211], [421, 209], [425, 206], [428, 205], [431, 203], [435, 201], [438, 200], [441, 199], [444, 199], [447, 199], [449, 199], [453, 199], [456, 200], [460, 201], [465, 203], [469, 205], [474, 206], [479, 209], [484, 211], [489, 213], [495, 216], [500, 219], [506, 221], [511, 224], [517, 227], [522, 230], [527, 232], [532, 235], [537, 238], [541, 240], [546, 243], [550, 245], [553, 247], [557, 249], [559, 251], [562, 252], [564, 253], [565, 254], [566, 255], [567, 255]];

            const silkieFrames = [91, 91, 92, 93, 95, 97, 100, 103, 107, 110, 115, 119, 124, 129, 135, 140, 146, 152, 158, 165, 171, 177, 184, 191, 197, 204, 210, 216, 223, 229, 235, 241, 246, 252, 257, 262, 266, 271, 274, 278, 281, 284, 286, 288, 289, 290, 291, 290, 290, 288, 287, 285, 283, 280, 277, 273, 270, 266, 261, 257, 252, 247, 242, 237, 231, 226, 220, 214, 208, 202, 197, 191, 185, 179, 173, 167, 161, 155, 150, 144, 139, 134, 129, 124, 120, 115, 111, 108, 104, 101, 98, 96, 94, 93, 91, 91, 91, 91, 92, 93, 95, 97, 100, 103, 107, 110, 115, 119, 124, 129, 135, 140, 146, 152, 158, 165, 171, 177, 184, 191, 197, 204, 210, 216, 223, 229, 235, 241, 246, 252, 257, 262, 266, 271, 274, 278, 281, 284, 286, 288, 289, 290, 291, 290, 289, 287, 284, 281, 277, 273, 268, 262, 256, 250, 243, 236, 229, 222, 214, 206, 198, 191, 183, 175, 167, 159, 152, 145, 138, 131, 125, 119, 113, 108, 104, 100, 97, 94, 92, 91, 91];
            let eyeFrameIndex = 0;
            let lastTimestamp = 0;
            const eyeFrameDuration = 33; // 眼睛动画每帧 33ms
            let currentGhostY = 567; // 当前 ghost Y 位置
            let currentSilkieY = 91; // 当前 silkie Y 位置
            let currentGhostA = 255; // 当前 ghost alpha 值

            function lerp(start, end, t) {
                return start + (end - start) * t;
            }

            function draw(timestamp) {
                const elapsed = lastTimestamp ? timestamp - lastTimestamp : 0;

                // 更新眼睛的动画
                if (elapsed >= eyeFrameDuration) {
                    const framesToUpdate = Math.floor(elapsed / eyeFrameDuration);
                    eyeFrameIndex = (eyeFrameIndex + framesToUpdate) % eyesFrames.length;
                    lastTimestamp += framesToUpdate * eyeFrameDuration; // 更新 lastTimestamp 以跳过到新帧
                } else if (!lastTimestamp) {
                    lastTimestamp = timestamp; // 第一次绘制时设置 lastTimestamp
                }

                // 清除上一次绘制
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // 重新绘制固定图像
                ctx.drawImage(img, 0, 0, cdkoWidth, cdkoHeight, 0, 0, cdkoWidth, cdkoHeight); // cdko 图
                ctx.drawImage(img, 1553, eyesFrames[eyeFrameIndex] * eyeHeight, eyeWidth, eyeHeight, 740, 498, eyeWidth, eyeHeight);

                // 计算 ghost 和 silkie 的帧索引
                const petFrameIndex = Math.floor(timestamp / 33) % ghostFrames.length;
                const nextPetFrameIndex = (petFrameIndex + 1) % ghostFrames.length;

                const thisSilkieY = currentSilkieY; // 使用当前 silkie Y 位置
                const nextSilkieY = silkieFrames[nextPetFrameIndex];
                const thisGhostY = currentGhostY; // 使用当前 ghost Y 位置
                const nextGhostY = ghostFrames[nextPetFrameIndex][0];
                const thisGhostA = currentGhostA; // 使用当前 ghost alpha 值
                const nextGhostA = ghostFrames[nextPetFrameIndex][1];

                // 计算插值比例
                const interpR = (elapsed % 33) / 33;
                currentGhostY = lerp(thisGhostY, nextGhostY, interpR); // 更新当前 ghost Y 位置
                currentGhostA = lerp(thisGhostA, nextGhostA, interpR); // 更新当前 ghost alpha 值
                currentSilkieY = lerp(thisSilkieY, nextSilkieY, interpR); // 更新当前 silkie Y 位置

                ctx.globalAlpha = currentGhostA / 255;
                ctx.drawImage(img, 1377, 839, ghostWidth, ghostHeight, 1085, currentGhostY, ghostWidth, ghostHeight); // ghost 图
                ctx.globalAlpha = 1.0;
                ctx.drawImage(img, 1377, 0, silkieWidth, silkieHeight, 424, currentSilkieY, silkieWidth, silkieHeight); // silkie 图
                window.requestAnimationFrame(draw);
            }

            window.requestAnimationFrame(draw);
        };

    }

    render() {
        return (
            <canvas ref={this.canvasRef} width={1377} height={1350}></canvas>
        );
    }
}

export default CDkoHalloweenDrawerCanvasComponent;