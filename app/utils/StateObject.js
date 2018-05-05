export default StateObject = (function () {
	var instance;

	function updateInstance (state) {
		instance = Object.assign(state);
	}

	return {
		getInstance: function () {
			return instance;
		},
		updateInstance,
	};
})();
