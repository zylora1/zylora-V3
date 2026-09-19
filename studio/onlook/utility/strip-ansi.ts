export default function stripAnsi(str: string): string {
    return typeof str === 'string' ? str.replace(/\x1B\[[0-?]*[ -/]*[@-~]/g, '') : '';
}
