// @leet start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let start = 0;
    let minLen = Infinity;
    let left = 0, right = 0;

    const window = new Map();
    const needs = new Map();

    // Construir mapa con frecuencias de caracteres en t
    for (const c of t) {
        needs.set(c, (needs.get(c) || 0) + 1);
    }

    let match = 0;

    while (right < s.length) {
        const c1 = s[right];
        if (needs.has(c1)) {
            window.set(c1, (window.get(c1) || 0) + 1);
            if (window.get(c1) === needs.get(c1)) {
                match++;
            }
        }
        right++;

        // Cuando todos los caracteres coinciden
        while (match === needs.size) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            const c2 = s[left];
            if (needs.has(c2)) {
                window.set(c2, window.get(c2) - 1);
                if (window.get(c2) < needs.get(c2)) {
                    match--;
                }
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
// @leet end
