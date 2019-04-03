exports.decorateConfig = config => {
	return Object.assign({}, config, {
		cursorColor: "#1ac7fc",
		cursorAccentColor: "#151515",

		foregroundColor: "#f3f3f3",
		backgroundColor: "#2c2c2c",
		selectionColor: "#c2defd",

		colors: {
			black: "#2c2c2c",
			red: "#d02783",
			green: "#00b38a",
			yellow: "#b6a917",
			blue: "#009fcf",
			magenta: "#65508b",
			cyan: "#1eb3c6",
			white: "#e0e0e0",
			lightBlack: "#535353",
			lightRed: "#fe2e8c",
			lightGreen: "#6ddcbc",
			lightYellow: "#f5e63d",
			lightBlue: "#1ac7fc",
			lightMagenta: "#7b6fe4",
			lightCyan: "#5dc3d5",
			lightWhite: "#f3f3f3"
		}
	});
};
