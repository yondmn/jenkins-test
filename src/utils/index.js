/**
 * 将华氏温度转换成摄氏温度
 * @param {Number} f 华氏温度
 * @return {Number} 摄氏温度
 */
const toC = f => (f - 32) * 5 / 9;
/**
 * 将摄氏温度转换成华氏温度
 * @param {Number} c 摄氏温度
 * @return {Number} 华氏温度
 */
const toF = c => (c * 9 /5) + 32;

export { toC, toF };