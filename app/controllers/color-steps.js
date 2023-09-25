const theModel = $model.toJSON();
const steps = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

(function constructor() {
	$.resetClass($.solido, `w-screen h-16 mx-1 bg-${theModel.color}-500`);

	_.each(steps, step => {
		$[ 'step_' + step + '_lbl' ].text = `${theModel.color}-${step}`;
		$.resetClass($[ 'step_' + step ], `w-screen h-11 mx-1 bg-${theModel.color}-${step}`);
	});
}());
