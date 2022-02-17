export function main(): void {
    return console.log("Hello, World!");
}

if (require.main === module) {
    main();
}