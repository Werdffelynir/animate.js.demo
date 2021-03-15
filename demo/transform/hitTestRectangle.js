
const hitTestRectangle = function (rectA, rectB) {
    const rA = rectA.x + rectA.width; // Right side of rectA
    const rB = rectB.x + rectB.width; // Right side of rectB
    const bA = rectA.y + rectA.height; // Bottom of rectA
    const bB = rectB.y + rectB.height; // Bottom of rectB

    const hitX = rA > rectB.x && rectA.x < rB; // True if hit on x-axis
    const hitY = bA > rectB.y && rectA.y < bB; // True if hit on y-axis

    // Return true if hit on x and y axis
    return hitX && hitY;
}

export default hitTestRectangle;