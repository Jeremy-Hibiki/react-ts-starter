module.exports = {
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: 'crlf',
    embeddedLanguageFormatting: 'auto',
    eslintIntegration: true,
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxSingleQuote: false,
    printWidth: 120,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    tslintIntegration: false,
    trailingComma: 'es5',
    useTabs: false,
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'html',
            },
        },
    ],
};
