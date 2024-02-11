export function formatCurrency(value: number) {
    return value.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })
}