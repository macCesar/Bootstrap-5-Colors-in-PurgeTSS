let tw = {
	color: {
		1: 2,
		3: 4
	},
	segundo: {
		6: 7,
		8: 9
	},
	tercero: {
		11: 12,
		13: 14
	}
};
let twui = {
	color: {
		10: 10,
		11: 11
	}
};
let config = {
	color: {
		10: 10,
		11: 11
	}
};

tw.forEach(key => {
	console.log('Key:', key);
});

let arr3 = { ...tw, ...twui, ...config };

console.log('Saludos:', arr3);
