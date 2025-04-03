export function appendDollarAfterYou(str: string): string {
    const chars: string[] = [];
    for (const c of str) {
        chars.push(c);
        if (c === 'u' || c === 'U') {
            chars.push('$');
        }
    }
    return chars.join('');
}
